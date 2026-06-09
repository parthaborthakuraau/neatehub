// The featured FY26 article — authored from the design.
export const INSIGHTS_HERO = [
  {
    title:
      "What the FY26 cohort taught us about post-harvest losses in the Northeast.",
    slug: "fy26-cohort-post-harvest",
    channel: "insights",
    category: "Feature",
    section: "Field Notes",
    featured: true,
    dek: "Twelve founders. Four sectors. One stubborn truth - cold-chain isn't a product problem, it's a routing problem. Notes from a year of building with them, the assumptions we got wrong, and what's worth replicating in FY27.",
    date: "14 May 2026",
    readTime: "8 min read",
    photoTreatment: "default",
    heroPhotoLabel:
      "PHOTO: Cold-chain micro-unit at FPO collection point, Tezpur - wide shot, mid-morning daylight, farmers loading produce",
    heroCaption:
      "An FPO-operated cold-chain micro-unit in Tezpur, May 2025. Three of the FY26 cohort's twelve founders ended up here, asking the same question - why is this empty half the year?",
    author: {
      name: "Dr. P. Saikia",
      role: "Director - Operations · NEATeHUB",
      initials: "PS",
      bio: "Runs NEATeHUB's Saranya programme. Previously head of post-harvest research at the ICAR Northeast division. Writes occasionally on what's working and what's not in NE agri-incubation.",
    },
    body: [
      { kind: "paragraph", text: "Twelve months ago, when we kicked off the FY26 Saranya cohort, we believed - collectively, naively - that post-harvest loss in the Northeast was a refrigeration problem. Buy more chillers, run more cold-rooms, lose less produce. The cohort included three ventures explicitly working on this thesis, and we'd been telling our funders the same story for two years." },
      { kind: "paragraph", text: "That story collapsed by month four." },
      { kind: "paragraph", text: "Not because cold-chain doesn't matter - it does - but because the binding constraint isn't temperature. It's routing. The chillers exist. The cold-rooms exist. What's missing is a way to get small producers' output into the cold-chain in the first four hours after harvest, when it actually matters. And the reason that's missing is not lack of equipment. It's lack of aggregation routing - the slow, unglamorous work of getting a cluster of fifteen smallholders to bring their produce to a single point on the same morning." },
      { kind: "h2", text: "The data, briefly." },
      { kind: "paragraph", text: "Before the cohort, we ran a baseline survey across 42 FPOs in five NE states. The headline numbers:" },
      {
        kind: "stat",
        stats: [
          { num: "31%", lbl: "Average post-harvest loss across sampled FPOs (perishable produce, 2024 monsoon season)" },
          { num: "68%", lbl: "Of FPOs with chilling infrastructure reported under-utilisation over 40%" },
          { num: "4 hrs", lbl: "Window from harvest to chilling for produce to retain Grade A classification" },
        ],
      },
      { kind: "paragraph", text: "The 68% number is the one that surprised us. Cold-chain infrastructure exists, in significant volume, across the Northeast - built up over the last decade by state-government and central schemes. But it's running at less than half capacity. So if you ship a new chiller into a district, you're not solving the binding constraint. You're stacking inventory on top of an under-utilised asset." },
      { kind: "paragraph", text: "Three ventures in the FY26 cohort came in pitching new cold-chain hardware. By month six, all three had pivoted - not away from cold-chain entirely, but toward aggregation routing as the upstream layer." },
      { kind: "h3", text: "Routing is the actual product." },
      { kind: "paragraph", text: "The most interesting venture in the cohort, on this thesis, is Thalo Cold. They started with a sensor-instrumented solar chiller - clever hardware, lab-validated, won them a national award. By month four, they'd pivoted: the chiller stayed, but the actual product became a WhatsApp-based aggregation router. Smallholders get an SMS at 5am - bring 2kg to the road junction by 6:30, Ashok ji is collecting. The chiller is downstream of the routing layer, not upstream." },
      { kind: "quote", text: "The chiller works. We were never the bottleneck. The bottleneck was knowing which day to fire it up.", cite: "Ashish Bora · Thalo Cold" },
      { kind: "paragraph", text: "This pattern - hardware that turns out to be incidental to the actual product - repeated across three of the four cohort sectors. In aquaculture, it was sensor packs whose real value turned out to be the dashboard, not the sensors. In tea, it was bio-input formulation that mattered less than the deployment relationship. The pattern is consistent enough that we now ask every new applicant: if we removed the hardware, what's left? If something's still left, that's your business." },
      {
        kind: "figure",
        photoTreatment: "tea",
        text: "The actual interface that runs Thalo Cold's aggregation routing. Built in WhatsApp, deployed across 14 producer clusters, generating Grade A-rated produce flow into existing cold-chain infrastructure.",
        cite: "PHOTO: WhatsApp screenshot recreation showing aggregation routing messages between Thalo Cold field-op and producer cluster, 5am timestamp visible",
      },
      { kind: "h2", text: "What we got wrong." },
      { kind: "paragraph", text: "Three things, in order of how badly:" },
      { kind: "paragraph", text: "One: we underestimated the cost-of-trust problem. Most rural-enterprise ventures we'd backed previously had built trust slowly, over years, through a single producer cluster. We assumed FY26 would follow that pattern. Instead, the cohort showed us that founders who came from outside the Northeast - even with capital, even with technology, even with NEATeHUB introductions - could not close trust gaps faster than 14 months on average. That's a real number we now plan around." },
      { kind: "paragraph", text: "Two: we over-scoped the residential component. Isanya runs as an 8-week residential, and we'd talked about extending it to 12 weeks based on prior cohort feedback. The FY26 numbers say the opposite - by week 6, founders were antsy to deploy. The remaining two weeks of the residential added less than they cost in deployment delay. FY27 will shorten Isanya to 6 weeks and add a structured 4-week deployment phase instead." },
      { kind: "paragraph", text: "Three: we under-budgeted for failure. Two of the twelve FY26 ventures wound down - one because the founder team broke up, one because the unit economics didn't pencil out at our cohort's geographic reach. We had budgeted for one. Two is not catastrophic, but it's a planning miss, and it means we under-staffed our exit support. FY27's cohort budget includes one full-time wind-down advisor." },
      { kind: "h3", text: "What we'd replicate." },
      { kind: "paragraph", text: "The single highest-leverage thing we did in FY26 was the cross-venture office hours. Every Tuesday, all twelve founders met for ninety minutes - not with mentors, with each other. No agenda. We took notes for the first three weeks, then stopped, because the founders had built their own structure. By month four they were running pilot exchanges with each other - I'll test your sensor pack at my aquaculture site if you'll trial my routing logic at your aggregation point. This was unplanned and probably the most generative thing we ran all year." },
      { kind: "paragraph", text: "FY27 keeps that, untouched, by mandate." },
      { kind: "h2", text: "What's next." },
      { kind: "paragraph", text: "We're carrying twelve open hypotheses into FY27, derived from this cohort. We'll publish the full list with the FY26 Impact Report in September. The three that are most likely to shape program structure:" },
      {
        kind: "list",
        items: [
          { text: "Aggregation routing is the wedge for any rural-enterprise venture. If your venture doesn't have an answer to how do you get the producer's output to your product in four hours? - that's the first product feature, not the last." },
          { text: "The 14-month trust gap is real, and it's the constraint to plan around. Non-NE founders need a partnership structure with a local operator from day one, not month four." },
          { text: "Hardware is rarely the moat. The dashboard, the routing logic, the deployment relationship - those are the moats. We will be asking applicants to defend their moat in software terms even when their pitch deck shows a chiller." },
        ],
      },
      { kind: "paragraph", text: "If you're working on any of these problems and reading this, drop us a note at programs@neatehub.org. Applications for Saranya Cohort 4 close 30 June." },
    ],
    footnotes: [
      { text: "FY26 baseline survey ran February-April 2025 across 42 FPOs in Assam, Meghalaya, Nagaland, Mizoram, and Tripura. Sampling was non-random - FPOs in our existing producer network. Methodology to be published with the September impact report." },
      { text: "Post-harvest loss defined as physical loss + Grade A to B classification loss, weight-adjusted at first sale." },
      { text: "Thalo Cold's routing logic is described in more detail in our earlier interview with the founders (March 2026)." },
    ],
  },
];
