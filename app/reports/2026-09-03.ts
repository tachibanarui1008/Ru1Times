import type { DailyReport } from "../report-types";

const ja = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];
const ko = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];

export const realReport20260903: DailyReport = {
  id: "2026-09-03",
  date: "2026-09-03",
  published_at: "2026-09-03T10:18:00+08:00",
  updated_at: "2026-09-03T10:18:00+08:00",
  edition_number: 12,
  draft: false,
  estimated_minutes: 35,
  ai_credit: {
    provider: "openai",
    model: "5.6sol",
    role: "资料研究、事实核查与编辑协作",
  },
  sources: [
    {
      label: "AP",
      title: "Iran fires on its Gulf neighbors, retaliating for US strikes after a wedding was hit",
      url: "https://apnews.com/article/iran-us-strikes-hormuz-trump-september-2-2026-cc891e22860d7a53bf7ade9a3d74c0ae",
      published: "2026-09-02",
    },
    {
      label: "AP",
      title: "EU struggles to find an effective response after Germany blames Russia for a failed drone attack",
      url: "https://apnews.com/article/germany-russia-explosive-drone-leipzig-attack-8a0054face48cc56f6cb6bcf9a8f4b51",
      published: "2026-09-02",
    },
    {
      label: "Reuters",
      title: "South Korea's Lee calls for conditions to resume US-North Korea dialogue",
      url: "https://currently.att.yahoo.com/att/south-koreas-lee-calls-conditions-074430640.html",
      published: "2026-09-02",
    },
    {
      label: "WHO",
      title: "Global initiative launched to improve access to mpox vaccines",
      url: "https://www.who.int/news/item/02-09-2026-global-initiative-launched-to-improve-access-to-mpox-vaccines",
      published: "2026-09-02",
    },
  ],
  big_story: {
    category: "Conflict · Diplomacy · Middle East",
    title_zh: "当有限交火再次扩大，真正稀缺的是退出路径",
    title_en: "As limited exchanges widen again, exit ramps are in short supply",
    summary:
      "美国与伊朗在持续约一个月的低烈度阶段后重新大规模交火。美军称其打击了伊朗防空、雷达和海上军事设施；伊朗随后向约旦、科威特、巴林和伊拉克方向的美方或盟友目标发射导弹与无人机。伊朗官方媒体称，美方空袭击中霍尔木兹海峡沿岸一场婚礼，造成 4 人死亡、至少 68 人受伤；美军表示正在了解相关报道。眼下最重要的问题不只是下一轮谁会报复，而是双方能否重新建立谈判、通报和克制机制，使一次行动不再自动触发更大范围的下一次行动。",
    minutes: 8,
    source_label: "Associated Press",
    source_url: "https://apnews.com/article/iran-us-strikes-hormuz-trump-september-2-2026-cc891e22860d7a53bf7ade9a3d74c0ae",
  },
  hot_words: [
    {
      en: "escalation",
      zh: "升级",
      ja: "エスカレーション",
      ja_romaji: "esukarēshon",
      ko: "확전",
      ko_romaja: "hwakjeon",
      why_today: "美伊相互打击扩大到更多地点，使局势从有限报复滑向更广冲突的风险上升。",
      example: "Each retaliatory strike creates another risk of escalation.",
      topic: "Conflict",
    },
    {
      en: "de-escalation",
      zh: "降级局势",
      ja: "緊張緩和",
      ja_romaji: "kinchō kanwa",
      ko: "긴장 완화",
      ko_romaja: "ginjang wanhwa",
      why_today: "调停者面对的核心任务是阻止下一次报复继续扩大。",
      example: "De-escalation requires a credible way for both sides to pause.",
      topic: "Diplomacy",
    },
    {
      en: "retaliatory strike",
      zh: "报复性打击",
      ja: "報復攻撃",
      ja_romaji: "hōfuku kōgeki",
      ko: "보복 공격",
      ko_romaja: "bobok gonggyeok",
      why_today: "双方都把自身行动描述为对对方先前行动的回应。",
      example: "The government described the operation as a retaliatory strike.",
      topic: "Security",
    },
    {
      en: "civilian harm",
      zh: "平民伤害",
      ja: "民間人被害",
      ja_romaji: "minkanjin higai",
      ko: "민간인 피해",
      ko_romaja: "minganin pihae",
      why_today: "伊朗媒体关于婚礼遇袭的报道，使目标识别和伤亡调查成为焦点。",
      example: "Reports of civilian harm should be investigated independently.",
      topic: "Humanitarian law",
    },
    {
      en: "hybrid threat",
      zh: "混合威胁",
      ja: "ハイブリッド脅威",
      ja_romaji: "haiburiddo kyōi",
      ko: "하이브리드 위협",
      ko_romaja: "haibeurideu wihyeop",
      why_today: "德国将莱比锡机场未遂无人机袭击归咎于俄罗斯，欧盟讨论非军事回应。",
      example: "A hybrid threat can combine sabotage, cyber operations and disinformation.",
      topic: "Europe",
    },
    {
      en: "attribution",
      zh: "责任归因",
      ja: "攻撃主体の特定",
      ja_romaji: "kōgeki shutai no tokutei",
      ko: "공격 주체 규명",
      ko_romaja: "gonggyeok juche gyumyeong",
      why_today: "政府采取外交或制裁行动前，需要说明如何判定袭击责任方。",
      example: "Public attribution turns an intelligence judgment into a policy decision.",
      topic: "Accountability",
    },
    {
      en: "peace system",
      zh: "和平机制",
      ja: "平和体制",
      ja_romaji: "heiwa taisei",
      ko: "평화 체제",
      ko_romaja: "pyeonghwa cheje",
      why_today: "韩国总统李在明提出为美朝对话创造条件，并把停战体制转向和平体制。",
      example: "A peace system needs institutions that survive political setbacks.",
      topic: "Korean Peninsula",
    },
    {
      en: "vaccine stockpile",
      zh: "疫苗储备",
      ja: "ワクチン備蓄",
      ja_romaji: "wakuchin bichiku",
      ko: "백신 비축분",
      ko_romaja: "baeksin bichukbun",
      why_today: "新的全球 mpox 疫苗储备机制将于本月稍晚投入运行。",
      example: "A vaccine stockpile can shorten the response time during an outbreak.",
      topic: "Public health",
    },
  ],
  expressions: [
    {
      language: "English",
      flag: "EN",
      phrase: "The next move does not have to be automatic.",
      romanization: "",
      meaning: "下一步行动并非注定自动发生。",
      nuance: "用于强调危机中仍存在政治选择，不应把升级描述成无人负责的自然过程。",
      scene: "外交评论、冲突分析",
      dialogue: "A: Is another strike inevitable?\nB: No. The next move does not have to be automatic.",
      register: "中性 · 半正式",
      frequency: "常用结构",
      note: "have to 表示必要性；否定后强调仍有替代方案。",
    },
    {
      language: "日本語",
      flag: "JP",
      phrase: "緊張をこれ以上高めないことが重要です。",
      romanization: "kinchō o kore ijō takamenai koto ga jūyō desu",
      meaning: "重要的是不要让紧张局势进一步升级。",
      nuance: "外交声明中常见的克制表达，重点放在未来行动而不是争论谁先开始。",
      scene: "记者会、外交会谈",
      dialogue: "今は、緊張をこれ以上高めないことが重要です。",
      register: "正式",
      frequency: "常用",
      note: "これ以上＋否定 表示不再、不要进一步。",
    },
    {
      language: "한국어",
      flag: "KR",
      phrase: "대화 재개의 여건을 만들어야 합니다.",
      romanization: "daehwa jaegaeui yeogeoneul mandeureoya hamnida",
      meaning: "必须创造重启对话的条件。",
      nuance: "比直接要求立刻会谈更审慎，承认沟通前仍需安全、政治或程序准备。",
      scene: "半岛外交、政策讲话",
      dialogue: "긴장을 낮추고 대화 재개의 여건을 만들어야 합니다.",
      register: "礼貌 · 正式",
      frequency: "常用",
      note: "여건 表示促成某事所需的条件或环境。",
    },
  ],
  briefings: [
    {
      id: 1,
      category: "Conflict / Middle East",
      title_zh: "美伊恢复大规模交火，海湾多地启动拦截",
      title_en: "US-Iran exchanges widen as Gulf states intercept attacks",
      source: "Associated Press",
      source_url: "https://apnews.com/article/iran-us-strikes-hormuz-trump-september-2-2026-cc891e22860d7a53bf7ade9a3d74c0ae",
      minutes: 3,
      zh:
        "美军称 9 月 1 日晚完成对伊朗防空、雷达和海上军事目标的新一轮打击。伊朗随后发动导弹与无人机袭击，科威特和巴林称遭到攻击，约旦此前也拦截了来袭导弹；伊拉克库尔德当局称在埃尔比勒一带拦截 10 架携带爆炸物的无人机。伊朗官方媒体称，霍尔木兹海峡沿岸库赫斯塔克一场婚礼遭空袭，造成 4 人死亡、至少 68 人受伤。美军表示正在了解相关报道，伤亡和责任仍需独立核实。",
      en:
        "The U.S. military said it completed a new round of strikes on Iranian air-defense, radar and maritime targets Tuesday night. Iran then launched missiles and drones toward U.S. allies and assets across the region. Kuwait and Bahrain reported attacks, while Kurdish authorities in Iraq said they intercepted 10 explosive-laden drones near Irbil. Iranian state media said a strike on a wedding in Kuhestak killed four people and wounded at least 68; the U.S. military said it was looking into the reports.",
      ja: "米国とイランの攻撃の応酬が再び拡大し、湾岸各地で迎撃が行われました。",
      ko: "미국과 이란의 공방이 다시 확대되면서 걸프 지역 여러 곳에서 요격이 이뤄졌습니다.",
      ja_segments: [
        ...ja(
          "緊張をこれ以上高めないことが重要です。",
          "kinchō o kore ijō takamenai koto ga jūyō desu",
          "重要的是不要让紧张局势进一步升级。",
        ),
      ],
      ko_segments: [
        ...ko(
          "민간인 피해에 대한 조사가 필요합니다.",
          "minganin pihaee daehan josaga piryohamnida",
          "有必要调查平民伤害。",
        ),
      ],
    },
    {
      id: 2,
      category: "Security / Europe",
      title_zh: "德国指认俄罗斯策划机场无人机袭击，欧盟寻找非军事回应",
      title_en: "EU weighs a response after Germany attributes airport drone plot to Russia",
      source: "Associated Press",
      source_url: "https://apnews.com/article/germany-russia-explosive-drone-leipzig-attack-8a0054face48cc56f6cb6bcf9a8f4b51",
      minutes: 3,
      zh:
        "德国政府称，8 月 4 日在莱比锡／哈勒机场附近发现的载有爆炸物无人机由俄罗斯策划；装置在一架乌克兰货机附近被发现并拆除。德国宣布关闭一处俄罗斯领事馆等措施，欧盟外长讨论进一步制裁、签证限制和关闭领事机构。俄罗斯否认指控并称将作出回应。当前政策难点是：如何对被认定的国家级破坏行动形成可信后果，同时避免把双方带入公开军事冲突。",
      en:
        "Germany said Russia was responsible for an attempted Aug. 4 attack using an explosive-laden drone near Leipzig/Halle Airport. The device was found near a Ukrainian cargo aircraft and defused. Berlin announced measures including the closure of a Russian consulate, while EU foreign ministers discussed sanctions, visa restrictions and other nonmilitary options. Moscow rejected the accusation and promised a response.",
      ja: "ドイツが空港での無人機事件をロシアの犯行と断定し、EUは非軍事的な対応を協議しました。",
      ko: "독일이 공항 드론 사건의 배후로 러시아를 지목하자 EU는 비군사적 대응책을 논의했습니다.",
      ja_segments: [
        ...ja(
          "攻撃主体の特定には説明責任が伴います。",
          "kōgeki shutai no tokutei ni wa setsumei sekinin ga tomonai masu",
          "认定攻击责任方也伴随说明责任。",
        ),
      ],
      ko_segments: [
        ...ko(
          "공개적인 군사 충돌은 피해야 합니다.",
          "gonggaejeogin gunsa chungdoreun pihaeya hamnida",
          "必须避免公开军事冲突。",
        ),
      ],
    },
    {
      id: 3,
      category: "Diplomacy / Korean Peninsula",
      title_zh: "李在明呼吁为美朝恢复对话创造条件",
      title_en: "Lee calls for conditions to revive US-North Korea dialogue",
      source: "Reuters",
      source_url: "https://currently.att.yahoo.com/att/south-koreas-lee-calls-conditions-074430640.html",
      minutes: 3,
      zh:
        "韩国总统李在明在海外朝鲜半岛和平顾问会议上表示，应为美国与朝鲜恢复对话创造条件，并把半岛停战体制转向以合作与共同繁荣为基础的和平体制。他还把韩国战时作战指挥权的移交视为首尔承担和平责任的一部分。韩国情报部门称朝美出现恢复对话的迹象，但尚未确认具体接触；因此，政策意向与已经启动的谈判仍须严格区分。",
      en:
        "South Korean President Lee Jae Myung said conditions should be created for the United States and North Korea to resume dialogue. He also called for replacing the peninsula's armistice system with a peace system based on cooperation and shared prosperity. South Korea's intelligence service has seen signs that Washington and Pyongyang may revive dialogue, but no specific contacts have been confirmed.",
      ja: "韓国の李在明大統領は、米朝対話を再開するための条件を整える必要があると述べました。",
      ko: "이재명 대통령은 북미 대화 재개를 위한 여건을 조성해야 한다고 말했습니다.",
      ja_segments: [
        ...ja(
          "対話再開の条件を整える必要があります。",
          "taiwa saikai no jōken o totonoeru hitsuyō ga arimasu",
          "有必要为重启对话创造条件。",
        ),
      ],
      ko_segments: [
        ...ko(
          "대화 재개의 여건을 만들어야 합니다.",
          "daehwa jaegaeui yeogeoneul mandeureoya hamnida",
          "必须创造重启对话的条件。",
        ),
      ],
    },
    {
      id: 4,
      category: "Public health / Global",
      title_zh: "全球 mpox 疫苗储备机制启动，本月稍晚投入运行",
      title_en: "Global mpox vaccine stockpile is set to begin operations this month",
      source: "World Health Organization",
      source_url: "https://www.who.int/news/item/02-09-2026-global-initiative-launched-to-improve-access-to-mpox-vaccines",
      minutes: 3,
      zh:
        "世卫组织、Gavi、联合国儿童基金会、红十字会与红新月会国际联合会及无国界医生宣布建立全球 mpox 疫苗储备，计划于 9 月稍晚投入运行，所有国家均可为疫情应对申请使用。该机制由 Gavi 出资、国际疫苗供应协调小组统筹。世卫组织称，2022 年 1 月至 2026 年 7 月底，145 个国家和地区报告 190683 例确诊和 529 例死亡，其中约三分之二病例来自非洲区域。储备的实际成效仍取决于申请、分配、运输和接种能否同步加快。",
      en:
        "WHO and its partners announced a global mpox vaccine stockpile that is expected to begin operations later in September and be accessible to all countries for outbreak response. Funded by Gavi and coordinated through the International Coordinating Group on Vaccine Provision, the mechanism is intended to make allocation faster and more equitable. WHO said 145 countries and territories reported 190,683 confirmed cases and 529 deaths from January 2022 through July 2026, with about two-thirds of reported cases in Africa.",
      ja: "世界的なエムポックスワクチン備蓄が設けられ、今月後半に運用を始める予定です。",
      ko: "세계 엠폭스 백신 비축 체계가 마련돼 이달 말 운영을 시작할 예정입니다.",
      ja_segments: [
        ...ja(
          "必要な国が迅速にワクチンへアクセスできる仕組みです。",
          "hitsuyō na kuni ga jinsoku ni wakuchin e akusesu dekiru shikumi desu",
          "这是让有需要的国家能够迅速获得疫苗的机制。",
        ),
      ],
      ko_segments: [
        ...ko(
          "필요한 국가에 백신을 신속히 공급하는 체계입니다.",
          "piryohan guggae baeksineul sinsokhi gonggeuphaneun chegyeimnida",
          "这是向有需要的国家快速供应疫苗的机制。",
        ),
      ],
    },
  ],
  deep_read: {
    category: "Diplomacy · Crisis management",
    title_en: "Escalation is a chain of choices, not a force of nature",
    title_zh: "升级是一连串选择，不是自然现象",
    minutes: 9,
    standfirst:
      "冲突报道常把下一轮报复写成必然结果，但每一个目标、时间、公开表述和沟通渠道都是选择。看清这些选择，才能判断局势究竟在失控，还是仍存在停止的空间。",
    paragraphs: [
      {
        en:
          "The latest U.S.-Iran exchange shows how quickly a limited action can acquire a wider geography. A strike on military facilities was followed by attacks or interceptions reported across several neighboring countries. The physical spread matters, but so does the political spread: every new state drawn into defense, attribution or retaliation adds another decision-maker and another chance for miscalculation.",
        zh:
          "最新一轮美伊交火显示，有限行动可以多快地扩展到更广地理范围。针对军事设施的打击之后，多个邻国报告遭到攻击或实施拦截。空间扩大固然重要，政治范围扩大同样重要：每多一个国家被卷入防御、归因或报复，就多一个决策者，也多一次误判机会。",
      },
      {
        en:
          "De-escalation does not require the parties to agree on the past before they manage the next hour. They can narrow target sets, restore military communication, investigate reported civilian casualties, accept mediation or state publicly what would end the immediate exchange. None of these steps resolves the underlying dispute, but each can interrupt the assumption that retaliation must be automatic.",
        zh:
          "降级并不要求各方先对过去达成一致，才开始管理接下来的一小时。各方可以缩小目标范围、恢复军事沟通、调查平民伤亡报告、接受调停，或公开说明停止当前交火的条件。这些措施都不能解决根本分歧，却能打断“报复必然自动发生”的假设。",
      },
      {
        en:
          "The same discipline applies outside open war. Europe must decide how to respond to an alleged act of sabotage without treating attribution as a blank cheque for escalation. On the Korean Peninsula, Seoul's call to create conditions for dialogue is meaningful precisely because talks have not yet been confirmed. Good crisis reporting therefore separates signals from agreements, temporary restraint from peace, and an allegation from an independently established fact.",
        zh:
          "同样的纪律也适用于公开战争之外。欧洲必须决定如何回应被指为蓄意破坏的行动，同时不能把责任归因变成升级的空白支票。在朝鲜半岛，首尔提出为对话创造条件之所以有意义，恰恰是因为具体会谈尚未得到确认。因此，好的危机报道要区分信号与协议、暂时克制与和平、指控与已经独立证实的事实。",
      },
    ],
  },
  context: [
    {
      title: "为什么“报复”这个词不能替行动免责？",
      text:
        "报复说明一方如何解释自身行动，却不回答目标是否合法、手段是否相称、平民风险是否得到控制。新闻应同时说明行动方的理由、可核实结果以及仍待调查的争议。",
    },
    {
      title: "责任归因为什么既是技术判断，也是政治行动？",
      text:
        "情报、残骸、通信和行动模式可以支持归因；但政府公开点名另一国家后，往往会随之采取制裁、驱逐或防务措施。证据标准与政策后果应当一并审视。",
    },
    {
      title: "建立疫苗储备是否等于疫苗已经送到疫情现场？",
      text:
        "不等于。储备解决的是预先备货与国际分配框架，实际防疫仍需疫情监测、申请审批、冷链运输、当地接种能力和社区信任共同到位。",
    },
  ],
  history_lens: null,
  challenge: [
    {
      id: 1,
      kind: "English",
      question: "In conflict reporting, what does “de-escalation” mean?",
      options: ["Reducing the intensity or risk of conflict", "Expanding the target list", "Ending all diplomacy"],
      answer: 0,
      explanation: "De-escalation means taking steps that lower tension, intensity or the risk of further conflict.",
    },
    {
      id: 2,
      kind: "日本語",
      question: "「緊張をこれ以上高めない」の意味は？",
      options: ["不让紧张进一步升级", "立刻扩大军事行动", "拒绝说明事实"],
      answer: 0,
      explanation: "これ以上＋否定 means not to go any further.",
    },
    {
      id: 3,
      kind: "한국어",
      question: "“대화 재개의 여건”은 무엇을 뜻합니까?",
      options: ["重启对话所需的条件", "疫苗运输的温度", "机场的货运能力"],
      answer: 0,
      explanation: "대화 재개의 여건 means the conditions needed to resume dialogue.",
    },
    {
      id: 4,
      kind: "Knowledge",
      question: "新的全球 mpox 疫苗储备机制计划何时投入运行？",
      options: ["2026 年 9 月稍晚", "已经运行十年", "尚未确定任何时间"],
      answer: 0,
      explanation: "WHO said the stockpile is set to begin operations later in September 2026.",
    },
    {
      id: 5,
      kind: "Translation",
      question: "“下一步行动并非注定自动发生。”最自然的英文是？",
      options: [
        "The next move does not have to be automatic.",
        "The next movement automatically has nothing.",
        "Automatic is the next must move.",
      ],
      answer: 0,
      explanation: "Does not have to be expresses that something is not inevitable or necessary.",
    },
  ],
  completion: false,
  difficulty_feedback: null,
};
