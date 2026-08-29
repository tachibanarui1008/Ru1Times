import type { WeeklyReport } from "../weekly-types";

export const weeklyReport2026W35: WeeklyReport = {
  id: "2026-W35",
  week_label: "2026 · WEEK 35",
  period_start: "2026-08-24",
  period_end: "2026-08-28",
  published_at: "2026-08-29T11:15:00+08:00",
  updated_at: "2026-08-29T11:15:00+08:00",
  edition_number: 2,
  draft: false,
  estimated_minutes: 32,
  ai_credit: {
    provider: "OpenAI",
    model: "GPT5.6Sol",
    role: "资料研究、事实核查与编辑协作",
  },
  title_zh: "把进步放到压力之下",
  title_en: "When progress meets the stress test",
  dek: "机器人跑得比纪录更快，AI 公司筹得更多资本，芯片卖出更高收入，央行与外交官重新定义沟通；但真正决定这一周的，是这些成绩能否在工厂、利润表、家庭预算与灾害现场经受检验。",
  editorial_note: "本期覆盖北京时间 8 月 24 日零时至 8 月 28 日二十四时，综合这一时段内可核实的公开资料。该周共有 8 月 24、25、26、28 日四期正式日刊，8 月 27 日未单独成刊，因此相关进展由本期依据原始来源补足。",
  cover_story: [
    {
      language: "concord",
      text: "这一周最醒目的数字是 8.64 秒。8 月 26 日，天工 Ultra 在第二届世界人形机器人运动会百米大型组决赛夺冠，五天内把自己的赛会成绩从 9.39 秒推到 8.64 秒；同一赛事里，它还以 38.15 秒跑完 400 米、以 2 分 21 秒 64 跑完 1500 米。These are real measured results, not a promotional forecast。可是纪录回答的只是机器人能否在规定赛道上跑得更快，并不自动回答它能否在开放环境里稳定工作。検証（日本语 kenshō /けんしょう，验证）因此比“突破”更适合作为本周的第一个关键词。",
    },
    {
      language: "concord",
      text: "第二个数字是 800 亿港元。阿里巴巴 8 月 26 日完成 7.1 亿股新股配售，明确把约 60% 净募集资金用于全球计算基础设施，约 40% 用于超大规模 AI 数据中心与 Agentic Cloud 升级。两天前市场先看见稀释，随后才看见资本开支的用途。The company has converted an AI ambition into a financing contract：算力不再只是愿景，而是一张由新老股东共同承担的账单。대가（韩语 daega /대가，代价）只有写进融资条款，才从叙事变成约束。",
    },
    {
      language: "concord",
      text: "第三个数字是 962 亿美元。Nvidia 公布截至 7 月 26 日的季度收入同比增长 106%，其中数据中心收入 890 亿美元；它把“更多计算带来更多收入”写进了财报。与此同时，美国 7 月核心 PCE 同比仍为 3.3%，真实个人消费支出环比几乎没有增长。The same economy can contain an accelerating compute boom and a nearly flat household consumption line。écart（法语 /e.kaʁ/，差距）不是两条新闻之间的偶然空白，而是本周必须解释的结构。",
    },
    {
      language: "concord",
      text: "最后一组数字来自吉隆口岸：截至 8 月 27 日上午 8 时，泥石流灾害已造成 3 人遇难、558 人失联，其中 260 人为外籍人员；专家初步判断，灾害由尼泊尔境内高位冰崩引发，碎屑流平均速度超过每秒 50 米。这里没有任何数字适合被当作结论。They are an operational picture at a stated time，搜救会推进，名单会核实，次生风险也会变化。責任（日本语 sekinin /せきにん，责任）在灾害现场的含义，是让每一次更新都能改善下一步行动，而不是让数字更适合成为标题。",
    },
    {
      language: "concord",
      text: "把赛道、融资、财报、央行讲台与灾害现场放在同一张桌上，本周出现了一条共同尺度：progress deserves belief only after it survives a stress test。速度要接受场景检验，资本开支要接受现金流检验，货币政策要接受物价与就业检验，外交表态要接受执行检验，灾情数字要接受持续核实。검증 가능성（韩语 geomjeung ganeungseong /검증 가능성，可验证性）不是怀疑一切，而是给信任安排一条可以抵达现实的道路。",
    },
  ],
  chapters: [
    {
      id: "world-at-one-table",
      eyebrow: "THE WORLD AT ONE TABLE",
      title_zh: "世界在同一张压力测试表上",
      title_en: "Five systems, one demand for proof",
      standfirst: "赛场给出秒数，资本市场给出价格，财报给出收入，央行给出原则，灾害现场给出不断修正的事实。它们的共同问题不是谁更重要，而是谁能把承诺转化为结果。",
      paragraphs: [
        {
          language: "concord",
          text: "机器人运动会提供了本周最直观的 proof of performance。五天赛程、666 支队伍、2056 台机器人和 1301 场角逐，把实验室能力搬进可计时、可比较、可复现的规则里。天工 Ultra 的 8.64 秒不是关于“机器是否胜过人类”的哲学判决，而是关于电机转速、关节扭矩、轻量化、电池、散热与控制算法能否同时工作的一次验收。実測（日本语 jissoku /じっそく，实测）的价值，正在于它缩小了工程师可以自我解释的空间。",
        },
        {
          language: "concord",
          text: "但赛道也会放大一种误读：a benchmark is a boundary condition, not the whole world。平整地面、明确终点、重复动作和短时任务，让速度被准确测量，却暂时屏蔽了工厂与家庭里的杂乱环境、长流程任务和人机协作风险。赛事报道本身也指出，真实场景中的重门、复杂物体交互和抗干扰仍是难点。한계（韩语 hangye /한계，界限）不是削弱纪录，而是告诉我们这项纪录究竟证明了什么。",
        },
        {
          language: "concord",
          text: "资本市场给出了第二种压力测试。阿里完成 800 亿港元新股配售，把 AI 基础设施计划拆成两项可追踪用途：47,871 百万港元投入全球计算基础设施，31,914 百万港元投入超大规模数据中心与云基础设施升级。The financing is complete; the return is not。完成配售只证明资本愿意进入，并不证明两到三年的回收期、云收入增长和正现金流会如管理层预期兑现。rendement（法语 /ʁɑ̃d.mɑ̃/，回报率）要由之后的利用率、收入与自由现金流共同回答。",
        },
        {
          language: "concord",
          text: "Nvidia 的季度数据让需求端不再只是想象：962 亿美元收入、890 亿美元数据中心收入、75.0% 毛利率，都说明 AI 基建仍能产生巨量订单与利润。Yet a supplier's revenue is not the same as its customers' return on capital。芯片售出可以立即进入 Nvidia 的收入，却要经过训练、部署、产品采用与定价，才可能进入买方的利润表。転換（日本语 tenkan /てんかん，转换）是本周 AI 叙事真正困难的一步：把 compute 转成 usefulness，再把 usefulness 转成 cash flow。",
        },
        {
          language: "concord",
          text: "吉隆口岸的灾害则把“可验证”从市场词汇还原成公共责任。8 月 26 日发生灾害，8 月 27 日发布初步伤亡与失联数字，8 月 28 日地质调查团队依据卫星影像、地震数据与现场资料提出冰崩—碎屑流—泥石流的链式机制。Evidence arrived in layers, and action could not wait for perfect certainty。초동 대응（韩语 chodong daeeung /초동 대응，初期响应）要求一边救援、一边修正事实；这与赛场和财报的区别，是错误的代价不再只是输掉比赛或估值下跌。",
        },
      ],
      pullquote: "纪录说明机器跑到了哪里；压力测试说明这项进步还能走多远。",
    },
    {
      id: "transmission",
      eyebrow: "CROSSCURRENTS AND TRANSMISSION",
      title_zh: "从算力账单到家庭预算",
      title_en: "The transmission from compute to everyday life",
      standfirst: "AI 投资并不悬浮在经济之外。它与利率、通胀、消费和资本成本共用一套资源分配系统，而本周的数据开始显露这条传导链的摩擦。",
      paragraphs: [
        {
          language: "concord",
          text: "传导链的起点是资本密度。阿里一次配售募集 800 亿港元，Nvidia 一个季度取得 962 亿美元收入，AWS 又宣布未来数年增加部署 200 万枚 GPU。These figures describe an infrastructure cycle, not merely a software cycle。数据中心需要电力、土地、网络、存储与长期融资；模型越强，基础设施的提前投入越难被隐藏在轻资产叙事里。資本集約（日本语 shihon shūyaku /しほんしゅうやく，资本密集）正在成为 AI 商业模式无法跳过的名词。",
        },
        {
          language: "concord",
          text: "第二环是资金价格。8 月 25 日，中国人民银行开展 5000 亿元一年期 MLF 操作，为银行体系提供中期流动性；同一周，全球市场仍在权衡油价、长期美债收益率与地缘风险。Liquidity can ease the route, but it cannot decide the destination。钱进入金融体系之后，是流向生产性投资、资产价格还是短期周转，要由信用需求与预期共同决定。유동성（韩语 yudongseong /유동성，流动性）是一种条件，不是一份增长保证书。",
        },
        {
          language: "concord",
          text: "第三环是家庭部门。美国 7 月个人收入环比增长 0.4%，可支配个人收入增长 0.5%，但名义个人消费支出只增长 0.2%，实际消费几乎不变，储蓄率为 3.0%。服务支出增加 862 亿美元，商品支出却减少 499 亿美元。The consumer did not disappear; spending became selective。arbitrage（法语 /aʁ.bi.tʁaʒ/，取舍）在家庭预算里不是交易策略，而是房租、医疗、服务与可选商品之间越来越具体的排序。",
        },
        {
          language: "concord",
          text: "第四环是物价与政策。美国 7 月 PCE 价格指数同比上涨 3.7%，核心 PCE 同比上涨 3.3%；美联储主席 Warsh 在 Jackson Hole 表示，只有当基础通胀以足够清晰、足够快的速度回到目标，政策工作才算完成。他拒绝给出机械式利率路径，强调“committed to a discipline, not to a decision”。規律（日本语 kiritsu /きりつ，纪律）在这里不是固定答案，而是让每次决定都能被当时的数据解释。",
        },
        {
          language: "concord",
          text: "这条链的分配问题尚未解决。AI 基建可能提高生产率，也可能先抬高电力、芯片与资本需求；央行可以等待生产率证据，却必须同时处理已经存在的通胀；家庭可能最终从更便宜的服务中受益，却在此之前承担融资成本与价格波动。The timing of benefits and the timing of costs are misaligned。시차（韩语 sicha /시차，时滞）因此是理解本周的核心：谁先付款，谁后受益，以及等待期间由谁承受风险。",
        },
      ],
      pullquote: "AI 可以把未来收入写进愿景，但今天的芯片、电力和利息必须用今天的现金支付。",
    },
    {
      id: "numbers-and-limits",
      eyebrow: "NUMBERS AND THEIR LIMITS",
      title_zh: "数字给出边界，也制造错觉",
      title_en: "What this week's measurements can and cannot prove",
      standfirst: "8.64 秒、800 亿港元、962 亿美元、3.3% 与 558 人都足够醒目；负责任的阅读，要同时看见数字的精度与它没有覆盖的范围。",
      paragraphs: [
        {
          language: "concord",
          text: "8.64 秒衡量的是特定规则下的百米成绩。它能证明运动控制、动力与结构取得巨大进展，却不能直接证明一台机器人可以在没有赛道的仓库里连续工作八小时。Benchmark validity depends on task similarity：测试任务与真实任务越相似，外推越可靠。外的妥当性（日本语 soto no datōsei /そとのだとうせい，外部效度）提醒我们，不应把一个窄而精确的成绩扩大成对整个产业的判决。",
        },
        {
          language: "concord",
          text: "800 亿港元衡量的是融资规模，不是创新产出。更有解释力的数字，是资金用途的 60/40 切分、未来季度的资本开支、云收入增速、数据中心利用率与自由现金流。The placement creates capacity to act; it does not certify the action's value。희석（韩语 huiseok /희석，股权稀释）是股东已经承受的事实，回报则仍是需要未来数据支持的主张。",
        },
        {
          language: "concord",
          text: "962 亿美元与 106% 同比增长衡量的是 Nvidia 在一个季度里的经营结果。它们为 AI 需求提供强证据，却仍要与客户集中度、供应约束、毛利率可持续性以及买方回报一同阅读。A revenue line can confirm demand without proving equilibrium。soutenabilité（法语 /su.tə.na.bi.li.te/，可持续性）的问题不是增长有没有发生，而是增长在更多供给进入后还能保留多少价格与利润。",
        },
        {
          language: "concord",
          text: "3.3% 是核心 PCE 的同比变化，不是每个家庭面对的统一物价。服务与商品支出的方向不同，个人收入、实际消费和储蓄率也讲述不同侧面。A central bank needs an aggregate measure; a household lives in a personal basket。実感（日本语 jikkan /じっかん，切身感受）不会自动服从平均数，但政策也不能只凭个体感受替代总体数据。两者之间需要解释，而不是互相否定。",
        },
        {
          language: "concord",
          text: "558 名失联者更不能被当成静态统计。这个数字带有明确的时间戳、搜救阶段与身份核实条件；其中 260 名外籍人员，也意味着信息共享、领事协助与跨境协调必须同步推进。In disaster reporting, precision is provisional。잠정치（韩语 jamjeongchi /잠정치，暂定数值）不是“不可靠”的同义词，它表示数字足以指导当前行动，却必须允许下一次核实将其修正。",
        },
      ],
    },
    {
      id: "shared-mechanism",
      eyebrow: "THE SHARED MECHANISM",
      title_zh: "可信度如何被生产出来",
      title_en: "Credibility is an operating system",
      standfirst: "可信度不是机构拥有的一项永久资产。它由可重复测试、明确用途、可追踪数据、有限承诺与持续更新共同生产。",
      paragraphs: [
        {
          language: "concord",
          text: "第一步是把目标变成可观测结果。赛事用秒数与规则替机器人性能划定边界；上市公司用财报与融资用途替资本计划留下记录；统计机构给每项数据注明口径与修订安排；灾害发布会给人数标明统计时点。Credibility begins where a claim becomes falsifiable。反証可能性（日本语 hanshō kanōsei /はんしょうかのうせい，可证伪性）不是学术装饰，而是公共信息可以被信任的起点。",
        },
        {
          language: "concord",
          text: "第二步是承认不确定性而不放弃行动。吉隆救援不能等到灾害机制完全确定才开始，央行也不能等到经济被完美测量才做决定；它们需要在证据不完整时采取可修正的行动。The opposite of certainty is not paralysis。가역성（韩语 gayeokseong /가역성，可逆性）让机构在新证据出现时调整路径，而不必把每次修正伪装成早已计划好的胜利。",
        },
        {
          language: "concord",
          text: "第三步是限制沟通的承诺范围。Warsh 认为常态化前瞻指引可能制造“镜厅”问题：市场依赖央行指引，央行又依赖市场价格，双方最后只是在读取彼此。A quieter central bank asks markets to process real information rather than wait for the next phrase。retenue（法语 /ʁə.tə.ny，克制）并不等于拒绝透明，而是把透明放在决策质量与问责之后。",
        },
        {
          language: "concord",
          text: "外交也适用同一机制。8 月 26 日王毅会见美国驻华大使，双方谈到落实元首共识、管控分歧并为后续高层互动排除干扰。This is a verified diplomatic contact, not a completed agreement。段取り（日本语 dandori /だんどり，推进安排）只有在会议日期、议题、后续文本与执行动作逐步明确后，才会从积极信号变成制度性进展。",
        },
        {
          language: "concord",
          text: "本周的共同机制因此不是“相信权威”，也不是“怀疑一切”，而是建立从声明到证据、从证据到行动、从行动到复核的闭环。Trust is not the absence of checking; it is the result of checkable work。책임성（韩语 chaegimseong /책임성，问责性）意味着每个机构都应回答三个问题：你知道什么，你据此做了什么，什么新证据会让你改变。",
        },
      ],
      pullquote: "信任不是省略核查，而是核查可以抵达的结果。",
    },
    {
      id: "provisional-conclusions",
      eyebrow: "PROVISIONAL CONCLUSIONS",
      title_zh: "几项尚未完成的判断",
      title_en: "What we know, infer and still cannot claim",
      standfirst: "本周已经出现足以改变判断的事实，但从事实到长期结论仍有距离。把三者分开，才能让周报在下周仍然可被修正。",
      paragraphs: [
        {
          language: "concord",
          text: "已经确认的是：天工 Ultra 在正式赛事中取得 8.64 秒百米成绩，赛事显示运动控制快速进步；阿里完成 800 亿港元配售并公布明确资金用途；Nvidia 季度收入和数据中心收入均创下高位；美国核心 PCE 同比为 3.3%，实际个人消费环比近乎持平；吉隆泥石流的搜救与地质调查仍在推进；美联储主席明确弱化常态化前瞻指引。These facts define the week's floor。事実（日本语 jijitsu /じじつ，事实）是判断可以站立的地面。",
        },
        {
          language: "concord",
          text: "由此可以作出一项谨慎推断：AI 正从模型竞赛进入 infrastructure-and-accountability phase。性能仍在提高，但资本需求、能源与算力成本、股东稀释、产品回报和安全责任开始与能力指标同样重要。추론（韩语 churon /추론，推断）来自多项事实之间的关系，却不等同于任何一家公司的正式结论。",
        },
        {
          language: "concord",
          text: "第二项推断是，宏观政策正在重新强调 decision over guidance。Warsh 的讲话并未给出下一次会议的利率答案，而是要求市场减少对央行措辞的依赖；这会提高短期波动，却可能让价格重新承担发现信息的功能。The trade-off is real：更少的路径承诺可以保留政策灵活性，也可能增加家庭和企业的规划成本。ambiguïté（法语 /ɑ̃.bi.ɡɥi.te，模糊性）不会消失，只会从央行声明转移到市场判断。",
        },
        {
          language: "concord",
          text: "仍不能声称的是：机器人纪录已经证明大规模商业落地；AI 基建投入一定能在承诺周期内收回；Nvidia 的高速增长可以无限延续；外交接触必然转化为协议；吉隆灾害的初步人数已经是最终数字。未知清单不是结尾的谦辞，而是下一轮核查的任务书。保留（日本语 horyū /ほりゅう，暂缓判断）是证据不足时最积极的选择之一。",
        },
      ],
    },
    {
      id: "evidence-to-watch",
      eyebrow: "EVIDENCE TO WATCH",
      title_zh: "下一个验证窗口",
      title_en: "The evidence that could change this issue",
      standfirst: "下周值得关注的不是更多口号，而是几条能够推翻或强化本期判断的证据链。",
      paragraphs: [
        {
          language: "concord",
          text: "对机器人产业，下一步要看从赛场到场景的迁移：同一套运动控制能否在不平整地面、动态障碍、长时负载与人机共处环境中保持成功率，故障后能否安全恢复。Watch task completion rates, intervention frequency and mean time between failures—not another highlight reel。稼働率（日本语 kadōritsu /かどうりつ，运行率）会比单次最快成绩更接近商业价值。",
        },
        {
          language: "concord",
          text: "对 AI 资本开支，要追踪阿里的配售资金是否按 60/40 用途投入，云收入、资本开支、自由现金流和数据中心利用率能否形成同方向变化；也要观察 Nvidia 下一季度指引、毛利率与客户扩张。The thesis strengthens if customer revenue catches up with supplier revenue。회수 기간（韩语 hoesu gigan /회수 기간，回收期）如果持续后移，本周“基础设施周期”的判断就需要转向“资本过剩风险”。",
        },
        {
          language: "concord",
          text: "对宏观政策，要看 9 月 FOMC 前的就业、通胀与金融条件是否支持 Warsh 所说的“等待新信息”，以及市场能否在更少前瞻指引下形成稳定而非自我强化的价格信号。A quieter Fed succeeds only if the information ecosystem becomes better, not merely louder。lisibilité（法语 /li.zi.bi.li.te，可读性）将体现在政策决定是否能由数据和原则被事后解释。",
        },
        {
          language: "concord",
          text: "对吉隆灾害，要持续核对搜救进展、失联人员身份、堰塞湖与高风险冰湖监测、安置点安全和跨境信息协作。任何人数变化都应保留来源与时间，不以“前后不一致”指责正常核实，也不以“仍在变化”为理由忽略责任。업데이트（韩语 eopdeiteu /업데이트，更新）在这里不是新闻节奏，而是救援系统的一部分。",
        },
      ],
    },
    {
      id: "marginalia",
      eyebrow: "MARGINALIA",
      title_zh: "页边：不要让比较偷走对象",
      title_en: "A note on comparisons",
      standfirst: "本周的叙事充满比较：机器人与人类、收入与预期、通胀与目标、表态与协议。比较有启发性，也最容易越界。",
      paragraphs: [
        {
          language: "concord",
          text: "机器人跑过人类世界纪录，是一个有效的传播入口，却不是人机能力的总排名。机器人没有呼吸系统与肌腱，人类也不是为更换电池、散热器和控制策略而设计。Comparison is useful when it isolates a dimension; it misleads when it erases the object。物差し（日本语 monosashi /ものさし，尺度）必须与问题匹配，否则精确的秒数也会产生模糊的理解。",
        },
        {
          language: "concord",
          text: "同样，Nvidia 的收入不能直接与家庭消费放在同一比例尺上，但两者可以共同回答资本与需求正在向哪里集中；外交表态不能与协议等量齐观，但可以观察沟通渠道是否存在；初步灾情不能与最终统计比较，却可以衡量救援规模。좋은 비교（韩语 joeun bigyo /좋은 비교，好的比较）不要求对象相同，而要求问题清楚。",
        },
        {
          language: "concord",
          text: "所以，本周真正值得保留的不是“机器胜过人”“AI 仍然繁荣”或“央行停止指引”这些整齐标题，而是一种阅读习惯：ask what was measured, under which conditions, by whom, and what would count as failure。nuance（法语 /nɥɑ̃s，细微差别）不会削弱判断；它让判断拥有边界，也让下一次修正有地方发生。",
        },
      ],
    },
  ],
  closing_note: [
    {
      language: "concord",
      text: "这一周，进步拥有了很多漂亮的单位：秒、港元、美元、百分比。它们让变化变得可见，也容易让人忘记单位之外的条件。The point of a stress test is not to deny progress; it is to discover what the progress can carry。耐久性（日本语 taikyūsei /たいきゅうせい，耐久性）决定一项突破能否从周末头条进入日常世界。",
    },
    {
      language: "concord",
      text: "下周再回看本期时，最好的结果不是每项判断都原封不动，而是新证据能清楚告诉我们哪里应当保留、哪里必须修正。신뢰（韩语 silloe /신뢰，信任）并非来自永不出错，而来自愿意让事实持续参与决定。",
    },
  ],
  sources: [
    {
      label: "中央网信办（转引央广网）",
      title: "“冰丝带”竞速！人形机器人赛场见证中国硬核科技加速突围",
      url: "https://www.cac.gov.cn/2026-08/25/c_1789406621276772.htm",
      published: "2026-08-25",
    },
    {
      label: "北京市人民政府",
      title: "第二届世界人形机器人运动会闭幕 人形机器人站上新起点",
      url: "https://www.beijing.gov.cn/fuwu/lqfw/gggs/202608/t20260827_4838925.html",
      published: "2026-08-27",
    },
    {
      label: "阿里巴巴集团",
      title: "Alibaba Group Announces Completion of HK$80 Billion Placing of New Shares",
      url: "https://www.alibabagroup.com/zh-HK/document-2029365886510432256",
      published: "2026-08-26",
    },
    {
      label: "NVIDIA Investor Relations",
      title: "NVIDIA Announces Financial Results for Second Quarter Fiscal 2027",
      url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Second-Quarter-Fiscal-2027/default.aspx",
      published: "2026-08-26",
    },
    {
      label: "U.S. Bureau of Economic Analysis",
      title: "Personal Income and Outlays, July 2026",
      url: "https://www.bea.gov/news/2026/personal-income-and-outlays-july-2026",
      published: "2026-08-26",
    },
    {
      label: "Federal Reserve Board",
      title: "Keynote remarks by Chairman Warsh at the 2026 Jackson Hole Economic Policy Symposium",
      url: "https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm",
      published: "2026-08-28",
    },
    {
      label: "中国人民银行相关报道（东方财富转载）",
      title: "8月25日早间新闻精选：央行开展5000亿元MLF操作",
      url: "https://finance.eastmoney.com/a/202608253851927294.html",
      published: "2026-08-25",
    },
    {
      label: "中华人民共和国外交部",
      title: "王毅会见美国驻华大使庞德伟",
      url: "https://www.fmprc.gov.cn/wjbzhd/202608/t20260827_12011229.shtml",
      published: "2026-08-27",
    },
    {
      label: "西藏自治区人民政府",
      title: "西藏吉隆县泥石流灾害新闻发布会召开",
      url: "https://www.linzhi.gov.cn/xwzx_406/qxxw/202608/t20260828_555526.html",
      published: "2026-08-28",
    },
    {
      label: "中国地质调查局",
      title: "西藏吉隆泥石流由尼泊尔境内高山冰崩引发",
      url: "https://www.cgs.gov.cn/ywdt/ddyw/202608/t20260828_867531.html",
      published: "2026-08-28",
    },
  ],
};
