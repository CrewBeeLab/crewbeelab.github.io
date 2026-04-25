@echo off
setlocal

pushd "%~dp0\.." || exit /b 1

echo Starting CrewBee local preview at http://localhost:3000/zh/
npx vite --host localhost --port 3000 --open /zh/

popd
endlocal
