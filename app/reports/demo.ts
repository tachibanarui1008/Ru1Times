import type { DailyReport } from "../report-types";

export const demoReport: DailyReport = {
  id: "2026-08-21-demo",
  date: "2026-08-21",
  published_at: "2026-08-21T08:00:00+08:00",
  updated_at: "2026-08-21T08:00:00+08:00",
  edition_number: 0,
  demo: true,
  estimated_minutes: 40,
  ai_credit: { provider: "OpenAI", model: "GPT-5.6 Sol", role: "资料整理、内容编辑与版面协作" },
  sources: [],
  big_story: {
    category: "Technology · AI Infrastructure",
    title_zh: "塑造下一阶段人工智能的静默基础设施竞赛",
    title_en: "The quiet infrastructure race shaping the next era of AI",
    summary: "算法吸引了最多关注，但芯片、电力、冷却系统与数据中心，正共同决定 AI 能以多快的速度进入现实世界。",
    minutes: 14,
  },
  hot_words: [
    { en:"Semiconductor", zh:"半导体", ja:"半導体（はんどうたい）", ja_romaji:"handōtai", ko:"반도체", ko_romaja:"bandoche", why_today:"AI 算力竞争的物理基础，也是贸易与产业政策的长期关键词。", example:"Advanced semiconductors remain central to the expansion of AI infrastructure.", topic:"Technology" },
    { en:"Grid", zh:"电网", ja:"電力網（でんりょくもう）", ja_romaji:"denryokumō", ko:"전력망", ko_romaja:"jeollyeongmang", why_today:"数据中心的用电需求让电网容量成为科技发展约束。", example:"Utilities are upgrading the grid to serve power-hungry data centers.", topic:"Energy" },
    { en:"Bottleneck", zh:"瓶颈；限制环节", ja:"ボトルネック", ja_romaji:"botorunekku", ko:"병목 현상", ko_romaja:"byeongmok hyeonsang", why_today:"理解供应链、能源与生产能力限制时非常常用。", example:"Power availability may become a bigger bottleneck than chip supply.", topic:"Economy" },
    { en:"Resilience", zh:"韧性；抗冲击能力", ja:"強靱性（きょうじんせい）", ja_romaji:"kyōjinsei", ko:"회복 탄력성", ko_romaja:"hoebok tallyeokseong", why_today:"政策制定者越来越重视关键供应链的抗风险能力。", example:"Governments are investing in supply-chain resilience.", topic:"Policy" },
    { en:"Inference", zh:"推理；模型运行", ja:"推論（すいろん）", ja_romaji:"suiron", ko:"추론", ko_romaja:"churon", why_today:"AI 从训练走向大规模应用时，推理成本尤其重要。", example:"Efficient inference can make AI services cheaper to operate.", topic:"AI" },
    { en:"Capacity", zh:"产能；容量", ja:"能力（のうりょく）・容量（ようりょう）", ja_romaji:"nōryoku / yōryō", ko:"용량", ko_romaja:"yongnyang", why_today:"可描述工厂、电网和数据中心能够承载的上限。", example:"New generation capacity will take years to connect to the grid.", topic:"Energy" },
    { en:"Subsidy", zh:"补贴", ja:"補助金（ほじょきん）", ja_romaji:"hojokin", ko:"보조금", ko_romaja:"bojo-geum", why_today:"芯片与清洁能源产业政策中反复出现。", example:"The subsidy is designed to attract long-term manufacturing investment.", topic:"Policy" },
    { en:"Trade-off", zh:"权衡；取舍", ja:"トレードオフ", ja_romaji:"torēdo ofu", ko:"상충 관계", ko_romaja:"sangchung gwangye", why_today:"复杂政策通常不是单一最优解，而是多目标取舍。", example:"There is a trade-off between rapid construction and local oversight.", topic:"Knowledge" },
  ],
  expressions: [
    { language:"English", flag:"EN", phrase:"That’s a stretch.", meaning:"这有点牵强。", nuance:"礼貌但清楚地指出某个推论缺少足够依据。", scene:"会议、朋友讨论、评论观点", dialogue:"A: This one chart proves the whole market has changed.\nB: That’s a stretch. We need more evidence.", register:"中性 · 非正式到半正式", frequency:"常用", note:"比 That’s wrong 更缓和，但语气仍可能显得直接。" },
    { language:"日本語", flag:"JP", phrase:"たしかに、それはそう。", romanization:"tashika ni, sore wa sō", meaning:"确实，是这么回事。", nuance:"自然地承认对方说得有道理，也可用来缓和分歧。", scene:"朋友聊天、轻松的工作讨论", dialogue:"A：時間（じかん）がかかるね。\nB：たしかに、それはそう。", register:"日常 · 自然", frequency:"很常用", note:"たしかに 后稍作停顿，会更接近日常语感。" },
    { language:"한국어", flag:"KR", phrase:"그럴 수도 있죠.", romanization:"geureol sudo itjyo", meaning:"也有可能是那样。", nuance:"表示接受一种可能性，但不一定完全同意。", scene:"讨论、委婉回应、职场沟通", dialogue:"A: 계획이 바뀔 것 같아요.\nB: 그럴 수도 있죠.", register:"礼貌 · 日常", frequency:"很常用", note:"句尾 있죠 比 있어요 多一点共同确认的感觉。" },
  ],
  briefings: [
    { id:1, category:"Technology / AI", title_zh:"AI 扩张开始受到电力与土地条件约束", title_en:"AI expansion meets the physical limits of power and land", source:"小橘日报样刊", minutes:3,
      zh:"大型 AI 系统需要越来越多的数据中心。企业不仅要采购芯片，还要寻找稳定电力、冷却用水、网络连接和可建设土地。基础设施审批速度因此成为新变量。",
      en:"The expansion of artificial intelligence is becoming a physical infrastructure story. Companies still need advanced chips, but they must also secure reliable electricity, cooling systems, network links and suitable land. As a result, grid connections and local permitting can shape where—and how quickly—new computing capacity is built.",
      ja:"AI の拡大（かくだい）には、多くのデータセンターが必要（ひつよう）です。半導体（はんどうたい）だけではなく、電気（でんき）や水（みず）、土地（とち）も大切です。建設（けんせつ）の許可（きょか）にも時間がかかります。",
      ko:"AI가 커지면서 데이터 센터가 더 많이 필요합니다. 반도체뿐 아니라 전기, 물, 땅도 중요합니다. 건설 허가와 전력 연결에는 시간이 걸릴 수 있습니다.",
      ja_segments:[
        {text:"AI",romanization:"ē ai",zh:"AI"},{text:"の",romanization:"no",zh:"的"},{text:"拡大",reading:"かくだい",romanization:"kakudai",zh:"扩大"},{text:"には",romanization:"ni wa",zh:"对于"},{text:"多く",reading:"おおく",romanization:"ōku",zh:"许多"},{text:"の",romanization:"no",zh:"的"},{text:"データセンター",romanization:"dēta sentā",zh:"数据中心"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"必要",reading:"ひつよう",romanization:"hitsuyō",zh:"必要"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"半導体",reading:"はんどうたい",romanization:"handōtai",zh:"半导体"},{text:"だけ",romanization:"dake",zh:"只"},{text:"では",romanization:"dewa",zh:"并不是"},{text:"なく、",romanization:"naku",zh:"而且不止，"},{text:"電気",reading:"でんき",romanization:"denki",zh:"电"},{text:"や",romanization:"ya",zh:"和"},{text:"水",reading:"みず",romanization:"mizu",zh:"水"},{text:"土地",reading:"とち",romanization:"tochi",zh:"土地"},{text:"も",romanization:"mo",zh:"也"},{text:"大切",reading:"たいせつ",romanization:"taisetsu",zh:"重要"},{text:"です。",romanization:"desu",zh:"是。"},
        {text:"建設",reading:"けんせつ",romanization:"kensetsu",zh:"建设"},{text:"の",romanization:"no",zh:"的"},{text:"許可",reading:"きょか",romanization:"kyoka",zh:"许可"},{text:"にも",romanization:"ni mo",zh:"也"},{text:"時間",reading:"じかん",romanization:"jikan",zh:"时间"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"かかります。",romanization:"kakarimasu",zh:"需要。"}
      ],
      ko_segments:[
        {text:"AI가",romanization:"eiaiga",zh:"AI（主语）"},{text:"커지면서",romanization:"keojimyeonseo",zh:"随着扩大"},{text:"데이터",romanization:"deiteo",zh:"数据"},{text:"센터가",romanization:"senteoga",zh:"中心（主语）"},{text:"더",romanization:"deo",zh:"更"},{text:"많이",romanization:"mani",zh:"多"},{text:"필요합니다.",romanization:"piryohamnida",zh:"需要。"},
        {text:"반도체뿐",romanization:"bandocheppun",zh:"不只半导体"},{text:"아니라",romanization:"anira",zh:"而且"},{text:"전기,",romanization:"jeongi",zh:"电，"},{text:"물,",romanization:"mul",zh:"水，"},{text:"땅도",romanization:"ttangdo",zh:"土地也"},{text:"중요합니다.",romanization:"jungyohamnida",zh:"很重要。"},
        {text:"건설",romanization:"geonseol",zh:"建设"},{text:"허가와",romanization:"heogawa",zh:"许可和"},{text:"전력",romanization:"jeollyeok",zh:"电力"},{text:"연결에는",romanization:"yeongyeoreneun",zh:"连接方面"},{text:"시간이",romanization:"sigani",zh:"时间（主语）"},{text:"걸릴",romanization:"geollil",zh:"花费"},{text:"수",romanization:"su",zh:"可能性"},{text:"있습니다.",romanization:"itsseumnida",zh:"存在。"}
      ] },
    { id:2, category:"Politics / International", title_zh:"产业政策正在重新定义国家间合作", title_en:"Industrial policy is reshaping international cooperation", source:"小橘日报样刊", minutes:3,
      zh:"各国试图扩大关键技术的国内生产，同时又无法摆脱跨国供应链。补贴与出口规则既可能吸引投资，也可能让伙伴之间产生摩擦。政策的真正难点是安全与效率如何平衡。",
      en:"Governments want more domestic production of critical technologies, yet modern supply chains remain deeply international. Subsidies and export rules may attract investment at home while creating friction with partners abroad. The central policy challenge is balancing economic efficiency with national resilience.",
      ja:"多くの国（くに）は、大切な技術（ぎじゅつ）を国内（こくない）で作りたいと考えています。しかし、部品（ぶひん）は世界（せかい）の多くの国から来ます。安全（あんぜん）と効率（こうりつ）のバランスが必要です。",
      ko:"많은 나라는 중요한 기술을 국내에서 만들고 싶어 합니다. 하지만 공급망은 여러 나라와 연결되어 있습니다. 안전과 효율 사이의 균형이 중요합니다.",
      ja_segments:[
        {text:"多く",reading:"おおく",romanization:"ōku",zh:"许多"},{text:"の",romanization:"no",zh:"的"},{text:"国",reading:"くに",romanization:"kuni",zh:"国家"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"大切",reading:"たいせつ",romanization:"taisetsu",zh:"重要"},{text:"な",romanization:"na",zh:"的"},{text:"技術",reading:"ぎじゅつ",romanization:"gijutsu",zh:"技术"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"国内",reading:"こくない",romanization:"kokunai",zh:"国内"},{text:"で",romanization:"de",zh:"在"},{text:"作りたい",reading:"つくりたい",romanization:"tsukuritai",zh:"想制造"},{text:"と",romanization:"to",zh:"引用标记"},{text:"考えています。",reading:"かんがえています",romanization:"kangaete imasu",zh:"正在考虑。"},
        {text:"しかし、",romanization:"shikashi",zh:"但是，"},{text:"部品",reading:"ぶひん",romanization:"buhin",zh:"零部件"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"世界",reading:"せかい",romanization:"sekai",zh:"世界"},{text:"の",romanization:"no",zh:"的"},{text:"多く",reading:"おおく",romanization:"ōku",zh:"许多"},{text:"の",romanization:"no",zh:"的"},{text:"国",reading:"くに",romanization:"kuni",zh:"国家"},{text:"から",romanization:"kara",zh:"从"},{text:"来ます。",reading:"きます",romanization:"kimasu",zh:"来。"},
        {text:"安全",reading:"あんぜん",romanization:"anzen",zh:"安全"},{text:"と",romanization:"to",zh:"与"},{text:"効率",reading:"こうりつ",romanization:"kōritsu",zh:"效率"},{text:"の",romanization:"no",zh:"的"},{text:"バランス",romanization:"baransu",zh:"平衡"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"必要",reading:"ひつよう",romanization:"hitsuyō",zh:"必要"},{text:"です。",romanization:"desu",zh:"是。"}
      ],
      ko_segments:[
        {text:"많은",romanization:"maneun",zh:"许多"},{text:"나라는",romanization:"naraneun",zh:"国家（主题）"},{text:"중요한",romanization:"jungyohan",zh:"重要的"},{text:"기술을",romanization:"gisureul",zh:"技术（宾语）"},{text:"국내에서",romanization:"gungnaeeseo",zh:"在国内"},{text:"만들고",romanization:"mandeulgo",zh:"制造并"},{text:"싶어",romanization:"sipeo",zh:"想要"},{text:"합니다.",romanization:"hamnida",zh:"表示。"},
        {text:"하지만",romanization:"hajiman",zh:"但是"},{text:"공급망은",romanization:"gonggeummangeun",zh:"供应链（主题）"},{text:"여러",romanization:"yeoreo",zh:"多个"},{text:"나라와",romanization:"narawa",zh:"与国家"},{text:"연결되어",romanization:"yeongyeoldoeeo",zh:"连接着"},{text:"있습니다.",romanization:"itsseumnida",zh:"存在。"},
        {text:"안전과",romanization:"anjeongwa",zh:"安全与"},{text:"효율",romanization:"hyoyul",zh:"效率"},{text:"사이의",romanization:"saiui",zh:"之间的"},{text:"균형이",romanization:"gyunhyeongi",zh:"平衡（主语）"},{text:"중요합니다.",romanization:"jungyohamnida",zh:"很重要。"}
      ] },
    { id:3, category:"Economy / Finance", title_zh:"资本支出热潮改变了投资者观察指标", title_en:"The capital-spending boom changes what investors watch", source:"小橘日报样刊", minutes:3,
      zh:"AI 相关支出从软件研发延伸至长期基础设施。投资者开始更关注资本开支、折旧、能源合同与设备利用率，而不只是用户增长。庞大投入能否转化为稳定收入，仍是核心问题。",
      en:"AI-related spending has moved beyond software research into long-lived infrastructure. Investors are paying closer attention to capital expenditure, depreciation, energy contracts and equipment utilization—not only user growth. The key question is whether heavy investment can produce durable revenue and acceptable returns.",
      ja:"AI への投資（とうし）は、ソフトウェアだけではありません。会社（かいしゃ）は建物（たてもの）や機械（きかい）、電気にもお金を使います。投資家（とうしか）は、そのお金が将来（しょうらい）の利益（りえき）になるかを見ています。",
      ko:"AI 투자는 소프트웨어만의 이야기가 아닙니다. 기업은 건물, 장비, 전기에도 큰돈을 씁니다. 투자자는 이 지출이 앞으로 안정적인 수익을 만들 수 있는지 봅니다.",
      ja_segments:[
        {text:"AI",romanization:"ē ai",zh:"AI"},{text:"へ",romanization:"e",zh:"向"},{text:"の",romanization:"no",zh:"的"},{text:"投資",reading:"とうし",romanization:"tōshi",zh:"投资"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"ソフトウェア",romanization:"sofutowea",zh:"软件"},{text:"だけ",romanization:"dake",zh:"只"},{text:"では",romanization:"dewa",zh:"并不是"},{text:"ありません。",romanization:"arimasen",zh:"不是。"},
        {text:"会社",reading:"かいしゃ",romanization:"kaisha",zh:"公司"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"建物",reading:"たてもの",romanization:"tatemono",zh:"建筑"},{text:"や",romanization:"ya",zh:"和"},{text:"機械",reading:"きかい",romanization:"kikai",zh:"机器"},{text:"電気",reading:"でんき",romanization:"denki",zh:"电"},{text:"にも",romanization:"ni mo",zh:"也用于"},{text:"お金",reading:"おかね",romanization:"okane",zh:"钱"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"使います。",reading:"つかいます",romanization:"tsukaimasu",zh:"使用。"},
        {text:"投資家",reading:"とうしか",romanization:"tōshika",zh:"投资者"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"その",romanization:"sono",zh:"那些"},{text:"お金",reading:"おかね",romanization:"okane",zh:"资金"},{text:"が",romanization:"ga",zh:"主语标记"},{text:"将来",reading:"しょうらい",romanization:"shōrai",zh:"将来"},{text:"の",romanization:"no",zh:"的"},{text:"利益",reading:"りえき",romanization:"rieki",zh:"利润"},{text:"に",romanization:"ni",zh:"成为"},{text:"なる",romanization:"naru",zh:"变成"},{text:"か",romanization:"ka",zh:"是否"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"見ています。",reading:"みています",romanization:"mite imasu",zh:"正在观察。"}
      ],
      ko_segments:[
        {text:"AI",romanization:"eiai",zh:"AI"},{text:"투자는",romanization:"tujaneun",zh:"投资（主题）"},{text:"소프트웨어만의",romanization:"sopeuteuweeomanui",zh:"只属于软件的"},{text:"이야기가",romanization:"iyagiga",zh:"事情（主语）"},{text:"아닙니다.",romanization:"animnida",zh:"不是。"},
        {text:"기업은",romanization:"gieobeun",zh:"企业（主题）"},{text:"건물,",romanization:"geonmul",zh:"建筑，"},{text:"장비,",romanization:"jangbi",zh:"设备，"},{text:"전기에도",romanization:"jeongiedo",zh:"在电力上也"},{text:"큰돈을",romanization:"keundoneul",zh:"大笔资金"},{text:"씁니다.",romanization:"sseumnida",zh:"花费。"},
        {text:"투자자는",romanization:"tujajaneun",zh:"投资者（主题）"},{text:"이",romanization:"i",zh:"这"},{text:"지출이",romanization:"jichuri",zh:"支出（主语）"},{text:"앞으로",romanization:"apeuro",zh:"今后"},{text:"안정적인",romanization:"anjeongjeogin",zh:"稳定的"},{text:"수익을",romanization:"suigeul",zh:"收益（宾语）"},{text:"만들",romanization:"mandeul",zh:"创造"},{text:"수",romanization:"su",zh:"可能性"},{text:"있는지",romanization:"inneunji",zh:"是否能"},{text:"봅니다.",romanization:"bomnida",zh:"观察。"}
      ] },
    { id:4, category:"Science / Policy", title_zh:"高效冷却成为计算科学的新前沿", title_en:"Efficient cooling becomes a new frontier in computing", source:"小橘日报样刊", minutes:3,
      zh:"高性能芯片会产生大量热量。工程师正在改进液冷、热量回收和机房布局，以降低能耗并延长设备寿命。冷却技术看似低调，却直接影响计算成本和环境足迹。",
      en:"High-performance chips generate substantial heat. Engineers are improving liquid cooling, heat reuse and data-center layouts to reduce energy consumption and extend equipment life. Cooling may appear less glamorous than model design, but it directly affects computing costs and environmental impact.",
      ja:"高性能（こうせいのう）の半導体は、たくさんの熱（ねつ）を出します。技術者（ぎじゅつしゃ）は、水を使う冷却（れいきゃく）などを研究しています。冷却はコストと環境（かんきょう）に関係します。",
      ko:"고성능 반도체는 열을 많이 만듭니다. 기술자들은 액체 냉각과 열 재사용 방법을 연구합니다. 냉각 기술은 비용과 환경에 직접 영향을 줍니다.",
      ja_segments:[
        {text:"高性能",reading:"こうせいのう",romanization:"kōseinō",zh:"高性能"},{text:"の",romanization:"no",zh:"的"},{text:"半導体",reading:"はんどうたい",romanization:"handōtai",zh:"半导体"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"たくさん",romanization:"takusan",zh:"大量"},{text:"の",romanization:"no",zh:"的"},{text:"熱",reading:"ねつ",romanization:"netsu",zh:"热量"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"出します。",reading:"だします",romanization:"dashimasu",zh:"产生。"},
        {text:"技術者",reading:"ぎじゅつしゃ",romanization:"gijutsusha",zh:"技术人员"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"水",reading:"みず",romanization:"mizu",zh:"水"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"使う",reading:"つかう",romanization:"tsukau",zh:"使用"},{text:"冷却",reading:"れいきゃく",romanization:"reikyaku",zh:"冷却"},{text:"など",romanization:"nado",zh:"等等"},{text:"を",romanization:"o",zh:"宾语标记"},{text:"研究",reading:"けんきゅう",romanization:"kenkyū",zh:"研究"},{text:"しています。",romanization:"shite imasu",zh:"正在做。"},
        {text:"冷却",reading:"れいきゃく",romanization:"reikyaku",zh:"冷却"},{text:"は",romanization:"wa",zh:"主题标记"},{text:"コスト",romanization:"kosuto",zh:"成本"},{text:"と",romanization:"to",zh:"和"},{text:"環境",reading:"かんきょう",romanization:"kankyō",zh:"环境"},{text:"に",romanization:"ni",zh:"与"},{text:"関係",reading:"かんけい",romanization:"kankei",zh:"关系"},{text:"します。",romanization:"shimasu",zh:"有关。"}
      ],
      ko_segments:[
        {text:"고성능",romanization:"goseongneung",zh:"高性能"},{text:"반도체는",romanization:"bandocheneun",zh:"半导体（主题）"},{text:"열을",romanization:"yeoreul",zh:"热量（宾语）"},{text:"많이",romanization:"mani",zh:"大量"},{text:"만듭니다.",romanization:"mandeumnida",zh:"产生。"},
        {text:"기술자들은",romanization:"gisuljadeureun",zh:"技术人员（主题）"},{text:"액체",romanization:"aekche",zh:"液体"},{text:"냉각과",romanization:"naenggakgwa",zh:"冷却和"},{text:"열",romanization:"yeol",zh:"热量"},{text:"재사용",romanization:"jaesayong",zh:"再利用"},{text:"방법을",romanization:"bangbeobeul",zh:"方法（宾语）"},{text:"연구합니다.",romanization:"yeonguhamnida",zh:"研究。"},
        {text:"냉각",romanization:"naenggak",zh:"冷却"},{text:"기술은",romanization:"gisureun",zh:"技术（主题）"},{text:"비용과",romanization:"biyonggwa",zh:"成本和"},{text:"환경에",romanization:"hwangyeonge",zh:"对环境"},{text:"직접",romanization:"jikjeop",zh:"直接"},{text:"영향을",romanization:"yeonghyangeul",zh:"影响（宾语）"},{text:"줍니다.",romanization:"jumnida",zh:"产生。"}
      ] },
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
