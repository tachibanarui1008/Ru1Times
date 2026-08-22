import type { DailyReport } from "../report-types";

export const realReport20260822: DailyReport = {
  id: "2026-08-22",
  date: "2026-08-22",
  published_at: "2026-08-22T08:30:00+08:00",
  updated_at: "2026-08-22T08:30:00+08:00",
  edition_number: 2,
  demo: false,
  estimated_minutes: 40,
  sources: [
    { label:"Reuters", title:"Take Five: Six months of war", url:"https://za.investing.com/news/economy-news/take-five-six-months-of-war-4438848", published:"2026-08-21" },
    { label:"AP", title:"Why Treasury Secretary Bessent's moves to calm the bond market haven't worked so far", url:"https://apnews.com/article/c6e148f8235a98245adf04b2d4bdd8d1", published:"2026-08-20" },
    { label:"U.S. Treasury", title:"August 2026 Quarterly Refunding Statement", url:"https://home.treasury.gov/news/press-releases/sb0590", published:"2026-08-05" },
    { label:"OpenAI", title:"Pacing model development in an era of cyber-critical capabilities", url:"https://openai.com/index/pacing-model-development-cyber-capabilities/", published:"2026-08-18" },
    { label:"Statistics Bureau of Japan", title:"Consumer Price Index — latest monthly release", url:"https://www.stat.go.jp/english/data/cpi/", published:"2026-08-21" },
    { label:"Reuters", title:"Japan's core inflation accelerates in July, bolsters case for rate hike", url:"https://au.investing.com/news/economy-news/japans-core-inflation-accelerates-in-july-bolsters-case-for-rate-hike-4610703", published:"2026-08-21" },
    { label:"NASA", title:"NASA Data Feeds River Forecasts as Snow Drought Effects Linger", url:"https://science.nasa.gov/centers-and-facilities/goddard/nasa-river-forecasts-snow-drought/", published:"2026-08-20" },
  ],
  big_story: {
    category:"Finance · Markets · Central Banks",
    title_zh:"六个月的战争，为什么又回到了债券市场？",
    title_en:"Six months of war have brought the bond market back into focus",
    summary:"能源价格、长期美国国债收益率与科技股估值再次连成一条线。投资者正在等待杰克逊霍尔央行年会，判断通胀冲击会不会改变降息路径；今天值得看的，不是一条单独的市场 headline，而是战争、油价、债券与 AI 投资如何互相传导。",
    minutes:14,
    source_label:"Reuters",
    source_url:"https://za.investing.com/news/economy-news/take-five-six-months-of-war-4438848",
  },
  hot_words: [
    { en:"Yield", zh:"收益率；债券回报率", ja:"利回り（りまわり）", ja_romaji:"rimawari", ko:"수익률", ko_romaja:"suikryul", why_today:"长期美国国债收益率回升，是今天市场讨论的核心指标。", example:"Long-term yields rose again after the initial relief faded.", topic:"Finance" },
    { en:"Buyback", zh:"回购", ja:"買い戻し（かいもどし）", ja_romaji:"kaimodoshi", ko:"환매", ko_romaja:"hwanmae", why_today:"美国财政部扩大长期国债回购，以改善旧债券的交易状况。", example:"The Treasury increased the size of its long-end bond buybacks.", topic:"Markets" },
    { en:"Liquidity", zh:"流动性", ja:"流動性（りゅうどうせい）", ja_romaji:"ryūdōsei", ko:"유동성", ko_romaja:"yudongseong", why_today:"回购计划首先要改善的是市场流动性，而不是直接设定利率。", example:"A buyback can support liquidity in less actively traded securities.", topic:"Finance" },
    { en:"Maturity", zh:"到期期限", ja:"満期（まんき）", ja_romaji:"manki", ko:"만기", ko_romaja:"mangi", why_today:"此次调整集中在十年至三十年的长期债券。", example:"Investors demanded more compensation for holding longer maturities.", topic:"Markets" },
    { en:"Benchmark", zh:"基准；基准指标", ja:"指標（しひょう）", ja_romaji:"shihyō", ko:"기준", ko_romaja:"gijun", why_today:"十年期国债收益率会影响按揭、企业融资等大量金融价格。", example:"The ten-year yield is a benchmark for borrowing costs across the economy.", topic:"Economy" },
    { en:"Deficit", zh:"赤字；财政赤字", ja:"財政赤字（ざいせいあかじ）", ja_romaji:"zaisei akaji", ko:"재정 적자", ko_romaja:"jaejeong jeokja", why_today:"投资者担心持续的财政赤字会带来更多债券供给。", example:"A large fiscal deficit can increase the government's borrowing needs.", topic:"Policy" },
    { en:"Intervention", zh:"干预；介入", ja:"介入（かいにゅう）", ja_romaji:"kainyū", ko:"개입", ko_romaja:"gaeip", why_today:"市场把突然扩大的回购视为财政部对长期利率压力的回应。", example:"The announcement was widely interpreted as a form of market intervention.", topic:"Policy" },
    { en:"Credibility", zh:"可信度；公信力", ja:"信頼性（しんらいせい）", ja_romaji:"shinraisei", ko:"신뢰성", ko_romaja:"silloesong", why_today:"政策能否长期影响价格，最终取决于市场是否相信其目标和边界。", example:"Policy credibility matters when investors are worried about inflation and debt.", topic:"Knowledge" },
  ],
  expressions: [
    { language:"English", flag:"EN", phrase:"buy some breathing room", meaning:"争取一些喘息空间", nuance:"表示暂时缓解压力、赢得处理问题的时间，但并不意味着问题已经解决。", scene:"工作讨论、政策评论、日常计划", dialogue:"A: Did the announcement solve the problem?\nB: Not really, but it bought policymakers some breathing room.", register:"中性 · 常用", frequency:"常用", note:"常与 buy time 接近，但 breathing room 更强调压力暂时减轻。" },
    { language:"日本語", flag:"JP", phrase:"少し様子を見よう。", romanization:"sukoshi yōsu o miyō", meaning:"再稍微观察一下吧。", nuance:"在信息还不充分时，建议先观察变化，不急着下结论。", scene:"朋友聊天、工作讨论、市场观察", dialogue:"A：金利はまた上がりますか。\nB：まだ分かりません。少し様子を見よう。", register:"日常 · 自然", frequency:"很常用", note:"更礼貌的说法是「少し様子を見ましょう」。" },
    { language:"한국어", flag:"KR", phrase:"조금 더 지켜봐요.", romanization:"jogeum deo jikyeobwayo", meaning:"再观察一下吧。", nuance:"表示继续关注事态发展，语气礼貌而自然。", scene:"新闻讨论、职场交流、朋友聊天", dialogue:"A: 시장이 이제 안정됐어요?\nB: 아직 몰라요. 조금 더 지켜봐요.", register:"礼貌 · 日常", frequency:"很常用", note:"지켜보다 在这里是“持续观察”，不是单纯“看见”。" },
  ],
  briefings: [
    {
      id:1, category:"Finance / Central Banks", title_zh:"战争、油价与央行年会，让债券重新成为市场主线", title_en:"War, oil and Jackson Hole put bonds back at the center", source:"Reuters", source_url:"https://za.investing.com/news/economy-news/take-five-six-months-of-war-4438848", minutes:3,
      zh:"路透社梳理称，伊朗战争进入第六个月后，能源供应、油价和长期美国国债收益率再次相互牵动。全球主要央行行长下周将在杰克逊霍尔会面，投资者希望从通胀、增长和利率路径中找到线索。债券市场的变化也会重新影响科技股和 AI 公司的估值。",
      en:"Reuters notes that six months into the Iran war, energy supply, oil prices and long-dated U.S. Treasury yields are moving together again. Major central-bank chiefs will meet at Jackson Hole next week, and investors are looking for clues about inflation, growth and the path of interest rates. Changes in bond yields also reshape valuations for technology and AI companies.",
      ja:"米国財務省は長期国債の買い戻しを増やします。市場の流動性を支えるためです。しかし、長期金利はまた上がりました。投資家は財政赤字とインフレを心配しています。",
      ko:"미국 재무부는 장기 국채 환매를 늘립니다. 시장의 유동성을 돕기 위해서입니다. 하지만 장기 금리는 다시 올랐습니다. 투자자들은 재정 적자와 물가를 걱정합니다.",
      ja_segments:[
        {text:"米国",reading:"べいこく",romanization:"beikoku",zh:"美国"},{text:"財務省",reading:"ざいむしょう",romanization:"zaimushō",zh:"财政部"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"長期",reading:"ちょうき",romanization:"chōki",zh:"长期"},{text:"国債",reading:"こくさい",romanization:"kokusai",zh:"国债"},{text:"の",romanization:"no",zh:"的"},{text:"買い戻し",reading:"かいもどし",romanization:"kaimodoshi",zh:"回购"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"増やします。",reading:"ふやします",romanization:"fuyashimasu",zh:"增加。"},
        {text:"市場",reading:"しじょう",romanization:"shijō",zh:"市场"},{text:"の",romanization:"no",zh:"的"},{text:"流動性",reading:"りゅうどうせい",romanization:"ryūdōsei",zh:"流动性"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"支える",reading:"ささえる",romanization:"sasaeru",zh:"支撑"},{text:"ため",romanization:"tame",zh:"为了"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"しかし、",romanization:"shikashi",zh:"但是，"},{text:"長期",reading:"ちょうき",romanization:"chōki",zh:"长期"},{text:"金利",reading:"きんり",romanization:"kinri",zh:"利率"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"また",romanization:"mata",zh:"再次"},{text:"上がりました。",reading:"あがりました",romanization:"agarimashita",zh:"上升了。"},
        {text:"投資家",reading:"とうしか",romanization:"tōshika",zh:"投资者"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"財政赤字",reading:"ざいせいあかじ",romanization:"zaisei akaji",zh:"财政赤字"},{text:"と",romanization:"to",zh:"和"},{text:"インフレ",romanization:"infure",zh:"通胀"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"心配",reading:"しんぱい",romanization:"shinpai",zh:"担心"},{text:"しています。",romanization:"shite imasu",zh:"正在。"}
      ],
      ko_segments:[
        {text:"미국",romanization:"miguk",zh:"美国"},{text:"재무부는",romanization:"jaemubuneun",zh:"财政部（主题）"},{text:"장기",romanization:"janggi",zh:"长期"},{text:"국채",romanization:"gukchae",zh:"国债"},{text:"환매를",romanization:"hwanmaereul",zh:"回购（宾语）"},{text:"늘립니다.",romanization:"neullimnida",zh:"增加。"},
        {text:"시장의",romanization:"sijangui",zh:"市场的"},{text:"유동성을",romanization:"yudongseongeul",zh:"流动性（宾语）"},{text:"돕기",romanization:"dopgi",zh:"帮助"},{text:"위해서입니다.",romanization:"wihaeseoimnida",zh:"是为了。"},
        {text:"하지만",romanization:"hajiman",zh:"但是"},{text:"장기",romanization:"janggi",zh:"长期"},{text:"금리는",romanization:"geumrineun",zh:"利率（主题）"},{text:"다시",romanization:"dasi",zh:"再次"},{text:"올랐습니다.",romanization:"ollatsseumnida",zh:"上升了。"},
        {text:"투자자들은",romanization:"tujajadeureun",zh:"投资者（主题）"},{text:"재정",romanization:"jaejeong",zh:"财政"},{text:"적자와",romanization:"jeokjawa",zh:"赤字和"},{text:"물가를",romanization:"mulgareul",zh:"物价（宾语）"},{text:"걱정합니다.",romanization:"geokjeonghamnida",zh:"担心。"}
      ]
    },
    {
      id:2, category:"Technology / AI Safety", title_zh:"OpenAI 因网络安全能力风险暂时放慢部分模型训练", title_en:"OpenAI slows parts of model development as cyber risks rise", source:"OpenAI", source_url:"https://openai.com/index/pacing-model-development-cyber-capabilities/", minutes:3,
      zh:"OpenAI 表示，内部评估显示即将推出的 Astra 模型可能达到其准备框架中的“关键”网络能力门槛。公司曾暂停部分可使用工具的前沿模型推理，并让最新模型的强化学习训练暂停两周；目前仍有一项最大规模的前沿强化学习任务处于暂停状态。新的措施包括更强的工作负载隔离、网络隔离和持续安全测试。",
      en:"OpenAI said preliminary internal evidence suggested that an upcoming model, Astra, might meet the Critical cybersecurity capability threshold in its Preparedness Framework. The company temporarily paused some frontier inference involving tools and stopped reinforcement-learning training on its latest models for two weeks. Its largest planned frontier RL run remains on hold while the company strengthens workload isolation, network controls, monitoring and security testing.",
      ja:"OpenAI は一部のモデル開発を遅くしました。新しいモデルのサイバー能力が強くなる可能性があるためです。会社は訓練環境の隔離と監視を強くしています。安全を確認してから開発を続けます。",
      ko:"OpenAI는 일부 모델 개발 속도를 늦췄습니다. 새 모델의 사이버 능력이 매우 강해질 수 있기 때문입니다. 회사는 훈련 환경의 격리와 감시를 강화하고 있습니다. 안전을 확인한 뒤 개발을 계속합니다.",
      ja_segments:[
        {text:"OpenAI",romanization:"ōpun ē ai",zh:"OpenAI"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"一部",reading:"いちぶ",romanization:"ichibu",zh:"一部分"},{text:"の",romanization:"no",zh:"的"},{text:"モデル",romanization:"moderu",zh:"模型"},{text:"開発",reading:"かいはつ",romanization:"kaihatsu",zh:"开发"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"遅く",reading:"おそく",romanization:"osoku",zh:"放慢"},{text:"しました。",romanization:"shimashita",zh:"做了。"},
        {text:"新しい",reading:"あたらしい",romanization:"atarashii",zh:"新的"},{text:"モデル",romanization:"moderu",zh:"模型"},{text:"の",romanization:"no",zh:"的"},{text:"サイバー",romanization:"saibā",zh:"网络"},{text:"能力",reading:"のうりょく",romanization:"nōryoku",zh:"能力"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"強く",reading:"つよく",romanization:"tsuyoku",zh:"强"},{text:"なる",romanization:"naru",zh:"变得"},{text:"可能性",reading:"かのうせい",romanization:"kanōsei",zh:"可能性"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"ある",romanization:"aru",zh:"存在"},{text:"ため",romanization:"tame",zh:"因为"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"会社",reading:"かいしゃ",romanization:"kaisha",zh:"公司"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"訓練",reading:"くんれん",romanization:"kunren",zh:"训练"},{text:"環境",reading:"かんきょう",romanization:"kankyō",zh:"环境"},{text:"の",romanization:"no",zh:"的"},{text:"隔離",reading:"かくり",romanization:"kakuri",zh:"隔离"},{text:"と",romanization:"to",zh:"和"},{text:"監視",reading:"かんし",romanization:"kanshi",zh:"监控"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"強く",reading:"つよく",romanization:"tsuyoku",zh:"加强"},{text:"しています。",romanization:"shite imasu",zh:"正在。"},
        {text:"安全",reading:"あんぜん",romanization:"anzen",zh:"安全"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"確認",reading:"かくにん",romanization:"kakunin",zh:"确认"},{text:"して",romanization:"shite",zh:"之后"},{text:"から",romanization:"kara",zh:"再"},{text:"開発",reading:"かいはつ",romanization:"kaihatsu",zh:"开发"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"続けます。",reading:"つづけます",romanization:"tsuzukemasu",zh:"继续。"}
      ],
      ko_segments:[
        {text:"OpenAI는",romanization:"opeun-eiaineun",zh:"OpenAI（主题）"},{text:"일부",romanization:"ilbu",zh:"一部分"},{text:"모델",romanization:"model",zh:"模型"},{text:"개발",romanization:"gaebal",zh:"开发"},{text:"속도를",romanization:"sokdoreul",zh:"速度（宾语）"},{text:"늦췄습니다.",romanization:"neutchwotsseumnida",zh:"放慢了。"},
        {text:"새",romanization:"sae",zh:"新的"},{text:"모델의",romanization:"modelui",zh:"模型的"},{text:"사이버",romanization:"saibeo",zh:"网络"},{text:"능력이",romanization:"neungnyeogi",zh:"能力（主语）"},{text:"매우",romanization:"maeu",zh:"非常"},{text:"강해질",romanization:"ganghaejil",zh:"变强"},{text:"수",romanization:"su",zh:"可能性"},{text:"있기",romanization:"itgi",zh:"存在"},{text:"때문입니다.",romanization:"ttaemunimnida",zh:"因为。"},
        {text:"회사는",romanization:"hoesaneun",zh:"公司（主题）"},{text:"훈련",romanization:"hullyeon",zh:"训练"},{text:"환경의",romanization:"hwangyeongui",zh:"环境的"},{text:"격리와",romanization:"gyeongriwa",zh:"隔离和"},{text:"감시를",romanization:"gamsireul",zh:"监控（宾语）"},{text:"강화하고",romanization:"ganghwahago",zh:"加强并"},{text:"있습니다.",romanization:"itsseumnida",zh:"正在。"},
        {text:"안전을",romanization:"anjeoneul",zh:"安全（宾语）"},{text:"확인한",romanization:"hwaginhan",zh:"确认后"},{text:"뒤",romanization:"dwi",zh:"之后"},{text:"개발을",romanization:"gaebareul",zh:"开发（宾语）"},{text:"계속합니다.",romanization:"gyesokhamnida",zh:"继续。"}
      ]
    },
    {
      id:3, category:"Economy / Japan", title_zh:"日本核心通胀升至 1.8%，央行下一步更受关注", title_en:"Japan's core inflation rises to 1.8 percent", source:"Statistics Bureau of Japan · Reuters", source_url:"https://www.stat.go.jp/english/data/cpi/", minutes:3,
      zh:"日本统计局开始发布以 2025 年为基期的新 CPI 数据。7 月剔除生鲜食品的核心 CPI 同比上涨 1.8%，高于 6 月的 1.6%，但已连续第七个月低于日本央行 2% 的目标。能源价格、日元汇率和企业转嫁进口成本的程度，可能影响日本央行下一次会议的判断。",
      en:"Japan began publishing its monthly consumer-price report on a new 2025 base. Core CPI, which excludes fresh food but includes energy, rose 1.8 percent in July from a year earlier, up from 1.6 percent in June. The measure remained below the Bank of Japan's 2 percent target for a seventh month. Energy prices, the yen and firms' willingness to pass on import costs will matter for the central bank's next decision.",
      ja:"日本の七月のコア物価は一年で一・八パーセント上がりました。六月より高い数字です。しかし、日本銀行の二パーセントの目標より低いです。エネルギー価格と円の動きが次の判断に影響します。",
      ko:"일본의 7월 근원 물가는 1년 전보다 1.8퍼센트 올랐습니다. 6월보다 높은 수치입니다. 하지만 일본은행의 2퍼센트 목표보다는 낮습니다. 에너지 가격과 엔화 움직임이 다음 판단에 영향을 줍니다.",
      ja_segments:[
        {text:"日本",reading:"にほん",romanization:"nihon",zh:"日本"},{text:"の",romanization:"no",zh:"的"},{text:"七月",reading:"しちがつ",romanization:"shichigatsu",zh:"七月"},{text:"の",romanization:"no",zh:"的"},{text:"コア",romanization:"koa",zh:"核心"},{text:"物価",reading:"ぶっか",romanization:"bukka",zh:"物价"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"一年",reading:"いちねん",romanization:"ichinen",zh:"一年"},{text:"で",romanization:"de",zh:"在"},{text:"一・八",reading:"いってんはち",romanization:"itten hachi",zh:"1.8"},{text:"パーセント",romanization:"pāsento",zh:"百分比"},{text:"上がりました。",reading:"あがりました",romanization:"agarimashita",zh:"上升了。"},
        {text:"六月",reading:"ろくがつ",romanization:"rokugatsu",zh:"六月"},{text:"より",romanization:"yori",zh:"比"},{text:"高い",reading:"たかい",romanization:"takai",zh:"更高"},{text:"数字",reading:"すうじ",romanization:"sūji",zh:"数字"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"しかし、",romanization:"shikashi",zh:"但是，"},{text:"日本銀行",reading:"にほんぎんこう",romanization:"nihon ginkō",zh:"日本央行"},{text:"の",romanization:"no",zh:"的"},{text:"二",reading:"に",romanization:"ni",zh:"二"},{text:"パーセント",romanization:"pāsento",zh:"百分比"},{text:"の",romanization:"no",zh:"的"},{text:"目標",reading:"もくひょう",romanization:"mokuhyō",zh:"目标"},{text:"より",romanization:"yori",zh:"比"},{text:"低い",reading:"ひくい",romanization:"hikui",zh:"低"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"エネルギー",romanization:"enerugī",zh:"能源"},{text:"価格",reading:"かかく",romanization:"kakaku",zh:"价格"},{text:"と",romanization:"to",zh:"和"},{text:"円",reading:"えん",romanization:"en",zh:"日元"},{text:"の",romanization:"no",zh:"的"},{text:"動き",reading:"うごき",romanization:"ugoki",zh:"走势"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"次",reading:"つぎ",romanization:"tsugi",zh:"下一次"},{text:"の",romanization:"no",zh:"的"},{text:"判断",reading:"はんだん",romanization:"handan",zh:"判断"},{text:"に",romanization:"ni",zh:"对"},{text:"影響",reading:"えいきょう",romanization:"eikyō",zh:"影响"},{text:"します。",romanization:"shimasu",zh:"产生。"}
      ],
      ko_segments:[
        {text:"일본의",romanization:"ilbonui",zh:"日本的"},{text:"7월",romanization:"chirwol",zh:"七月"},{text:"근원",romanization:"geunwon",zh:"核心"},{text:"물가는",romanization:"mulganeun",zh:"物价（主题）"},{text:"1년",romanization:"illyeon",zh:"一年"},{text:"전보다",romanization:"jeonboda",zh:"比之前"},{text:"1.8퍼센트",romanization:"iljeom pal peosenteu",zh:"1.8%"},{text:"올랐습니다.",romanization:"ollatsseumnida",zh:"上升了。"},
        {text:"6월보다",romanization:"yuwolboda",zh:"比六月"},{text:"높은",romanization:"nopeun",zh:"更高的"},{text:"수치입니다.",romanization:"suchiimnida",zh:"数值。"},
        {text:"하지만",romanization:"hajiman",zh:"但是"},{text:"일본은행의",romanization:"ilboneunhaengui",zh:"日本央行的"},{text:"2퍼센트",romanization:"i peosenteu",zh:"2%"},{text:"목표보다는",romanization:"mokpyobodaneun",zh:"比目标"},{text:"낮습니다.",romanization:"natsseumnida",zh:"更低。"},
        {text:"에너지",romanization:"eneoji",zh:"能源"},{text:"가격과",romanization:"gagyeokgwa",zh:"价格和"},{text:"엔화",romanization:"enhwa",zh:"日元"},{text:"움직임이",romanization:"umjigimi",zh:"走势（主语）"},{text:"다음",romanization:"daeum",zh:"下一次"},{text:"판단에",romanization:"pandane",zh:"对判断"},{text:"영향을",romanization:"yeonghyangeul",zh:"影响（宾语）"},{text:"줍니다.",romanization:"jumnida",zh:"产生。"}
      ]
    },
    {
      id:4, category:"Science / Climate", title_zh:"NASA 数据进入机器学习河流预测，帮助应对少雪与干旱", title_en:"NASA data feeds machine-learning river forecasts", source:"NASA", source_url:"https://science.nasa.gov/centers-and-facilities/goddard/nasa-river-forecasts-snow-drought/", minutes:3,
      zh:"美国西部 2025—2026 年冬季异常温暖，更多降水以雨而不是雪的形式落下。NASA 表示，1 月至 3 月的西部积雪覆盖均创 2001 年卫星记录开始以来的同期最低。HydroForecast 系统把天气预报、河流测量与 NASA 的积雪和植被卫星数据结合，每两小时更新一次，帮助水库、电力和公共安全管理者判断来水。",
      en:"An unusually warm 2025–26 winter brought more rain and less mountain snow to the western United States. NASA said western snow cover in January, February and March was the lowest for each month in its satellite record beginning in 2001. HydroForecast combines weather forecasts and river measurements with NASA satellite observations of snow and vegetation. Updated every two hours, the system helps water, power and public-safety managers prepare for changing river flows.",
      ja:"NASA の衛星データが川の予測に使われています。米国西部では冬の雪がとても少なかったです。予測システムは天気、川、雪、植物のデータを組み合わせます。水と電力の管理に役立ちます。",
      ko:"NASA의 위성 데이터가 강물 예측에 쓰이고 있습니다. 미국 서부에는 겨울 눈이 매우 적었습니다. 예측 시스템은 날씨, 강, 눈, 식물 데이터를 함께 사용합니다. 물과 전력 관리에 도움이 됩니다.",
      ja_segments:[
        {text:"NASA",romanization:"nasa",zh:"NASA"},{text:"の",romanization:"no",zh:"的"},{text:"衛星",reading:"えいせい",romanization:"eisei",zh:"卫星"},{text:"データ",romanization:"dēta",zh:"数据"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"川",reading:"かわ",romanization:"kawa",zh:"河流"},{text:"の",romanization:"no",zh:"的"},{text:"予測",reading:"よそく",romanization:"yosoku",zh:"预测"},{text:"に",romanization:"ni",zh:"用于"},{text:"使われています。",reading:"つかわれています",romanization:"tsukawarete imasu",zh:"正在被使用。"},
        {text:"米国",reading:"べいこく",romanization:"beikoku",zh:"美国"},{text:"西部",reading:"せいぶ",romanization:"seibu",zh:"西部"},{text:"では",romanization:"dewa",zh:"在"},{text:"冬",reading:"ふゆ",romanization:"fuyu",zh:"冬季"},{text:"の",romanization:"no",zh:"的"},{text:"雪",reading:"ゆき",romanization:"yuki",zh:"雪"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"とても",romanization:"totemo",zh:"非常"},{text:"少なかった",reading:"すくなかった",romanization:"sukunakatta",zh:"很少"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"予測",reading:"よそく",romanization:"yosoku",zh:"预测"},{text:"システム",romanization:"shisutemu",zh:"系统"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"天気",reading:"てんき",romanization:"tenki",zh:"天气"},{text:"川",reading:"かわ",romanization:"kawa",zh:"河流"},{text:"雪",reading:"ゆき",romanization:"yuki",zh:"雪"},{text:"植物",reading:"しょくぶつ",romanization:"shokubutsu",zh:"植物"},{text:"の",romanization:"no",zh:"的"},{text:"データ",romanization:"dēta",zh:"数据"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"組み合わせます。",reading:"くみあわせます",romanization:"kumiawasemasu",zh:"组合。"},
        {text:"水",reading:"みず",romanization:"mizu",zh:"水"},{text:"と",romanization:"to",zh:"和"},{text:"電力",reading:"でんりょく",romanization:"denryoku",zh:"电力"},{text:"の",romanization:"no",zh:"的"},{text:"管理",reading:"かんり",romanization:"kanri",zh:"管理"},{text:"に",romanization:"ni",zh:"对"},{text:"役立ちます。",reading:"やくだちます",romanization:"yakudachimasu",zh:"有帮助。"}
      ],
      ko_segments:[
        {text:"NASA의",romanization:"nasaui",zh:"NASA 的"},{text:"위성",romanization:"wiseong",zh:"卫星"},{text:"데이터가",romanization:"deiteoga",zh:"数据（主语）"},{text:"강물",romanization:"gangmul",zh:"河水"},{text:"예측에",romanization:"yecheuge",zh:"用于预测"},{text:"쓰이고",romanization:"sseuigo",zh:"被使用并"},{text:"있습니다.",romanization:"itsseumnida",zh:"正在。"},
        {text:"미국",romanization:"miguk",zh:"美国"},{text:"서부에는",romanization:"seobueneun",zh:"西部（主题）"},{text:"겨울",romanization:"gyeoul",zh:"冬季"},{text:"눈이",romanization:"nuni",zh:"雪（主语）"},{text:"매우",romanization:"maeu",zh:"非常"},{text:"적었습니다.",romanization:"jeogeotsseumnida",zh:"很少。"},
        {text:"예측",romanization:"yecheuk",zh:"预测"},{text:"시스템은",romanization:"siseutemeun",zh:"系统（主题）"},{text:"날씨,",romanization:"nalssi",zh:"天气，"},{text:"강,",romanization:"gang",zh:"河流，"},{text:"눈,",romanization:"nun",zh:"雪，"},{text:"식물",romanization:"singmul",zh:"植物"},{text:"데이터를",romanization:"deiteoreul",zh:"数据（宾语）"},{text:"함께",romanization:"hamkke",zh:"一起"},{text:"사용합니다.",romanization:"sayonghamnida",zh:"使用。"},
        {text:"물과",romanization:"mulgwa",zh:"水和"},{text:"전력",romanization:"jeollyeok",zh:"电力"},{text:"관리에",romanization:"gwallie",zh:"对管理"},{text:"도움이",romanization:"doumi",zh:"帮助（主语）"},{text:"됩니다.",romanization:"doemnida",zh:"成为。"}
      ]
    },
  ],
  deep_read: {
    category:"Finance · Markets · Central Banks",
    title_en:"War, oil and rates: why bonds have become the pressure gauge again",
    title_zh:"战争、油价与利率：债券市场重新成为全球经济的压力计",
    minutes:14,
    standfirst:"Six months into the Iran war, markets are watching the same chain from several angles: energy supply affects inflation, inflation affects yields, and yields reshape the price investors are willing to pay for technology and other long-duration growth.",
    paragraphs:[
      { en:"Bond markets translate expectations into prices with unusual speed. When investors sell a government bond, its price falls and its yield rises. That yield is not confined to one security: the ten-year Treasury rate is a benchmark for mortgages, corporate borrowing and the valuation of many financial assets. This is why a sharp rise in long-term yields quickly becomes an economic and political issue. It raises financing costs even when a central bank has not changed its short-term policy rate.", zh:"债券市场会以极快速度把预期转化为价格。当投资者卖出政府债券时，债券价格下降、收益率上升。这种收益率并不只影响一只证券：十年期美国国债利率还是按揭贷款、企业融资和大量金融资产估值的基准。因此，长期收益率快速上升会迅速成为经济与政治问题。即使央行没有调整短期政策利率，社会融资成本也可能上升。" },
      { en:"A Treasury buyback is best understood as market maintenance. The government offers to purchase older securities that may trade less easily than newly issued benchmark bonds. Dealers receive cash, the supply of those older bonds falls and price differences can narrow. The operation may improve liquidity and reduce temporary disorder. It is not the same as cancelling the government's financing needs. Securities bought back are normally replaced within the broader funding plan, so the transaction changes the composition and functioning of the market more than the underlying fiscal arithmetic.", zh:"理解财政部回购最合适的方式，是把它看作市场维护。政府提出购买流动性较差的旧债券；交易商获得现金，旧券供给减少，新旧债券之间的价格差异可能收窄。这个操作可以改善流动性并减少短期市场失序。但它并不等于取消政府的融资需求。被回购的证券通常会在更广泛的融资计划中由新发行替代，因此交易改变的主要是债务构成和市场运行方式，而不是基础财政算术。" },
      { en:"That distinction helps explain why the first fall in yields did not last. Investors are still asking how much debt the government will issue, how persistent inflation will be and how much compensation they require for holding long maturities. Heavy borrowing by companies—including technology firms financing data centers—also competes for the same pool of savings. A larger buyback can remove a local bottleneck, but it cannot erase the term premium that investors demand when uncertainty about inflation and supply increases.", zh:"这一区分也解释了为什么收益率最初下降后很快反弹。投资者仍在追问：政府还要发行多少债券、通胀会持续多久、持有长期债券需要多少额外补偿。企业的大规模融资——包括科技公司为数据中心筹资——也在争夺同一池储蓄。扩大回购可以消除局部瓶颈，却无法抹去期限溢价；当通胀和供给的不确定性上升时，投资者会要求更高的长期补偿。" },
      { en:"The episode also highlights an institutional boundary. A central bank sets monetary policy to pursue objectives such as price stability and employment. A treasury manages the government's cash, debt issuance and market liquidity. Their actions inevitably interact, but they are not supposed to become substitutes for one another. If debt management appears designed to defend a particular yield level, investors may wonder whether fiscal pressure is beginning to influence monetary conditions. The important question is not whether officials communicate; it is whether each institution keeps a clear and credible objective.", zh:"这一事件还凸显了制度边界。央行通过货币政策追求价格稳定和就业等目标；财政部则管理政府现金、债务发行和市场流动性。两者的行动必然相互影响，但不应互相替代。如果债务管理看起来是在捍卫某个具体收益率水平，投资者可能会怀疑财政压力是否开始影响货币条件。关键并不是官员之间能否沟通，而是每个机构是否保持清晰且可信的目标。" },
      { en:"For readers, the useful response is to watch a small set of signals rather than one dramatic announcement. Auction demand shows whether buyers will absorb new supply. Inflation expectations reveal whether investors trust future price stability. The term premium indicates the extra return required for long commitments. The mix of bills and long-term bonds shows how financing risk is distributed through time. Buybacks matter, but they are one instrument inside this larger system. They can buy breathing room; lasting calm requires confidence in both inflation control and fiscal direction.", zh:"对读者而言，更有用的做法不是盯住一次戏剧性公告，而是观察一组有限信号。国债拍卖需求显示买家是否愿意吸收新供给；通胀预期反映投资者是否相信未来价格稳定；期限溢价表示长期承诺所要求的额外回报；短期国库券与长期债券的发行组合，则显示融资风险如何在时间上分布。回购很重要，但只是整个系统中的一项工具。它能争取喘息空间；要获得持久平静，还需要市场相信通胀控制与财政方向。" },
    ]
  },
  context:[
    { title:"为什么债券价格和收益率方向相反？", text:"债券承诺的票息通常固定。当市场价格下降时，同样的未来现金流相对于买入价格变得更高，因此收益率上升；价格上涨时则相反。" },
    { title:"流动性回购和量化宽松有什么区别？", text:"财政部流动性回购主要调整债务结构并改善旧券交易；量化宽松通常由央行创造准备金购买资产，以影响整体金融条件和货币政策传导。两者主体、目标和资产负债表含义不同。" },
    { title:"什么是期限溢价？", text:"投资者持有长期债券，要承担未来通胀、利率和供给变化的不确定性。期限溢价就是他们为承担这些长期风险而要求的额外回报。" },
  ],
  history_lens:{
    then:"2000–2002", now:"2024–2026", title:"同样叫“国债回购”，财政背景可以完全不同",
    text:"美国财政部在 2000 年启动回购时，联邦财政盈余使部分旧债可能变得稀缺，回购有助于维持基准债券市场。2024 年恢复的常规回购则发生在高债务与持续融资需求环境中，更强调流动性支持和现金管理。",
    similarities:"两个时期都使用回购改善债券市场运作，并处理不同期限证券之间的流动性差异。",
    differences:"早期回购伴随财政盈余与债务下降预期；今天的回购并不减少净融资需求，市场更关心赤字、通胀和长期供给。"
  },
  challenge:[
    { id:1, kind:"English", question:"What does a bond buyback primarily improve in today's report?", options:["Market liquidity", "The weather forecast", "Corporate profits"], answer:0, explanation:"The Treasury described the operations as liquidity support for longer-dated securities." },
    { id:2, kind:"日本語", question:"「金利（きんり）」の意味は？", options:["利率", "国债", "预算"], answer:0, explanation:"金利 means an interest rate. 文中では長期国債の利率を指します。" },
    { id:3, kind:"한국어", question:"“재정 적자”는 무엇입니까?", options:["财政赤字", "市场流动性", "能源价格"], answer:0, explanation:"재정 적자 means fiscal deficit: 政府支出超过收入形成的差额。" },
    { id:4, kind:"Translation", question:"“这项措施只能暂时缓解压力。” 最自然的英文是？", options:["The measure can only ease pressure temporarily.", "The pressure measures temporary.", "This temporarily is only measure."], answer:0, explanation:"Ease pressure 是“缓解压力”的自然搭配，temporarily 表示暂时。" },
    { id:5, kind:"Knowledge", question:"为什么扩大回购不等于消除政府融资需求？", options:["因为回购只在周末进行", "因为被回购的债券通常会在整体融资计划中由新发行替代", "因为长期债券没有价格"], answer:1, explanation:"流动性回购主要改变债务构成和市场运行，不会自动减少预算赤字或净借款需求。" },
  ],
  completion:false,
  difficulty_feedback:null,
};
