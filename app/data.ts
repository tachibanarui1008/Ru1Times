export type Language = "zh" | "en" | "ja" | "ko" | "all";

export type DailyReport = {
  date: string;
  edition_number: number;
  demo: boolean;
  estimated_minutes: number;
  big_story: { category: string; title_zh: string; title_en: string; summary: string; minutes: number };
  hot_words: Array<{ en: string; zh: string; ja: string; ko: string; why_today: string; example: string; topic: string }>;
  expressions: Array<{ language: "English" | "日本語" | "한국어"; flag: string; phrase: string; meaning: string; nuance: string; scene: string; dialogue: string; register: string; frequency: string; note: string }>;
  briefings: Array<{ id: number; category: string; title_zh: string; title_en: string; source: string; minutes: number; zh: string; en: string; ja: string; ko: string }>;
  deep_read: { category: string; title_en: string; title_zh: string; minutes: number; standfirst: string; paragraphs: Array<{ en: string; zh: string }> };
  context: Array<{ title: string; text: string }>;
  history_lens: { then: string; now: string; title: string; text: string; similarities: string; differences: string } | null;
  challenge: Array<{ id: number; kind: string; question: string; options: string[]; answer: number; explanation: string }>;
  completion: boolean;
  difficulty_feedback: "Easy" | "Just Right" | "Challenging" | null;
};

