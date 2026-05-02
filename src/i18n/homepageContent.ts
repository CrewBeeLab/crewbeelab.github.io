export const homepageContent = {
  en: {
    siteTitle: 'CrewBee | Turn scattered agents into real teams',
    siteDescription: 'CrewBee turns scattered prompts, agents, rules, review flows, and completion criteria into maintainable Agent Team assets for agent harnesses.',
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
      description: 'CrewBee turns scattered prompts, agents, rules, review flows, and completion criteria into maintainable Agent Team assets for agent harnesses.',
      supporting: 'Define Teams. Pick a Leader. Project structured agent workflows into the harness you use. Simple tasks stay lightweight; complex work gets support, review, and completion gates.',
      boundaries: ['Agent Team asset layer.', 'Harness-adaptable.', 'First adapter: OpenCode.'],
      viewGithub: 'View on GitHub',
      watchDemo: 'View Workflow',
      readQuickStart: 'Read Quick Start',
      visualBefore: ['prompts.md', 'agent config', 'review notes', 'project rules', 'personal workflow'],
      visualAfter: ['team.manifest.yaml', 'team.policy.yaml', 'coding-leader.agent.md', 'reviewer.agent.md', 'TEAM.md'],
      floating: ['Define Team', 'Pick Leader', 'Delegate / Review']
    },
    status: ['Team-first Definitions', 'Runtime Projection', 'Harness Adapter Layer', 'Context-isolated Delegation', 'Review-backed Coding Team', 'Portable Team Assets', 'First Adapter: OpenCode'],
    worksToday: {
      badge: 'What works today',
      title: 'Use a structured Coding Team in OpenCode today.',
      subtitle: 'CrewBee already ships the Team asset layer, OpenCode projection, delegation tooling, and a built-in Coding Team you can run against a real repository.',
      cards: [
        { title: 'OpenCode adapter', desc: 'Project CrewBee Team definitions into selectable OpenCode agents with session binding and plugin runtime support.' },
        { title: 'Built-in Coding Team', desc: 'Start from coding-leader with explorer, executor, web researcher, multimodal reader, principal advisor, and reviewer roles.' },
        { title: 'Leader or Executor entry', desc: 'Choose Leader for ownership, delegation, and review-backed closure; choose Executor for clear direct execution.' },
        { title: 'Review-backed completion', desc: 'Close non-trivial work with diagnostics, build, tests, risk notes, and independent review when appropriate.' }
      ]
    },
    features: {
      title: 'From scattered configs to maintainable Agent Teams.',
      subtitle: 'CrewBee focuses on the structure that makes agent work portable and maintainable: Team assets, execution strength, decision context, and context-isolated delegation.',
      cards: [
        { title: 'Design different Teams for different tasks and projects', desc: 'Different work needs different roles, rules, workflows, and completion criteria.' },
        { title: 'Simple stays fast. Complex gets support.', desc: 'Use single-agent execution for simple work, and bring in support agents, review, verification, and completion gates when needed.' },
        { title: 'Main Agent owns the decision context', desc: 'The main agent keeps goals, constraints, support findings, review feedback, verification results, and risks together for final decisions.' },
        { title: 'Context-isolated delegation', desc: 'Support agents work in dedicated contexts and return high-signal findings to the main agent.' }
      ]
    },
    why: {
      titleBeforeBreak: 'Most agent setups do not have an agent problem.',
      titleAfterBreak: 'They have a team design problem.',
      paragraphs: ['Prompts get copied. Roles get scattered. Rules become inconsistent. Review and completion criteria are hard to maintain.', 'Every project slowly grows its own hidden workflow. CrewBee turns those implicit workflows into explicit, structured, runnable Agent Teams.'],
      emphasis: 'The value is not more agents. The value is turning agent work into maintainable Team assets.',
      beforeAfter: {
        beforeTitle: 'Before CrewBee',
        afterTitle: 'After CrewBee',
        before: ['Copy-pasted prompts', 'Flat agent lists', 'Rules scattered per project', 'Review depends on memory'],
        after: ['Team assets in files', 'Leader and members', 'Shared policy and workflow', 'Completion gates and review']
      }
    },
    how: {
      title: 'How CrewBee works',
      subtitle: 'Define Teams as assets, project them into the harness you use, choose Leader or Executor, and run the workflow that matches the task.',
      steps: [
        { step: 'Define Team', desc: 'Define the Team mission, Leader, members, shared policy, workflow, tools, review flow, and completion criteria.' },
        { step: 'Project into your harness', desc: 'CrewBee projects Team definitions into the target agent harness as selectable, runnable agents. Today, the first supported adapter is OpenCode.' },
        { step: 'Choose Leader or Executor', desc: 'Pick the Leader when the task needs ownership, support agents, review, and final closure. Pick the Executor when the task is clear enough for direct single-agent execution.' },
        {
          step: 'Run the matching workflow',
          desc: 'Run through the entry path that matches the task.',
          modes: [
            { label: 'Leader', desc: 'Delegates to support agents, gathers findings, and closes with review-backed completion.' },
            { label: 'Executor', desc: 'Runs directly as a single-agent path without delegation.' }
          ]
        }
      ]
    },
    team: {
      badge: 'Team Assets',
      title: 'Teams are engineering assets. Copy them. Modify them. Contribute them.',
      paragraphs: ['A CrewBee Team is not a prompt file. It is a structured package with a mission, Leader, members, shared policy, workflow, review criteria, and human-readable documentation.', 'Start with the built-in Coding Team. Copy a template. Adjust roles, shared policy, review flow, and completion criteria. Turn your own agent workflow into a reusable Team.'],
      files: [
        { name: 'team.manifest.yaml', desc: 'Team id, mission, Leader, members, and workflow.' },
        { name: 'team.policy.yaml', desc: 'Shared rules, safety boundaries, and quality floor.' },
        { name: 'coding-leader.agent.md', desc: 'Main agent, owner, decision context, and final closure.' },
        { name: 'codebase-explorer.agent.md', desc: 'Code entry points, call chains, similar implementations, and historical clues.' },
        { name: 'coding-executor.agent.md', desc: 'Implementation, fixes, debugging, and local refactoring.' },
        { name: 'web-researcher.agent.md', desc: 'Official docs, external references, and version differences.' },
        { name: 'reviewer.agent.md', desc: 'Independent review and completion criteria.' },
        { name: 'TEAM.md', desc: 'Human-readable Team guide.' }
      ]
    },
    codingTeam: {
      badge: 'Coding Team',
      title: 'Built-in Coding Team. Owner-centered. Review-backed.',
      subtitle: 'CrewBee includes a built-in Coding Team for development, bug fixing, refactoring, debugging, and verification. The leader keeps ownership while support agents explore code, implement scoped fixes, research external behavior, and review risk.',
      roles: [
        { name: 'coding-leader', desc: 'Default entry point, task owner, decision-context holder, and final closure owner.' },
        { name: 'codebase-explorer', desc: 'Finds code entry points, call chains, similar implementations, and historical clues.' },
        { name: 'coding-executor', desc: 'Executes clear implementation, fixes, debugging, and local refactoring.' },
        { name: 'web-researcher', desc: 'Researches official docs, external references, open-source implementations, and version differences.' },
        { name: 'reviewer', desc: 'Independently reviews risk, omissions, verification evidence, and completion criteria.' }
      ],
      gateTitle: 'Completion Gate',
      gates: ['The target problem is located', 'Changes have clear rationale', 'Implementation or fix is complete', 'Diagnostics / build / tests are run when available', 'Independent review is used when risk or scope warrants it', 'Unverified items and residual risks are stated']
    },
    firstTask: {
      badge: 'First Task',
      title: 'Your first CrewBee task',
      subtitle: 'Today, start with the OpenCode adapter and ask the built-in Coding Team to solve one real task in a repository you care about.',
      steps: ['Install CrewBee for OpenCode', 'Open your project and select `coding-leader`', 'Paste a real task and ask for review-backed completion'],
      prompt: 'Use CrewBee Coding Team to fix this issue with review-backed completion.\nKeep simple steps lightweight. If the task is non-trivial, locate the relevant code, implement the fix, run available diagnostics/build/tests, and ask reviewer to check risks before final closure.',
      copyPrompt: 'Copy Prompt',
      copied: 'Copied',
      copyFailed: 'Copy failed',
      quickStartFirst: 'Read Quick Start first'
    },
    projectContext: {
      badge: 'What’s next',
      title: 'Next: stronger project memory and more harness adapters',
      subtitle: 'Roadmap work stays secondary to the current Team asset layer: better long-running project context and more host adapters over time.',
      cards: [
        { title: 'Project Context for long-running work', desc: 'CrewBee is moving toward a Project Context layer so agent work can keep project positioning, framework design, history, current state, risks, and next actions across sessions.' },
        { title: 'Restore project state', desc: 'Start a new session with the project positioning, architecture summary, historical decisions, current state, and next actions already available.' },
        { title: 'Read code heuristically', desc: 'Use Project Context as an entry point for targeted code reading instead of scanning the whole repository from zero.' },
        { title: 'More Agent Harness adapters', desc: 'OpenCode is the first supported host; future adapters may target Codex, Claude Code, or other agent harnesses.' }
      ],
      flowTitle: 'Planned Project Context Loop',
      flow: ['Session Start → Read Project Context', 'During Work → Use it to guide code reading and decisions', 'Session End → Update state, risks, decisions, and next actions', 'Next Session → Continue from the latest context']
    },
    builders: {
      title: 'Who should try CrewBee?',
      subtitle: 'Built for people who already maintain prompts, agents, rules, and workflows by hand.',
      cards: [
        { role: 'Agent harness users', desc: 'You use coding agents or agent harnesses, but prompts, agents, and rules are getting scattered and hard to maintain.' },
        { role: 'OpenCode users today', desc: 'You use OpenCode today and want a structured Team layer with Leaders, members, review, and delegation.' },
        { role: 'Prompt / subagent maintainers', desc: 'You maintain prompts, roles, or subagents by hand and feel the pressure of copying, migration, review, and versioning.' },
        { role: 'AI coding users', desc: 'You want simple coding tasks to stay lightweight and complex tasks to include exploration, independent review, and completion criteria.' },
        { role: 'DevTools / AI workflow builders', desc: 'You are building AI coding or agent workflow tools and want to study Team definition / projection layers.' }
      ]
    },
    opencode: {
      title: 'OpenCode-ready today',
      description: 'OpenCode is the current adapter: CrewBee projects Team definitions into selectable agents, binds sessions, and supports structured delegation through the plugin runtime.',
      links: ['Read installation guide', 'Run doctor checks', 'View adapter docs'],
      proofs: ['✓ Team / Agent Definitions', '✓ Team Library Assembly and Validation', '✓ Runtime Projection', '✓ Formal Leader Default Selection', '✓ Agent Config Projection', '✓ Session Binding', '✓ Delegation Tooling', '✓ User-level Install', '✓ Doctor Checks', '✓ Uninstall / Version Commands', '✓ Background Update Path']
    },
    inspired: {
      badge: 'Acknowledgement',
      title: 'Inspired by the open-source Agent ecosystem.',
      paragraphs: ['CrewBee is inspired by community projects such as OpenCode and oh-my-openagent. These projects make the value of Agent Team workflows in real development environments clearer.', 'CrewBee continues in this direction by organizing Agent Teams into manageable, projectable, configurable, and reusable engineering assets.']
    },
    faq: {
      badge: 'FAQ',
      heading: 'FAQ',
      items: [
        { q: 'Is CrewBee a prompt pack?', a: 'No. CrewBee uses prompts, but its core is Team definitions, Agent profiles, Runtime Projection, session binding, and delegation tooling. It turns agent workflows into maintainable, runnable Team assets.' },
        { q: 'Is CrewBee a flat agent list?', a: 'No. CrewBee is not just more roles. It emphasizes Teams, Leaders, members, shared policy, workflow, review flow, and completion criteria.' },
        { q: 'Is CrewBee tied to OpenCode?', a: 'No. CrewBee is designed as a Team definition and projection layer for agent harnesses. OpenCode is the first supported host because it provides a practical plugin path today. The long-term direction is to keep Team definitions portable and adapt them to more agent harnesses over time.' },
        { q: 'Does CrewBee make every task multi-agent?', a: 'No. CrewBee is about choosing the right execution strength. Simple tasks can stay fast with a single agent; complex tasks can bring in support agents, review, verification, and completion gates.' },
        { q: 'Why does the main agent / Leader matter?', a: 'In complex work, support agents only see part of the picture. CrewBee keeps goals, constraints, support findings, review feedback, verification results, and risks together in the main agent’s decision context.' },
        { q: 'What is context-isolated delegation?', a: 'Support agents do code exploration, research, review, or multimodal reading in dedicated contexts, then return high-signal findings to the main agent. This reduces main-agent context pollution and attention load.' },
        { q: 'Where does CrewBee sit in the OpenCode ecosystem?', a: 'CrewBee uses OpenCode as the current adapter, not as its whole identity. It is a Team definition and projection layer that organizes prompts, agents, rules, review flows, and completion criteria into maintainable Team assets that can later be adapted to more agent harnesses.' },
        { q: 'Is Project Context fully implemented today?', a: 'Project Context is a roadmap direction, not a fully mature current capability. The goal is to maintain high-signal project summaries across sessions and reduce repeated explanation and repeated code reading.' },
        { q: 'Which host is supported today?', a: 'Today, CrewBee supports OpenCode first. More host adapters are roadmap work.' },
        { q: 'Can CrewBee support non-coding Teams?', a: 'Yes. CrewBee’s core is Team definition and projection, so you can create ResearchOpsTeam, DocumentationTeam, MarketingOpsTeam, ReleaseOpsTeam, and more. The flagship public example today is the built-in Coding Team.' },
        { q: 'How can I contribute?', a: 'The easiest contribution is not changing the core runtime. Contribute Team templates, docs, use cases, installation feedback, FAQ improvements, or show your Team in Discussions.' }
      ]
    },
    acknowledgements: {
      badge: 'Final CTA',
      title: 'Ready to turn scattered agents into real teams?',
      paragraphs: ['Read the Quick Start, view the current OpenCode integration, or join Discussions to share your first Team.', 'CrewBee is a harness-adaptable Agent Team asset layer, with OpenCode as the first supported host.'],
      ctas: { github: 'View GitHub', quickStart: 'Read Quick Start', demo: 'View Workflow', discussions: 'Join Discussions' }
    },
    footer: { docs: 'Docs', license: 'License' }
  },
  zh: {
    siteTitle: 'CrewBee | 把分散的智能体变成真正的团队',
    siteDescription: 'CrewBee 把分散的 prompts、agents、规则、review 流程和验收标准，整理成面向 Agent Harness 的可维护 Agent Team 资产。',
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
      description: 'CrewBee 把分散在 prompts、agents、规则、review 流程和验收标准中的工作方式，整理成可维护的 Agent Team 资产，并投影到你使用的 Agent Harness 中运行。',
      supporting: '定义 Team，选择 Leader，把结构化 Agent 工作流投影到你使用的宿主中。简单任务保持轻量，复杂任务获得支援、review 和完成闸门。',
      boundaries: ['Agent Team 资产层。', '可适配多种 Agent Harness。', '当前首个适配宿主：OpenCode。'],
      viewGithub: '在 GitHub 上查看',
      watchDemo: '查看工作流',
      readQuickStart: '阅读快速开始',
      visualBefore: ['prompts.md', 'agent config', 'review notes', 'project rules', 'personal workflow'],
      visualAfter: ['team.manifest.yaml', 'team.policy.yaml', 'coding-leader.agent.md', 'reviewer.agent.md', 'TEAM.md'],
      floating: ['定义 Team', '选择 Leader', '委派 / Review']
    },
    status: ['Team-first 定义', 'Runtime Projection', '宿主适配层', '上下文隔离式委派', '带 review 的 Coding Team', '可迁移 Team 资产', '首个适配宿主：OpenCode'],
    worksToday: {
      badge: '当前能做什么',
      title: '今天就可以在 OpenCode 中使用结构化 Coding Team。',
      subtitle: 'CrewBee 已经提供 Team 资产层、OpenCode 投影、委派工具和内置 Coding Team，可以直接在真实仓库中运行。',
      cards: [
        { title: 'OpenCode adapter', desc: '把 CrewBee Team 定义投影成 OpenCode 中可选择的 Agent，并支持 session binding 与插件运行时。' },
        { title: '内置 Coding Team', desc: '从 coding-leader 开始，按需使用 explorer、executor、web researcher、multimodal reader、principal advisor 和 reviewer。' },
        { title: 'Leader 或 Executor 入口', desc: '需要 owner、委派和 review-backed closure 时选择 Leader；清晰直接的任务选择 Executor。' },
        { title: '带 review 的收口', desc: '非琐碎任务用 diagnostics、build、tests、风险说明和必要的独立 review 完成闭环。' }
      ]
    },
    features: {
      title: '从分散配置，到可维护的 Agent Team。',
      subtitle: 'CrewBee 关注让 Agent 工作可迁移、可维护的核心结构：Team 资产、执行强度、决策上下文和上下文隔离式委派。',
      cards: [
        { title: '为不同任务 / 项目设计不同 Agent Team', desc: '不同任务需要不同角色分工、规则、流程和完成标准。' },
        { title: '简单任务保持快速，复杂任务获得支援', desc: '简单任务保持单 Agent 快速执行，复杂任务再启用支援 Agent、review、验证和完成闸门。' },
        { title: '主 Agent 持有最完整的决策上下文', desc: '主 Agent 汇总目标、约束、支援结论、review 意见、验证结果和风险，用于关键判断与最终收口。' },
        { title: '上下文隔离式委派', desc: '支援 Agent 在独立上下文中完成专项任务，只把高信号结论回传给主 Agent。' }
      ]
    },
    why: {
      titleBeforeBreak: '很多智能体配置的问题不是智能体不够多，',
      titleAfterBreak: '而是没有被组织成一支真正的团队。',
      paragraphs: ['Prompts 被复制到不同地方，roles 被平铺成越来越长的列表，rules 在不同项目里逐渐不一致，review 和验收标准难以沉淀。', '每个项目都会慢慢长出一套隐形工作流。CrewBee 把这些隐含工作流变成显式、结构化、可运行的 Agent Team。'],
      emphasis: '价值不是更多 Agent，而是把 Agent 工作方式整理成可维护的 Team 资产。',
      beforeAfter: {
        beforeTitle: '使用 CrewBee 之前',
        afterTitle: '使用 CrewBee 之后',
        before: ['Prompt 到处复制', 'Agent 只是平铺列表', '规则散落在不同项目', 'Review 依赖记忆和习惯'],
        after: ['Team 资产落在文件里', '明确 Leader 与成员', '共享规则与工作流', 'Completion gate 与 review 可复用']
      }
    },
    how: {
      title: 'CrewBee 如何工作',
      subtitle: '把 Team 定义成资产，投影到你使用的宿主，选择 Leader 或 Executor，并运行与任务匹配的工作流。',
      steps: [
        { step: '定义 Team', desc: '定义 Team 的任务定位、Leader、成员、共享规则、工作流程、工具边界、review 方式和完成标准。' },
        { step: '投影到宿主', desc: 'CrewBee 将 Team 定义投影到目标 Agent Harness 中，成为可选择、可运行的 Agent。当前第一个支持的适配器是 OpenCode。' },
        { step: '选择 Leader 或 Executor', desc: '当任务需要 owner、支援 Agent、review 和最终收口时，选择 Leader；当任务足够清晰、适合单 Agent 直接执行时，选择 Executor。' },
        {
          step: '运行匹配的工作流',
          desc: '沿着与任务匹配的入口路径执行。',
          modes: [
            { label: 'Leader', desc: '委派支援 Agent，汇总结论，并用 review-backed completion 收口。' },
            { label: 'Executor', desc: '作为单 Agent 路径直接执行，不进行委派。' }
          ]
        }
      ]
    },
    team: {
      badge: 'Team 资产',
      title: 'Team 是工程资产。可以复制、修改，也可以贡献。',
      paragraphs: ['CrewBee Team 不是一个 prompt 文件，而是一套结构化 package：包含任务定位、Leader、成员、共享规则、工作流程、review 标准和面向人的说明文档。', '你可以从内置 Coding Team 开始，复制一个模板，调整角色分工、共享规则、review 方式和完成标准，把自己的 Agent 工作方式沉淀成可复用的 Team。'],
      files: [
        { name: 'team.manifest.yaml', desc: 'Team id、任务定位、Leader、成员和 workflow。' },
        { name: 'team.policy.yaml', desc: '共享规则、安全边界和质量底线。' },
        { name: 'coding-leader.agent.md', desc: '主 Agent、owner、决策上下文和最终收口。' },
        { name: 'codebase-explorer.agent.md', desc: '代码入口、调用链、相似实现和历史线索。' },
        { name: 'coding-executor.agent.md', desc: '实现、修复、调试与局部重构。' },
        { name: 'web-researcher.agent.md', desc: '官方文档、外部资料和版本差异。' },
        { name: 'reviewer.agent.md', desc: '独立 review 与完成标准。' },
        { name: 'TEAM.md', desc: '面向人的 Team 说明。' }
      ]
    },
    codingTeam: {
      badge: 'Coding Team',
      title: '内置 Coding Team。以主线 owner 为中心，以独立 review 做质量刹车。',
      subtitle: 'CrewBee 内置 Coding Team，面向开发、bug 修复、重构、调试和验证。Leader 保持所有权，支援 Agent 负责代码探索、范围明确的修复实现、外部行为研究和风险 review。',
      roles: [
        { name: 'coding-leader', desc: '默认入口、任务 owner、决策上下文持有者、最终收口者。' },
        { name: 'codebase-explorer', desc: '定位代码入口、调用链、相似实现和历史线索。' },
        { name: 'coding-executor', desc: '执行明确实现、修复、调试与局部重构。' },
        { name: 'web-researcher', desc: '查官方资料、外部文档、开源实现和版本差异。' },
        { name: 'reviewer', desc: '独立审查风险、遗漏、验证证据和完成标准。' }
      ],
      gateTitle: 'Completion Gate',
      gates: ['目标问题已定位', '修改点有明确依据', '已完成必要实现或修复', '已运行可用的 diagnostics / build / tests', '当风险或范围需要时使用独立 review', '已说明未验证项和残余风险']
    },
    firstTask: {
      badge: '第一个任务',
      title: '你的第一个 CrewBee 任务',
      subtitle: '当前先从 OpenCode adapter 开始：在一个真实项目中，让内置 Coding Team 完成一次真实代码任务。',
      steps: ['为 OpenCode 安装 CrewBee', '打开项目并选择 `coding-leader`', '粘贴真实任务，并要求 review-backed completion'],
      prompt: '使用 CrewBee Coding Team 修复这个问题，并用 review-backed completion 收口。\n简单步骤保持轻量。如果任务并非琐碎，请定位相关代码，实现修复，运行可用的 diagnostics/build/tests，并在最终收口前让 reviewer 检查风险。',
      copyPrompt: '复制 Prompt',
      copied: '已复制',
      copyFailed: '复制失败',
      quickStartFirst: '先阅读快速开始'
    },
    projectContext: {
      badge: '下一步',
      title: '下一步：更强的项目记忆，以及更多宿主适配',
      subtitle: 'Roadmap 会保持在当前 Team 资产层之后：继续增强长期项目上下文，并逐步探索更多 Agent Harness 适配器。',
      cards: [
        { title: '面向长期、跨会话工作的 Project Context', desc: 'CrewBee 下一阶段将增强 Project Context，让长期 Agent 工作持续保有项目定位、框架设计、历史记录、当前状态、已知风险和下一步行动。' },
        { title: '恢复项目状态', desc: '新会话开始时，快速恢复项目定位、架构摘要、历史决策、当前状态和下一步行动。' },
        { title: '启发式阅读代码', desc: '把 Project Context 作为启发式入口，先定位相关模块，再有针对性地阅读代码，减少全仓库扫描带来的上下文消耗。' },
        { title: '更多 Agent Harness 适配器', desc: 'OpenCode 是当前第一个支持的宿主，后续可继续探索 Codex、Claude Code 或其他 Agent Harness 的适配。' }
      ],
      flowTitle: '规划中的 Project Context Loop',
      flow: ['会话开始 → 读取 Project Context', '任务执行 → 用摘要指导代码阅读和决策', '会话结束 → 更新状态、风险、决策和下一步行动', '下一次会话 → 基于最新上下文继续推进']
    },
    builders: {
      title: '谁适合试用 CrewBee？',
      subtitle: '面向已经手工维护 prompts、agents、rules 和工作流的人。',
      cards: [
        { role: 'Agent harness users', desc: '你正在使用 Coding Agent 或 Agent Harness，但 prompts、agents 和规则越来越分散，难以维护。' },
        { role: 'OpenCode users today', desc: '你当前使用 OpenCode，并希望拥有一层结构化 Team：包含 Leader、成员、review 和委派协作。' },
        { role: 'Prompt / subagent 维护者', desc: '你手工维护 prompts、roles 或 subagents，已经感受到复制、迁移、review 和版本管理的压力。' },
        { role: 'AI coding 用户', desc: '你希望简单代码任务保持轻量，复杂任务具备代码探索、独立 review 和验收标准。' },
        { role: 'DevTools / AI workflow 构建者', desc: '你正在构建 AI coding 或 Agent workflow 工具，希望研究 Team definition / projection layer。' }
      ]
    },
    opencode: {
      title: '当前可用于 OpenCode',
      description: 'OpenCode 是当前 adapter：CrewBee 可以把 Team 定义投影成可选择的 Agent，并通过插件运行时支持 session binding 与结构化委派。',
      links: ['阅读安装指南', '运行 doctor 校验', '查看适配器文档'],
      proofs: ['✓ Team / Agent 定义', '✓ Team Library 装配与校验', '✓ Runtime Projection', '✓ Formal Leader 默认入口选择', '✓ Agent 配置投影', '✓ Session Binding', '✓ Delegation Tooling', '✓ 用户级安装', '✓ Doctor 校验', '✓ Uninstall / Version 命令', '✓ 后台更新路径']
    },
    inspired: {
      badge: '致谢',
      title: '受开源 Agent 生态启发。',
      paragraphs: ['CrewBee 受 OpenCode 以及 oh-my-openagent 等社区项目启发。这些项目让 Agent Team 工作流在真实开发环境中的价值变得更加清晰。', 'CrewBee 在这个方向上继续推进：把 Agent Team 进一步整理为可管理、可投影、可配置、可复用的工程资产。']
    },
    faq: {
      badge: '常见问题',
      heading: 'FAQ',
      items: [
        { q: 'CrewBee 是 prompt pack 吗？', a: '不是。CrewBee 会使用 prompt，但核心不是 prompt 文本本身，而是 Team 定义、Agent Profile、Runtime Projection、session binding 和 delegation tooling。它把 Agent 工作方式整理成可维护、可运行的 Team 工程资产。' },
        { q: 'CrewBee 是 flat agent list 吗？', a: '不是。CrewBee 不只是多给几个角色。它强调 Team、Leader、members、shared policy、workflow、review flow 和 completion criteria。用户不是在一堆平铺角色里随便选一个，而是在使用一支有结构的 Team。' },
        { q: 'CrewBee 是否绑定 OpenCode？', a: '不是。CrewBee 的定位是面向 Agent Harness 的 Team 定义与投影层。OpenCode 是当前第一个支持的宿主，因为它现在提供了可落地的插件路径。长期方向是让 Team 定义尽量保持可迁移，并逐步适配更多 Agent Harness。' },
        { q: 'CrewBee 会让所有任务都变成多 Agent 协作吗？', a: '不会。CrewBee 的目标是根据任务复杂度选择合适的执行方式。简单任务可以保持单 Agent 快速执行；复杂任务才启用支援 Agent、review、验证和完成闸门。' },
        { q: '为什么需要主 Agent / Leader？', a: '复杂任务中，不同支援 Agent 只掌握部分信息。CrewBee 让主 Agent 持有用户目标、项目约束、支援结论、review 意见、验证结果和风险，保证关键判断与最终收口更一致。' },
        { q: '上下文隔离式委派是什么意思？', a: '支援 Agent 在独立上下文中完成代码探索、资料研究、review 或多模态解读，只把高信号结论回传给主 Agent。这样可以降低主 Agent 的上下文污染和注意力负担。' },
        { q: 'CrewBee 在 OpenCode 生态中处在什么位置？', a: 'CrewBee 当前使用 OpenCode 作为 adapter，但不会把自身定位成只服务 OpenCode 的插件。它更像 Team definition and projection layer：把 prompts、agents、rules、review flows 和 completion criteria 整理成可维护的 Team 资产，并为未来适配更多 Agent Harness 留出空间。' },
        { q: 'Project Context 已经完整实现了吗？', a: 'Project Context 是 CrewBee 下一阶段重点增强方向。目标是跨会话维护项目定位、框架设计、历史记录、当前状态、已知风险和下一步计划等摘要信息，减少重复解释和重复读代码。官网中把它标为 Roadmap / 下一阶段，而不是当前完整成熟能力。' },
        { q: 'CrewBee 当前支持哪个宿主？', a: '当前首先支持 OpenCode。更多宿主适配属于后续 Roadmap。' },
        { q: 'CrewBee 适合非 coding 任务吗？', a: '适合。CrewBee 的核心是 Team 定义和投影，不只适合 Coding Team。你可以基于模板创建 ResearchOpsTeam、DocumentationTeam、MarketingOpsTeam、ReleaseOpsTeam 等不同 Team。但当前最适合对外主推的样板是内置 Coding Team。' },
        { q: '我如何参与贡献？', a: '最简单的贡献不是修改 core runtime，而是贡献 Team 模板、文档、使用案例、安装反馈和 FAQ。你可以在 Discussions 中展示自己的 Team，或提交一个示例 Team PR。' }
      ]
    },
    acknowledgements: {
      badge: '最终 CTA',
      title: '准备把分散的智能体变成真正的团队？',
      paragraphs: ['阅读快速开始，查看当前 OpenCode 集成，或者加入 Discussions 展示你的第一支 Team。', 'CrewBee 是一个可适配不同 Agent Harness 的 Agent Team 资产层，当前首个支持宿主是 OpenCode。'],
      ctas: { github: '查看 GitHub', quickStart: '阅读快速开始', demo: '查看工作流', discussions: '加入 Discussions' }
    },
    footer: { docs: '文档', license: '许可证' }
  }
} as const;

export type HomepageContent = typeof homepageContent.en;
