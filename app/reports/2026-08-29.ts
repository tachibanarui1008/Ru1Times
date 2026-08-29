import type { DailyReport } from "../report-types";

const ja = (text: string, zh: string) => [{ text, romanization: text, zh }];
const ko = (text: string, zh: string) => [{ text, romanization: text, zh }];

export const realReport20260829: DailyReport = {
  id: "2026-08-29",
  date: "2026-08-29",
  published_at: "2026-08-29T11:15:00+08:00",
  updated_at: "2026-08-29T11:15:00+08:00",
  edition_number: 9,
  draft: false,
  estimated_minutes: 35,
  ai_credit: { provider: "OpenAI", model: "GPT-5.6 Luna", role: "资料研究、事实核查与编辑协作" },
  sources: [
    { label: "Reuters", title: "US judge questions but won’t yet block Trump’s new birthright citizenship order", url: "https://www.investing.com/news/politics-news/us-judge-wont-immediately-block-trumps-newest-order-limiting-birthright-citizenship-4881626", published: "2026-08-28" },
    { label: "AP", title: "The Latest: Trump says US will take control of 65 billion barrels of Venezuela’s oil reserves", url: "https://apnews.com/article/fa718f6f57b0be019a27c88b01df526d", published: "2026-08-28" },
    { label: "AP", title: "US, South Korea and Japan to hold trilateral drill as North Korea ramps up pressure on US", url: "https://apnews.com/article/north-korea-us-south-drill-japan-trump-kim-a953d60690bf861f134e36a021bdbd70", published: "2026-08-28" },
    { label: "AP", title: "Hong Kong court considers sentencing for former Tiananmen vigil organizers", url: "https://apnews.com/article/hong-kong-tiananmen-trial-vigil-organizers-sentences-32d74b818636d80414b7d30793d59d9e", published: "2026-08-28" },
  ],
  big_story: {
    category: "Governance · Courts · Civil rights",
    title_zh: "行政命令的边界：出生公民权争议再次回到法院",
    title_en: "The limits of executive orders return to court in a citizenship dispute",
    summary: "美国马里兰州一名联邦法官 8 月 28 日没有立即叫停特朗普政府最新的出生公民权行政令，但质疑其法律可行性，并允许原告补充诉状、快速推进下一轮挑战。案件显示，行政命令可以迅速改变政策方向，却仍要面对宪法文本、既有判决和司法程序的多重约束。下一步关键在于政府执行指引，以及法院是否会在新诉讼中作出临时救济。",
    minutes: 8,
    source_label: "Reuters",
    source_url: "https://www.investing.com/news/politics-news/us-judge-wont-immediately-block-trumps-newest-order-limiting-birthright-citizenship-4881626",
  },
  hot_words: [
    { en: "executive order", zh: "行政命令", ja: "大統領令", ja_romaji: "daitōryōrei", ko: "행정명령", ko_romaja: "haengjeongmyeongnyeong", why_today: "出生公民权争议围绕一项新的行政命令展开。", example: "The executive order faces an immediate legal challenge.", topic: "Governance" },
    { en: "birthright citizenship", zh: "出生公民权", ja: "出生地主義の市民権", ja_romaji: "shusshōchi shugi no shimin-ken", ko: "출생 시민권", ko_romaja: "chulsaeng simingwon", why_today: "联邦法院正在审视限制出生公民权的新政策。", example: "The case concerns birthright citizenship.", topic: "Law" },
    { en: "injunction", zh: "禁制令；临时禁令", ja: "差し止め命令", ja_romaji: "sashitome meirei", ko: "금지 명령", ko_romaja: "geumji myeongnyeong", why_today: "原告希望法院阻止行政令执行，相关程序仍在推进。", example: "The plaintiffs are seeking an injunction.", topic: "Courts" },
    { en: "viability", zh: "可行性；合法存续可能性", ja: "妥当性", ja_romaji: "datōsei", ko: "타당성", ko_romaja: "tadangseong", why_today: "法官质疑行政令在宪法框架下的可行性。", example: "The judge questioned the order's legal viability.", topic: "Law" },
    { en: "sovereignty", zh: "主权", ja: "主権", ja_romaji: "shuken", ko: "주권", ko_romaja: "jugwon", why_today: "委内瑞拉石油安排涉及国家资源控制与主权争议。", example: "The proposal raises questions about sovereignty.", topic: "Diplomacy" },
    { en: "deterrence", zh: "威慑", ja: "抑止", ja_romaji: "yokushi", ko: "억지", ko_romaja: "eokji", why_today: "三国军演的官方理由是应对朝鲜核与导弹威胁。", example: "The exercise is intended to strengthen deterrence.", topic: "Security" },
    { en: "sentencing", zh: "量刑；判刑", ja: "量刑", ja_romaji: "ryōkei", ko: "형량 선고", ko_romaja: "hyeongnyang seongo", why_today: "香港法院听取了支联会前组织者的量刑陈述。", example: "The court heard arguments before sentencing.", topic: "Courts" },
    { en: "implementation", zh: "执行；实施", ja: "実施", ja_romaji: "jisshi", ko: "시행", ko_romaja: "sihaeng", why_today: "政策文本、执行指引和实际效果之间仍有时间差。", example: "Implementation may face further legal challenges.", topic: "Governance" },
  ],
  expressions: [
    { language: "English", flag: "EN", phrase: "The order is not the final word.", romanization: "", meaning: "这项命令并不是最终结论。", nuance: "用来强调行政决定仍可能受到法院、立法机关或后续程序影响。", scene: "政策报道、法律评论", dialogue: "A: The policy was signed yesterday.\nB: The order is not the final word.", register: "中性 · 半正式", frequency: "常用", note: "final word 表示最终决定或定论。" },
    { language: "日本語", flag: "JP", phrase: "司法の判断が焦点になります。", romanization: "shihō no handan ga shōten ni narimasu", meaning: "司法判断将成为焦点。", nuance: "新闻报道中用于指出后续审理的重要性，语气正式克制。", scene: "法律新闻、政治报道", dialogue: "行政命令をめぐり、司法の判断が焦点になります。", register: "正式", frequency: "常用", note: "焦点になる表示成为关注重点。" },
    { language: "한국어", flag: "KR", phrase: "법원의 판단을 지켜봐야 합니다.", romanization: "beobwonui pandaneul jikyeobwaya hamnida", meaning: "还需要观察法院的判断。", nuance: "适合在诉讼尚未结束、不能提前下结论时使用。", scene: "新闻、政策讨论", dialogue: "정책의 시행 여부는 법원의 판단을 지켜봐야 합니다.", register: "礼貌 · 正式", frequency: "很常用", note: "지켜보다 表示持续关注事态发展。" },
  ],
  briefings: [
    { id: 1, category: "Governance / United States", title_zh: "法官质疑新出生公民权行政令，但暂未立即叫停", title_en: "Judge questions Trump's new birthright citizenship order", source: "Reuters", source_url: "https://www.investing.com/news/politics-news/us-judge-wont-immediately-block-trumps-newest-order-limiting-birthright-citizenship-4881626", minutes: 3, zh: "马里兰州联邦法官 8 月 28 日拒绝立即发布临时禁令，但允许原告补充诉状并快速推进诉讼。美国司法部预计在 9 月 5 日前发布执行所需的公共指引。", en: "A Maryland federal judge declined to immediately block Trump's newest order limiting birthright citizenship, but allowed plaintiffs to supplement their complaint and move quickly. The Justice Department is expected to issue implementation guidance by Sept. 5.", ja: "連邦裁判官は、出生地主義の市民権を制限する大統領令を直ちには差し止めませんでした。", ko: "연방 판사는 출생 시민권을 제한하는 행정명령을 즉시 중단시키지는 않았습니다.", ja_segments: [...ja("直ちには差し止めませんでした。", "没有立即叫停。")], ko_segments: [...ko("즉시 중단시키지는 않았습니다.", "没有立即中止。")] },
    { id: 2, category: "Diplomacy / Venezuela", title_zh: "特朗普称美国将控制委内瑞拉 650 亿桶石油储量", title_en: "Trump says the US will take control of Venezuelan oil reserves", source: "Associated Press", source_url: "https://apnews.com/article/fa718f6f57b0be019a27c88b01df526d", minutes: 3, zh: "特朗普 8 月 28 日称，美国与委内瑞拉达成协议，将控制该国 650 亿桶石油储量，并称协议由美委官员谈判完成。报道目前主要依据总统社交媒体声明，协议细节与执行安排仍需进一步确认。", en: "Trump said on Aug. 28 that the United States had reached an agreement with Venezuela to control 65 billion barrels of its oil reserves. The report is based mainly on his social media statement; the deal's details and implementation remain to be confirmed.", ja: "トランプ氏は、米国がベネズエラの石油埋蔵量を管理する合意に達したと述べました。", ko: "트럼프 대통령은 미국이 베네수엘라의 석유 매장량을 관리하는 합의에 도달했다고 말했습니다.", ja_segments: [...ja("合意に達したと述べました。", "称已达成协议。")], ko_segments: [...ko("합의에 도달했다고 말했습니다.", "称已达成协议。")] },
    { id: 3, category: "Security / Korean Peninsula", title_zh: "美日韩将于 9 月举行三边军演，朝鲜称将回应", title_en: "US, South Korea and Japan plan a trilateral drill", source: "Associated Press", source_url: "https://apnews.com/article/north-korea-us-south-drill-japan-trump-kim-a953d60690bf861f134e36a021bdbd70", minutes: 3, zh: "韩国方面表示，Freedom Edge 演习将于 9 月 7 日在济州岛附近海域举行，为期五天，重点包括弹道导弹防御与反潜作战。朝鲜此前称将对美国的敌对行动作出回应，早期对话前景因此更趋复杂。", en: "South Korea said the five-day Freedom Edge exercise will begin on Sept. 7 near Jeju Island, focusing on capabilities including ballistic-missile defense and anti-submarine warfare. North Korea has threatened a response, making an early return to diplomacy more difficult.", ja: "米国、韓国、日本は、9月7日から三か国の軍事演習を行います。", ko: "미국, 한국, 일본은 9월 7일부터 3국 군사훈련을 실시합니다.", ja_segments: [...ja("三か国の軍事演習を行います。", "举行三国军演。")], ko_segments: [...ko("3국 군사훈련을 실시합니다.", "实施三国军演。")] },
    { id: 4, category: "Courts / Hong Kong", title_zh: "香港法院听取支联会前组织者量刑陈述", title_en: "Hong Kong court hears sentencing arguments for former vigil organizers", source: "Associated Press", source_url: "https://apnews.com/article/hong-kong-tiananmen-trial-vigil-organizers-sentences-32d74b818636d80414b7d30793d59d9e", minutes: 3, zh: "三名香港支联会前组织者 8 月 28 日返回法院，就煽动颠覆国家政权罪的量刑提出陈述。李卓人和邹幸彤此前被判罪成，何俊仁认罪；三人最高可面临 10 年监禁，法院表示将在两周内量刑。", en: "Three former Hong Kong vigil organizers returned to court on Aug. 28 to make sentencing arguments after convictions for inciting subversion. Lee Cheuk-yan and Chow Hang-tung were convicted after pleading not guilty, while Albert Ho pleaded guilty; the court said sentencing would take place within two weeks.", ja: "香港の裁判所は、元追悼集会の主催者らについて量刑の主張を聞きました。", ko: "홍콩 법원은 전 톈안먼 추모 집회 주최자들의 형량에 관한 주장을 들었습니다.", ja_segments: [...ja("量刑の主張を聞きました。", "听取量刑陈述。")], ko_segments: [...ko("형량에 관한 주장을 들었습니다.", "听取量刑相关陈述。")] },
  ],
  deep_read: { category: "Civics · Legal reading", title_en: "A policy announcement is not the same as a settled rule", title_zh: "政策宣布不等于规则已经落地", minutes: 10, standfirst: "今天的几则政治新闻都提醒我们：领导人可以宣布方向，政府可以发布命令，但真正稳定的规则还要经过文本、程序、执行和审查。", paragraphs: [
    { en: "An executive order can change administrative priorities quickly, but its legal effect depends on the authority granted by existing law and the Constitution. Courts may review whether the order exceeds that authority, and agencies may still need to issue guidance before officials can apply it consistently.", zh: "行政命令可以迅速改变行政部门的优先事项，但其法律效力取决于现行法律和宪法授予的权限。法院可能审查命令是否超越权限，政府机构也可能需要先发布指引，官员才能一致执行。" },
    { en: "The same distinction applies to diplomacy and security. A president's announcement of an agreement does not tell us all the terms, and a military exercise is not itself an attack. Readers should separate what an actor declared, what an institution has formally decided, and what has actually been implemented.", zh: "同样的区分也适用于外交与安全。一位总统宣布达成协议，并不能说明全部条款；一次军演本身也不等于发动攻击。阅读时应把行为方的声明、机构正式决定和已经执行的措施分开。" },
    { en: "The next signal is therefore procedural: a court order, an implementation guideline, a signed text, or a scheduled exercise. These signals are less dramatic than a headline, but they show whether a political announcement is becoming an enforceable reality.", zh: "因此，下一步值得关注的是程序性信号：法院裁定、执行指引、签署文本或已公布的演习安排。这些信号不如标题戏剧化，却能显示政治宣布是否正在变成可以执行的现实。" },
  ] },
  context: [
    { title: "为什么法官没有立即叫停，仍然可能是重大进展？", text: "法院是否发布临时禁令，取决于诉状范围、程序条件与紧迫性。暂不叫停不等于认可政策；如果原告补充诉状，法院仍可能在后续审理中采取救济措施。" },
    { title: "行政命令与法律有什么区别？", text: "行政命令通常指导行政部门如何执行政策，不能自动取代宪法、国会制定的法律或法院裁判。它的持续性取决于法律依据、司法审查和后续政府执行。" },
    { title: "如何读军演新闻？", text: "先看参与方、地点、时间和官方任务，再区分演习本身与各方政治表态。军演可能用于训练、威慑或传递信号，但不能直接推导出冲突即将发生。" },
  ],
  history_lens: null,
  challenge: [
    { id: 1, kind: "English", question: "What does “the final word” mean in the main story?", options: ["The definitive decision", "A military command", "A court building"], answer: 0, explanation: "The final word means the definitive or conclusive decision." },
    { id: 2, kind: "日本語", question: "「司法の判断」の意思は？", options: ["司法机关的判断", "行政命令", "军事演习"], answer: 0, explanation: "司法の判断 means a judicial decision or judgment." },
    { id: 3, kind: "한국어", question: "“지켜봐야 합니다”表示什么？", options: ["需要继续观察", "已经结束", "立即执行"], answer: 0, explanation: "지켜봐야 합니다 means that we need to continue watching or observing." },
    { id: 4, kind: "Knowledge", question: "为什么政策宣布不一定等于规则已经生效？", options: ["还可能需要法律审查和执行指引", "所有宣布都不可信", "法院不能审查行政行为"], answer: 0, explanation: "A policy may still require legal review, formal guidance and implementation." },
    { id: 5, kind: "Translation", question: "“法院暂未立即叫停该命令”最自然的英文是？", options: ["The court did not immediately block the order.", "The court no immediately stop order.", "The order blocked court not immediately."], answer: 0, explanation: "The court did not immediately block the order is the natural sentence." },
  ],
  completion: false,
  difficulty_feedback: null,
};
