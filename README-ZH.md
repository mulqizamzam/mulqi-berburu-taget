# Mulqi Berburu Target

基于**公开来源证据驱动**的 DeepSeek Harness 原生技能 bundle。
内置一个技能 `mulqi-berburu-target`，引导智能体执行
纪律性的研究工作流：发现、调查、验证、评分、报告。
**广泛搜索，严格验证，以证据行事。**

本 bundle 是技能与参考包，**不是**职位聚合器、实时职位数据库、
搜索服务、爬虫或申请机器人。实时结果取决于宿主会话中可用的
搜索与页面读取工具。

## 功能

该技能执行 13 阶段工作流——解读、规划、发现、扩展、搜索、提取、
标准化、去重、验证、匹配、评分、报告、行动——横跨 12 种搜索模式：

| 模式 | 用途 |
|---|---|
| Quick Hunt | 针对单一职位和地点的聚焦搜索 |
| Deep Hunt | 跨类别研究，含查询/来源覆盖率 |
| Global Hunt | 多国、工作许可、语言、货币、时区约束 |
| Executive Hunt | 高管职位与知名猎头来源 |
| Remote Hunt | 远程职位，按国家逐一核查资格 |
| Hidden Hunt | 公开商业/招聘信号——作为线索报告，而非职位 |
| Corporate Hunt | 目标企业职业/新闻调查 |
| CV Match Hunt | 将候选人证据匹配至已确认或明确标注的职位 |
| Industry Hunt | 行业专属职位、技能和来源词汇 |
| Verification Hunt | 审计提供的职位和 URL |
| Fresh Job Hunt | 优先最新发布，活跃状态单独核查 |
| Strategic Career Hunt | 职业价值比较与下一步 |

随附支持材料：

- **来源分类** — 全球、印尼、企业、社交及机构来源家族。
- **搜索手册** — 查询扩展、多语言查询包、覆盖率台账。
- **验证框架** — V1–V5 级别、欺诈信号分诊、重复消解。
- **评分模型** — 机会质量、候选人匹配、战略价值三项独立评分。
- **报告模板** — 精简职位记录与完整情报报告结构。
- **伦理 OSINT 政策** — 公开来源边界、隐私、公平性、提示注入处理。
- **工具兼容性指南** — 可用工具行为与已知限制。
- **评估用例** — 12 个场景定义（case、prompt、grader）用于审查技能行为。

## 操作契约（摘要）

- 仅报告可用工具和可访问公开来源所支持的内容。
- 三种状态严格区分：**已发布职位**、**未确认职位线索**、**推断招聘信号**。
- 每项实质性声明均附来源 URL 及该来源实际证明内容的说明。
- 未注明字段使用 `Not disclosed`（未披露），无法验证的事实使用 `Unknown`（未知）——绝不推断。
- 不绕过登录、付费墙、验证码、速率限制或平台管控。
- 未经针对该具体操作的单独明确指令，不执行外部操作（申请、联系、上传简历）。

## 环境要求

- DeepSeek Harness **0.2.1-rc.2**（`engines.dsh` 精确版本锁）。
- Node `^22.19.0 || >=24.0.0`。
- 无运行时或 peer 依赖；无构建步骤。

## 安装

**从 GitHub（推荐）：**

```bash
dsh plugin --profile <profile-name> add github:mulqizamzam/mulqi-berburu-taget#main
```

**从本地目录：**

```bash
dsh plugin --profile <profile-name> add /path/to/mulqi-berburu-target
```

安装后 bundle 出现在 profile 的 bundle 清单中。
新 bundle 可能通过 HMR 免重启激活；替换已安装包需重启
宿主以加载新的模块版本。

## 使用

当请求匹配工作搜索、招聘信号研究、职位验证、欺诈风险审查、
机会比较或简历匹配时，技能自动从会话技能目录中路由。
也支持直接调用（`mulqi-berburu-target`）。不暴露配置接口。

## 故障排除

- **Bundle 在启动时被跳过** — 宿主版本必须精确为
  0.2.1-rc.2；其他版本将拒绝 `engines.dsh` 精确锁
  （查看 `skippedBundles` 诊断，或用
  `dsh plugin --profile <name> allow-version` 授予版本豁免）。
- **技能未出现在目录中** — 确认宿主组合包含 skill 服务
  （`dsh-skill`、`dsh-tool-skill`），安装后重启宿主。
- **无实时结果** — 该技能为指令级：会话中无搜索/页面读取
  工具时，技能提供即查即用的查询计划而非结果。
  这是预期行为，非 bug。

## 许可

MIT。详见 [`LICENSE`](LICENSE)。
