export const homepageContent = {
  en: {
    siteTitle: 'CrewBee | Turn scattered agents into real teams',
    siteDescription: 'CrewBee turns scattered prompts, agents, rules, review flows, and completion criteria into maintainable Agent Team assets for OpenCode.',
    nav: {
      why: 'Why',
      coding: 'Coding Team',
      how: 'How It Works',
      templates: 'Templates',
      roadmap: 'Roadmap',
      docs: 'Docs',
      github: 'GitHub ↗',
      quickStart: 'Quick Start',
      toggleTheme: 'Toggle dark mode',
      toggleMenu: 'Toggle navigation menu',
      switchLanguage: '中文',
      switchLanguageLabel: 'Switch language'
    },
    hero: {
      titlePrefix: 'Turn scattered agents into',
      titleHighlight: 'real teams.',
      description: 'CrewBee turns scattered prompts, agents, rules, review flows, and completion criteria into maintainable Agent Team assets for OpenCode.',
      supporting: 'Define Teams. Pick a Leader. Run structured agent workflows in OpenCode. Simple tasks stay fast. Complex tasks get support, review, and completion gates.',
      boundaries: ['Not a prompt pack.', 'Not a flat agent list.', 'Not another all-in-one multi-agent runtime.'],
      viewGithub: 'View on GitHub',
      watchDemo: 'Watch 90s Demo',
      readQuickStart: 'Read Quick Start',
      visualBefore: ['prompts.md', 'agent config', 'review notes', 'project rules', 'personal workflow'],
      visualAfter: ['team.manifest.yaml', 'team.policy.yaml', 'coding-leader.agent.md', 'reviewer.agent.md', 'TEAM.md'],
      floating: ['Define Teams', 'Pick a Leader', 'Run in OpenCode']
    },
    status: ['OpenCode MVP Ready', 'Team-first Definitions', 'Formal Leader Entry', 'Runtime Projection', 'OpenCode Adapter', 'Delegation Tooling', 'Built-in Coding Team', 'User-level Install', 'Doctor Checks', 'MIT Open Source'],
    features: {
      title: 'From scattered configs to maintainable Agent Teams.',
      subtitle: 'CrewBee focuses on the current conversion path: Team assets, flexible execution strength, decision context, and context-isolated delegation.',
      cards: [
        { title: 'Design different Teams for different tasks and projects', desc: 'Different work needs different roles, rules, workflows, and completion criteria.' },
        { title: 'Switch between single-agent execution and multi-agent collaboration', desc: 'Simple tasks stay fast. Complex tasks get support agents, review, verification, and completion gates.' },
        { title: 'Main Agent owns the decision context', desc: 'The main agent keeps goals, constraints, support findings, review feedback, verification results, and risks together for final decisions.' },
        { title: 'Context-isolated delegation', desc: 'Support agents work in dedicated contexts and return high-signal findings to the main agent.' }
      ]
    },
    why: {
      titleBeforeBreak: 'Most agent setups do not have an agent problem.',
      titleAfterBreak: 'They have a team design problem.',
      paragraphs: ['Prompts get copied. Roles get scattered. Rules become inconsistent. Review and completion criteria are hard to maintain.', 'Every project slowly grows its own hidden workflow. CrewBee turns those implicit workflows into explicit, structured, runnable Agent Teams.'],
      emphasis: 'The value is not more agents. The value is turning agent work into maintainable Team assets.'
    },
    how: {
      title: 'How CrewBee works',
      subtitle: 'Define Teams as assets, project them into OpenCode, choose the right execution strength, and close work with review and completion criteria.',
      steps: [
        { step: 'Define Team', desc: 'Define the Team mission, Leader, members, shared policy, workflow, tools, review flow, and completion criteria.' },
        { step: 'Project into OpenCode', desc: 'CrewBee projects Team definitions into OpenCode as selectable, runnable agents.' },
        { step: 'Choose execution strength', desc: 'Keep simple tasks in single-agent execution. Use multi-agent collaboration when work needs exploration, research, review, or verification.' },
        { step: 'Delegate, review, and close', desc: 'Support agents work in isolated contexts and return high-signal findings. The main agent keeps the decision context and closes the task.' }
      ]
    },
    team: {
      badge: 'Team Assets',
      title: 'Teams are engineering assets. Copy them. Modify them. Contribute them.',
      paragraphs: ['A CrewBee Team is not a prompt file. It is a structured package with a mission, Leader, members, shared policy, workflow, review criteria, and human-readable documentation.', 'Start with the built-in Coding Team. Copy a template. Adjust roles, shared policy, review flow, and completion criteria. Turn your own agent workflow into a reusable Team.'],
      files: ['team.manifest.yaml      # Team id, mission, Leader, members, workflow', 'team.policy.yaml        # Shared rules, safety boundaries, quality floor', 'coding-leader.agent.md  # Main agent / owner / final closure', 'codebase-explorer.agent.md', 'coding-executor.agent.md', 'web-researcher.agent.md', 'reviewer.agent.md       # Independent review and completion criteria', 'TEAM.md                 # Human-readable Team guide']
    },
    codingTeam: {
      badge: 'Coding Team',
      title: 'Built-in Coding Team. Owner-centered. Review-backed.',
      subtitle: 'CrewBee includes a built-in Coding Team for code development, bug fixing, refactoring, debugging, and verification. It is not just a single coder agent — it organizes code exploration, implementation, external research, independent review, and completion criteria into one workflow.',
      roles: [
        { name: 'coding-leader', desc: 'Default entry point, task owner, decision-context holder, and final closure owner.' },
        { name: 'codebase-explorer', desc: 'Finds code entry points, call chains, similar implementations, and historical clues.' },
        { name: 'coding-executor', desc: 'Executes clear implementation, fixes, debugging, and local refactoring.' },
        { name: 'web-researcher', desc: 'Researches official docs, external references, open-source implementations, and version differences.' },
        { name: 'reviewer', desc: 'Independently reviews risk, omissions, verification evidence, and completion criteria.' }
      ],
      gateTitle: 'Completion Gate',
      gates: ['The target problem is located', 'Changes have clear rationale', 'Implementation or fix is complete', 'Diagnostics / build / tests are run when available', 'Reviewer finds no real blocker', 'Unverified items and residual risks are stated']
    },
    firstTask: {
      title: 'Your first CrewBee task',
      subtitle: 'Open a project in OpenCode, select `coding-leader`, and ask CrewBee to solve a real coding task with review-backed completion.',
      prompt: 'Use CrewBee Coding Team to fix this issue with review-backed completion. Locate the relevant code, implement the fix, run available diagnostics, and ask reviewer to check risks before final closure.'
    },
    projectContext: {
      badge: 'Roadmap',
      title: 'Roadmap: Project Context for long-running work',
      subtitle: 'CrewBee is moving toward automatically maintained Project Context, so long-running agent work can keep project positioning, framework design, history, current state, risks, and next actions across sessions.',
      cards: [
        { title: 'Restore project state', desc: 'Start a new session with the project positioning, architecture summary, historical decisions, current state, and next actions already available.' },
        { title: 'Reduce repeated prompting', desc: 'Avoid explaining the same project background, constraints, rejected options, and current plan again and again.' },
        { title: 'Read code heuristically', desc: 'Use Project Context as an entry point for targeted code reading instead of scanning the whole repository from zero.' }
      ],
      flow: ['Session Start → Read Project Context', 'During Work → Use it to guide code reading and decisions', 'Session End → Update state, risks, decisions, and next actions', 'Next Session → Continue from the latest context']
    },
    builders: {
      title: 'Who should try CrewBee?',
      subtitle: 'Built for people who already maintain prompts, agents, rules, and workflows by hand.',
      cards: [
        { role: 'OpenCode power users', desc: 'You already use OpenCode, but agents, prompts, and rules are getting scattered and need to become maintainable Teams.' },
        { role: 'Prompt / subagent maintainers', desc: 'You maintain prompts, roles, or subagents by hand and feel the pressure of copying, migration, review, and versioning.' },
        { role: 'AI coding users', desc: 'You want simple coding tasks to stay lightweight and complex tasks to include exploration, independent review, and completion criteria.' },
        { role: 'DevTools / AI workflow builders', desc: 'You are building AI coding or agent workflow tools and want to study Team definition / projection layers.' }
      ]
    },
    opencode: {
      title: 'OpenCode MVP is already wired.',
      description: 'CrewBee can project Team definitions into OpenCode as selectable agents, bind sessions, and support structured delegation through the plugin runtime.',
      links: ['Read installation guide', 'Run doctor checks', 'View OpenCode adapter docs'],
      proofs: ['Team / Agent definitions', 'Team Library assembly and validation', 'Runtime Projection', 'Formal Leader default selection', 'OpenCode agent config projection', 'Session binding', 'Delegation tooling', 'User-level install', 'Doctor checks', 'Uninstall / version commands', 'Background update path']
    },
    faq: {
      badge: 'FAQ',
      heading: ['Clarity', 'Through', 'Structure.'],
      items: [
        { q: 'Is CrewBee a prompt pack?', a: 'No. CrewBee uses prompts, but its core is Team definitions, Agent profiles, Runtime Projection, session binding, and delegation tooling. It turns agent workflows into maintainable, runnable Team assets.' },
        { q: 'Is CrewBee a flat agent list?', a: 'No. CrewBee is not just more roles. It emphasizes Teams, Leaders, members, shared policy, workflow, review flow, and completion criteria.' },
        { q: 'Does CrewBee make every task multi-agent?', a: 'No. CrewBee is about choosing the right execution strength. Simple tasks can stay fast with a single agent; complex tasks can bring in support agents, review, verification, and completion gates.' },
        { q: 'Why does the main agent / Leader matter?', a: 'In complex work, support agents only see part of the picture. CrewBee keeps goals, constraints, support findings, review feedback, verification results, and risks together in the main agent’s decision context.' },
        { q: 'What is context-isolated delegation?', a: 'Support agents do code exploration, research, review, or multimodal reading in dedicated contexts, then return high-signal findings to the main agent. This reduces main-agent context pollution and attention load.' },
        { q: 'How is CrewBee different from oh-my-openagent?', a: 'oh-my-openagent is closer to a heavy OpenCode agent harness. CrewBee is a Team definition and projection layer: it organizes prompts, agents, rules, review flows, and completion criteria into maintainable Team assets projected into OpenCode. They are not the same layer.' },
        { q: 'Is Project Context fully implemented today?', a: 'Project Context is a roadmap direction, not a fully mature current capability. The goal is to maintain high-signal project summaries across sessions and reduce repeated explanation and repeated code reading.' },
        { q: 'Which hosts are supported today?', a: 'CrewBee currently prioritizes OpenCode. The definition layer is designed to stay host-adaptable, with more hosts treated as roadmap work.' },
        { q: 'Can CrewBee support non-coding Teams?', a: 'Yes. CrewBee’s core is Team definition and projection, so you can create ResearchOpsTeam, DocumentationTeam, MarketingOpsTeam, ReleaseOpsTeam, and more. The flagship public example today is the built-in Coding Team.' },
        { q: 'How can I contribute?', a: 'The easiest contribution is not changing the core runtime. Contribute Team templates, docs, use cases, installation feedback, FAQ improvements, or show your Team in Discussions.' }
      ]
    },
    acknowledgements: {
      badge: 'Final CTA',
      title: 'Ready to turn scattered agents into real teams?',
      paragraphs: ['View on GitHub, read the Quick Start, watch the demo, or join Discussions to share your first Team.', 'CrewBee is MIT open source and focused first on the OpenCode MVP path.'],
      ctas: { github: 'View on GitHub', quickStart: 'Read Quick Start', demo: 'Watch Demo', discussions: 'Join Discussions' }
    },
    footer: { docs: 'Docs', license: 'License' }
  },
  zh: {
    siteTitle: 'CrewBee | 把分散的智能体变成真正的团队',
    siteDescription: 'CrewBee 把分散在 prompts、agents、规则、review 流程和验收标准中的工作方式，整理成可维护的 OpenCode Agent Team 资产。',
    nav: {
      why: '为什么需要',
      coding: 'Coding Team',
      how: '工作方式',
      templates: 'Team 模板',
      roadmap: 'Roadmap',
      docs: '文档',
      github: 'GitHub ↗',
      quickStart: '快速开始',
      toggleTheme: '切换深色模式',
      toggleMenu: '切换导航菜单',
      switchLanguage: 'EN',
      switchLanguageLabel: '切换语言'
    },
    hero: {
      titlePrefix: '把分散的智能体变成',
      titleHighlight: '真正的团队。',
      description: 'CrewBee 把分散在 prompts、agents、规则、review 流程和验收标准中的工作方式，整理成可维护的 OpenCode Agent Team 资产。',
      supporting: '定义 Team，选择 Leader，在 OpenCode 中运行结构化 Agent 工作流。简单任务保持轻量，复杂任务获得支援、review 和完成闸门。',
      boundaries: ['不是 prompt pack。', '不是平铺 agent 列表。', '不是另一个大而全 multi-agent runtime。'],
      viewGithub: '在 GitHub 上查看',
      watchDemo: '观看 90 秒 Demo',
      readQuickStart: '阅读快速开始',
      visualBefore: ['prompts.md', 'agent config', 'review notes', 'project rules', 'personal workflow'],
      visualAfter: ['team.manifest.yaml', 'team.policy.yaml', 'coding-leader.agent.md', 'reviewer.agent.md', 'TEAM.md'],
      floating: ['定义团队', '选择 Leader', '在 OpenCode 中运行']
    },
    status: ['OpenCode MVP 已打通', 'Team-first 定义', 'Leader 默认入口', 'Runtime Projection', 'OpenCode 适配', 'Delegation Tooling', '内置 Coding Team', '用户级安装', 'doctor 校验', 'MIT 开源'],
    features: {
      title: '从分散配置，到可维护的 Agent Team。',
      subtitle: 'CrewBee 当前首页聚焦四个转化核心：Team 资产、执行强度切换、决策上下文和上下文隔离式委派。',
      cards: [
        { title: '为不同任务 / 项目设计不同 Agent Team', desc: '不同工作需要不同角色分工、规则、流程和完成标准。' },
        { title: '根据任务复杂度灵活切换单 Agent 与多 Agent 协作模式', desc: '简单任务保持轻量，复杂任务获得支援 Agent、review、验证和完成闸门。' },
        { title: '主 Agent 持有最完整的决策上下文', desc: '主 Agent 汇总用户目标、项目约束、支援结论、review 意见、验证结果和风险，用于关键判断与最终收口。' },
        { title: '上下文隔离式委派', desc: '支援 Agent 在独立上下文中完成专项任务，只把高信号结论回传给主 Agent。' }
      ]
    },
    why: {
      titleBeforeBreak: '很多智能体配置的问题不是智能体不够多，',
      titleAfterBreak: '而是没有被组织成一支真正的团队。',
      paragraphs: ['Prompts 被复制到不同地方，roles 被平铺成越来越长的列表，rules 在不同项目里逐渐不一致，review 和验收标准难以沉淀。', '每个项目都会慢慢长出一套隐形工作流。CrewBee 把这些隐含工作流变成显式、结构化、可运行的 Agent Team。'],
      emphasis: '价值不是更多 Agent，而是把 Agent 工作方式整理成可维护的 Team 资产。'
    },
    how: {
      title: 'CrewBee 如何工作',
      subtitle: '把 Team 定义成资产，投影到 OpenCode，根据任务复杂度选择执行强度，并通过 review 与验收标准完成收口。',
      steps: [
        { step: '定义 Team', desc: '定义 Team 的任务定位、Leader、成员、共享规则、工作流程、工具边界、review 方式和完成标准。' },
        { step: '投影到 OpenCode', desc: 'CrewBee 将 Team 定义投影为 OpenCode 中可选择、可运行的 Agent。' },
        { step: '选择执行强度', desc: '简单任务保持单 Agent 执行；当任务需要代码探索、外部研究、独立 review 或验证时，再启用多 Agent 协作。' },
        { step: '委派、review、收口', desc: '支援 Agent 在独立上下文中完成专项任务并回传高信号结论；主 Agent 持有决策上下文并完成最终收口。' }
      ]
    },
    team: {
      badge: 'Team 资产',
      title: 'Team 是工程资产。可以复制、修改，也可以贡献。',
      paragraphs: ['CrewBee Team 不是一个 prompt 文件，而是一套结构化 package：包含任务定位、Leader、成员、共享规则、工作流程、review 标准和面向人的说明文档。', '你可以从内置 Coding Team 开始，复制一个模板，调整角色分工、共享规则、review 方式和完成标准，把自己的 Agent 工作方式沉淀成可复用的 Team。'],
      files: ['team.manifest.yaml      # Team id、任务定位、Leader、成员和 workflow', 'team.policy.yaml        # 共享规则、安全边界和质量底线', 'coding-leader.agent.md  # 主 Agent / owner / 最终收口', 'codebase-explorer.agent.md', 'coding-executor.agent.md', 'web-researcher.agent.md', 'reviewer.agent.md       # 独立 review 与完成标准', 'TEAM.md                 # 面向人的 Team 说明']
    },
    codingTeam: {
      badge: 'Coding Team',
      title: '内置 Coding Team。以主线 owner 为中心，以独立 review 做质量刹车。',
      subtitle: 'CrewBee 内置 Coding Team，面向代码开发、修复、重构、调试和验证。它不是一个单独的 Coder Agent，而是把代码探索、实现、外部研究、独立 review 和验收标准组织成一个工作流。',
      roles: [
        { name: 'coding-leader', desc: '默认入口、任务 owner、决策上下文持有者、最终收口者。' },
        { name: 'codebase-explorer', desc: '定位代码入口、调用链、相似实现和历史线索。' },
        { name: 'coding-executor', desc: '执行明确实现、修复、调试与局部重构。' },
        { name: 'web-researcher', desc: '查官方资料、外部文档、开源实现和版本差异。' },
        { name: 'reviewer', desc: '独立审查风险、遗漏、验证证据和完成标准。' }
      ],
      gateTitle: 'Completion Gate',
      gates: ['目标问题已定位', '修改点有明确依据', '已完成必要实现或修复', '已运行可用的 diagnostics / build / tests', 'reviewer 未发现真实阻塞', '已说明未验证项和残余风险']
    },
    firstTask: {
      title: '你的第一个 CrewBee 任务',
      subtitle: '在 OpenCode 中打开一个项目，选择 `coding-leader`，让 CrewBee 使用 review-backed completion 完成一个真实代码任务。',
      prompt: '使用 CrewBee Coding Team 修复这个问题，并在完成前进行独立 review 和验收标准检查。请先定位相关代码，再实现修复，运行可用的 diagnostics，并在最终收口前让 reviewer 检查风险。'
    },
    projectContext: {
      badge: 'Roadmap',
      title: 'Roadmap：面向长期项目的 Project Context',
      subtitle: 'CrewBee 下一阶段将增强跨会话 Project Context，让长期 Agent 工作持续保有项目定位、框架设计、历史记录、当前状态、已知风险和下一步行动。',
      cards: [
        { title: '恢复项目状态', desc: '新会话开始时，快速恢复项目定位、架构摘要、历史决策、当前状态和下一步行动。' },
        { title: '减少重复提示', desc: '减少反复解释项目背景、约束、已否方案和当前计划。' },
        { title: '启发式阅读代码', desc: '把 Project Context 作为启发式入口，先定位相关模块，再有针对性地阅读代码，减少全仓库扫描带来的上下文消耗。' }
      ],
      flow: ['会话开始 → 读取 Project Context', '任务执行 → 用摘要指导代码阅读和决策', '会话结束 → 更新状态、风险、决策和下一步行动', '下一次会话 → 基于最新上下文继续推进']
    },
    builders: {
      title: '谁适合试用 CrewBee？',
      subtitle: '面向已经手工维护 prompts、agents、rules 和工作流的人。',
      cards: [
        { role: 'OpenCode power users', desc: '你已经在用 OpenCode，但 agents、prompts、rules 越来越分散，想把它们整理成可维护的 Team。' },
        { role: 'Prompt / subagent 维护者', desc: '你手工维护 prompts、roles 或 subagents，已经感受到复制、迁移、review 和版本管理的压力。' },
        { role: 'AI coding 用户', desc: '你希望简单代码任务保持轻量，复杂任务具备代码探索、独立 review 和验收标准。' },
        { role: 'DevTools / AI workflow 构建者', desc: '你正在构建 AI coding 或 Agent workflow 工具，希望研究 Team definition / projection layer。' }
      ]
    },
    opencode: {
      title: '当前已打通 OpenCode MVP 链路。',
      description: 'CrewBee 已经可以把 Team 定义投影为 OpenCode 中可选择的 Agent，并通过插件运行时支持 session binding 与结构化委派。',
      links: ['阅读安装指南', '运行 doctor 校验', '查看 OpenCode 适配文档'],
      proofs: ['Team / Agent 定义', 'Team Library 装配与校验', 'Runtime Projection', 'Formal Leader 默认入口选择', 'OpenCode agent 配置投影', 'Session binding', 'Delegation tooling', '用户级安装', 'Doctor 校验', 'Uninstall / version 命令', '后台更新路径']
    },
    faq: {
      badge: '常见问题',
      heading: ['清晰性', '来自', '结构。'],
      items: [
        { q: 'CrewBee 是 prompt pack 吗？', a: '不是。CrewBee 会使用 prompt，但核心不是 prompt 文本本身，而是 Team 定义、Agent Profile、Runtime Projection、session binding 和 delegation tooling。它把 Agent 工作方式整理成可维护、可运行的 Team 工程资产。' },
        { q: 'CrewBee 是 flat agent list 吗？', a: '不是。CrewBee 不只是多给几个角色。它强调 Team、Leader、members、shared policy、workflow、review flow 和 completion criteria。用户不是在一堆平铺角色里随便选一个，而是在使用一支有结构的 Team。' },
        { q: 'CrewBee 会让所有任务都变成多 Agent 协作吗？', a: '不会。CrewBee 的目标是根据任务复杂度选择合适的执行方式。简单任务可以保持单 Agent 快速执行；复杂任务才启用支援 Agent、review、验证和完成闸门。' },
        { q: '为什么需要主 Agent / Leader？', a: '复杂任务中，不同支援 Agent 只掌握部分信息。CrewBee 让主 Agent 持有用户目标、项目约束、支援结论、review 意见、验证结果和风险，保证关键判断与最终收口更一致。' },
        { q: '上下文隔离式委派是什么意思？', a: '支援 Agent 在独立上下文中完成代码探索、资料研究、review 或多模态解读，只把高信号结论回传给主 Agent。这样可以降低主 Agent 的上下文污染和注意力负担。' },
        { q: 'CrewBee 和 oh-my-openagent 有什么不同？', a: 'oh-my-openagent 更像增强 OpenCode 的重型 agent harness，提供大量执行增强能力。CrewBee 更像 Team definition and projection layer：把 prompts、agents、rules、review flows 和 completion criteria 整理成可维护的 Team 资产，并投影到 OpenCode 中运行。两者不是同一层。' },
        { q: 'Project Context 已经完整实现了吗？', a: 'Project Context 是 CrewBee 下一阶段重点增强方向。目标是跨会话维护项目定位、框架设计、历史记录、当前状态、已知风险和下一步计划等摘要信息，减少重复解释和重复读代码。官网中把它标为 Roadmap / 下一阶段，而不是当前完整成熟能力。' },
        { q: 'CrewBee 当前支持哪些宿主？', a: '当前优先支持 OpenCode。CrewBee 的定义层尽量保持宿主无关，后续可以继续适配 Codex、Claude Code 等 AI coding host。当前官网把 OpenCode 作为真实可用主链路，把多宿主作为 roadmap。' },
        { q: 'CrewBee 适合非 coding 任务吗？', a: '适合。CrewBee 的核心是 Team 定义和投影，不只适合 Coding Team。你可以基于模板创建 ResearchOpsTeam、DocumentationTeam、MarketingOpsTeam、ReleaseOpsTeam 等不同 Team。但当前最适合对外主推的样板是内置 Coding Team。' },
        { q: '我如何参与贡献？', a: '最简单的贡献不是修改 core runtime，而是贡献 Team 模板、文档、使用案例、安装反馈和 FAQ。你可以在 Discussions 中展示自己的 Team，或提交一个示例 Team PR。' }
      ]
    },
    acknowledgements: {
      badge: 'Final CTA',
      title: '准备把分散的智能体变成真正的团队？',
      paragraphs: ['在 GitHub 上查看，阅读快速开始，观看 Demo，或加入 Discussions 分享你的第一个 Team。', 'CrewBee 是 MIT 开源项目，当前优先打通 OpenCode MVP 主链路。'],
      ctas: { github: '在 GitHub 上查看', quickStart: '阅读快速开始', demo: '观看 Demo', discussions: '加入 Discussions' }
    },
    footer: { docs: '文档', license: '许可证' }
  }
} as const;

export type HomepageContent = typeof homepageContent.en;