export const demoReport: DailyReport = {
  date: "2026-08-21",
  edition_number: 1,
  demo: true,
  estimated_minutes: 40,
  big_story: {
    category: "Technology · AI Infrastructure",
    title_zh: "塑造下一阶段人工智能的静默基础设施竞赛",
    title_en: "The quiet infrastructure race shaping the next era of AI",
    summary: "算法吸引了最多关注，但芯片、电力、冷却系统与数据中心，正共同决定 AI 能以多快的速度进入现实世界。",
    minutes: 14,
  },
  hot_words: [
    { en:"Semiconductor", zh:"半导体", ja:"半導体（はんどうたい）", ko:"반도체", why_today:"AI 算力竞争的物理基础，也是贸易与产业政策的长期关键词。", example:"Advanced semiconductors remain central to the expansion of AI infrastructure.", topic:"Technology" },
    { en:"Grid", zh:"电网", ja:"電力網（でんりょくもう）", ko:"전력망", why_today:"数据中心的用电需求让电网容量成为科技发展约束。", example:"Utilities are upgrading the grid to serve power-hungry data centers.", topic:"Energy" },
    { en:"Bottleneck", zh:"瓶颈；限制环节", ja:"ボトルネック", ko:"병목 현상", why_today:"理解供应链、能源与生产能力限制时非常常用。", example:"Power availability may become a bigger bottleneck than chip supply.", topic:"Economy" },
    { en:"Resilience", zh:"韧性；抗冲击能力", ja:"強靱性（きょうじんせい）", ko:"회복 탄력성", why_today:"政策制定者越来越重视关键供应链的抗风险能力。", example:"Governments are investing in supply-chain resilience.", topic:"Policy" },
    { en:"Inference", zh:"推理；模型运行", ja:"推論（すいろん）", ko:"추론", why_today:"AI 从训练走向大规模应用时，推理成本尤其重要。", example:"Efficient inference can make AI services cheaper to operate.", topic:"AI" },
    { en:"Capacity", zh:"产能；容量", ja:"能力（のうりょく）・容量（ようりょう）", ko:"용량", why_today:"可描述工厂、电网和数据中心能够承载的上限。", example:"New generation capacity will take years to connect to the grid.", topic:"Energy" },
    { en:"Subsidy", zh:"补贴", ja:"補助金（ほじょきん）", ko:"보조금", why_today:"芯片与清洁能源产业政策中反复出现。", example:"The subsidy is designed to attract long-term manufacturing investment.", topic:"Policy" },
    { en:"Trade-off", zh:"权衡；取舍", ja:"トレードオフ", ko:"상충 관계", why_today:"复杂政策通常不是单一最优解，而是多目标取舍。", example:"There is a trade-off between rapid construction and local oversight.", topic:"Knowledge" },
  ],
  expressions: [
    { language:"English", flag:"EN", phrase:"That’s a stretch.", meaning:"这有点牵强。", nuance:"礼貌但清楚地指出某个推论缺少足够依据。", scene:"会议、朋友讨论、评论观点", dialogue:"A: This one chart proves the whole market has changed.\nB: That’s a stretch. We need more evidence.", register:"中性 · 非正式到半正式", frequency:"常用", note:"比 That’s wrong 更缓和，但语气仍可能显得直接。" },
    { language:"日本語", flag:"JP", phrase:"たしかに、それはそう。", meaning:"确实，是这么回事。", nuance:"自然地承认对方说得有道理，也可用来缓和分歧。", scene:"朋友聊天、轻松的工作讨论", dialogue:"A：時間（じかん）がかかるね。\nB：たしかに、それはそう。", register:"日常 · 自然", frequency:"很常用", note:"たしかに 后稍作停顿，会更接近日常语感。" },
    { language:"한국어", flag:"KR", phrase:"그럴 수도 있죠.", meaning:"也有可能是那样。", nuance:"表示接受一种可能性，但不一定完全同意。", scene:"讨论、委婉回应、职场沟通", dialogue:"A: 계획이 바뀔 것 같아요.\nB: 그럴 수도 있죠.", register:"礼貌 · 日常", frequency:"很常用", note:"句尾 있죠 比 있어요 多一点共同确认的感觉。" },
  ],
  briefings: [
    { id:1, category:"Technology / AI", title_zh:"AI 扩张开始受到电力与土地条件约束", title_en:"AI expansion meets the physical limits of power and land", source:"Illustrative editorial synthesis", minutes:3,
      zh:"大型 AI 系统需要越来越多的数据中心。企业不仅要采购芯片，还要寻找稳定电力、冷却用水、网络连接和可建设土地。基础设施审批速度因此成为新变量。",
      en:"The expansion of artificial intelligence is becoming a physical infrastructure story. Companies still need advanced chips, but they must also secure reliable electricity, cooling systems, network links and suitable land. As a result, grid connections and local permitting can shape where—and how quickly—new computing capacity is built.",
      ja:"AI の拡大（かくだい）には、多くのデータセンターが必要（ひつよう）です。半導体（はんどうたい）だけではなく、電気（でんき）や水（みず）、土地（とち）も大切です。建設（けんせつ）の許可（きょか）にも時間がかかります。",
      ko:"AI가 커지면서 데이터 센터가 더 많이 필요합니다. 반도체뿐 아니라 전기, 물, 땅도 중요합니다. 건설 허가와 전력 연결에는 시간이 걸릴 수 있습니다." },
    { id:2, category:"Politics / International", title_zh:"产业政策正在重新定义国家间合作", title_en:"Industrial policy is reshaping international cooperation", source:"Illustrative editorial synthesis", minutes:3,
      zh:"各国试图扩大关键技术的国内生产，同时又无法摆脱跨国供应链。补贴与出口规则既可能吸引投资，也可能让伙伴之间产生摩擦。政策的真正难点是安全与效率如何平衡。",
      en:"Governments want more domestic production of critical technologies, yet modern supply chains remain deeply international. Subsidies and export rules may attract investment at home while creating friction with partners abroad. The central policy challenge is balancing economic efficiency with national resilience.",
      ja:"多くの国（くに）は、大切な技術（ぎじゅつ）を国内（こくない）で作りたいと考えています。しかし、部品（ぶひん）は世界（せかい）の多くの国から来ます。安全（あんぜん）と効率（こうりつ）のバランスが必要です。",
      ko:"많은 나라는 중요한 기술을 국내에서 만들고 싶어 합니다. 하지만 공급망은 여러 나라와 연결되어 있습니다. 안전과 효율 사이의 균형이 중요합니다." },
    { id:3, category:"Economy / Finance", title_zh:"资本支出热潮改变了投资者观察指标", title_en:"The capital-spending boom changes what investors watch", source:"Illustrative editorial synthesis", minutes:3,
      zh:"AI 相关支出从软件研发延伸至长期基础设施。投资者开始更关注资本开支、折旧、能源合同与设备利用率，而不只是用户增长。庞大投入能否转化为稳定收入，仍是核心问题。",
      en:"AI-related spending has moved beyond software research into long-lived infrastructure. Investors are paying closer attention to capital expenditure, depreciation, energy contracts and equipment utilization—not only user growth. The key question is whether heavy investment can produce durable revenue and acceptable returns.",
      ja:"AI への投資（とうし）は、ソフトウェアだけではありません。会社（かいしゃ）は建物（たてもの）や機械（きかい）、電気にもお金を使います。投資家（とうしか）は、そのお金が将来（しょうらい）の利益（りえき）になるかを見ています。",
      ko:"AI 투자는 소프트웨어만의 이야기가 아닙니다. 기업은 건물, 장비, 전기에도 큰돈을 씁니다. 투자자는 이 지출이 앞으로 안정적인 수익을 만들 수 있는지 봅니다." },
    { id:4, category:"Science / Policy", title_zh:"高效冷却成为计算科学的新前沿", title_en:"Efficient cooling becomes a new frontier in computing", source:"Illustrative editorial synthesis", minutes:3,
      zh:"高性能芯片会产生大量热量。工程师正在改进液冷、热量回收和机房布局，以降低能耗并延长设备寿命。冷却技术看似低调，却直接影响计算成本和环境足迹。",
      en:"High-performance chips generate substantial heat. Engineers are improving liquid cooling, heat reuse and data-center layouts to reduce energy consumption and extend equipment life. Cooling may appear less glamorous than model design, but it directly affects computing costs and environmental impact.",
      ja:"高性能（こうせいのう）の半導体は、たくさんの熱（ねつ）を出します。技術者（ぎじゅつしゃ）は、水を使う冷却（れいきゃく）などを研究しています。冷却はコストと環境（かんきょう）に関係します。",
      ko:"고성능 반도체는 열을 많이 만듭니다. 기술자들은 액체 냉각과 열 재사용 방법을 연구합니다. 냉각 기술은 비용과 환경에 직접 영향을 줍니다." },
  ],
  deep_read: {
    category:"Technology · Economy · Energy", title_en:"AI’s next breakthrough may depend on everything around the chip", title_zh:"AI 的下一次突破，或许取决于芯片之外的一切", minutes:14,
    standfirst:"The story of AI is shifting from astonishing models to the slow, physical systems that make those models available at scale.",
    paragraphs:[
      { en:"For much of the recent AI boom, attention centered on models: how many parameters they contained, which tests they passed and what new tasks they could perform. That focus made sense. Better algorithms and larger training runs produced visible leaps in capability. Yet the next stage of development may be shaped as much by ordinary physical constraints as by another research breakthrough. A model cannot serve millions of people without chips, power, cooling, buildings and high-speed connections. AI is therefore becoming an infrastructure industry as well as a software industry.", zh:"在最近一轮 AI 热潮中，人们主要关注模型：参数有多少、通过了哪些测试、能完成哪些新任务。这种关注并非没有道理，更好的算法与更大规模的训练确实带来了能力跃升。然而，下一阶段的发展可能同样受到普通物理条件的制约。一个模型若没有芯片、电力、冷却、建筑和高速网络，就无法服务数以百万计的用户。因此，AI 正在成为基础设施产业，而不仅是软件产业。" },
      { en:"Electricity illustrates the change. Training a frontier model requires intense bursts of computing, while operating popular services creates continuous demand. Data centers must connect to grids that were not designed for clusters of this size. Building a new power plant is only one part of the solution; transmission lines, substations and local distribution networks may also need expansion. These projects move slowly because they involve engineering studies, public consultation, financing and permits. The digital economy still advances at the speed of concrete and copper.", zh:"电力最能说明这一转变。训练前沿模型需要短时间内集中大量计算，而运行热门服务则会形成持续需求。数据中心必须接入原本并未为如此大规模计算集群设计的电网。新建电厂只是方案的一部分，输电线路、变电站和本地配电网络也可能需要扩建。这类项目涉及工程研究、公众协商、融资与审批，推进速度并不快。数字经济依然受制于混凝土和铜线的建设速度。" },
      { en:"This creates a new geography of technology. The best location for a data center is not necessarily the city with the most software engineers. It may be a place with dependable low-cost power, available land, strong fiber links and a climate that reduces cooling needs. Regions that once sat outside the technology spotlight can become strategically important. At the same time, communities may ask difficult questions about water consumption, electricity prices, construction noise and the number of permanent jobs created after a facility opens.", zh:"这也在重塑科技产业的地理版图。最适合建设数据中心的地点，未必是软件工程师最集中的城市，而可能是电力稳定且成本较低、土地充足、光纤网络完善、气候有利于冷却的地区。过去不在科技聚光灯下的地方，可能因此变得具有战略意义。与此同时，当地社区也会追问用水量、电价、施工噪音，以及设施投运后究竟能创造多少长期岗位。" },
      { en:"Capital is another constraint. Chips and data centers require enormous spending before they generate revenue. That spending appears on corporate accounts over many years through depreciation, while equipment can become outdated quickly. Companies must judge whether future demand will justify today’s construction. Investors, meanwhile, have to separate durable infrastructure from a temporary race to avoid falling behind. Neither optimism nor skepticism is sufficient on its own; the useful question is how efficiently each additional unit of computing produces valuable services.", zh:"资本是另一项约束。芯片和数据中心需要在产生收入之前投入巨额资金，这些支出会通过折旧在多年财务报表中体现，而设备本身却可能迅速过时。企业必须判断未来需求能否证明今天的建设合理；投资者则要区分哪些是持久基础设施，哪些只是为了不掉队而出现的短期竞赛。单纯乐观或悲观都不够，真正有用的问题是：每增加一单位算力，能多高效地转化为有价值的服务？" },
      { en:"None of this means progress will stop. Constraints often redirect innovation. Scarce electricity encourages more efficient chips and software. Cooling costs create markets for better thermal systems. Long grid queues increase interest in energy storage, flexible demand and on-site generation. The companies and governments that understand these connections may gain an advantage—not by predicting one dramatic invention, but by coordinating many unglamorous systems. The next AI breakthrough may arrive quietly, hidden in a transformer, a cooling pipe or a planning office.", zh:"这并不意味着进步会停止。约束往往会重新引导创新：电力稀缺会推动更高效的芯片与软件，冷却成本会催生更好的热管理系统，漫长的电网接入等待会提高人们对储能、灵活用电和现场发电的兴趣。能够理解并协调这些联系的企业与政府，可能因此获得优势——不是因为准确预测了某项轰动发明，而是因为把众多不显眼的系统组织到了一起。下一次 AI 突破也许会悄然发生，藏在变压器、冷却管道或规划办公室里。" },
    ]
  },
  context:[
    { title:"为什么电网接入要等很久？", text:"发电量增加不等于电能能立刻送到目的地。输电线路、变电站与配电设备都要匹配，还需完成稳定性研究、土地协调和审批。" },
    { title:"资本开支和运营支出有什么不同？", text:"资本开支用于能长期使用的资产，如服务器和建筑；运营支出则用于日常运行，如电费和维护。两者对现金流和利润表的影响节奏不同。" },
    { title:"推理为什么越来越重要？", text:"训练让模型获得能力，推理则是模型每次回答用户时发生的计算。随着用户量扩大，单次推理效率会累积成巨大的成本差异。" },
  ],
  history_lens:{ then:"1980s", now:"Today", title:"从日美半导体摩擦看今天的芯片产业政策", text:"20 世纪 80 年代，存储芯片竞争、贸易失衡与市场准入争议推动美国和日本展开谈判。今天的政策讨论同样关心产能与技术领先，但产业范围、参与国家和安全语境已大不相同。", similarities:"政府都把半导体视为战略产业，并使用贸易与产业政策影响企业投资。", differences:"今天的供应链更全球化，芯片类型更复杂，AI 与国家安全议题的权重也显著提高。" },
  challenge:[
    { id:1, kind:"English", question:"In the report, what does “bottleneck” mean?", options:["A celebration", "A limiting point", "A new product"], answer:1, explanation:"A bottleneck is a stage or resource that limits the speed or capacity of a whole system." },
    { id:2, kind:"日本語", question:"「電気（でんき）」の意味は？", options:["土地", "电力／电", "建筑"], answer:1, explanation:"電気 means electricity. 文中ではデータセンターに必要な電力を指します。" },
    { id:3, kind:"한국어", question:"“전력망”은 무엇입니까?", options:["电网", "供应链", "冷却水"], answer:0, explanation:"전력망 means the power grid: 发电、输电和配电相连的网络。" },
    { id:4, kind:"Translation", question:"“这项投资需要时间才能产生回报。” 最自然的英文是？", options:["This investment needs time to generate returns.", "This investment makes time return.", "This return invests time."], answer:0, explanation:"Generate returns 是“产生回报”的常见搭配。" },
    { id:5, kind:"Knowledge", question:"为什么新增发电厂不一定立刻解决数据中心的电力问题？", options:["因为芯片不需要电", "因为输电与配电设施也可能需要扩建", "因为所有电厂只能夜间工作"], answer:1, explanation:"电力必须通过足够容量的输电线路、变电站和本地配电网络送到负荷所在地。" },
  ],
  completion:false,
  difficulty_feedback:null,
};

