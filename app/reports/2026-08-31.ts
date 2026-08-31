import type { DailyReport } from "../report-types";

const ja = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];
const ko = (text: string, romanization: string, zh: string) => [{ text, romanization, zh }];

export const realReport20260831: DailyReport = {
  id: "2026-08-31",
  date: "2026-08-31",
  published_at: "2026-08-31T17:14:50+08:00",
  updated_at: "2026-08-31T17:34:55+08:00",
  edition_number: 10,
  draft: false,
  estimated_minutes: 35,
  ai_credit: {
    provider: "OpenAI",
    model: "GPT5.6Sol",
    role: "资料研究、事实核查与编辑协作",
  },
  sources: [
    {
      label: "AP",
      title: "Pacific meeting begins in Palau amid China-Taiwan tension",
      url: "https://apnews.com/article/pacific-islands-forum-palau-china-taiwan-5b5811d8a4f7bb18761b84255661f8db",
      published: "2026-08-31",
    },
    {
      label: "United Nations",
      title: "Challenges Related to Sea-Level Rise and Ways and Approaches to Address Them",
      url: "https://www.un.org/en/media/accreditation/alert.shtml",
      published: "2026-08-31",
    },
    {
      label: "AP",
      title: "Iceland voters reject talks to rejoin EU after debate over fisheries and geopolitical stability",
      url: "https://apnews.com/article/iceland-european-union-election-referendum-accession-fish-d29f8d4e140894fe22db17005e9c2a2e",
      published: "2026-08-30",
    },
    {
      label: "AP",
      title: "UAE says it intercepted an Iranian drone after weekend US strikes on rocket launchers in Iran",
      url: "https://apnews.com/article/iran-us-war-uea-august-31-2026-9f34873bad9a928574c36ee984c3f96b",
      published: "2026-08-31",
    },
    {
      label: "AP",
      title: "US Treasury blocks certain journalists from G20 meeting in North Carolina",
      url: "https://apnews.com/article/g20-treasury-journalists-blocked-89e4fe117db8356562b811af1ada8242",
      published: "2026-08-30",
    },
  ],
  big_story: {
    category: "Diplomacy · Climate governance · Pacific",
    title_zh: "太平洋不是棋盘：小国试图把自己的议程放回中心",
    title_en: "Pacific states try to keep their own agenda at the center",
    summary:
      "太平洋岛国论坛领导人会议 8 月 31 日在帕劳开幕。美联社报道，中美、台湾以及澳大利亚和新西兰之间的影响力竞争正在挤压论坛以共识决策的空间；东道主帕劳则希望讨论气候变化、清洁水、能源与经济韧性。联合国同日把海平面上升报告放在这场会议上发布，提醒读者：岛国外交通常被写成大国关系的延伸，但当地政府面对的是更直接的生存、公共服务和规则问题。",
    minutes: 8,
    source_label: "Associated Press / United Nations",
    source_url:
      "https://apnews.com/article/pacific-islands-forum-palau-china-taiwan-5b5811d8a4f7bb18761b84255661f8db",
  },
  hot_words: [
    {
      en: "agenda-setting",
      zh: "议程设置",
      ja: "議題設定",
      ja_romaji: "gidai settei",
      ko: "의제 설정",
      ko_romaja: "uije seoljeong",
      why_today: "太平洋岛国希望由本地区决定峰会首先讨论什么。",
      example: "Small states are asserting their role in agenda-setting.",
      topic: "Diplomacy",
    },
    {
      en: "consensus",
      zh: "共识",
      ja: "合意",
      ja_romaji: "gōi",
      ko: "합의",
      ko_romaja: "habui",
      why_today: "太平洋岛国论坛依靠共识而不是多数表决作出决定。",
      example: "The forum makes decisions by consensus.",
      topic: "Governance",
    },
    {
      en: "sovereignty",
      zh: "主权",
      ja: "主権",
      ja_romaji: "shuken",
      ko: "주권",
      ko_romaja: "jugwon",
      why_today: "岛国的外交选择、海洋权益和安全安排都涉及主权。",
      example: "The debate is also about sovereignty and choice.",
      topic: "Law",
    },
    {
      en: "sea-level rise",
      zh: "海平面上升",
      ja: "海面上昇",
      ja_romaji: "kaimen jōshō",
      ko: "해수면 상승",
      ko_romaja: "haesumyeon sangseung",
      why_today: "联合国在帕劳峰会期间发布了新的海平面上升报告。",
      example: "Sea-level rise is a governance issue as well as a climate risk.",
      topic: "Climate",
    },
    {
      en: "referendum",
      zh: "全民公投",
      ja: "国民投票",
      ja_romaji: "kokumin tōhyō",
      ko: "국민투표",
      ko_romaja: "gungmin tupyo",
      why_today: "冰岛选民通过公投决定是否重启加入欧盟的谈判。",
      example: "The referendum rejected a return to accession talks.",
      topic: "Elections",
    },
    {
      en: "accession talks",
      zh: "加入谈判",
      ja: "加盟交渉",
      ja_romaji: "kamei kōshō",
      ko: "가입 협상",
      ko_romaja: "gaip hyeopsang",
      why_today: "冰岛公投否决的是重启谈判，并非一次直接的入盟表决。",
      example: "Voters rejected restarting accession talks.",
      topic: "Europe",
    },
    {
      en: "interception",
      zh: "拦截",
      ja: "迎撃",
      ja_romaji: "geigeki",
      ko: "요격",
      ko_romaja: "yogyeok",
      why_today: "阿联酋称其空军拦截了一架来自伊朗方向的无人机。",
      example: "Officials reported the interception of a drone.",
      topic: "Security",
    },
    {
      en: "media access",
      zh: "媒体准入",
      ja: "報道機関の取材アクセス",
      ja_romaji: "hōdō kikan no shuzai akusesu",
      ko: "언론 접근권",
      ko_romaja: "eollon jeopgeungwon",
      why_today: "美国财政部拒绝部分记者进入 G20 财长会议，引发监督争议。",
      example: "Media access is part of public accountability.",
      topic: "Press freedom",
    },
  ],
  expressions: [
    {
      language: "English",
      flag: "EN",
      phrase: "The region is speaking for itself.",
      romanization: "",
      meaning: "这个地区正在为自己发声。",
      nuance: "强调当地行为方有自己的目标和判断，不应只被当作大国竞争的背景。",
      scene: "外交报道、区域事务评论",
      dialogue:
        "A: Is the summit only about major-power rivalry?\nB: No. The region is speaking for itself.",
      register: "中性 · 半正式",
      frequency: "常用",
      note: "speak for oneself 表示自主表达立场，而非由他人代言。",
    },
    {
      language: "日本語",
      flag: "JP",
      phrase: "当事国の声を中心に据えるべきです。",
      romanization: "tōjigoku no koe o chūshin ni sueru beki desu",
      meaning: "应当把当事国的声音放在中心。",
      nuance: "适合提醒讨论者关注直接受影响国家的立场，语气正式而明确。",
      scene: "国际会议、政策评论",
      dialogue: "この問題では、当事国の声を中心に据えるべきです。",
      register: "正式",
      frequency: "常用",
      note: "中心に据える 表示置于讨论或政策的核心。",
    },
    {
      language: "한국어",
      flag: "KR",
      phrase: "당사국의 우선순위를 먼저 봐야 합니다.",
      romanization: "dangsagugui useonsunwireul meonjeo bwaya hamnida",
      meaning: "应当先看当事国的优先事项。",
      nuance: "用于把注意力从外部竞争转回当地需求，适合正式讨论。",
      scene: "外交新闻、会议讨论",
      dialogue: "강대국 경쟁보다 당사국의 우선순위를 먼저 봐야 합니다.",
      register: "礼貌 · 正式",
      frequency: "常用",
      note: "우선순위 表示优先事项或优先顺序。",
    },
  ],
  briefings: [
    {
      id: 1,
      category: "Diplomacy / Pacific",
      title_zh: "太平洋岛国论坛在帕劳开幕，大国竞争挤压本地区议程",
      title_en: "Pacific Islands Forum opens in Palau under geopolitical pressure",
      source: "Associated Press",
      source_url:
        "https://apnews.com/article/pacific-islands-forum-palau-china-taiwan-5b5811d8a4f7bb18761b84255661f8db",
      minutes: 3,
      zh:
        "由 18 个成员国家和地区组成的太平洋岛国论坛领导人会议 8 月 31 日在帕劳开幕。东道主总统萨兰格尔·惠普斯敦促外部大国不要干扰会议，希望把气候变化、清洁水和能源韧性放在中心；论坛能否在成员外交立场分歧下形成可执行的共识，是本周的观察重点。",
      en:
        "Leaders of the 18-member Pacific Islands Forum opened their meeting in Palau on Aug. 31. Host President Surangel Whipps Jr. urged outside powers not to interfere and sought to focus talks on climate change, clean water and energy resilience. The next test is whether members can turn consensus into action despite diplomatic divisions.",
      ja:
        "太平洋諸島フォーラムの首脳会議がパラオで開幕し、域内課題を優先できるかが焦点です。",
      ko:
        "태평양도서국포럼 정상회의가 팔라우에서 개막했으며 역내 의제를 우선할 수 있을지가 핵심입니다.",
      ja_segments: [
        ...ja(
          "域内課題を優先できるかが焦点です。",
          "ikinai kadai o yūsen dekiru ka ga shōten desu",
          "能否优先地区内部议题成为焦点。",
        ),
      ],
      ko_segments: [
        ...ko(
          "역내 의제를 우선할 수 있을지가 핵심입니다.",
          "yeongnae uijereul useonhal su isseuljiga haeksimimnida",
          "能否优先地区议程是关键。",
        ),
      ],
    },
    {
      id: 2,
      category: "Democracy / Iceland",
      title_zh: "冰岛公投否决重启加入欧盟谈判",
      title_en: "Iceland rejects restarting EU accession talks",
      source: "Associated Press",
      source_url:
        "https://apnews.com/article/iceland-european-union-election-referendum-accession-fish-d29f8d4e140894fe22db17005e9c2a2e",
      minutes: 3,
      zh:
        "冰岛国家选举委员会公布，反对重启欧盟加入谈判的一方以 52.8% 对 47.2% 获胜。公投回答的是是否恢复谈判，而不是直接决定入盟；渔业控制、欧洲安全感与国家自主性构成了投票中的主要拉扯。",
      en:
        "Icelandic voters rejected restarting European Union accession talks by 52.8% to 47.2%, according to the National Electoral Commission. The referendum concerned whether to resume negotiations, not immediate membership. Control of fisheries, geopolitical security and national autonomy shaped the debate.",
      ja: "アイスランドの国民投票で、EU加盟交渉の再開が否決されました。",
      ko: "아이슬란드 국민투표에서 유럽연합 가입 협상 재개안이 부결됐습니다.",
      ja_segments: [
        ...ja(
          "加盟交渉の再開が否決されました。",
          "kamei kōshō no saikai ga hiketsu saremashita",
          "重启加入谈判被否决。",
        ),
      ],
      ko_segments: [
        ...ko(
          "가입 협상 재개안이 부결됐습니다.",
          "gaip hyeopsang jaegaeani bugyeoldoeeotseumnida",
          "重启加入谈判的提案被否决。",
        ),
      ],
    },
    {
      id: 3,
      category: "Security / Gulf",
      title_zh: "阿联酋称拦截伊朗无人机，美伊交火后地区风险再升",
      title_en: "UAE reports intercepting an Iranian drone after renewed US-Iran fighting",
      source: "Associated Press",
      source_url:
        "https://apnews.com/article/iran-us-war-uea-august-31-2026-9f34873bad9a928574c36ee984c3f96b",
      minutes: 3,
      zh:
        "阿联酋国防部 8 月 31 日称，其空军在领海上空拦截了一架从伊朗方向飞来的无人机，未报告损失。事件发生在美国周日打击伊朗火箭发射装置、伊朗随后向约旦境内美军地点发射导弹之后；各方说法仍需分别核实，下一步要看交火是否继续扩大。",
      en:
        "The UAE Defense Ministry said its air force intercepted a drone approaching from Iran over Emirati waters on Aug. 31, with no damage reported. The incident followed U.S. strikes on Iranian rocket launchers and Iranian missile launches toward U.S. sites in Jordan. Claims by each side require separate attribution and verification.",
      ja: "アラブ首長国連邦は、イラン方面から飛来した無人機を迎撃したと発表しました。",
      ko: "아랍에미리트는 이란 방향에서 날아온 무인기를 요격했다고 밝혔습니다.",
      ja_segments: [
        ...ja(
          "無人機を迎撃したと発表しました。",
          "mujinki o geigeki shita to happyō shimashita",
          "宣布拦截了无人机。",
        ),
      ],
      ko_segments: [
        ...ko(
          "무인기를 요격했다고 밝혔습니다.",
          "muingireul yogyeokhaetdago balkyeotseumnida",
          "表示拦截了无人机。",
        ),
      ],
    },
    {
      id: 4,
      category: "Governance / Press freedom",
      title_zh: "美国财政部拒绝部分记者进入 G20 财长会议",
      title_en: "US Treasury denies some journalists access to a G20 meeting",
      source: "Associated Press",
      source_url:
        "https://apnews.com/article/g20-treasury-journalists-blocked-89e4fe117db8356562b811af1ada8242",
      minutes: 3,
      zh:
        "美联社报道，美国财政部没有向《纽约时报》《华尔街日报》和彭博社的部分记者发放北卡罗来纳州 G20 财长会议证件。财政部尚未公开解释具体标准；争议的公共意义不在会议讨论哪项金融政策，而在政府如何公平、透明地决定谁能现场监督公共事务。",
      en:
        "The U.S. Treasury denied credentials to some reporters from The New York Times, The Wall Street Journal and Bloomberg News for a G20 finance ministers' meeting in North Carolina. The department had not publicly explained its criteria. The governance issue is whether access to public officials is allocated fairly and transparently.",
      ja: "米財務省は、G20会合への一部記者の取材を認めませんでした。",
      ko: "미 재무부는 일부 기자들의 G20 회의 취재를 허용하지 않았습니다.",
      ja_segments: [
        ...ja(
          "一部記者の取材を認めませんでした。",
          "ichibu kisha no shuzai o mitomemasen deshita",
          "未允许部分记者采访。",
        ),
      ],
      ko_segments: [
        ...ko(
          "일부 기자들의 취재를 허용하지 않았습니다.",
          "ilbu gijadeurui chwijaereul heoyonghaji anatseumnida",
          "未允许部分记者采访。",
        ),
      ],
    },
  ],
  deep_read: {
    category: "Global affairs · Reading power",
    title_en: "Who gets to define what the story is about?",
    title_zh: "谁有权决定一则新闻究竟在讲什么？",
    minutes: 10,
    standfirst:
      "国际新闻经常由最强势的国家、最响亮的冲突或最熟悉的标签开场。谨慎阅读还要追问：直接受影响者把什么列为优先事项，制度允许谁发言，又有哪些决定已经真正发生。",
    paragraphs: [
      {
        en:
          "A Pacific summit can be described as a contest among China, the United States and their partners. That contest is real, but it is not the whole agenda. Island governments are also discussing climate risk, water, energy and the rules for outside participation. Treating them only as pieces on a strategic map removes the decisions they are trying to make for themselves.",
        zh:
          "太平洋峰会当然可以被描述为中国、美国及其伙伴之间的竞争，这种竞争确实存在，却不是全部议程。岛国政府还在讨论气候风险、清洁水、能源，以及外部伙伴参与会议的规则。如果只把它们写成战略地图上的棋子，就会抹掉这些国家正在为自己作出的决定。",
      },
      {
        en:
          "The same discipline helps with election news. Iceland did not vote directly to join or reject the European Union; voters decided whether accession negotiations should restart. A precise verb preserves the real scope of the decision and prevents a procedural step from being inflated into a final national choice.",
        zh:
          "同样的阅读纪律也适用于选举新闻。冰岛并不是直接表决加入或拒绝欧盟，选民决定的是是否重启加入谈判。准确使用动词，才能保留决定的真实范围，避免把一个程序步骤夸大成最终国家选择。",
      },
      {
        en:
          "Access is another form of agenda power. When officials decide which journalists may enter a meeting, they also shape which questions can be asked and which observations reach the public. A careful briefing therefore identifies the decision-maker, states the published reason or notes when none has been given, and separates criticism from established fact.",
        zh:
          "准入也是一种议程权力。官员决定哪些记者可以进入会场，也会影响哪些问题能够被提出、哪些现场观察能够抵达公众。谨慎的简报因此要指出决定者是谁，写明已公布的理由，或明确说明尚无解释，并把批评意见与已经确认的事实分开。",
      },
    ],
  },
  context: [
    {
      title: "为什么不能只用“大国竞争”概括太平洋岛国论坛？",
      text:
        "大国竞争会影响成员关系和共识形成，但岛国还面对海平面上升、供水、能源依赖和灾害韧性等直接治理问题。完整报道应同时呈现外部竞争与本地区自己的优先事项。",
    },
    {
      title: "公投否决“重启谈判”等于永久拒绝加入欧盟吗？",
      text:
        "不等于。它结束了当前恢复加入谈判的提议，未来政府或选民仍可能再次提出议题。新闻标题应准确区分重启谈判、完成谈判和正式加入。",
    },
    {
      title: "如何阅读冲突双方的军事声明？",
      text:
        "先写明声明来自哪个政府或军方，再寻找损失、地点和时间的独立确认。没有独立证据时，应使用“称”“表示”或“据其声明”，不能把一方说法直接写成无条件事实。",
    },
  ],
  history_lens: null,
  challenge: [
    {
      id: 1,
      kind: "English",
      question: "What does “agenda-setting” mean in the main story?",
      options: [
        "Influencing which issues receive attention",
        "Counting referendum ballots",
        "Intercepting an aircraft",
      ],
      answer: 0,
      explanation: "Agenda-setting means shaping which subjects are treated as priorities.",
    },
    {
      id: 2,
      kind: "日本語",
      question: "「中心に据える」の意味は？",
      options: ["放在中心位置", "立刻否决", "秘密谈判"],
      answer: 0,
      explanation: "中心に据える means to place something at the center of attention or policy.",
    },
    {
      id: 3,
      kind: "한국어",
      question: "“우선순위”는 무엇입니까?",
      options: ["优先事项", "无人机", "投票率"],
      answer: 0,
      explanation: "우선순위 means a priority or order of priorities.",
    },
    {
      id: 4,
      kind: "Knowledge",
      question: "冰岛这次公投直接决定了什么？",
      options: ["是否重启加入欧盟谈判", "是否立即加入欧盟", "是否退出北约"],
      answer: 0,
      explanation: "The ballot concerned restarting accession talks, not immediate EU membership.",
    },
    {
      id: 5,
      kind: "Translation",
      question: "“该地区正在为自己发声。”最自然的英文是？",
      options: [
        "The region is speaking for itself.",
        "The region speaks by itself only.",
        "The region is talking its own.",
      ],
      answer: 0,
      explanation: "The region is speaking for itself is natural and emphasizes agency.",
    },
  ],
  completion: false,
  difficulty_feedback: null,
};
