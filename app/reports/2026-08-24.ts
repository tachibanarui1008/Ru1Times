import type { DailyReport } from "../report-types";

export const realReport20260824: DailyReport = {
  id: "2026-08-24",
  date: "2026-08-24",
  published_at: "2026-08-24T08:30:00+08:00",
  updated_at: "2026-08-24T08:30:00+08:00",
  edition_number: 4,
  demo: false,
  estimated_minutes: 40,
  ai_credit: { provider: "MiniMax", model: "MiniMax-M3", role: "资料研究、事实核查与编辑协作" },
  sources: [
    { label:"每日经济新闻", title:"上纬新材消费级机器人开启预订；人形机器人超越人类男子400米世界纪录", url:"https://www.163.com/dy/article/L532HRVS0512B07B.html", published:"2026-08-24" },
    { label:"央广网", title:"「冰丝带」竞速！人形机器人赛场见证中国硬核科技加速突围", url:"https://new.qq.com/rain/a/20260824A02U0N00", published:"2026-08-24" },
    { label:"金台资讯", title:"机器人如何跑出「加速度」", url:"https://www.163.com/dy/article/L53ABETL05346936.html", published:"2026-08-24" },
    { label:"第一财经", title:"从「害羞狂奔」到1500米耐力赛，机器人一天多次刷新人类纪录", url:"https://so.html5.qq.com/page/real/search_news?docid=70000021_5206a8b908c77352", published:"2026-08-24" },
    { label:"东方财富", title:"东方财富财经早餐 8月24日周一", url:"https://emh5wap.eastmoney.com/Info/Detail/202608233850402334", published:"2026-08-24" },
    { label:"财联社", title:"加美贸易谈判破裂 加拿大宣布9月8日起对等反制关税", url:"https://www.163.com/dy/article/L50H96SC05198CJN.html", published:"2026-08-23" },
  ],
  big_story: {
    category:"Robotics · Sports · Embodied AI",
    title_zh:"一年从 88 秒跑到 38 秒：天工 Ultra 在「冰丝带」跑过人类男子 400 米世界纪录",
    title_en:"From 88 seconds to 38 in one year: Tiangong Ultra breaks the men's 400m world record",
    summary:"8 月 23 日下午，第二届世界人形机器人运动会 400 米大型组决赛在国家速滑馆「冰丝带」结束。北京人形机器人创新中心的天工 Ultra 以 38.15 秒率先冲线，超过人类男子 400 米世界纪录 43.03 秒。去年的同项冠军是高羿科技/宇树 H1 组合，成绩 1 分 28.03 秒——一年提速近 50 秒，把具身智能的「能跑」推向「跑得快且稳」。",
    minutes:12,
    source_label:"每日经济新闻",
    source_url:"https://www.163.com/dy/article/L532HRVS0512B07B.html",
  },
  hot_words: [
    { en:"Humanoid Games / Tiangong", zh:"人形机器人运动会 · 天工", ja:"世界ヒューマノイド大会（せかいヒューマノイドたいかい）", ja_romaji:"sekai hyūmanoido taikai", ko:"휴머노이드 로봇 운동회", ko_romaja:"hyumeon-oideu robot undonghoe", why_today:"第二届世界人形机器人运动会 8 月 22 日在「冰丝带」开赛，赛期 5 天、赛项 51 项。", example:"The 2nd World Humanoid Games is being held at the Ice Ribbon.", topic:"Robotics" },
    { en:"World record", zh:"世界纪录", ja:"世界記録（せかいきろく）", ja_romaji:"sekai kiroku", ko:"세계 기록", ko_romaja:"segye girok", why_today:"38.15 秒比人类男子 400 米世界纪录 43.03 秒快了将近 5 秒，是新闻头版的真正落点。", example:"Tiangong Ultra ran a world record of 38.15 seconds.", topic:"Sports" },
    { en:"Embodied AI", zh:"具身智能", ja:"エンボディド・インテリジェンス", ja_romaji:"enbodido intarejijensu", ko:"구현 지능", ko_romaja:"guhyeon jineung", why_today:"具身智能这一年被反复提起，但直到今天才有了一个大众可以一眼理解的成绩单。", example:"Embodied AI is moving from labs into measurable performance.", topic:"Robotics" },
    { en:"Autonomous run", zh:"全自主奔跑", ja:"全自律走行（ぜんじりつそうこう）", ja_romaji:"zenjiritsu sōkō", ko:"자율 주행", ko_romaja:"jayul juhaeng", why_today:"今年的田径项目更多机器人脱离遥控器；要识别发令枪、自主拐弯、自主冲线。", example:"Robots must run the 400m autonomously.", topic:"Robotics" },
    { en:"Velocity (10 m/s)", zh:"速度（米每秒）", ja:"速度（そくど）", ja_romaji:"sokudo", ko:"속도", ko_romaja:"sokdo", why_today:"去年顶尖人形机器人跑速不到 5 米/秒，今天天工 Ultra 决赛中约 10.5 米/秒，一年内翻倍。", example:"Top humanoid speed has roughly doubled in a year.", topic:"Technology" },
    { en:"Launch window", zh:"发射窗口", ja:"打ち上げ期間（うちあげきかん）", ja_romaji:"uchiage kikan", ko:"발사 창구", ko_romaja:"balsa changgu", why_today:"嫦娥七号任务经综合研判不满足发射条件，今年预定窗口不能实施。", example:"Launch windows are dictated by orbital mechanics.", topic:"Space" },
    { en:"Lunar south pole", zh:"月球南极", ja:"月の南極（つきのなんきょく）", ja_romaji:"tsuki no nankyoku", ko:"달 남극", ko_romaja:"dal namgeuk", why_today:"嫦娥七号目标区域是月球南极的水冰与光照条件，本次不发射直接影响后续探月节奏。", example:"Many landers target the lunar south pole.", topic:"Space" },
    { en:"Retaliatory tariff", zh:"反制性关税", ja:"報復関税（ほうふくかんぜい）", ja_romaji:"hōfuku kanzei", ko:"보복 관세", ko_romaja:"bobok gwanse", why_today:"加拿大总理卡尼全国电视讲话后宣布 9 月 8 日对约 200 亿美元美国商品加征报复性关税，对应美方 8 月 22 日生效的 50% 额外关税。", example:"Ottawa announced retaliatory tariffs worth 20 billion US dollars.", topic:"Trade" },
  ],
  expressions: [
    { language:"English", flag:"EN", phrase:"clock a time", meaning:"跑出某个成绩", nuance:"计时类项目里『clock + 时间』等于『跑出 + 时间』，常用于田径、游泳、赛车。", scene:"赛事新闻、田径评论", dialogue:"A: Did your team hit the target?\nB: We clocked 38.15 — under the human world record.", register:"中性 · 体育语境", frequency:"常用", note:"变体：clock in at + 时间。" },
    { language:"日本語", flag:"JP", phrase:"歯をくいしばる。", romanization:"ha wo kuishibaru", meaning:"咬紧牙关；拼命坚持。", nuance:"形容用尽全部意志去挺过艰难时刻，常用于比赛后半程、工程逼近极限的语境。", scene:"比赛解说、人物特写", dialogue:"A：ゴールまであと100メートル。\nB：歯をくいしばって走っています。", register:"稍书面 · 自然", frequency:"常用", note:"也可写作「食いしばる」。" },
    { language:"한국어", flag:"KR", phrase:"속도를 붙잡다.", romanization:"sokdo-reul butjapda", meaning:"抓住速度；把速度感把握住。", nuance:"在报道机器人或汽车的提速时常用来表达稳定的加速曲线，意指不仅『快』还能『保持得住』。", scene:"科技报道、性能评测", dialogue:"A: 이번 모델이 가속이 부드럽나요?\nB: 네, 10미터 매초까지 속도를 잘 붙잡습니다.", register:"日常 · 自然", frequency:"中常用", note:"在产业语境里与『속도를 유지하다』相近。" },
  ],
  briefings: [
    {
      id:1, category:"Robotics / Athletics", title_zh:"400 米大型组：天工 Ultra 38.15 秒跑过人类男子世界纪录", title_en:"400m Large: Tiangong Ultra 38.15s, faster than the men's world record", source:"每日经济新闻 · 央广网", source_url:"https://www.163.com/dy/article/L532HRVS0512B07B.html", minutes:3,
      zh:"8 月 23 日下午，第二届世界人形机器人运动会 400 米大型组决赛在国家速滑馆结束。北京人形机器人创新中心的天工 Ultra 以 38.15 秒率先冲线，把人类男子 400 米世界纪录 43.03 秒甩在身后。亚军、季军归属荣耀机器人「追风仔仔」「惊鸿动力」，分别 39.45 秒、39.66 秒。",
      en:"On the afternoon of August 23, the 400m large-group final at the 2nd World Humanoid Games concluded at the National Speed Skating Oval. Tiangong Ultra from the Beijing Humanoid Robot Innovation Center crossed the line in 38.15 s, leaving the men's world record of 43.03 behind.",
      ja:"八月二十三日の午後、世界ヒューマノイド大会四百メートル大型グループ決勝で、天工Ultraが三十八・一五秒で最初にゴールし、人類の男子四百メートル世界記録四十三・〇三秒を更新しました。",
      ko:"8월 23일 오후, 세계 휴머노이드 로봇 대회 400m 대형그룹 결승에서 천궁Ultra가 38.15초로 먼저 결승선을 통과해 인간 남자 400m 세계기록 43.03초를 앞섰습니다.",
      ja_segments:[{text:"天工Ultra",romanization:"tenkō Ultra",zh:"天工 Ultra"},{text:"が",romanization:"ga",zh:"主语"},{text:"三十八・一五秒",reading:"さんじゅうはちいちごびょう",romanization:"sanjūhachi ichigo byō",zh:"38.15 秒"},{text:"で",romanization:"de",zh:"以"},{text:"ゴール",romanization:"gōru",zh:"冲线"},{text:"しました。",romanization:"shimashita",zh:"了。"}],
      ko_segments:[{text:"천궁Ultra가",romanization:"cheongung-ultraga",zh:"天工 Ultra"},{text:"38.15초로",romanization:"samsip-pal-jeom-o-oseuro",zh:"以 38.15 秒"},{text:"결승선을",romanization:"gyeolseongseon-eul",zh:"冲线（宾语）"},{text:"통과해,",romanization:"tonggahae",zh:"通过了，"},{text:"43.03초를",romanization:"sasip-sam-jeom-ong-seoreul",zh:"43.03 秒"},{text:"앞섰습니다.",romanization:"apseotseumnida",zh:"超过了。"}]
    },
    {
      id:2, category:"Robotics / Athletics", title_zh:"400 米小型组：天工 Omni 45.66 秒，「捂脸跑姿」成网梗", title_en:"400m Small: Tiangong Omni 45.66s, with a hand-over-face running style", source:"第一财经 · 金台资讯", source_url:"https://so.html5.qq.com/page/real/search_news?docid=70000021_5206a8b908c77352", minutes:3,
      zh:"同日下午小型组（身高 ≤ 1.4 米）决赛中，天工 Omni 以 45.66 秒夺冠。它双臂抬到脸旁、身体前倾，「害羞式跑姿」走红。北京人形机器人创新中心算法专家韩刚透露，常规摆臂会让肩部负载大、关节发热；「捂脸跑」让机器人双腿有力、双手舒服。",
      en:"In the small-class (≤1.4 m) final the same afternoon, Tiangong Omni won in 45.66 s. Its hands-up running style went viral. The team reduced weight and strengthened the hips, lifting speed from about 6–7 m/s to roughly 10 m/s.",
      ja:"同日の午後、小型グループ決勝で、天工Omniが四十五・六六秒で優勝しました。『顔覆い走り』が話題です。",
      ko:"같은 날 오후 소형그룹 결승에서 천궁Omni가 45.66초로 우승했습니다. 「얼굴 가리기 달리기」가 화제가 됐습니다.",
      ja_segments:[{text:"天工Omni",romanization:"tenkō Omni",zh:"天工 Omni"},{text:"が",romanization:"ga",zh:"主语"},{text:"優勝",reading:"ゆうしょう",romanization:"yūshō",zh:"冠军"},{text:"しました。",romanization:"shimashita",zh:"了。"}],
      ko_segments:[{text:"천궁Omni가",romanization:"cheongung-omniga",zh:"天工 Omni"},{text:"45.66초로",romanization:"sasip-o-jeom-yuk-seoro",zh:"以 45.66 秒"},{text:"우승했습니다.",romanization:"useunghaetseumnida",zh:"获胜了。"}]
    },
    {
      id:3, category:"Robotics / Viral", title_zh:"百米「闪电」9.32 秒：荣耀机器人自主跑过博尔特，马斯克转发", title_en:"Honor robot runs 100m in 9.32s; Musk reposts", source:"腾讯财经 · 每经", source_url:"https://www.163.com/dy/article/L532HRVS0512B07B.html", minutes:3,
      zh:"人形机器人 100 米大型组（身高 > 1.4 米）预赛中，天卓队跑出 9.39 秒、风火闪电队 9.47 秒，均超越博尔特的人类 100 米世界纪录 9.58 秒。真正引爆海外舆论的是荣耀机器人「闪电」，它以 9.32 秒跑完百米的视频被马斯克在 X 上转发。",
      en:"In the 100m large-class heats, the Tiangong team's T-1 clocked 9.39 s and the Wind-Fire team 9.47 s, both inside Bolt's 9.58-second human world record. The clip that broke internationally came from Honor Robotics' Lightning, which ran the 100m in 9.32 s and was reposted by Elon Musk on X.",
      ja:"百メートル予選で、天卓チームは九・三九秒、風火閃電チームは九・四七秒、いずれもボルトの世界記録九・五八秒を更新しました。栄耀ロボットの『闪电』が海外で大きな話題になりました。",
      ko:"100m 대형그룹 예선에서 천卓팀 9.39초, 풍화섬전팀 9.47초, 모두 볼트 세계기록 9.58초를 넘어섰습니다. 영예로봇 「번개」 영상이 머스크에 의해 X에 다시 게시됐습니다.",
      ja_segments:[{text:"天工チーム",reading:"てんこうチーム",romanization:"tenkō chīmu",zh:"天工队"},{text:"は",romanization:"wa",zh:"主语"},{text:"九・三九秒",reading:"きゅうさんきゅうびょう",romanization:"kyū sankyū byō",zh:"9.39 秒"},{text:"で",romanization:"de",zh:"以"},{text:"ゴール",romanization:"gōru",zh:"冲线"},{text:"しました。",romanization:"shimashita",zh:"了。"}],
      ko_segments:[{text:"천궁팀은",romanization:"cheongungtim-eun",zh:"天工队"},{text:"9.39초를",romanization:"gu-jeom-sam-gu-seoreul",zh:"9.39 秒"},{text:"기록했습니다.",romanization:"girokhaetseumnida",zh:"记录了。"}]
    },
    {
      id:4, category:"Space / Policy", title_zh:"嫦娥七号任务：综合研判后，今年预定窗口不能发射", title_en:"Chang'e-7 will not launch in this year's window after review", source:"新华社 · 央广网", source_url:"https://emh5wap.eastmoney.com/Info/Detail/202608233850402334", minutes:3,
      zh:"中国载人航天工程办公室 8 月 23 日通报：「本着稳妥可靠、万无一失的原则，经综合研判，嫦娥七号任务不满足发射条件，不能在今年预定窗口实施。」嫦娥七号目标区域是月球南极，主要任务包括水冰探测、月基科研与资源开发。",
      en:"The China Manned Space Engineering Office said on August 23 that a comprehensive review concluded the Chang'e-7 mission does not meet launch conditions and cannot be carried out in this year's planned window. Chang'e-7 targets the lunar south pole, with priorities on water-ice detection and on-site science.",
      ja:"有人宇宙船工程弁公室は八月二十三日に、嫦娥七号は今年の予定ウィンドウで実施できないと発表しました。嫦娥七号の目標は月の南極で、主な任務は水の氷の探査です。",
      ko:"중국 유인우주공정판공실은 8월 23일 「종합 판단한 결과 창어 7호가 발사 조건을 충족하지 못해 올해 예정 창구에서 실시할 수 없다」고 발표했습니다.",
      ja_segments:[{text:"嫦娥七号",reading:"ジョウガーシチゴウ",romanization:"Jōgā shichi gō",zh:"嫦娥七号"},{text:"は",romanization:"wa",zh:"主语"},{text:"今年",reading:"ことし",romanization:"kotoshi",zh:"今年"},{text:"の",romanization:"no",zh:"的"},{text:"ウィンドウ",romanization:"windo",zh:"窗口"},{text:"で",romanization:"de",zh:"在"},{text:"実施",reading:"じっし",romanization:"jisshi",zh:"实施"},{text:"できません。",reading:"できません",romanization:"dekimasen",zh:"不能。"}],
      ko_segments:[{text:"창어",romanization:"chang-eo",zh:"嫦娥"},{text:"7호가",romanization:"7-hoga",zh:"7 号"},{text:"올해",romanization:"olhae",zh:"今年"},{text:"예정",romanization:"yejeong",zh:"预定"},{text:"창구에서",romanization:"chang-gu-eseo",zh:"窗口"},{text:"실시될",romanization:"silsidoel",zh:"将实施"},{text:"수",romanization:"su",zh:"能"},{text:"없다고",romanization:"eopdago",zh:"不能"},{text:"발표했습니다.",romanization:"balpyohaetseumnida",zh:"发表了。"}]
    },
  ],
  deep_read: {
    category:"Robotics · Engineering · Embodied AI",
    title_en:"From 88 seconds to 38 in one year: what the 400m final reveals about humanoid engineering",
    title_zh:"从 88 秒到 38 秒：机器人 400 米决赛暴露的工程边界",
    minutes:14,
    standfirst:"一台机器人在一年内把 400 米成绩从 88 秒拉到 38 秒，靠的不是某一项突破，而是结构、电机、减速器、热管理和算法的同步迭代。这一轮速度攀升让人觉得机器人竞赛真正进入了工程时代——每一秒的缩短，都可以被拆成具体的成本与工艺。",
    paragraphs:[
      { en:"Headline numbers can mislead. A humanoid robot running a 400-meter race is not the same animal as a human sprinter: it has no respiratory system to fail, no Achilles tendon to rupture. What it does have is a series of engineering bottlenecks that, once relieved, hand back speed almost for free.", zh:"头条数字有迷惑性。跑 400 米的人形机器人并不等于人类短跑运动员：它没有会衰竭的呼吸系统、没有会撕裂的跟腱。它有的是一连串工程瓶颈，每松一个，速度就几乎自动回吐出来。" },
      { en:"The first bottleneck is mass. Last year's leading bipedal robots still carried the structural weight of an automotive prototype. The Beijing center said the Tiangong Ultra crew spent the month before the Games re-cutting key load paths, lightening the leg structure and stiffening the hip joint.", zh:"第一个瓶颈是重量。去年头部的双足机器人仍带着汽车原型件的结构重量。北京中心透露，天工 Ultra 团队在赛前一个月重新切割关键受力路径，把腿部做轻、把髋关节做强。" },
      { en:"The second bottleneck is heat. A continuous 400-meter run loads the joint motors for roughly 50 to 60 seconds, which is precisely the duration at which many actuator windings begin to derate. The small-robot Omni's hand-over-face posture is not a stylistic choice so much as a thermal one.", zh:"第二个瓶颈是散热。持续 400 米跑意味着关节电机要负荷运行约 50–60 秒，许多电机的绕组正是从这个时长开始降额。小型组 Omni 的捂脸姿势与其说是风格选择，不如说是热管理选择。" },
      { en:"The third bottleneck is intelligence. Once the hardware can move faster than the control policy can decide, the robot slows itself down. The teams that won paired faster motors with learned control policies trained in simulation and then distilled down to on-board compute.", zh:"第三个瓶颈是智能。当硬件跑得比控制策略还能决策的节奏更快，机器人就把自己降速了。本周末获胜的几支队伍，都把更快的电机与在仿真里训练、再蒸馏到车端算力的控制策略配对在一起。" },
      { en:"What the 400-meter result really shows is that embodied AI has crossed a threshold where every additional centimeter jumped, every additional kilogram lifted, and every additional tenth of a second shaved becomes an engineering accounting problem rather than a research question.", zh:"400 米成绩真正说明的是，具身智能已经跨越了一道门槛：往上多跳 1 厘米、往上多举 1 公斤、往前多减 0.1 秒，都变成了工程账目问题，而不是科研问题。" },
    ]
  },
  context:[
    { title:"为什么比赛叫「全自主」跑？", text:"「全自主」指机器人脱离遥控器，要靠自己识别发令枪响、按既定跑道完成起跑、弯道、冲刺并稳住冲线后的急停。本届比赛约有半数机器人以全自主形式参赛；弯道仍是难点，常出现打滑、摔倒后无法继续的情况。" },
    { title:"为什么 Omni 用「捂脸跑姿」？", text:"若按常规摆臂，肩部电机会长时间高负载，引起关节发热，影响续航与减速器寿命。「捂脸跑」把负荷集中在双腿，把肩部扭矩降到接近零，机器人能用同样的电池跑完全程。姿态是由仿真学习自发生成的。" },
    { title:"嫦娥七号为什么今年延后？", text:"工程办公室的措辞是「不满足发射条件」，并未披露具体细节。嫦娥系列任务每次发射前都要做总检、轨道匹配和气象窗口复核，任一项不达标就会推迟。下一次稳定窗口通常要在若干个月之后。" },
  ],
  history_lens:{
    then:"1896", now:"2026-08", title:"速度这件事，运动员和机器人在接近",
    text:"1896 年首届现代奥运会的男子 400 米冠军，美国人托马斯·伯克跑出 54.2 秒；人类男子 400 米世界纪录直到 2026 年仍在 43.03 秒。一百三十年间，人类把这块肌肉—神经的极限向前推进了约 11 秒。一台机器人在一年内把成绩从 88 秒推进到 38 秒。两件事不在同一条赛道，但都回答同一个问题：速度的上限由谁、用什么部件定义。",
    similarities:"都是在速度这一维度上用尽可能简单且可重复的规则（起跑、跑道、冲线）测出极限。",
    differences:"人类用了 130 年磨出 11 秒；机器人用 1 年磨出 50 秒——驱动缩短的不是生理适应，而是工程迭代。"
  },
  challenge:[
    { id:1, kind:"English", question:"Which body part did the Tiangong Ultra team strengthen to reach 10 m/s within a month?", options:["The shoulder joints", "The hip joints", "The wrist motors"], answer:1, explanation:"The interview said the team lightened the legs and strengthened the hips to absorb higher-speed forces." },
    { id:2, kind:"日本語", question:"「顔を覆って走る」姿勢の目的は？", options:["ファンを冷やすため", "肩のモーターの負荷を減らすため", "かっこいいから"], answer:1, explanation:"顔を覆う姿勢は肩の負荷を大幅に減らすためで、結果として肩の発熱を抑え、400mを完走しやすくします。" },
    { id:3, kind:"한국어", question:"창어 7호가 올해 발사되지 못한 이유로 가장 정확한 것은?", options:["로켓이 완성되지 않아서", "종합 판단 결과 발사 조건을 충족하지 못해서", "발사장 날씨 때문에"], answer:1, explanation:"판공실은 「종합 판단 결과 발사 조건을 충족하지 못해」라고만 발표했고, 구체적 사유를 밝히지 않았습니다." },
    { id:4, kind:"Translation", question:"「一年时间从 88 秒跑进 40 秒。」 最自然的英文是？", options:["Robots cut the 400m time from 88 to 40 seconds in one year.", "Robots make the 400m 88-second to 40-second in one year.", "Robots run faster in 88 to 40 seconds."], answer:0, explanation:"「cut X from Y to Z」是体育报道里表达「把 X 从 Y 推到 Z」的标准句式。" },
    { id:5, kind:"Knowledge", question:"人形机器人 400 米提速 50 秒，最不可能的解释是？", options:["结构减重与关节强化", "散热与运动控制策略", "机器人学会了喘气以提高耐力"], answer:2, explanation:"机器人没有呼吸系统，所谓「学会喘气」是文学化的说法。本质提升来自结构、热管理、电机与算法四个工程维度。" },
  ],
  completion:false,
  difficulty_feedback:null,
};
