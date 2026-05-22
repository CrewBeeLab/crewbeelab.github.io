#!/usr/bin/env bash
set -euo pipefail

DIST_DIR="${DIST_DIR:-dist}"
TARGET_BUCKET="${ALIYUN_OSS_BUCKET:-${OSS_BUCKET:-www-crewbee-art}}"
TARGET_REGION="${ALIYUN_OSS_REGION:-${OSS_REGION:-cn-beijing}}"
TARGET_ENDPOINT="${ALIYUN_OSS_ENDPOINT:-${OSS_ENDPOINT:-https://oss-cn-beijing.aliyuncs.com}}"
TARGET_ACCESS_KEY_ID="${ALIYUN_OSS_ACCESS_KEY_ID:-${OSS_ACCESS_KEY_ID:-}}"
TARGET_ACCESS_KEY_SECRET="${ALIYUN_OSS_ACCESS_KEY_SECRET:-${OSS_ACCESS_KEY_SECRET:-}}"
OSSUTIL_VERSION="${OSSUTIL_VERSION:-2.2.1}"

if [[ ! -d "$DIST_DIR" ]]; then
  echo "Missing build output directory: $DIST_DIR" >&2
  exit 1
fi

if [[ -z "$TARGET_ACCESS_KEY_ID" || -z "$TARGET_ACCESS_KEY_SECRET" ]]; then
  echo "Missing required OSS credentials." >&2
  echo "Set ALIYUN_OSS_ACCESS_KEY_ID and ALIYUN_OSS_ACCESS_KEY_SECRET in the CI environment." >&2
  exit 1
fi

export OSS_ACCESS_KEY_ID="$TARGET_ACCESS_KEY_ID"
export OSS_ACCESS_KEY_SECRET="$TARGET_ACCESS_KEY_SECRET"
export OSS_REGION="$TARGET_REGION"
export OSS_ENDPOINT="$TARGET_ENDPOINT"

if ! command -v ossutil >/dev/null 2>&1; then
  tmp_dir="$(mktemp -d)"
  trap 'rm -rf "$tmp_dir"' EXIT
  curl -fsSL "https://gosspublic.alicdn.com/ossutil/v2/${OSSUTIL_VERSION}/ossutil-${OSSUTIL_VERSION}-linux-amd64.zip" -o "$tmp_dir/ossutil.zip"
  unzip -q "$tmp_dir/ossutil.zip" -d "$tmp_dir"
  mkdir -p "$HOME/.local/bin"
  install -m 0755 "$tmp_dir/ossutil-${OSSUTIL_VERSION}-linux-amd64/ossutil" "$HOME/.local/bin/ossutil"
  export PATH="$HOME/.local/bin:$PATH"
fi

ossutil version || ossutil help >/dev/null

echo "Deploying $DIST_DIR to oss://$TARGET_BUCKET/ via $TARGET_ENDPOINT ($TARGET_REGION)"

# Mirror the built static site. Static assets can use long cache; HTML is
# overridden below with a short cache policy for CDN refresh friendliness.
ossutil sync "$DIST_DIR/" "oss://$TARGET_BUCKET/" \
  --delete \
  --force \
  --cache-control "public, max-age=604800, immutable" \
  --metadata-directive REPLACE \
  --no-progress

# HTML entry pages should stay easy to refresh behind CDN.
ossutil set-props "oss://$TARGET_BUCKET/" \
  --include "*.html" \
  --cache-control "public, max-age=600" \
  --metadata-directive REPLACE \
  -r \
  -f

echo "OSS deploy completed: oss://$TARGET_BUCKET/"
