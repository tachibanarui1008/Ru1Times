import type { FinanceReport } from "../finance-types";

export const financeReport20260901: FinanceReport = {
  id: "2026-09-01",
  date: "2026-09-01",
  published_at: "2026-09-01T15:43:45+08:00",
  updated_at: "2026-09-01T15:43:45+08:00",
  edition_number: 8,
  draft: true,
  estimated_minutes: 20,
  ai_credit: {
    provider: "OpenAI",
    model: "GPT5.6Sol",
    role: "资料研究、事实核查与编辑协作",
  },
  market_as_of:
    "2026-09-01 15:43（北京时间；中国内地、日本、韩国采用 9 月 1 日完整收盘，香港、美欧采用 8 月 31 日最近完整收盘）",
  title_zh: "供给冲击：为什么能源上涨会同时推高物价、压低增长",
  title_en: "Supply shocks: when higher energy costs lift inflation and weaken growth",
  dek:
    "需求旺盛通常让增长和通胀一起上升，能源供给受阻却可能让两者朝相反方向移动。本期从成本、实际收入、预期和金融条件四条渠道解释负向供给冲击，并用霍尔木兹海峡紧张、油价反弹和全球股市分化，练习区分一次价格跳升、持续通胀与真正的滞胀风险。",
  learning: {
    category: "宏观经济与资产定价",
    category_en: "Macroeconomics and asset pricing",
    title_zh: "别把所有通胀都当成需求过热：五步读懂供给冲击",
    title_en: "Not all inflation is overheating: a five-step guide to supply shocks",
    standfirst:
      "负向供给冲击减少经济在既定价格下能够提供的商品与服务，典型结果是价格上升、实际产出承压。能源尤其特殊：它既是家庭消费品，也是运输、制造、农业和公共服务的共同投入。油价上涨因此不只改变加油站账单，还会沿供应链进入企业成本、居民购买力、利率预期和资产估值。",
    minutes: 12,
    blocks: [
      {
        heading: "第一步：先判断冲击来自需求还是供给",
        text:
          "需求冲击改变消费、投资、政府支出或净出口，往往让产出和价格同向变化；负向供给冲击则削弱生产能力或抬高关键投入成本，容易让产出与价格反向变化。战争、航道中断、极端天气、关键零部件短缺和生产率下降都可能构成供给冲击。分类并不总是纯粹：能源涨价会先收缩供给，随后又通过实际收入下降压低需求，因此分析要允许多条渠道同时存在。",
      },
      {
        heading: "第二步：价格跳升不等于通胀率永久抬高",
        text:
          "如果油价一次性从 80 美元升至 90 美元并停在新水平，能源价格水平已经抬高，但一年后同比涨幅会因基数变化而回落。持续通胀需要价格继续上涨，或能源成本向运输、食品、工资和服务价格扩散。判断时要分开看冲击的幅度、持续时间、覆盖范围，以及企业和劳动者是否据此重新设定价格与工资。只有当第二轮效应反复出现，一次冲击才更可能嵌入通胀过程。",
      },
      {
        heading: "第三步：实际收入与利润率解释增长为什么承压",
        text:
          "能源进口国为同样数量的燃料支付更多，相当于实际购买力向能源出口方转移。家庭在交通和电费上支出增加，会减少其他消费；无法完全提价的企业则要吸收成本，利润率和投资意愿下降。能源密集型行业承压往往更直接，能源生产商却可能受益。总指数因此会掩盖行业间重新分配，指数下跌或上涨都不能单独证明宏观冲击已经结束。",
      },
      {
        heading: "第四步：央行面对的是取舍，不是一个机械答案",
        text:
          "加息可以压低总需求，却不能直接增加石油供应或疏通航道。如果冲击短暂、通胀预期稳定，央行可能选择观察；如果能源涨价持续扩散、工资与价格相互追赶，收紧政策的必要性会提高。欧洲央行和美联储都强调，要评估冲击的性质、规模与持续性。政策反应过弱可能让预期失锚，过强则可能在供给已经受损时进一步压低就业和投资。",
      },
      {
        heading: "第五步：把市场价格拆成现金流、折现率与风险溢价",
        text:
          "能源冲击会同时改变企业现金流和投资者使用的折现率。航空、化工和运输企业可能面临成本上升，能源企业收入可能改善；若市场预期央行加息，长久期资产的估值还会因折现率上升受压。冲突不确定性又会提高风险溢价。实际价格取决于三者的合力，也取决于坏消息此前是否已被计价，因此‘油涨、股跌’是一种常见路径，却不是每天都成立的恒等式。",
      },
    ],
    case_study: {
      event: "霍尔木兹海峡紧张升级后，油价与风险资产如何反应",
      period: "2026 年 8 月 31 日至 9 月 1 日",
      text:
        "美国对伊朗拉腊克岛火箭发射装置发动打击、伊朗随后向约旦境内美军地点发射导弹后，布伦特原油 8 月 31 日上涨 2.7%，9 月 1 日亚洲交易时段再涨约 0.8%至每桶 91.23 美元。欧洲 STOXX 600 在 8 月 31 日下跌 0.62%，美国标普 500 同日下跌 0.33%；但韩国 KOSPI 9 月 1 日仍上涨 0.23%，日本 TOPIX 也上涨 0.62%。这组反应说明，供给风险会推高能源与利率担忧，却仍要经过指数行业权重、企业盈利预期和既有定价，才转化为各市场的最终涨跌。",
    },
    pros: {
      label: "供给冲击框架能帮助什么",
      items: [
        "区分价格水平的一次跳升、通胀率持续上升和更广泛的第二轮效应",
        "理解为什么增长承压时央行仍可能担心通胀，政策目标由此发生冲突",
        "把总指数拆回行业现金流、折现率和风险溢价，避免用一句地缘政治解释所有涨跌",
      ],
    },
    cons: {
      label: "使用时要防止的误区",
      items: [
        "把任何油价上涨都称为滞胀；滞胀需要更持久的高通胀与经济停滞组合",
        "假设央行可以用利率直接修复供给；利率主要影响需求、信贷和预期",
        "把市场同步下跌当作必然结果，忽略能源生产商、汇率和行业权重的差异",
      ],
    },
    takeaways: [
      "先分类：冲击最初改变的是支出需求，还是生产能力与投入成本。",
      "再追踪：幅度、持续性、扩散范围和通胀预期决定政策风险。",
      "资产价格要分三层看：现金流、折现率和风险溢价。",
      "一次油价跳升不是滞胀结论，更不是任何资产的自动买卖信号。",
    ],
  },
  markets: [
    {
      id: "cn",
      region_zh: "中国内地",
      region_en: "China Mainland",
      as_of: "2026-09-01 收盘",
      indices: [{ name: "上证指数", close: 3981.74, change_pct: -0.11 }],
      commentary:
        "上证指数在前一日上涨后小幅回落，全天波幅有限。能源冲击对内地市场的影响还会经过国内定价机制、行业结构与政策预期传导，单日窄幅变动不足以确认新的宏观方向。",
    },
    {
      id: "hk",
      region_zh: "中国香港",
      region_en: "Hong Kong",
      as_of: "2026-08-31 收盘（9 月 1 日快照时当日交易尚未完成）",
      indices: [
        { name: "恒生指数", close: 25566.99, change_pct: -0.07, extra: "8 月 -1.23%" },
        { name: "恒生科技指数", close: 4619.87, change_pct: 0.32, extra: "8 月 -4.34%" },
      ],
      commentary:
        "恒生指数与恒生科技指数在 8 月最后一个交易日方向分化。9 月 1 日 15:43 时港股尚未形成完整收盘，本期保留上一完整交易日数据，不以午盘或延时报价替代收盘。",
    },
    {
      id: "jp",
      region_zh: "日本",
      region_en: "Japan",
      as_of: "2026-09-01 收盘",
      indices: [
        { name: "日经 225", close: 66215.34, change_pct: -0.15 },
        { name: "TOPIX", close: 4181.86, change_pct: 0.62 },
      ],
      commentary:
        "日经 225 连续第二日回落，TOPIX 却收涨，反映大型权重股与更广市场并不同步。能源、商社与金融等板块权重差异，使日本市场内部也呈现不同的冲击暴露。",
    },
    {
      id: "kr",
      region_zh: "韩国",
      region_en: "South Korea",
      as_of: "2026-09-01 收盘",
      indices: [{ name: "KOSPI", close: 6835.8, change_pct: 0.23 }],
      commentary:
        "KOSPI 连续第二日上涨，科技股提供支撑。韩国作为能源进口国与出口制造经济体，同时暴露于燃料成本、全球需求、汇率和半导体周期，单一油价变量不能解释全部表现。",
    },
    {
      id: "us",
      region_zh: "美国",
      region_en: "United States",
      as_of: "2026-08-31 收盘",
      indices: [
        { name: "道琼斯工业指数", close: 53185.9, change_pct: -0.7 },
        { name: "标普 500", close: 7686.14, change_pct: -0.33 },
        { name: "纳斯达克综合指数", close: 26370.89, change_pct: -0.12 },
      ],
      commentary:
        "三大指数在 8 月最后一个交易日均收跌，但全月仍上涨。能源成本与利率担忧压低风险偏好，科技权重则令纳斯达克相对抗跌；月度上涨和单日下跌可以同时成立。",
    },
    {
      id: "eu",
      region_zh: "欧洲",
      region_en: "Europe",
      as_of: "2026-08-31 收盘",
      indices: [{ name: "STOXX Europe 600", close: 651.1, change_pct: -0.62, extra: "8 月 +0.3%" }],
      commentary:
        "欧洲基准指数随油价和债券收益率上升而回落，能源股相对坚挺。欧洲对进口能源价格较敏感，市场还在评估通胀扩散与欧洲央行政策收紧之间的关系。",
    },
  ],
  movers: [
    {
      id: 1,
      kind: "能源冲击",
      kind_en: "Energy shock",
      market: "全球",
      title: "布伦特原油站上 91 美元，航道风险重新进入通胀定价",
      text:
        "布伦特原油在 8 月 31 日上涨 2.7%后，9 月 1 日亚洲时段一度再涨约 0.8%至每桶 91.23 美元。该数据是盘中快照而非当日结算价；市场正在重新评估霍尔木兹海峡运输受限对燃料、运费和政策利率的影响。",
      source_label: "Associated Press",
      source_url: "https://apnews.com/article/775d7cf741349c7c8e689c0beb57f074",
    },
    {
      id: 2,
      kind: "指数分化",
      kind_en: "Index divergence",
      market: "亚洲",
      title: "日经回落而 TOPIX 上涨，韩国科技股支撑 KOSPI",
      text:
        "日经 225 下跌 0.15%，TOPIX 上涨 0.62%；KOSPI 上涨 0.23%，上证指数微跌 0.11%。同一外部冲击在不同指数中产生不同结果，行业权重与本地盈利预期比‘亚洲市场’这一标签更有解释力。",
    },
    {
      id: 3,
      kind: "利率预期",
      kind_en: "Rate expectations",
      market: "欧美",
      title: "油价与债券收益率上升，欧美股市结束 8 月时同步回落",
      text:
        "8 月 31 日，STOXX Europe 600 下跌 0.62%，标普 500 下跌 0.33%。欧洲能源股逆势走强，但更广市场担心能源涨价延长通胀压力，并压缩货币政策放松空间。",
      source_label: "Reuters / Associated Press",
      source_url:
        "https://uk.marketscreener.com/news/european-stocks-ease-as-u-s-iran-strikes-fuel-oil-rally-ce7858dcdc8efe26",
    },
    {
      id: 4,
      kind: "产业合同",
      kind_en: "Industrial contract",
      market: "欧洲",
      title: "OHB 获近 10 亿欧元卫星合同，股价逆市上涨 6.3%",
      text:
        "德国卫星制造商 OHB 签署近 10 亿欧元合同，将为欧盟 IRIS² 安全通信项目开发并制造 18 颗卫星。公司特定现金流改善抵消了当天更广市场的风险偏好下降，展示个股事件与宏观冲击可以同时定价。",
      source_label: "Reuters",
      source_url:
        "https://uk.marketscreener.com/news/european-stocks-ease-as-u-s-iran-strikes-fuel-oil-rally-ce7858dcdc8efe26",
    },
  ],
  companies: [
    {
      name: "OHB SE",
      ticker: "OHB",
      market: "Germany",
      event: "欧盟 IRIS² 安全通信卫星合同",
      metrics: [
        { label: "合同金额", value: "接近 10 亿欧元" },
        { label: "项目规模", value: "18 颗卫星" },
        { label: "8 月 31 日股价", value: "+6.3%" },
      ],
      note:
        "合同规模有助于改善收入可见度，但实际利润仍取决于交付周期、成本控制和项目执行；单日上涨不是对全周期回报的保证。",
      source_label: "Reuters",
      source_url:
        "https://uk.marketscreener.com/news/european-stocks-ease-as-u-s-iran-strikes-fuel-oil-rally-ce7858dcdc8efe26",
    },
  ],
  sources: [
    {
      label: "European Central Bank",
      title: "Analytical perspectives on energy supply shocks",
      url: "https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260513~5b14c78806.en.html",
      published: "2026-05-13",
    },
    {
      label: "Federal Reserve Board",
      title: "Navigating economic shocks",
      url: "https://www.federalreserve.gov/newsevents/speech/jefferson20260716a.htm",
      published: "2026-07-16",
    },
    {
      label: "Associated Press",
      title: "Oil prices rise and stocks waver as Middle East violence flares, adding to uncertainty",
      url: "https://apnews.com/article/775d7cf741349c7c8e689c0beb57f074",
      published: "2026-09-01",
    },
    {
      label: "Associated Press",
      title: "How major US stock indexes fared Monday 8/31/2026",
      url: "https://apnews.com/article/0de14aa6532e16ff1c9e52a2cf09bc4a",
      published: "2026-09-01",
    },
    {
      label: "Reuters / MarketScreener",
      title: "Europe's STOXX 600 falls as oil prices jump, but secures fifth monthly gain",
      url: "https://uk.marketscreener.com/news/european-stocks-ease-as-u-s-iran-strikes-fuel-oil-rally-ce7858dcdc8efe26",
      published: "2026-08-31",
    },
    {
      label: "Yonhap News Agency",
      title: "Seoul shares rise for 2nd day on tech gains despite renewed Mideast tensions",
      url: "https://en.yna.co.kr/view/AEN20260901008351320",
      published: "2026-09-01",
    },
    {
      label: "Minkabu / Kabutan",
      title: "日経平均1日大引け＝続落、96円安の6万6215円",
      url: "https://minkabu.jp/news/4608850",
      published: "2026-09-01",
    },
    {
      label: "Investing.com",
      title: "上海総合指数 過去データ",
      url: "https://jp.investing.com/indices/shanghai-composite-historical-data",
      published: "2026-09-01",
    },
    {
      label: "新浪财经 / 观点网",
      title: "港股夜期跌107点 北水连续4日吸资21.4亿",
      url: "https://finance.sina.com.cn/stock/estate/integration/2026-09-01/doc-iniqhscz8342758.shtml",
      published: "2026-09-01",
    },
  ],
};
