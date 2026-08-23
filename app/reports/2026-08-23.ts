import type { DailyReport } from "../report-types";

export const realReport20260823: DailyReport = {
  id: "2026-08-23",
  date: "2026-08-23",
  published_at: "2026-08-23T08:30:00+08:00",
  updated_at: "2026-08-23T08:30:00+08:00",
  edition_number: 3,
  demo: false,
  estimated_minutes: 40,
  ai_credit: { provider: "DeepSeek", model: "V4 Flash", role: "资料研究、事实核查与编辑协作" },
  sources: [
    { label:"新浪财经", title:"宇树科技股价波动：资本热度易得，商业化大考难越", url:"https://finance.sina.cn/2026-08-21/detail-inipavkf6459577.d.html", published:"2026-08-21" },
    { label:"财经头条", title:"宇树科技股价回撤近40%", url:"https://cj.sina.com.cn/articles/view/7501277582/1bf1c698e01901v4m8", published:"2026-08-21" },
    { label:"华声在线", title:"宇树科技，两天市值蒸发近700亿元", url:"https://m.voc.com.cn/xhn/news/202608/33544720.html", published:"2026-08-21" },
    { label:"工人日报", title:"上半年中国人形机器人出货量已超4万台", url:"https://finance.sina.cn/2026-08-21/detail-ininzazf8481824.d.html", published:"2026-08-20" },
    { label:"中国经营报", title:"直击WRC 2026｜机器人不再仅表演 开始「真干活」", url:"https://www.toutiao.com/article/7676335107246015011/", published:"2026-08-21" },
    { label:"腾讯证券", title:"宇树科技上市两日：首日暴涨460%，次日大跌18.7%", url:"https://gu.qq.com/resources/shy/news/detail-v2/index.html?id=SN20260821105912b69af31d", published:"2026-08-21" },
    { label:"财联社", title:"早报｜外资加速涌入中国高技术产业；美对部分加拿大商品加征50%关税", url:"https://www.163.com/dy/article/L50H96SC05198CJN.html", published:"2026-08-23" },
    { label:"陆家嘴财经早餐", title:"2026年8月23日星期日", url:"https://so.html5.qq.com/page/real/search_news?docid=70000021_7546a8a301c13952", published:"2026-08-23" },
  ],
  big_story: {
    category:"Technology · Markets · Robotics",
    title_zh:"上市三天，宇树科技从 1100 元到 672 元：谁在给人形机器人定价",
    title_en:"Three days on the market: who is pricing humanoid robots",
    summary:"首日高开 629%、收盘涨 460%，随后两个交易日又回撤近四成。宇树科技在科创板的上市周，恰好与 2026 世界机器人大会重叠：一边是二级市场用真金白银表达对人形机器人的想象，一边是创始人王兴兴在大会主论坛承认机器人的效率与泛化仍是规模化瓶颈。今天值得关注的不是单日涨跌，而是市场正在为具身智能建立怎样的定价坐标。",
    minutes:12,
    source_label:"新浪财经",
    source_url:"https://finance.sina.cn/2026-08-21/detail-inipavkf6459577.d.html",
  },
  hot_words: [
    { en:"IPO", zh:"首次公开募股", ja:"新規株式公開（しんきかぶしきこうかい）", ja_romaji:"shinki kabushiki kōkai", ko:"기업공개", ko_romaja:"gibeop gonggae", why_today:"宇树科技以 A股「人形机器人第一股」的身份完成 IPO，是今天所有讨论的起点。", example:"The company's IPO was priced at 150.80 yuan per share.", topic:"Finance" },
    { en:"Listing", zh:"上市；挂牌", ja:"上場（じょうじょう）", ja_romaji:"jōjō", ko:"상장", ko_romaja:"sangjang", why_today:"8 月 19 日，宇树科技正式登陆上交所科创板。", example:"The stock surged on its first day of listing.", topic:"Finance" },
    { en:"Lottery rate", zh:"中签率", ja:"当選確率（とうせんかくりつ）", ja_romaji:"tōsen kakuritsu", ko:"청약 당첨률", ko_romaja:"cheongyak dangcheomnyul", why_today:"0.018% 的中签率创下科创板纪录，接近万分之二，反映打新资金之拥挤。", example:"The lottery rate was among the lowest ever seen on the board.", topic:"Markets" },
    { en:"Valuation", zh:"估值；定价", ja:"評価額（ひょうかがく）", ja_romaji:"hyōkagaku", ko:"밸류에이션", ko_romaja:"baellyueisyeon", why_today:"发行市盈率 219 倍、TTM 市盈率超 460 倍，估值是这三天博弈的核心。", example:"Investors disagree sharply about the valuation.", topic:"Finance" },
    { en:"Humanoid robot", zh:"人形机器人", ja:"人型ロボット（ひとがたロボット）", ja_romaji:"hitogata robotto", ko:"휴머노이드 로봇", ko_romaja:"hyumeon-oideu robot", why_today:"宇树 2025 年人形机器人出货超 5500 台居全球第一，赛道是今天的主角。", example:"Humanoid robots are moving from demos into factories.", topic:"Technology" },
    { en:"Generalization", zh:"泛化能力", ja:"汎化能力（はんかのうりょく）", ja_romaji:"hanka nōryoku", ko:"일반화 능력", ko_romaja:"ilbanhwa neungnyeok", why_today:"王兴兴坦言泛化能力不足，是机器人大规模推广的主要瓶颈。", example:"Generalization is the main bottleneck for large-scale deployment.", topic:"Technology" },
    { en:"Turnover", zh:"换手率", ja:"回転率（かいてんりつ）", ja_romaji:"kaitenritsu", ko:"회전율", ko_romaja:"hoejeonyul", why_today:"上市首日换手率 85.28%，意味着当天近九成流通筹码换了手。", example:"Turnover reached 85 percent on the first day of trading.", topic:"Markets" },
    { en:"Drawdown", zh:"回撤；回调", ja:"下落幅（げらくはば）", ja_romaji:"geraku haba", ko:"하락폭", ko_romaja:"harakpok", why_today:"三个交易日内，宇树股价较盘中高点回撤近 40%。", example:"The stock has fallen nearly 40 percent from its intraday peak.", topic:"Markets" },
  ],
  expressions: [
    { language:"English", flag:"EN", phrase:"priced to perfection", meaning:"定价已经把所有利好都算进去了", nuance:"形容估值没有任何容错空间，任何低于预期的消息都可能引发下跌。", scene:"市场评论、公司估值讨论", dialogue:"A: Do you think the shares are expensive?\nB: After that surge, some say the stock is priced to perfection.", register:"中性 · 市场语境", frequency:"常用", note:"常与 priced in（已被计入价格）连用。" },
    { language:"日本語", flag:"JP", phrase:"熱が冷める。", romanization:"netsu ga sameru", meaning:"热度消退。", nuance:"形容市场情绪从狂热回归理性，常用来描述炒作退潮后的回调。", scene:"市场评论、朋友聊天、新闻讨论", dialogue:"A：株価が上がり続けますね。\nB：でも、そのうち熱が冷めるでしょう。", register:"日常 · 自然", frequency:"很常用", note:"「熱」这里指市场的追捧情绪，不是温度。" },
    { language:"한국어", flag:"KR", phrase:"거품을 빼다.", romanization:"geopumeul ppaeda", meaning:"挤出泡沫。", nuance:"形容估值中的水分被消化，价格向基本面回归。", scene:"市场讨论、投资交流", dialogue:"A: 주가가 왜 이렇게 떨어졌어요?\nB: 상장 초기의 거품을 빼는 과정이에요.", register:"日常 · 自然", frequency:"常用", note:"거품 意为泡沫，빼다 是挤掉、抽出的意思。" },
  ],
  briefings: [
    {
      id:1, category:"Markets / IPO", title_zh:"上市三天：从 1100 元高开，到 672 元收盘", title_en:"Three days in: from a 1,100 yuan open to 672 yuan", source:"新浪财经 · 财经头条", source_url:"https://finance.sina.cn/2026-08-21/detail-inipavkf6459577.d.html", minutes:3,
      zh:"宇树科技 8 月 19 日登陆科创板，发行价 150.80 元。首日开盘 1100 元，一度较发行价上涨 629%，收盘上涨 460.34% 报 845 元，市值约 3418 亿元。随后两个交易日连续下跌，8 月 21 日收报 672.41 元，较首日盘中高点回撤近四成；但相对发行价仍上涨约 3.5 倍。",
      en:"Unitree listed on the STAR Market on August 19 at an issue price of 150.80 yuan. It opened at 1,100 yuan, up as much as 629 percent, and closed 460.34 percent higher at 845 yuan, a market value of about 342 billion yuan. It then fell for two straight sessions, closing at 672.41 yuan on August 21 — down nearly 40 percent from the first-day intraday high, but still about 3.5 times the issue price.",
      ja:"宇樹科技は八月十九日に上海の科学技術創新板に上場しました。発行価格は百五十・八元でした。初日は千百元で始まり、四百六十パーセント上がって八百四十五元で終わりました。その後二日間下がって、六百七十二・四一元になりました。",
      ko:"우수 테크놀로지는 8월 19일에 상하이 과학기술혁신판에 상장했습니다. 발행가는 150.80위안이었습니다. 첫날 1100위안으로 시작해 460% 오른 845위안으로 마감했습니다. 이후 이틀 연속 하락해 672.41위안으로 내려갔습니다.",
      ja_segments:[
        {text:"宇樹科技",reading:"うじゅかぎ",romanization:"uju kagi",zh:"宇树科技"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"八月",reading:"はちがつ",romanization:"hachigatsu",zh:"八月"},{text:"十九日",reading:"じゅうくにち",romanization:"jūkunichi",zh:"十九日"},{text:"に",romanization:"ni",zh:"在"},{text:"上海",reading:"しゃんはい",romanization:"shanhai",zh:"上海"},{text:"の",romanization:"no",zh:"的"},{text:"科学技術創新板",reading:"かがくぎじゅつそうしんばん",romanization:"kagaku gijutsu sōshinban",zh:"科创板"},{text:"に",romanization:"ni",zh:"在"},{text:"上場",reading:"じょうじょう",romanization:"jōjō",zh:"上市"},{text:"しました。",romanization:"shimashita",zh:"做了。"},
        {text:"発行価格",reading:"はっこうかかく",romanization:"hakkō kakaku",zh:"发行价"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"百五十・八元",reading:"ひゃくごじゅうはちげん",romanization:"hyakugojū hachigen",zh:"150.8 元"},{text:"でした。",romanization:"deshita",zh:"是。"},
        {text:"初日",reading:"しょにち",romanization:"shonichi",zh:"首日"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"千百元",reading:"せんひゃくげん",romanization:"senhyakugen",zh:"1100 元"},{text:"で",romanization:"de",zh:"以"},{text:"始まり、",reading:"はじまり",romanization:"hajimari",zh:"开始，"},{text:"四百六十",reading:"よんひゃくろくじゅう",romanization:"yonhyakurokujū",zh:"460%"},{text:"パーセント",romanization:"pāsento",zh:"百分比"},{text:"上がって",reading:"あがって",romanization:"agatte",zh:"上涨后"},{text:"八百四十五元",reading:"はっぴゃくよんじゅうごげん",romanization:"happyakuyonjūgogen",zh:"845 元"},{text:"で",romanization:"de",zh:"以"},{text:"終わりました。",reading:"おわりました",romanization:"owarimashita",zh:"结束了。"},
        {text:"その後",reading:"そのご",romanization:"sonogo",zh:"此后"},{text:"二日間",reading:"ふつかかん",romanization:"futsukakan",zh:"两天"},{text:"下がって、",reading:"さがって",romanization:"sagatte",zh:"下跌后，"},{text:"六百七十二・四一元",reading:"ろっぴゃくななじゅうに・よんいちげん",romanization:"roppyaku nanajū ni yon ichigen",zh:"672.41 元"},{text:"に",romanization:"ni",zh:"到"},{text:"なりました。",romanization:"narimashita",zh:"变成了。"}
      ],
      ko_segments:[
        {text:"우수",romanization:"usu",zh:"宇树"},{text:"테크놀로지는",romanization:"tekeunolloji-neun",zh:"科技（主题）"},{text:"8월",romanization:"parwol",zh:"8月"},{text:"19일에",romanization:"sipgugire",zh:"19日"},{text:"상하이",romanization:"sanghai",zh:"上海"},{text:"과학기술혁신판에",romanization:"gwahakgisureulhyeoksinpane",zh:"科创板（位置）"},{text:"상장했습니다.",romanization:"sangjanghaetseumnida",zh:"上市了。"},
        {text:"발행가는",romanization:"balhaengganeun",zh:"发行价（主题）"},{text:"150.80위안이었습니다.",romanization:"baengoisip-wianieotseumnida",zh:"是 150.80 元。"},
        {text:"첫날",romanization:"cheonnal",zh:"首日"},{text:"1100위안으로",romanization:"cheonsaengbaegwi-aneuro",zh:"以 1100 元"},{text:"시작해",romanization:"sijakhae",zh:"开始"},{text:"460%",romanization:"sabaengyuk-sipeuro",zh:"460%"},{text:"오른",romanization:"oreun",zh:"上涨的"},{text:"845위안으로",romanization:"palbaegsasip-o-wianeuro",zh:"以 845 元"},{text:"마감했습니다.",romanization:"magamhaetseumnida",zh:"收盘了。"},
        {text:"이후",romanization:"ihu",zh:"之后"},{text:"이틀",romanization:"iteul",zh:"两天"},{text:"연속",romanization:"yeonsok",zh:"连续"},{text:"하락해",romanization:"harakhae",zh:"下跌"},{text:"672.41위안으로",romanization:"yugchilgisaip-oro-wianeuro",zh:"到 672.41 元"},{text:"내려갔습니다.",romanization:"naeryeogatseumnida",zh:"下降了。"}
      ]
    },
    {
      id:2, category:"Technology / Robotics", title_zh:"王兴兴大会演讲：效率与泛化，仍是规模化前的两道坎", title_en:"Wang Xingxing: efficiency and generalization remain the bottlenecks", source:"工人日报", source_url:"https://finance.sina.cn/2026-08-21/detail-ininzazf8481824.d.html", minutes:3,
      zh:"8 月 20 日，宇树科技创始人王兴兴在 2026 世界机器人大会主论坛发表演讲，这是他上市后的首次公开讲话。他坦言机器人目前效率仍低于人，每次接到新任务都要重新训练，泛化能力不足是大规模推广的主要瓶颈；他预计行业抵达真正的爆发临界点，快则两三年，慢则五到十年。",
      en:"On August 20, Unitree founder Wang Xingxing spoke at the main forum of the 2026 World Robot Conference, his first public remarks since the listing. He acknowledged that robots are still less efficient than people and must be retrained for each new task, and that limited generalization is the main bottleneck to large-scale deployment. He estimated the industry could reach a true inflection point in as little as two to three years, or as long as five to ten.",
      ja:"八月二十日、宇樹科技の創業者・王興興さんは世界ロボット大会で講演しました。上場後初めての公開講演です。ロボットの効率はまだ人より低く、新しい仕事ごとに再訓練が必要だと言いました。汎化能力が普及の最大の課題です。業界の爆発的な成長まで、早くて二、三年、遅くて五から十年だと言います。",
      ko:"8월 20일, 우수 테크놀로지 창업자 왕싱싱은 세계 로봇 대회에서 강연했습니다. 상장 후 첫 공개 강연입니다. 로봇의 효율은 아직 사람보다 낮고, 새로운 일마다 다시 훈련해야 한다고 말했습니다. 일반화 능력이 보급의 가장 큰 과제입니다. 산업의 폭발적 성장까지는 빨라야 2~3년, 느리면 5~10년이라고 말합니다.",
      ja_segments:[
        {text:"八月",reading:"はちがつ",romanization:"hachigatsu",zh:"八月"},{text:"二十日",reading:"はつか",romanization:"hatsuka",zh:"二十日"},{text:"、",romanization:"",zh:"，"},{text:"宇樹科技",reading:"うじゅかぎ",romanization:"uju kagi",zh:"宇树科技"},{text:"の",romanization:"no",zh:"的"},{text:"創業者",reading:"そうぎょうしゃ",romanization:"sōgyōsha",zh:"创始人"},{text:"・王興興",reading:"おうこうこう",romanization:"ō kōkō",zh:"王兴兴"},{text:"さん",romanization:"san",zh:"（敬称）"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"世界",reading:"せかい",romanization:"sekai",zh:"世界"},{text:"ロボット大会",reading:"たいかい",romanization:"robotto taikai",zh:"机器人大会"},{text:"で",romanization:"de",zh:"在"},{text:"講演",reading:"こうえん",romanization:"kōen",zh:"演讲"},{text:"しました。",romanization:"shimashita",zh:"做了。"},
        {text:"上場後",reading:"じょうじょうご",romanization:"jōjōgo",zh:"上市后"},{text:"初めて",reading:"はじめて",romanization:"hajimete",zh:"第一次"},{text:"の",romanization:"no",zh:"的"},{text:"公開講演",reading:"こうかいこうえん",romanization:"kōkai kōen",zh:"公开演讲"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"ロボット",romanization:"robotto",zh:"机器人"},{text:"の",romanization:"no",zh:"的"},{text:"効率",reading:"こうりつ",romanization:"kōritsu",zh:"效率"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"まだ",romanization:"mada",zh:"还"},{text:"人",reading:"ひと",romanization:"hito",zh:"人"},{text:"より",romanization:"yori",zh:"比"},{text:"低く、",reading:"ひくく",romanization:"hikuku",zh:"低，"},{text:"新しい",reading:"あたらしい",romanization:"atarashii",zh:"新的"},{text:"仕事",reading:"しごと",romanization:"shigoto",zh:"工作"},{text:"ごとに",romanization:"gotoni",zh:"每"},{text:"再訓練",reading:"さいくんれん",romanization:"saikunren",zh:"再训练"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"必要",reading:"ひつよう",romanization:"hitsuyō",zh:"必要"},{text:"だ",romanization:"da",zh:"是"},{text:"と",romanization:"to",zh:"引用标记"},{text:"言いました。",reading:"いいました",romanization:"iimashita",zh:"说了。"},
        {text:"汎化能力",reading:"はんかのうりょく",romanization:"hanka nōryoku",zh:"泛化能力"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"普及",reading:"ふきゅう",romanization:"fukyū",zh:"普及"},{text:"の",romanization:"no",zh:"的"},{text:"最大",reading:"さいだい",romanization:"saidai",zh:"最大"},{text:"の",romanization:"no",zh:"的"},{text:"課題",reading:"かだい",romanization:"kadai",zh:"课题"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"業界",reading:"ぎょうかい",romanization:"gyōkai",zh:"行业"},{text:"の",romanization:"no",zh:"的"},{text:"爆発的",reading:"ばくはつてき",romanization:"bakuhatsuteki",zh:"爆发性的"},{text:"な",romanization:"na",zh:"（连体）"},{text:"成長",reading:"せいちょう",romanization:"seichō",zh:"成长"},{text:"まで、",romanization:"made",zh:"到，"},{text:"早くて",reading:"はやくて",romanization:"haya kute",zh:"快的话"},{text:"二、三年",reading:"にさんねん",romanization:"ni san nen",zh:"两三年"},{text:"、",romanization:"",zh:"，"},{text:"遅くて",reading:"おそくて",romanization:"osokute",zh:"慢的话"},{text:"五から十年",reading:"ごからじゅうねん",romanization:"go kara jūnen",zh:"五到十年"},{text:"だ",romanization:"da",zh:"是"},{text:"と",romanization:"to",zh:"引用标记"},{text:"言います。",reading:"いいます",romanization:"iimasu",zh:"说。"}
      ],
      ko_segments:[
        {text:"8월",romanization:"parwol",zh:"8月"},{text:"20일,",romanization:"isip-il",zh:"20日，"},{text:"우수",romanization:"usu",zh:"宇树"},{text:"테크놀로지",romanization:"tekeunolloji",zh:"科技"},{text:"창업자",romanization:"chang-eopja",zh:"创始人"},{text:"왕싱싱은",romanization:"wangsingsing-eun",zh:"王兴兴（主题）"},{text:"세계",romanization:"segye",zh:"世界"},{text:"로봇",romanization:"robot",zh:"机器人"},{text:"대회에서",romanization:"daehoeseo",zh:"大会上"},{text:"강연했습니다.",romanization:"gang-yeonhaetseumnida",zh:"演讲了。"},
        {text:"상장 후",romanization:"sangjang hu",zh:"上市后"},{text:"첫",romanization:"cheot",zh:"第一次"},{text:"공개",romanization:"gonggae",zh:"公开"},{text:"강연입니다.",romanization:"gang-yeonimnida",zh:"演讲。"},
        {text:"로봇의",romanization:"robot-ui",zh:"机器人的"},{text:"효율은",romanization:"hyoyureun",zh:"效率（主题）"},{text:"아직",romanization:"ajik",zh:"还"},{text:"사람보다",romanization:"saramboda",zh:"比人"},{text:"낮고,",romanization:"natgo",zh:"低，"},{text:"새로운",romanization:"saeroun",zh:"新的"},{text:"일마다",romanization:"ilmada",zh:"每项工作"},{text:"다시",romanization:"dasi",zh:"重新"},{text:"훈련해야",romanization:"hullyeonhaeya",zh:"训练"},{text:"한다고",romanization:"handago",zh:"要做（引用）"},{text:"말했습니다.",romanization:"malhaetseumnida",zh:"说了。"},
        {text:"일반화",romanization:"ilbanhwa",zh:"泛化"},{text:"능력이",romanization:"neungnyeogi",zh:"能力（主语）"},{text:"보급의",romanization:"bogeum-ui",zh:"推广的"},{text:"가장",romanization:"gajang",zh:"最"},{text:"큰",romanization:"keun",zh:"大的"},{text:"과제입니다.",romanization:"gwajeimnida",zh:"课题。"},
        {text:"산업의",romanization:"san-eob-ui",zh:"产业的"},{text:"폭발적",romanization:"pokbaljeok",zh:"爆发性"},{text:"성장까지는",romanization:"seongjangkkajineun",zh:"到成长为止"},{text:"빨라야",romanization:"ppallaya",zh:"快的话"},{text:"2~3년,",romanization:"isam-nyeon",zh:"2~3年，"},{text:"느리면",romanization:"neurimyeon",zh:"慢的话"},{text:"5~10년이라고",romanization:"osip-nyeonirago",zh:"5~10年（引用）"},{text:"말합니다.",romanization:"malhamnida",zh:"说。"}
      ]
    },
    {
      id:3, category:"Industry / Data", title_zh:"上半年全球人形机器人出货量：中国占 97%，智元反超宇树", title_en:"Humanoid shipments in H1: China takes 97%, AgiBot overtakes Unitree", source:"工人日报 · Counterpoint Research", source_url:"https://www.toutiao.com/article/7676335107246015011/", minutes:3,
      zh:"《2026 年人形机器人产业发展报告》显示，上半年中国人形机器人出货量已超 4 万台，全球占比提升至 97%。Counterpoint Research 数据则显示，上半年全球出货超 2.2 万台、同比增长近 300%，其中智元机器人约 9700 台，宇树科技超 7000 台。出货量在高基数上继续增长，但真正进入智能制造与仓储物流的占比还不到两成。",
      en:"According to the 2026 Humanoid Robot Industry Development Report, Chinese makers shipped more than 40,000 humanoid robots in the first half, lifting their global share to 97 percent. Counterpoint Research put worldwide shipments above 22,000 units, up nearly 300 percent year on year, with AgiBot at about 9,700 and Unitree above 7,000. Shipments keep growing from a high base, but less than one-fifth of them go into manufacturing and warehouse logistics.",
      ja:"二〇二六年上半期、中国人型ロボットの出荷台数は四万台を超えました。世界の九十七パーセントを占めます。智元ロボットは約九千七百台、宇樹科技は七千台以上でした。出荷は増えていますが、製造や物流に使われたのは二割未満です。",
      ko:"2026년 상반기, 중국 휴머노이드 로봇 출하량은 4만 대를 넘었습니다. 세계의 97%를 차지합니다. 아지봇이 약 9,700대, 우수 테크놀로지가 7,000대 이상이었습니다. 출하량은 늘고 있지만, 제조와 물류에 쓰인 것은 20% 미만입니다.",
      ja_segments:[
        {text:"二〇二六年",reading:"にせんにじゅうろくねん",romanization:"nisen nijūrokunen",zh:"2026年"},{text:"上半期",reading:"かみはんき",romanization:"kamihanki",zh:"上半年"},{text:"、",romanization:"",zh:"，"},{text:"中国",reading:"ちゅうごく",romanization:"chūgoku",zh:"中国"},{text:"人型ロボット",reading:"ひとがたロボット",romanization:"hitogata robotto",zh:"人形机器人"},{text:"の",romanization:"no",zh:"的"},{text:"出荷台数",reading:"しゅっかだいすう",romanization:"shukka daisū",zh:"出货台数"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"四万台",reading:"よんまんだい",romanization:"yonmandai",zh:"四万台"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"超えました。",reading:"こえました",romanization:"koemashita",zh:"超过了。"},
        {text:"世界",reading:"せかい",romanization:"sekai",zh:"世界"},{text:"の",romanization:"no",zh:"的"},{text:"九十七",reading:"きゅうじゅうなな",romanization:"kyūjūnana",zh:"97"},{text:"パーセント",romanization:"pāsento",zh:"百分比"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"占めます。",reading:"しめます",romanization:"shimemasu",zh:"占。"},
        {text:"智元ロボット",reading:"ちげんロボット",romanization:"chigen robotto",zh:"智元机器人"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"約",reading:"やく",romanization:"yaku",zh:"约"},{text:"九千七百台",reading:"きゅうせんななひゃくだい",romanization:"kyūsennanahyakkudai",zh:"9700台"},{text:"、",romanization:"",zh:"，"},{text:"宇樹科技",reading:"うじゅかぎ",romanization:"uju kagi",zh:"宇树科技"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"七千台",reading:"ななせんだい",romanization:"nanasendai",zh:"7000台"},{text:"以上",reading:"いじょう",romanization:"ijō",zh:"以上"},{text:"でした。",romanization:"deshita",zh:"是。"},
        {text:"出荷",reading:"しゅっか",romanization:"shukka",zh:"出货"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"増えていますが、",reading:"ふえていますが",romanization:"fueteimasuga",zh:"在增长，但是，"},{text:"製造",reading:"せいぞう",romanization:"seizō",zh:"制造"},{text:"や",romanization:"ya",zh:"和"},{text:"物流",reading:"ぶつりゅう",romanization:"butsuryū",zh:"物流"},{text:"に",romanization:"ni",zh:"用于"},{text:"使われた",reading:"つかわれた",romanization:"tsukawareta",zh:"被使用的"},{text:"の",romanization:"no",zh:"（名词化）"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"二割",reading:"にわり",romanization:"niwari",zh:"两成"},{text:"未満",reading:"みまん",romanization:"miman",zh:"以下"},{text:"です。",romanization:"desu",zh:"是。"}
      ],
      ko_segments:[
        {text:"2026년",romanization:"icheon-isibyuk-nyeon",zh:"2026年"},{text:"상반기,",romanization:"sangbangi",zh:"上半年，"},{text:"중국",romanization:"jungguk",zh:"中国"},{text:"휴머노이드",romanization:"hyumeon-oideu",zh:"人形"},{text:"로봇",romanization:"robot",zh:"机器人"},{text:"출하량은",romanization:"chulharyangeun",zh:"出货量（主题）"},{text:"4만",romanization:"saman",zh:"四万"},{text:"대를",romanization:"daereul",zh:"台（宾语）"},{text:"넘었습니다.",romanization:"neomeotseumnida",zh:"超过了。"},
        {text:"세계의",romanization:"segye-ui",zh:"世界的"},{text:"97%를",romanization:"gusip-chil-peoseunteureul",zh:"97%（宾语）"},{text:"차지합니다.",romanization:"chajihamnida",zh:"占据。"},
        {text:"아지봇이",romanization:"ajibos-i",zh:"智元（主语）"},{text:"약",romanization:"yak",zh:"约"},{text:"9,700대,",romanization:"guchilgusaeng-baekdae",zh:"9700台，"},{text:"우수",romanization:"usu",zh:"宇树"},{text:"테크놀로지가",romanization:"tekeunolloji-ga",zh:"科技（主语）"},{text:"7,000대",romanization:"chilcheondae",zh:"7000台"},{text:"이상이었습니다.",romanization:"isangieotseumnida",zh:"以上。"},
        {text:"출하량은",romanization:"chulharyangeun",zh:"出货量（主题）"},{text:"늘고",romanization:"neulgo",zh:"在增长"},{text:"있지만,",romanization:"itjiman",zh:"但是，"},{text:"제조와",romanization:"jejowa",zh:"制造和"},{text:"물류에",romanization:"mullyue",zh:"物流（位置）"},{text:"쓰인",romanization:"sseuin",zh:"被使用的"},{text:"것은",romanization:"geoseun",zh:"东西（主题）"},{text:"20%",romanization:"isib-peoseunteu",zh:"20%"},{text:"미만입니다.",romanization:"mimanimnida",zh:"以下。"}
      ]
    },
    {
      id:4, category:"Global / Trade", title_zh:"美对加拿大部分商品加征 50% 关税，加拿大宣布 9 月反制", title_en:"U.S. adds 50% tariff on some Canadian goods; Ottawa vows retaliation", source:"财联社", source_url:"https://www.163.com/dy/article/L50H96SC05198CJN.html", minutes:3,
      zh:"美国海关与边境保护局发布指引，依据第 338 条款对特定加拿大进口商品加征 50% 额外关税，措施于美东时间 8 月 22 日凌晨正式生效。加拿大总理卡尼 8 月 22 日发表全国电视讲话，宣布对价值 200 亿美元的美国商品实施等额报复性关税，计划 9 月 8 日生效，范围涵盖乳制品、钢铁、家电与电子产品等。",
      en:"U.S. Customs and Border Protection issued guidance adding a 50 percent tariff on certain Canadian imports under Section 338, effective at 00:01 EDT on August 22. In a national address, Canadian Prime Minister Carney announced equivalent counter-tariffs on US$20 billion of American goods, scheduled for September 8, covering dairy, steel, appliances and electronics.",
      ja:"米国はカナダからの一部の商品に五十パーセントの関税を課しました。八月二十二日に発効しました。カナダのカーニー首相は二百億ドル分の米国商品に報復関税を課すと発表しました。九月八日に発効する予定です。乳製品や鉄鋼、電化製品などが対象です。",
      ko:"미국은 캐나다산 일부 상품에 50% 관세를 부과했습니다. 8월 22일에 발효했습니다. 캐나다의 카니 총리는 200억 달러어치 미국 상품에 보복 관세를 부과하겠다고 발표했습니다. 9월 8일에 발효될 예정입니다. 유제품과 철강, 가전제품 등이 대상입니다.",
      ja_segments:[
        {text:"米国",reading:"べいこく",romanization:"beikoku",zh:"美国"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"カナダ",romanization:"kanada",zh:"加拿大"},{text:"から",romanization:"kara",zh:"从"},{text:"の",romanization:"no",zh:"的"},{text:"一部",reading:"いちぶ",romanization:"ichibu",zh:"一部分"},{text:"の",romanization:"no",zh:"的"},{text:"商品",reading:"しょうひん",romanization:"shōhin",zh:"商品"},{text:"に",romanization:"ni",zh:"对"},{text:"五十",reading:"ごじゅう",romanization:"gojū",zh:"50"},{text:"パーセント",romanization:"pāsento",zh:"百分比"},{text:"の",romanization:"no",zh:"的"},{text:"関税",reading:"かんぜい",romanization:"kanzei",zh:"关税"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"課しました。",reading:"かしました",romanization:"kashimashita",zh:"课征了。"},
        {text:"八月",reading:"はちがつ",romanization:"hachigatsu",zh:"八月"},{text:"二十二日",reading:"にじゅうににち",romanization:"nijūnichi",zh:"二十二日"},{text:"に",romanization:"ni",zh:"在"},{text:"発効",reading:"はっこう",romanization:"hakkō",zh:"生效"},{text:"しました。",romanization:"shimashita",zh:"了。"},
        {text:"カナダ",romanization:"kanada",zh:"加拿大"},{text:"の",romanization:"no",zh:"的"},{text:"カーニー首相",reading:"しゅしょう",romanization:"kānī shushō",zh:"卡尼总理"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"二百億ドル",reading:"にひゃくおくドル",romanization:"nihyakuoku doru",zh:"二百亿美元"},{text:"分",reading:"ぶん",romanization:"bun",zh:"价值"},{text:"の",romanization:"no",zh:"的"},{text:"米国商品",reading:"べいこくしょうひん",romanization:"beikoku shōhin",zh:"美国商品"},{text:"に",romanization:"ni",zh:"对"},{text:"報復関税",reading:"ほうふくかんぜい",romanization:"hōfuku kanzei",zh:"报复性关税"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"課す",reading:"かす",romanization:"kasu",zh:"课征"},{text:"と",romanization:"to",zh:"引用标记"},{text:"発表",reading:"はっぴょう",romanization:"happyō",zh:"发表"},{text:"しました。",romanization:"shimashita",zh:"了。"},
        {text:"九月",reading:"くがつ",romanization:"kugatsu",zh:"九月"},{text:"八日",reading:"ようか",romanization:"yōka",zh:"八日"},{text:"に",romanization:"ni",zh:"在"},{text:"発効",reading:"はっこう",romanization:"hakkō",zh:"生效"},{text:"する",romanization:"suru",zh:"将"},{text:"予定",reading:"よてい",romanization:"yotei",zh:"预定"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"乳製品",reading:"にゅうせいひん",romanization:"nyūseihin",zh:"乳制品"},{text:"や",romanization:"ya",zh:"和"},{text:"鉄鋼",reading:"てっこう",romanization:"tekkō",zh:"钢铁"},{text:"、",romanization:"",zh:"，"},{text:"電化製品",reading:"でんかせいひん",romanization:"denka seihin",zh:"电器"},{text:"など",romanization:"nado",zh:"等"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"対象",reading:"たいしょう",romanization:"taishō",zh:"对象"},{text:"です。",romanization:"desu",zh:"是。"}
      ],
      ko_segments:[
        {text:"미국은",romanization:"migugeun",zh:"美国（主题）"},{text:"캐나다산",romanization:"kaenadasan",zh:"加拿大产"},{text:"일부",romanization:"ilbu",zh:"一部分"},{text:"상품에",romanization:"sangpume",zh:"商品（位置）"},{text:"50%",romanization:"osip-peoseunteu",zh:"50%"},{text:"관세를",romanization:"gwanse-reul",zh:"关税（宾语）"},{text:"부과했습니다.",romanization:"bugwahaetseumnida",zh:"课征了。"},
        {text:"8월",romanization:"parwol",zh:"8月"},{text:"22일에",romanization:"isib-ire",zh:"22日"},{text:"발효했습니다.",romanization:"balhyohaetseumnida",zh:"生效了。"},
        {text:"캐나다의",romanization:"kaenadaui",zh:"加拿大的"},{text:"카니",romanization:"kani",zh:"卡尼"},{text:"총리는",romanization:"chongnineun",zh:"总理（主题）"},{text:"200억",romanization:"ibaeg-eok",zh:"200亿"},{text:"달러어치",romanization:"dalleo-eochi",zh:"美元价值"},{text:"미국",romanization:"miguk",zh:"美国"},{text:"상품에",romanization:"sangpume",zh:"商品（位置）"},{text:"보복",romanization:"bobok",zh:"报复"},{text:"관세를",romanization:"gwanse-reul",zh:"关税（宾语）"},{text:"부과하겠다고",romanization:"bugwahagetdago",zh:"将课征（引用）"},{text:"발표했습니다.",romanization:"balpyohaetseumnida",zh:"发表了。"},
        {text:"9월",romanization:"guwol",zh:"9月"},{text:"8일에",romanization:"parire",zh:"8日"},{text:"발효될",romanization:"balhyodoel",zh:"将生效"},{text:"예정입니다.",romanization:"yejeongimnida",zh:"预定。"},
        {text:"유제품과",romanization:"yujepumgwa",zh:"乳制品和"},{text:"철강,",romanization:"cheolgang",zh:"钢铁，"},{text:"가전제품",romanization:"gajeonjepum",zh:"家电"},{text:"등이",romanization:"deung-i",zh:"等（主语）"},{text:"대상입니다.",romanization:"daesangimnida",zh:"是对象。"}
      ]
    },
  ],
  deep_read: {
    category:"Markets · Technology · Robotics",
    title_en:"First a 629% open, then two down days: what the market is deciding about humanoid robots",
    title_zh:"先涨 629%，再连跌两天：市场究竟在给什么定价",
    minutes:14,
    standfirst:"一只新股三天内的剧烈摆动，通常被讲成情绪故事。但它更像一场公开的价格协商：发行价是机构询价的产物，首日开盘价是集合竞价的产物，随后两天的下跌是存量资金重新算账的产物。理解这场协商的顺序，比记住单日涨跌幅更有用。",
    paragraphs:[
      { en:"An IPO price is not discovered in one step. During the bookbuilding phase, the issuer and its underwriters propose a range, institutional investors bid, and a final price is set. Unitree priced at 150.80 yuan, which valued the company at about 61 billion yuan and implied a price-earnings ratio of roughly 219 times — far above the 38.6 times average for its reference industry. That number already contained a story about the future: humanoid robots as the next computing platform. What it could not contain was how much the wider market would agree to pay for that story.", zh:"IPO 的价格不是一步发现的。询价阶段，发行人与承销商提出区间，机构投资者报价，最终确定发行价。宇树科技定价 150.80 元，对应市值约 609.93 亿元，发行市盈率约 219 倍——远高于参考行业 38.6 倍的平均水平。这个数字里已经含着一个关于未来的故事：人形机器人是下一个计算平台。但它无法预知更广大的市场愿意为这个故事付多少钱。" },
      { en:"On the first trading day, the market delivers its verdict through the order book rather than polite estimates. Because STAR Market shares have no price limit for their first five sessions, the opening auction set a price of 1,100 yuan, 629 percent above the issue price, before sellers overwhelmed buyers. By the close the stock had settled at 845 yuan, still up 460 percent, with turnover of about 23 billion yuan and a turnover rate of 85 percent. Extremely thin supply amplified the move: new shares were only 10 percent of total shares after the offer, and the retail lottery rate was 0.018 percent.", zh:"上市首日，市场通过订单簿而非委婉的估算表达判断。由于科创板新股前 5 个交易日不设涨跌幅限制，开盘集合竞价把价格推到 1100 元——比发行价高 629%——随后卖盘压过买盘。收盘时股价回落至 845 元，仍涨 460%，成交约 231.6 亿元，换手率 85.28%。极薄的供给放大了波动：新股仅占发行后总股本的 10%，网上中签率只有 0.018%。" },
      { en:"The next two days were a repricing rather than a reversal. On August 20 the stock fell 18.7 percent to 687 yuan; on August 21 it closed at 672.41 yuan after touching 636 yuan intraday. From the first-day intraday high of 1,100 yuan it had fallen nearly 40 percent, and its market value was roughly 70 billion yuan lower than the first-day close. The triggers were not new losses but the absence of fresh good news: the founder publicly acknowledged that robots are less efficient than people, and industry data showed a competitor taking the top shipping position.", zh:"接下来的两天是重定价，而非趋势反转。8 月 20 日股价下跌 18.7% 报 687 元；8 月 21 日盘中触及 636 元后收于 672.41 元。与首日盘中高点 1100 元相比回撤近 40%，市值较首日收盘蒸发约 700 亿元。触发因素不是新的亏损，而是好消息的缺席：创始人公开承认机器人效率仍低于人，行业数据则显示竞争对手抢走了出货量第一的位置。" },
      { en:"What matters is the sequence, not the drama. The issue price reflects a controlled story negotiated by institutions; the first-day open reflects scarcity, emotion and the cash willing to chase a thin float; the following sessions reflect what fundamentals and comparable data can sustain. High expectations are not inherently wrong, but they must be paid for with growth that arrives on schedule. The market is not refusing to price humanoid robots — it is looking for the price that growth will eventually justify.", zh:"重要的是这个顺序，而不是戏剧性本身。发行价反映的是一个由机构协商的、被控制的叙事；首日开盘价反映稀缺性、情绪和愿意追逐小流通盘的现金；随后的交易日则反映基本面与可比数据能支撑什么。高预期本身没有错，但需要用按时兑现的增长来支付。市场并没有拒绝给人形机器人定价——它只是在寻找增长最终能够支撑的那个价格。" },
    ]
  },
  context:[
    { title:"为什么科创板新股前 5 个交易日不设涨跌幅限制？", text:"注册制改革把定价权交给市场。新股上市初期没有历史价格可参照，前 5 个交易日不设涨跌幅限制，让多空双方充分博弈形成价格；5 个交易日后恢复 20% 的日常涨跌幅限制，以平抑后续波动。" },
    { title:"发行市盈率 219 倍意味着什么？", text:"市盈率等于市值除以净利润。按 2025 年扣非净利润 5.91 亿元计算，609.93 亿元的发行市值对应约 219 倍市盈率，而参考行业平均约 38.6 倍。它意味着市场为宇树的增长支付了约 5.7 倍的行业溢价，这份溢价需要未来多年的高增长来消化。" },
    { title:"中签率 0.018% 为什么这么低？", text:"网上发行数量有限（约 970.7 万股），而有效申购户数高达 978.46 万户，创科创板纪录。中签率等于网上发行股数除以网上有效申购总量：申购的人越多、发行量越小，中签率就越低。万分之二的中签率意味着平均 5 万个申购号里只有约 9 个中签。" },
  ],
  history_lens:{
    then:"2019-07", now:"2026-08", title:"同样是新板块的第一批明星股",
    text:"2019 年 7 月 22 日科创板开市，首批 25 家公司首日平均上涨 139.55%。此后多数个股在随后的月份里回调，估值向基本面回归。七年过去，真正穿越周期的，靠的是业绩持续兑现而非首日涨幅。",
    similarities:"新板块、新赛道、首日高涨幅、随后回调——资金对新事物的定价模式相似，稀缺性都会在头几天被一次透支。",
    differences:"宇树的中签率与首日涨幅远高于 2019 年首批公司，供给约束更强；且具身智能处于产业爆发前夜，基本面叙事和资金关注度都比 2019 年更强。"
  },
  challenge:[
    { id:1, kind:"English", question:"Which factor best explains why Unitree's shares fell in the two sessions after the first-day surge?", options:["The company reported a quarterly loss", "Profit-taking and a return toward fundamentals", "The STAR Market raised its price limits"], answer:1, explanation:"The stock fell as early gains were taken and prices moved back toward what fundamentals and industry data could support." },
    { id:2, kind:"日本語", question:"「上場（じょうじょう）」の意味は？", options:["上市", "中签", "回撤"], answer:0, explanation:"上場 means listing or going public. 文中では宇樹科技が上海の科学技術創新板に上場したことを指します。" },
    { id:3, kind:"한국어", question:"“청약”은 무슨 뜻입니까?", options:["申购", "开盘价", "换手率"], answer:0, explanation:"청약 means subscription, the process of applying to buy shares in a new issue before it lists." },
    { id:4, kind:"Translation", question:"“市场正在寻找增长最终能够支撑的那个价格。” 最自然的英文是？", options:["The market is looking for the price that growth will eventually justify.", "The market find the growth price eventual.", "Growth is looking for a market to support the price."], answer:0, explanation:"\"look for the price that growth will eventually justify\" 准确表达“寻找增长最终能支撑的价格”。" },
    { id:5, kind:"Knowledge", question:"为什么科创板新股首日不设涨跌幅限制反而放大了波动？", options:["因为没有历史价格，多空博弈集中在几天内完成", "因为监管不允许设置任何限制", "因为换手率自动变高"], answer:0, explanation:"前 5 日不设涨跌幅是制度安排，让价格在买卖双方充分博弈中快速形成，稀缺性与情绪因此在短期内集中释放。" },
  ],
  completion:false,
  difficulty_feedback:null,
};
