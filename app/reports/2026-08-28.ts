import type { DailyReport } from "../report-types";

const ja = (text: string, zh: string) => [{ text, romanization: text, zh }];
const ko = (text: string, zh: string) => [{ text, romanization: text, zh }];

export const realReport20260828: DailyReport = {
  id: "2026-08-28",
  date: "2026-08-28",
  published_at: "2026-08-28T20:00:00+08:00",
  updated_at: "2026-08-28T20:00:00+08:00",
  edition_number: 8,
  draft: false,
  estimated_minutes: 35,
  ai_credit: { provider: "OpenAI", model: "GPT5.6Terra", role: "资料研究、事实核查与编辑协作" },
  sources: [
    { label: "AP", title: "Chinese foreign minister calls for US and China to overcome obstacles", url: "https://apnews.com/article/735838b80c7d4169936f1ba47f889546", published: "2026-08-27" },
    { label: "Reuters", title: "Number missing in Tibet after Nepal mudslide tops 550", url: "https://www.internazionale.it/ultime-notizie-reuters/2026/08/27/number-missing-in-tibet-after-nepal-mudslide-tops-550-china-flags-upstream-risk", published: "2026-08-27" },
    { label: "Reuters", title: "World news summary", url: "https://www.devdiscourse.com/article/international/3968703-reuters-world-news-summary", published: "2026-08-27" },
    { label: "AP", title: "Regional powers seek off-ramp from Iran war", url: "https://apnews.com/article/c457cd178b05f6c39c8c2e33f0a565ba", published: "2026-08-27" },
  ],
  big_story: {
    category: "Diplomacy · Disaster response · Security",
    title_zh: "当外交仍在谈判，灾害与安全问题已经要求即时协作",
    title_en: "Diplomacy remains in motion while disasters demand immediate cooperation",
    summary: "8 月 27 日的国际新闻呈现两条不同的时间线：中美为预期中的领导人会晤释放“克服障碍”的外交信号；尼泊尔—中国边境洪灾搜救继续，西藏一侧失联人数上升。与此同时，中东各方寻求为伊朗战争降温。谈判、救援和安全安排的节奏不同，但都依赖可核实的信息和持续协调。",
    minutes: 8,
    source_label: "AP / Reuters",
    source_url: "https://apnews.com/article/735838b80c7d4169936f1ba47f889546",
  },
  hot_words: [
    { en: "summit", zh: "峰会", ja: "首脳会議", ja_romaji: "shunō kaigi", ko: "정상회의", ko_romaja: "jeongsanghoeui", why_today: "上海合作组织峰会将成为近期外交议程。", example: "The summit will focus on regional cooperation.", topic: "Diplomacy" },
    { en: "legislation", zh: "立法；法律草案", ja: "法案", ja_romaji: "hōan", ko: "법안", ko_romaja: "beoban", why_today: "跨境反腐法律草案进入审议，仍未成为正式法律。", example: "The draft legislation faces several readings.", topic: "Law" },
    { en: "accountability", zh: "问责", ja: "説明責任", ja_romaji: "setsumei sekinin", ko: "책임 규명", ko_romaja: "chaegim gyumyeong", why_today: "国际组织对自主武器风险的呼吁指向问责机制。", example: "Accountability matters when rules are unclear.", topic: "Security" },
    { en: "ceasefire", zh: "停火", ja: "停戦", ja_romaji: "teisen", ko: "휴전", ko_romaja: "hyujeon", why_today: "冲突报道中，停火安排与执行细节必须分开核实。", example: "The ceasefire requires independent monitoring.", topic: "Conflict" },
    { en: "sovereignty", zh: "主权", ja: "主権", ja_romaji: "shuken", ko: "주권", ko_romaja: "jugwon", why_today: "跨境执法议题常涉及主权与司法协作边界。", example: "The dispute touches on national sovereignty.", topic: "Law" },
    { en: "deterrence", zh: "威慑", ja: "抑止", ja_romaji: "yokushi", ko: "억지", ko_romaja: "eokji", why_today: "自主武器讨论涉及威慑效果与失控风险。", example: "Deterrence can fail without clear limits.", topic: "Security" },
    { en: "corruption", zh: "腐败", ja: "汚職", ja_romaji: "oshoku", ko: "부패", ko_romaja: "bupae", why_today: "跨境反腐草案试图追缴境外资产并加强合作。", example: "The law targets cross-border corruption.", topic: "Governance" },
    { en: "uncertainty", zh: "不确定性", ja: "不確実性", ja_romaji: "fukakujitsusei", ko: "불확실성", ko_romaja: "bulhwaksilseong", why_today: "外交声明与正式决定之间仍可能存在时间差。", example: "Uncertainty remains over the next step.", topic: "Knowledge" },
  ],
  expressions: [
    { language: "English", flag: "EN", phrase: "The real test is still ahead.", romanization: "", meaning: "真正的考验还在前面。", nuance: "用来提醒读者不要把短期改善当成趋势已经确定。", scene: "市场评论、工作汇报", dialogue: "A: Stocks bounced today.\nB: The real test is still ahead.", register: "中性 · 半正式", frequency: "常用", note: "也可以说 The harder part is yet to come。" },
    { language: "日本語", flag: "JP", phrase: "まだ予断を許しません。", romanization: "mada yodan o yurushimasen", meaning: "仍然不能妄下结论。", nuance: "新闻和正式评论中常用，语气克制。", scene: "新闻报道、经济评论", dialogue: "市場は戻りましたが、まだ予断を許しません。", register: "正式", frequency: "常用", note: "予断を許さない 表示局势仍可能变化。" },
    { language: "한국어", flag: "KR", phrase: "아직 지켜봐야 합니다.", romanization: "ajik jikyeobwaya hamnida", meaning: "还需要继续观察。", nuance: "适合在证据不足时避免过度判断。", scene: "新闻、会议、市场讨论", dialogue: "오늘 반등했지만 아직 지켜봐야 합니다.", register: "礼貌 · 正式", frequency: "很常用", note: "比 단정할 수 없습니다 更自然、缓和。" },
  ],
  briefings: [
    { id: 1, category: "Diplomacy / China-US", title_zh: "中方呼吁中美为领导人会晤克服障碍", title_en: "China calls for overcoming obstacles before a US summit", source: "Associated Press", source_url: "https://apnews.com/article/735838b80c7d4169936f1ba47f889546", minutes: 3, zh: "中国外交部长 8 月 27 日表示，中美应在预期中的领导人会晤前克服两国关系中的障碍。这是外交立场表述；会晤的具体安排与成果仍有待官方确认。", en: "China's foreign minister said the United States and China should overcome obstacles ahead of an expected leaders' summit. Details of any meeting remain subject to official confirmation.", ja: "中国外相は、首脳会談に向けて障害を乗り越えるべきだと述べました。", ko: "중국 외교장관은 정상회담을 앞두고 장애물을 극복해야 한다고 말했습니다.", ja_segments: [...ja("障害を乗り越えるべきです。", "应当克服障碍。")], ko_segments: [...ko("장애물을 극복해야 합니다.", "应当克服障碍。")] },
    { id: 2, category: "Disaster response / Himalayas", title_zh: "中尼边境洪灾搜救持续，西藏失联人数增加", title_en: "Searches continue after Himalayan floods near the Nepal-China border", source: "Reuters", source_url: "https://www.internazionale.it/ultime-notizie-reuters/2026/08/27/number-missing-in-tibet-after-nepal-mudslide-tops-550-china-flags-upstream-risk", minutes: 3, zh: "路透社报道，尼泊尔泥石流后西藏一侧失联人数超过 550，中国方面提示上游风险；灾情数字会随搜救与核实更新。", en: "Reuters reported that the number missing in Tibet after the Nepal mudslide topped 550, while authorities warned of upstream risks. Disaster figures can change as searches continue.", ja: "ネパール・中国国境付近で、洪水後の捜索が続いています。", ko: "네팔-중국 국경 인근에서 홍수 이후 수색이 계속되고 있습니다.", ja_segments: [...ja("捜索が続いています。", "搜救仍在继续。")], ko_segments: [...ko("수색이 계속되고 있습니다.", "搜救仍在继续。")] },
    { id: 3, category: "Security / Middle East", title_zh: "地区国家继续寻求伊朗战争的降温路径", title_en: "Regional powers seek an off-ramp from the Iran war", source: "Associated Press", source_url: "https://apnews.com/article/c457cd178b05f6c39c8c2e33f0a565ba", minutes: 3, zh: "美联社报道，地区国家正寻求为伊朗战争降温，霍尔木兹海峡附近仍有新的油轮遇袭报告。外交接触不代表冲突已结束，航行安全与谈判进展应分别追踪。", en: "AP reported that regional powers were seeking an off-ramp from the Iran war amid another reported tanker attack near the Strait of Hormuz. Diplomacy does not itself mean the conflict has ended.", ja: "地域の国々は、イラン戦争の緊張緩和を探っています。", ko: "지역 국가들은 이란 전쟁의 긴장 완화 방안을 찾고 있습니다.", ja_segments: [...ja("緊張緩和を探っています。", "正在寻求降温。")], ko_segments: [...ko("긴장 완화 방안을 찾고 있습니다.", "正在寻求降温。")] },
    { id: 4, category: "Security / Europe", title_zh: "斯洛伐克检方称无人机制造商曾成纵火图谋目标", title_en: "Slovak prosecutors say a drone maker was targeted in an arson plot", source: "Reuters", source_url: "https://www.devdiscourse.com/article/international/3968703-reuters-world-news-summary", minutes: 3, zh: "路透社世界新闻摘要称，斯洛伐克检方表示，三名嫌疑人在东部策划的纵火袭击以无人机制造商 Skyeton 为目标。案件仍处于司法程序，指控需要由法院审理。", en: "Reuters reported that Slovak prosecutors said an alleged arson plot targeted drone maker Skyeton. The case remains within judicial proceedings and allegations must be tested in court.", ja: "検察は、無人機メーカーを狙った放火計画を発表しました。", ko: "검찰은 드론 제조업체를 겨냥한 방화 계획을 발표했습니다.", ja_segments: [...ja("放火計画を発表しました。", "公布纵火图谋。")], ko_segments: [...ko("방화 계획을 발표했습니다.", "公布纵火图谋。")] },
  ],
  deep_read: { category: "Global affairs · Reading headlines", title_en: "A diplomatic signal is not an agreement", title_zh: "外交信号不是协议本身", minutes: 10, standfirst: "国际新闻常在同一标题中混合表态、谈判、救援数字和安全事件。读者需要把已确认事实、各方说法与尚待验证的后续分开。", paragraphs: [
    { en: "The first layer is the confirmed event: a minister made a statement, rescuers reported an updated number, or an agency opened an investigation. The second layer is the position behind it: a government may call for dialogue, deterrence or cooperation. The third layer is implementation, which requires dates, rules, resources and agreement from other actors.", zh: "第一层是已确认事件：部长发表了声明、救援人员更新了数字，或机构启动了调查。第二层是声明背后的立场：政府可能呼吁对话、威慑或合作。第三层才是执行，它需要日期、规则、资源与其他行为方的同意。" },
    { en: "This distinction matters in both diplomacy and disaster response. A call to overcome obstacles does not confirm a summit outcome. A report of missing people is a moving estimate, not a final tally. A claimed security threat may be important, but allegations still need an appropriate legal or independent process.", zh: "这一区分对外交与灾害救援同样重要。呼吁克服障碍不等于确认峰会成果；失联人数是会变化的估计，并非最终统计；安全威胁的指控也许重要，但仍需适当的司法或独立程序。" },
    { en: "A careful briefing therefore states who said what, what has been independently established, and what readers should watch next. That habit reduces both false certainty and the temptation to turn one development into a complete story.", zh: "谨慎的简报应说明谁说了什么、哪些事实已得到独立确认，以及读者接下来应关注什么。这个习惯既能减少虚假的确定性，也能避免把单一进展写成完整结论。" },
  ] },
  context: [
    { title: "外交表态与协议有什么区别？", text: "表态说明立场和意愿；协议需要明确参与方、文本、时间表与执行机制。两者之间往往还隔着谈判与国内程序。" },
    { title: "为什么灾情数字会不断变化？", text: "搜救早期存在通信中断、重复报告与身份核实等问题。可靠的报道应给出发布机构与时间，不把初步数字当作最终结论。" },
    { title: "安全指控应如何阅读？", text: "先确认指控来自谁、是否有独立证据、案件处于调查还是审判阶段。避免把一方叙述直接写成已经裁定的事实。" },
  ],
  history_lens: null,
  challenge: [
    { id: 1, kind: "English", question: "What does “off-ramp” mean in diplomacy?", options: ["A way to de-escalate or exit a conflict", "A stock-market rally", "A final treaty"], answer: 0, explanation: "An off-ramp is a possible path away from escalation; it is not itself a settled agreement." },
    { id: 2, kind: "日本語", question: "「首脳会談」の意味は？", options: ["领导人会晤", "灾害救援", "法院审判"], answer: 0, explanation: "首脳会談 means a summit meeting between leaders." },
    { id: 3, kind: "한국어", question: "“수색”은 무엇입니까?", options: ["搜救／搜索", "制裁", "主权"], answer: 0, explanation: "수색 means a search, including rescue searches." },
    { id: 4, kind: "Knowledge", question: "为什么不能把外交表态当作协议？", options: ["协议还需要具体条款与执行安排", "因为外交没有事实", "因为所有会晤都会取消"], answer: 0, explanation: "Statements signal positions, while agreements require terms, participants and implementation." },
    { id: 5, kind: "Translation", question: "“仍需独立核实。”最自然的英文是？", options: ["It still requires independent verification.", "It verifies independently still.", "Independent is still required verify."], answer: 0, explanation: "It still requires independent verification is the natural expression." },
  ],
  completion: false,
  difficulty_feedback: null,
};

