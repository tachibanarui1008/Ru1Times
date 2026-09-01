import type { DailyReport } from "../report-types";

const ja = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];
const ko = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];

export const realReport20260901: DailyReport = {
  id: "2026-09-01",
  date: "2026-09-01",
  published_at: "2026-09-01T15:43:45+08:00",
  updated_at: "2026-09-01T15:43:45+08:00",
  edition_number: 11,
  draft: true,
  estimated_minutes: 36,
  ai_credit: {
    provider: "OpenAI",
    model: "GPT5.6Sol",
    role: "资料研究、事实核查与编辑协作",
  },
  sources: [
    {
      label: "AP",
      title: "More than 1,000 dead from catastrophic Nepal-China floods",
      url: "https://apnews.com/article/835459b2978adcd2b3bcf6e0595aee6c",
      published: "2026-09-01",
    },
    {
      label: "AP",
      title: "Russian barrage of drones and missiles on Ukraine's capital region kills at least 11",
      url: "https://apnews.com/article/7564a892bfb99a853aa150c8710b7985",
      published: "2026-09-01",
    },
    {
      label: "AP",
      title: "Supreme Court lets White House continue construction on Trump's $400 million ballroom",
      url: "https://apnews.com/article/6b9434af0a2dbeffa0ca19f5cdf7d775",
      published: "2026-08-31",
    },
    {
      label: "AP",
      title: "Army Secretary Dan Driscoll is stepping down after 18 months on the job, White House says",
      url: "https://apnews.com/article/4853c46840a522911da5a510b01966d2",
      published: "2026-08-31",
    },
    {
      label: "AP",
      title: "DEA tactic that let fentanyl flood the streets is being investigated by House Republicans",
      url: "https://apnews.com/article/c331c38277b68c0e477113a4fe1f8ca8",
      published: "2026-08-31",
    },
  ],
  big_story: {
    category: "Disaster response · Public infrastructure · Himalayas",
    title_zh: "洪水之后，搜救与重建都在检验公共系统",
    title_en: "After the floods, rescue and recovery test public systems",
    summary:
      "尼泊尔与中国交界地区的灾难性洪水死亡人数在 9 月 1 日升至逾千人。尼泊尔灾害机构称，该国已确认 987 人死亡、3916 人失踪；救援人员正设法抵达被道路和桥梁中断的社区，并寻找约 900 名在 12 个受损水电项目失踪的工人。灾害始于高海拔地区的冰川与基岩崩塌，但伤亡规模也提醒各国：预警、隧道应急方案、交通冗余和跨境信息更新，决定自然冲击最终会变成多大的公共危机。",
    minutes: 8,
    source_label: "Associated Press",
    source_url: "https://apnews.com/article/835459b2978adcd2b3bcf6e0595aee6c",
  },
  hot_words: [
    {
      en: "disaster response",
      zh: "灾害应对",
      ja: "災害対応",
      ja_romaji: "saigai taiō",
      ko: "재난 대응",
      ko_romaja: "jaenan daeeung",
      why_today: "洪灾发生后的搜救、安置和信息发布都属于灾害应对。",
      example: "Disaster response depends on timely information and reliable access.",
      topic: "Governance",
    },
    {
      en: "accounted for",
      zh: "已确认下落",
      ja: "安否が確認された",
      ja_romaji: "anpi ga kakunin sareta",
      ko: "소재가 확인된",
      ko_romaja: "sojaega hwagindoen",
      why_today: "灾害报道须区分死亡、失踪和已经确认安全的人数。",
      example: "Thousands of people remain unaccounted for.",
      topic: "Public safety",
    },
    {
      en: "infrastructure resilience",
      zh: "基础设施韧性",
      ja: "インフラ強靱性",
      ja_romaji: "infura kyōjinsei",
      ko: "인프라 회복탄력성",
      ko_romaja: "inpeura hoebok tallyeokseong",
      why_today: "道路、桥梁和水电项目受损后，系统能否维持基本服务成为关键。",
      example: "Infrastructure resilience is measured by continuity, not appearance.",
      topic: "Climate adaptation",
    },
    {
      en: "civilian protection",
      zh: "平民保护",
      ja: "民間人保護",
      ja_romaji: "minkanjin hogo",
      ko: "민간인 보호",
      ko_romaja: "minganin boho",
      why_today: "俄罗斯对基辅和敖德萨地区的新一轮空袭再次造成平民伤亡。",
      example: "Civilian protection remains an urgent obligation during war.",
      topic: "Conflict",
    },
    {
      en: "standing",
      zh: "诉讼资格",
      ja: "原告適格",
      ja_romaji: "genkoku tekkaku",
      ko: "원고 적격",
      ko_romaja: "wongo jeokgyeok",
      why_today: "美国最高法院多数意见聚焦原告是否有资格挑战白宫宴会厅工程。",
      example: "The court focused on whether the group had legal standing.",
      topic: "Law",
    },
    {
      en: "separation of powers",
      zh: "权力分立",
      ja: "権力分立",
      ja_romaji: "kenryoku bunritsu",
      ko: "권력 분립",
      ko_romaja: "gwollyeok bullip",
      why_today: "白宫工程是否需要国会批准，引出行政与立法权边界之争。",
      example: "The dispute raises questions about the separation of powers.",
      topic: "Constitution",
    },
    {
      en: "leadership transition",
      zh: "领导层交接",
      ja: "指導部の交代",
      ja_romaji: "shidōbu no kōtai",
      ko: "지도부 교체",
      ko_romaja: "jidobu gyoche",
      why_today: "美国陆军部长辞职，使军方高层连续变动再次受到关注。",
      example: "A leadership transition can affect policy continuity.",
      topic: "Institutions",
    },
    {
      en: "oversight",
      zh: "监督",
      ja: "監督",
      ja_romaji: "kantoku",
      ko: "감독",
      ko_romaja: "gamdok",
      why_today: "美国国会与司法部监察机构都在审查缉毒部门的执法策略。",
      example: "Independent oversight helps identify failures before they recur.",
      topic: "Accountability",
    },
  ],
  expressions: [
    {
      language: "English",
      flag: "EN",
      phrase: "The system is being tested under pressure.",
      romanization: "",
      meaning: "这套系统正在压力下接受检验。",
      nuance: "强调危机不仅考验个人能力，也暴露制度、流程和基础设施能否正常运转。",
      scene: "灾害报道、公共管理评论",
      dialogue:
        "A: Why focus on roads and emergency plans?\nB: Because the system is being tested under pressure.",
      register: "中性 · 半正式",
      frequency: "常用",
      note: "under pressure 表示在时间、资源或风险高度紧张的条件下。",
    },
    {
      language: "日本語",
      flag: "JP",
      phrase: "被害の全体像はまだ明らかになっていません。",
      romanization: "higai no zentaizō wa mada akiraka ni natte imasen",
      meaning: "灾情全貌仍未明朗。",
      nuance: "适合在数字持续更新、通信仍中断时使用，避免把阶段性统计写成最终结果。",
      scene: "突发新闻、灾情通报",
      dialogue: "救助活動は続いており、被害の全体像はまだ明らかになっていません。",
      register: "正式",
      frequency: "常用",
      note: "全体像 指事件的完整情况；まだ 与否定形式连用表示尚未。",
    },
    {
      language: "한국어",
      flag: "KR",
      phrase: "책임 소재를 분명히 밝혀야 합니다.",
      romanization: "chaegim sojaereul bunmyeonghi balkyeoya hamnida",
      meaning: "必须明确责任归属。",
      nuance: "用于要求查清决策链和职责边界，语气正式，适合监督与调查语境。",
      scene: "国会调查、公共问责",
      dialogue: "같은 문제가 반복되지 않도록 책임 소재를 분명히 밝혀야 합니다.",
      register: "礼貌 · 正式",
      frequency: "常用",
      note: "책임 소재 指责任落在何人或何机构，밝히다 表示查明并说明。",
    },
  ],
  briefings: [
    {
      id: 1,
      category: "Disaster response / Himalayas",
      title_zh: "尼泊尔—中国边境洪灾死亡人数过千，隧道搜救仍在继续",
      title_en: "Death toll from Nepal-China floods passes 1,000 as tunnel rescues continue",
      source: "Associated Press",
      source_url: "https://apnews.com/article/835459b2978adcd2b3bcf6e0595aee6c",
      minutes: 3,
      zh:
        "截至 9 月 1 日，尼泊尔灾害机构报告该国 987 人死亡、3916 人失踪；中国方面最近一次更新报告 16 人死亡、546 人失踪。尼泊尔称已有至少 11814 人获救，当前重点包括约 900 名在 12 个水电项目失踪的工人，其中约 500 人据信被困隧道。统计仍会变化，应把数字与各自发布机构和更新时间一并阅读。",
      en:
        "Nepal's disaster agency reported 987 deaths and 3,916 people missing as of Sept. 1. China's latest update reported 16 deaths and 546 missing. Nepal said at least 11,814 people had been rescued, while teams focused on roughly 900 workers missing from 12 hydropower projects, about 500 of whom were believed trapped in tunnels. The figures remain subject to revision.",
      ja: "ネパールと中国の国境地帯で洪水の死者が千人を超え、トンネル内の救助活動が続いています。",
      ko: "네팔과 중국 접경 지역의 홍수 사망자가 천 명을 넘었고 터널 구조 작업이 계속되고 있습니다.",
      ja_segments: [
        ...ja(
          "被害の全体像はまだ明らかになっていません。",
          "higai no zentaizō wa mada akiraka ni natte imasen",
          "灾情全貌仍未明朗。",
        ),
      ],
      ko_segments: [
        ...ko(
          "실종자 수는 계속 바뀔 수 있습니다.",
          "siljongja suneun gyesok bakkwil su itseumnida",
          "失踪人数仍可能继续变化。",
        ),
      ],
    },
    {
      id: 2,
      category: "Conflict / Ukraine",
      title_zh: "俄罗斯连续第六天空袭基辅，乌方称至少 11 人死亡",
      title_en: "Russian barrage hits Kyiv region for a sixth consecutive day",
      source: "Associated Press",
      source_url: "https://apnews.com/article/7564a892bfb99a853aa150c8710b7985",
      minutes: 3,
      zh:
        "乌克兰地方当局称，俄罗斯从 8 月 31 日晚至 9 月 1 日清晨对基辅及周边发动大规模空袭，至少造成 11 人死亡、十余人受伤，其中包括儿童。乌克兰空军称来袭武器包括弹道导弹、巡航导弹、反辐射导弹以及 218 架无人机和诱饵；这是基辅连续第六天遭到袭击。伤亡与拦截数据来自乌方通报，仍需随现场更新核对。",
      en:
        "Ukrainian authorities said a large Russian aerial assault from Monday evening into Tuesday morning killed at least 11 people and wounded more than a dozen, including children, in and around Kyiv. Ukraine's air force reported ballistic, cruise and anti-radar missiles as well as 218 drones and decoys. It was the sixth consecutive day of attacks on the capital region.",
      ja: "キーウ周辺への大規模な空襲が続き、ウクライナ当局は少なくとも11人が死亡したと発表しました。",
      ko: "키이우 일대에 대규모 공습이 이어져 우크라이나 당국은 최소 11명이 숨졌다고 밝혔습니다.",
      ja_segments: [
        ...ja(
          "民間人の被害が拡大しています。",
          "minkanjin no higai ga kakudai shite imasu",
          "平民伤亡正在扩大。",
        ),
      ],
      ko_segments: [
        ...ko(
          "민간인 피해가 커지고 있습니다.",
          "minganin pihaega keojigo itseumnida",
          "平民伤亡正在增加。",
        ),
      ],
    },
    {
      id: 3,
      category: "Law / United States",
      title_zh: "美国最高法院允许白宫宴会厅继续施工，实体争议尚未终结",
      title_en: "US Supreme Court lets White House ballroom construction continue",
      source: "Associated Press",
      source_url: "https://apnews.com/article/6b9434af0a2dbeffa0ca19f5cdf7d775",
      minutes: 3,
      zh:
        "美国最高法院以表面上的 5 比 4 结果，允许造价 4 亿美元的白宫宴会厅在诉讼期间继续施工。多数意见认为发起诉讼的历史保护组织可能缺乏诉讼资格；首席大法官罗伯茨与三名自由派大法官持异议，认为项目可能因未经国会批准而违法。裁定处理的是施工能否暂时继续，并未最终解决行政权边界的实体争议。",
      en:
        "The U.S. Supreme Court, in an apparent 5-4 decision, allowed construction of a $400 million White House ballroom to continue while litigation proceeds. The majority focused on whether the preservation group had legal standing. Chief Justice John Roberts and the three liberal justices dissented, arguing that the project was likely unlawful without congressional approval. The order does not finally resolve the merits.",
      ja: "米最高裁は訴訟の継続中、ホワイトハウスの宴会場工事を認めました。",
      ko: "미 연방대법원은 소송이 진행되는 동안 백악관 연회장 공사를 계속하도록 허용했습니다.",
      ja_segments: [
        ...ja(
          "本案の判断はまだ示されていません。",
          "hon'an no handan wa mada shimesarete imasen",
          "对案件实体问题尚未作出判断。",
        ),
      ],
      ko_segments: [
        ...ko(
          "본안 판단은 아직 나오지 않았습니다.",
          "bonan pandaneun ajik naoji anatseumnida",
          "案件实体判断尚未作出。",
        ),
      ],
    },
    {
      id: 4,
      category: "Oversight / United States",
      title_zh: "美国国会调查缉毒局“监控但不截获”芬太尼货运策略",
      title_en: "US House committee investigates a DEA fentanyl enforcement tactic",
      source: "Associated Press",
      source_url: "https://apnews.com/article/c331c38277b68c0e477113a4fe1f8ca8",
      minutes: 3,
      zh:
        "美国众议院监督委员会主席詹姆斯·科默要求司法部长提交记录，调查缉毒局人员为扩大案件而监控、却未及时截获大批芬太尼货运的做法。司法部监察长本月也已启动全国性审查。调查的核心不是预设违法结论，而是厘清长期侦查目标、即时公共安全义务与内部规则之间是否失衡。",
      en:
        "The chair of the U.S. House Oversight Committee requested Justice Department records about a DEA tactic in which agents monitored major fentanyl shipments without immediately seizing them as they built larger cases. The department's inspector general has also announced a nationwide review. The inquiry must determine whether long-term investigative goals overrode immediate public-safety duties or internal safeguards.",
      ja: "米議会は、フェンタニル貨物を監視しながら押収しなかった麻薬取締局の手法を調査しています。",
      ko: "미 의회는 펜타닐 화물을 추적하면서도 압수하지 않은 마약단속국의 수사 방식을 조사하고 있습니다.",
      ja_segments: [
        ...ja(
          "意思決定の経緯を検証する必要があります。",
          "ishi kettei no keii o kenshō suru hitsuyō ga arimasu",
          "有必要核查决策经过。",
        ),
      ],
      ko_segments: [
        ...ko(
          "의사 결정 과정을 검증해야 합니다.",
          "uisa gyeoljeong gwajeongeul geomjeunghaeya hamnida",
          "必须核查决策过程。",
        ),
      ],
    },
  ],
  deep_read: {
    category: "Public affairs · Institutional capacity",
    title_en: "A crisis tests more than the people at the scene",
    title_zh: "危机考验的不只是现场人员",
    minutes: 10,
    standfirst:
      "新闻常把危机写成救援者、法官或官员个人的行动，但结果往往取决于更安静的制度条件：数据能否更新、职责是否清楚、备用系统是否存在，以及错误能否被外部监督发现。",
    paragraphs: [
      {
        en:
          "In the Himalayas, rescuers are working against destroyed roads, blocked tunnels and incomplete information. Courage matters, but access routes, emergency exits, communications and backup capacity shape what courage can achieve. Infrastructure resilience therefore means preserving essential services and alternative paths when a structure fails, not promising that no structure will ever be damaged.",
        zh:
          "在喜马拉雅地区，救援人员面对的是被毁道路、堵塞隧道和不完整信息。勇气当然重要，但通道、应急出口、通信和备用能力决定勇气能够取得什么结果。基础设施韧性因此不是承诺任何设施都不会受损，而是在一处失效时仍能维持基本服务与替代路径。",
      },
      {
        en:
          "Legal and administrative crises require the same distinction between a temporary action and a final judgment. The U.S. Supreme Court allowed construction to continue while litigation proceeds; it did not settle every constitutional question. Precise reporting identifies the procedural stage, the grounds used by the decision-maker and the issues left unresolved.",
        zh:
          "法律与行政危机也要求区分临时行动和最终判断。美国最高法院允许工程在诉讼期间继续，并不等于所有宪法问题都已有定论。准确报道应指出程序所处阶段、决策者采用的理由，以及仍未解决的问题。",
      },
      {
        en:
          "Oversight begins when institutions preserve records and allow decisions to be reconstructed. In the DEA inquiry, the central question is not simply whether agents wanted to build larger cases, but who authorized the tradeoff, which safeguards applied and whether risks to the public were reported. Accountability is strongest when it explains a chain of decisions and changes the system, rather than stopping at a single name.",
        zh:
          "监督始于机构保存记录，并允许外界重建决策过程。在缉毒局调查中，核心问题不只是人员是否想侦办更大的案件，还包括谁批准了这种取舍、适用哪些保障规则，以及面向公众的风险是否得到上报。问责只有在解释完整决策链并推动系统改变时，才不会止于寻找一个名字。",
      },
    ],
  },
  context: [
    {
      title: "为什么灾害数字必须标明来源和时间？",
      text:
        "大规模灾害中，通信中断、重复登记和失踪者重新取得联系都会使数字变化。把统计归于具体机构并注明时间，既保留最新信息，也避免把阶段性数字误写成最终结论。",
    },
    {
      title: "允许工程继续，是否等于法院认定工程合法？",
      text:
        "不等于。临时救济、诉讼资格和实体合法性是不同问题。本次裁定允许施工在诉讼期间继续，案件仍会回到下级法院，国会批准等争议尚未获得最终裁判。",
    },
    {
      title: "监督调查为什么不应先写成定罪？",
      text:
        "调查的职责是取得记录、还原授权链并检验规则是否被遵守。新闻可以说明现有指控与公共风险，但在证据和程序完成前，应区分举报、调查结论与法院认定。",
    },
  ],
  history_lens: null,
  challenge: [
    {
      id: 1,
      kind: "English",
      question: "What does “unaccounted for” mean in disaster reporting?",
      options: ["Not yet confirmed safe or located", "Already rescued", "Officially sentenced"],
      answer: 0,
      explanation: "Unaccounted for means a person's status or location has not yet been confirmed.",
    },
    {
      id: 2,
      kind: "日本語",
      question: "「被害の全体像」の意味は？",
      options: ["灾情的完整情况", "法院的最终判决", "工程预算"],
      answer: 0,
      explanation: "被害の全体像 means the full picture of the damage.",
    },
    {
      id: 3,
      kind: "한국어",
      question: "“책임 소재”는 무엇을 뜻합니까?",
      options: ["责任归属", "救援通道", "临时裁定"],
      answer: 0,
      explanation: "책임 소재 means where responsibility lies.",
    },
    {
      id: 4,
      kind: "Knowledge",
      question: "美国最高法院本次裁定直接决定了什么？",
      options: ["诉讼期间工程可继续", "工程最终被判完全合法", "国会已经批准预算"],
      answer: 0,
      explanation: "The order allowed construction to continue while litigation proceeds; it did not settle every merits question.",
    },
    {
      id: 5,
      kind: "Translation",
      question: "“这套系统正在压力下接受检验。”最自然的英文是？",
      options: [
        "The system is being tested under pressure.",
        "The system is testing the pressure by itself.",
        "The pressure has a system test.",
      ],
      answer: 0,
      explanation: "The passive construction is natural because the system is the thing being tested.",
    },
  ],
  completion: false,
  difficulty_feedback: null,
};
