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
    { id: 1, category: "Markets / United States", title_zh: "美股在油价与收益率回落中反弹", title_en: "US stocks rebound as oil and yields fall", source: "Associated Press", source_url: "https://apnews.com/article/69aae9f2f61737936f126e7820833bbe", minutes: 3, zh: "8 月 25 日标普 500 上涨 0.3% 至 7,677.28，道指上涨 160.24 点至 53,577.40，纳斯达克上涨 0.7% 至 26,151.30。美联社指出，油价下跌帮助缓解债券市场压力。", en: "On Tuesday, the S&P 500 rose 0.3% to 7,677.28, the Dow gained 160.24 points to 53,577.40, and the Nasdaq climbed 0.7% to 26,151.30. The AP linked the calmer bond market partly to falling oil prices.", ja: "25日、米国株は上昇しました。原油価格が下がり、債券市場の不安が少し和らぎました。", ko: "25일 미국 주식시장은 올랐습니다. 유가가 하락하면서 채권시장의 불안도 조금 완화됐습니다.", ja_segments: [...ja("25日、米国株は上昇しました。", "25日，美国股市上涨。"), ...ja("原油価格が下がりました。", "原油价格下跌。")], ko_segments: [...ko("25일 미국 주식시장은 올랐습니다.", "25日美国股市上涨。"), ...ko("유가가 하락했습니다.", "油价下跌。")] },
    { id: 2, category: "Markets / South Korea", title_zh: "KOSPI 从早盘急跌中收复失地", title_en: "KOSPI recovers from a sharp morning drop", source: "Yonhap News Agency", source_url: "https://en.yna.co.kr/view/AEN20260825007351320?section=economy-finance%2Feconomy", minutes: 3, zh: "KOSPI 早盘一度下跌，最终上涨 0.68% 至 6,742.74。韩联社报道，投资者等待 Nvidia 等大型科技公司财报；外资卖出与个人、机构买入同时存在，说明指数方向不能只看单一资金类别。", en: "The KOSPI fell sharply in early trading but finished 0.68% higher at 6,742.74. Yonhap reported that investors were waiting for earnings from major technology companies including Nvidia.", ja: "韓国のKOSPIは、朝に下がった後、0.68％上がって終わりました。投資家は半導体企業の決算を待っています。", ko: "한국의 코스피는 장 초반 하락한 뒤 0.68% 상승으로 마감했습니다. 투자자들은 반도체 기업의 실적을 기다리고 있습니다.", ja_segments: [...ja("韓国のKOSPIは上がって終わりました。", "韩国 KOSPI 上涨收盘。"), ...ja("決算を待っています。", "正在等待财报。")], ko_segments: [...ko("코스피는 상승으로 마감했습니다.", "KOSPI 上涨收盘。"), ...ko("실적을 기다리고 있습니다.", "正在等待业绩。")] },
    { id: 3, category: "Policy / Middle East", title_zh: "美国扩大对伊朗经济施压的信号继续影响能源预期", title_en: "US pressure on Iran remains part of the energy outlook", source: "Reuters", source_url: "https://www.investing.com/news/commodities-news/morning-bid-economic-salvos-4874888", minutes: 3, zh: "路透社 8 月 25 日综述提到，美国财政部长提出针对与伊朗进行交易的国家和实体的制裁警告。报道同时强调细节仍有限；因此本期把它作为政策风险信号，而不是已经完成的全面制裁结果。", en: "A Reuters market briefing said the US Treasury secretary warned of sanctions targeting countries and entities financing Iran. The details remained limited, so this is treated as a policy signal rather than a completed comprehensive sanctions package.", ja: "米国は、イランと取引する国や企業への制裁を警告しました。詳しい内容はまだ限られています。", ko: "미국은 이란과 거래하는 국가와 기업에 대한 제재를 경고했습니다. 구체적인 내용은 아직 제한적입니다.", ja_segments: [...ja("制裁を警告しました。", "警告了制裁。"), ...ja("詳しい内容は限られています。", "详细内容有限。")], ko_segments: [...ko("제재를 경고했습니다.", "警告制裁。"), ...ko("구체적인 내용은 제한적입니다.", "具体内容有限。")] },
    { id: 4, category: "Companies / Technology", title_zh: "Nvidia 财报成为本周科技估值的压力测试", title_en: "Nvidia earnings become a stress test for tech valuations", source: "Reuters", source_url: "https://sa.marketscreener.com/news/wall-street-ends-higher-as-tech-rebounds-before-nvidia-results-ce7858d8de8ff427", minutes: 3, zh: "路透社报道，投资者等待 Nvidia 财报，把它视为 AI 投资热潮能否继续获得盈利支持的重要信号。等待财报本身会放大波动，但不能提前替代财报事实。", en: "Reuters reported that investors were looking to Nvidia's results as a test of whether the AI investment boom can keep receiving earnings support. Anticipation can increase volatility, but it is not a substitute for the report itself.", ja: "投資家は、Nvidiaの決算がAI投資を支えられるかを見ています。予想だけで事実を置き換えることはできません。", ko: "투자자들은 엔비디아의 실적이 AI 투자 열기를 뒷받침할 수 있는지 지켜보고 있습니다. 예상은 사실을 대신할 수 없습니다.", ja_segments: [...ja("投資家は決算を見ています。", "投资者正在关注财报。"), ...ja("予想だけでは不十分です。", "仅靠预期并不充分。")], ko_segments: [...ko("투자자들은 실적을 지켜보고 있습니다.", "投资者正在关注业绩。"), ...ko("예상만으로는 충분하지 않습니다.", "仅靠预期并不充分。 ")] },
  ],
  deep_read: { category: "Markets · Reading headlines", title_en: "A rebound is data, not a verdict", title_zh: "反弹是一条数据，不是一份判决", minutes: 10, standfirst: "一天的市场新闻经常把价格、政策、收益率和情绪放进同一个标题。读者需要把它们拆开，先确认发生了什么，再判断哪一部分只是解释。", paragraphs: [
    { en: "The first layer is the close: an index rose or fell by a measured amount. The second layer is the market plumbing: yields, oil prices, currencies and liquidity changed the discount rate applied to future cash flows. The third layer is the story investors are waiting for, such as an earnings report or an inflation release. These layers interact, but they are not interchangeable.", zh: "第一层是收盘结果：指数按明确幅度上涨或下跌。第二层是市场管道：收益率、油价、汇率和流动性改变了未来现金流的折现率。第三层是投资者正在等待的故事，例如财报或通胀数据。三层会相互影响，但不能彼此替代。" },
    { en: "That is why a one-day rebound can coexist with serious uncertainty. Lower oil prices may ease inflation fears, while a new sanctions warning may add geopolitical risk. Technology shares may recover before an earnings report, yet the report can still disappoint. A careful reader keeps the observed number and the proposed explanation in separate sentences.", zh: "所以，单日反弹可以与严重不确定性同时存在。油价下降可能缓解通胀担忧，但新的制裁警告也会增加地缘政治风险。科技股可能在财报公布前反弹，财报本身仍可能令人失望。谨慎的读者会把已观察到的数字和提出的解释分开写。" },
    { en: "The same habit is useful for monetary aggregates. M2 growth is an observation; whether it becomes spending, investment or asset inflation is a transmission question. Markets work similarly: the index is the observation, while the causal story needs more evidence.", zh: "同样的习惯也适用于货币量。M2 增长是观察结果；它最终变成消费、投资还是资产通胀，是传导问题。市场也一样：指数是观察结果，因果故事还需要更多证据。" },
  ] },
  context: [
    { title: "为什么油价会影响股票？", text: "油价影响企业成本、通胀预期和债券收益率；但影响方向取决于能源生产者、消费者与政策环境，不能简单说油价跌股市就一定涨。" },
    { title: "财报前上涨说明什么？", text: "它说明市场在重新定价预期，不说明公司已经兑现业绩。真正的验证要等收入、利润、指引和现金流等事实。" },
    { title: "为什么同一天有急跌和反弹？", text: "价格是订单在不同时间的结果。早盘卖压被买方承接后，指数可以回到上涨，但这不等于早盘风险从未发生。" },
  ],
  history_lens: null,
  challenge: [
    { id: 1, kind: "English", question: "What does “rebound” mean?", options: ["A recovery after a fall", "A permanent rise", "A policy announcement"], answer: 0, explanation: "Rebound means a recovery after a decline; it does not guarantee a lasting trend." },
    { id: 2, kind: "日本語", question: "「決算」の意味は？", options: ["财报／结算", "制裁", "收益率"], answer: 0, explanation: "決算 means financial results or an accounting settlement." },
    { id: 3, kind: "한국어", question: "“수익률”은 무엇입니까?", options: ["收益率", "流动性", "制裁"], answer: 0, explanation: "수익률 means yield or rate of return." },
    { id: 4, kind: "Knowledge", question: "为什么不能把单日反弹当成趋势反转？", options: ["因为价格只反映一个时间窗口，仍需更多数据", "因为指数永远不会上涨", "因为油价与市场完全无关"], answer: 0, explanation: "A single close is evidence about one session, not proof of a durable change in fundamentals or policy." },
    { id: 5, kind: "Translation", question: "“真正的考验还在前面。”最自然的英文是？", options: ["The real test is still ahead.", "The test is behind the real.", "The future is testing the real."], answer: 0, explanation: "The real test is still ahead is the natural expression." },
  ],
  completion: false,
  difficulty_feedback: null,
};