export const archiveReports = [
  { date:"2026-08-21", title:demoReport.big_story.title_zh, fields:["Technology","AI","Energy"], status:"In progress" },
  { date:"2026-08-20", title:"央行沟通如何改变市场预期", fields:["Economy","Finance"], status:"Completed" },
  { date:"2026-08-19", title:"深海探测正在打开新的科学窗口", fields:["Science","Technology"], status:"Completed" },
  { date:"2026-08-18", title:"关键矿产供应链为何变得重要", fields:["Politics","Economy"], status:"Saved" },
];

export const deepReadArchive = [
  { date:"2026-08-21", category:"Technology", title:"AI’s next breakthrough may depend on everything around the chip", zh:"AI 的下一次突破，或许取决于芯片之外的一切", minutes:14, status:"Reading", tone:"sage" },
  { date:"2026-08-20", category:"Finance", title:"The hidden work of central-bank communication", zh:"央行沟通背后的隐形工作", minutes:13, status:"Completed", tone:"blue" },
  { date:"2026-08-19", category:"Science", title:"What the deep ocean can still teach us", zh:"深海仍能教给我们什么", minutes:12, status:"Completed", tone:"navy" },
  { date:"2026-08-18", category:"History", title:"How supply chains became a question of security", zh:"供应链如何成为安全议题", minutes:15, status:"Saved", tone:"sand" },
];
