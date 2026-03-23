export interface PriceGrade {
  grade: string;
  priceRange: string;
  unit: string;
  notes?: string;
}

export interface CommodityPricing {
  name: string;
  slug: string;
  productSlug: string;
  currency: string;
  originPort: string;
  lastUpdated: string;
  grades: PriceGrade[];
  priceDrivers: string;
  seasonalPattern: string;
  recentTrend: string;
  comparisonNote?: string;
  category: "core" | "extended-wa" | "extended-india";
}

export const commodityPrices: CommodityPricing[] = [
  // ── Core 8 ──────────────────────────────────────────
  {
    name: "Shea Butter",
    slug: "shea-butter",
    productSlug: "shea-butter",
    currency: "USD",
    originPort: "Tema, Ghana",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Unrefined Grade A", priceRange: "$2,500 - $3,600", unit: "per MT", notes: "Yellow, traditional extraction" },
      { grade: "Refined", priceRange: "$3,000 - $4,200", unit: "per MT", notes: "Bleached & deodorized, cosmetic grade" },
      { grade: "Organic Certified", priceRange: "$3,500 - $5,000", unit: "per MT", notes: "COSMOS / ECOCERT / USDA Organic" },
    ],
    priceDrivers:
      "Shea butter prices are driven by the annual shea nut harvest in West Africa, which runs from May to August. The harvest is entirely wild-collected from naturally occurring shea trees across the Sahel belt, making it vulnerable to rainfall patterns and climate variability. A poor rainy season the prior year directly reduces nut yields.\n\nDemand from the cosmetics industry has been the primary growth driver, with global shea butter demand growing 7-9% annually. The food industry also consumes significant volumes as a cocoa butter equivalent (CBE) in confectionery. European and North American demand for natural and organic cosmetic ingredients has pushed organic-certified shea to a significant premium.\n\nProcessing capacity in origin countries is expanding, which can create competition for raw nuts and push prices up. Export restrictions or policy changes in producing countries (Ghana, Burkina Faso, Nigeria) also affect pricing.",
    seasonalPattern:
      "Prices are typically lowest from July to September when the new harvest arrives and supply is abundant. Prices climb from October through April as stocks deplete. The best buying window is August-October for unrefined butter. Refined and organic grades have more stable year-round pricing due to processing lead times, but raw material costs still follow the harvest cycle.",
    recentTrend:
      "Shea butter prices have firmed in early 2026, supported by strong cosmetics demand and a below-average 2025 harvest in parts of Ghana and Burkina Faso. Organic premiums remain elevated at 30-40% over conventional.",
  },
  {
    name: "Cocoa Beans",
    slug: "cocoa-beans",
    productSlug: "cocoa",
    currency: "USD",
    originPort: "Tema, Ghana / Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Grade 1 (Fermented)", priceRange: "$3,200 - $3,800", unit: "per MT", notes: "Well-fermented, properly dried, max 5% defects" },
      { grade: "Grade 2", priceRange: "$2,800 - $3,200", unit: "per MT", notes: "Standard fermented, up to 10% defects" },
      { grade: "Cocoa Butter", priceRange: "$5,500 - $6,200", unit: "per MT", notes: "Natural or deodorized" },
      { grade: "Cocoa Powder", priceRange: "$3,000 - $4,500", unit: "per MT", notes: "10-12% fat, natural or alkalized" },
    ],
    priceDrivers:
      "Cocoa prices are heavily influenced by production in Cote d'Ivoire and Ghana, which together account for roughly 60% of global output. Weather patterns, particularly rainfall during the growing season and harmattan dry winds, have an outsized impact. Black pod disease and swollen shoot virus can devastate yields.\n\nGlobal demand from chocolate manufacturers provides a steady floor, while speculative trading on ICE and LIFFE futures amplifies price swings. Currency movements in producing countries matter: when the Ghanaian cedi weakens, local farmers receive more in local currency, but FOB dollar prices can shift.\n\nRegulatory changes such as the EU Deforestation Regulation (EUDR) are adding compliance costs that flow through to pricing. Sustainability premiums (Fairtrade, Rainforest Alliance) add $100-300/MT.",
    seasonalPattern:
      "The main crop in West Africa runs from October to March, with the mid-crop from May to August. Prices typically dip during peak main-crop arrivals (November-January) and rise during the inter-crop period (August-September). Forward contracts for the mid-crop often carry premiums due to lower and less predictable volumes.",
    recentTrend:
      "Cocoa prices surged through 2024-2025 due to consecutive poor harvests in West Africa, reaching multi-decade highs. Prices have stabilized in early 2026 but remain historically elevated, with the market closely watching the 2025/26 main crop progress.",
  },
  {
    name: "Cashew Nuts",
    slug: "cashew-nuts",
    productSlug: "cashew-nuts",
    currency: "USD",
    originPort: "Tema, Ghana / Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Raw Cashew Nuts (RCN)", priceRange: "$800 - $1,200", unit: "per MT", notes: "Price depends on Kernel Outturn Ratio (KOR)" },
      { grade: "Kernels W320", priceRange: "$5,500 - $6,500", unit: "per MT", notes: "Most traded grade, 320 kernels per pound" },
      { grade: "Kernels W240", priceRange: "$7,000 - $8,000", unit: "per MT", notes: "Large kernels, 240 per pound" },
      { grade: "Kernels W180", priceRange: "$9,000 - $11,000", unit: "per MT", notes: "Jumbo premium grade, 180 per pound" },
    ],
    priceDrivers:
      "Cashew pricing is split between the RCN market and the processed kernel market. RCN prices depend heavily on the Kernel Outturn Ratio (KOR) - the percentage of usable kernel per nut. Higher KOR nuts command premiums. West African RCN competes with Vietnamese and Indian buying, as those countries process the majority of global cashews.\n\nKernel prices are driven by consumer demand in the US, EU, and Middle East. Snacking trends and health-conscious consumption have supported growth. Processing yields, labor costs, and factory utilization rates in Vietnam and India influence the spread between RCN and kernel prices.\n\nCurrency fluctuations, particularly the Indian rupee and Vietnamese dong, affect competitiveness. Shipping costs and container availability also impact final delivered prices significantly.",
    seasonalPattern:
      "The West African cashew season runs from February to June, with peak harvest in March-April. RCN prices are typically lowest during peak harvest and rise through the off-season. Kernel prices have their own dynamic, often firming in Q4 ahead of holiday season demand in Western markets. The best time to contract RCN is at harvest peak; kernel buyers benefit from buying during Q1-Q2 when supply is fresh.",
    recentTrend:
      "RCN prices have been relatively stable in early 2026, with strong West African harvests offsetting increased Vietnamese processing demand. W320 kernel prices have softened slightly from 2025 peaks as supply chains normalized.",
  },
  {
    name: "Hookah Charcoal",
    slug: "hookah-charcoal",
    productSlug: "hookah-charcoal",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Hardwood Cube 25mm", priceRange: "$260 - $400", unit: "per MT", notes: "FOB Lagos, premium hardwood" },
      { grade: "Hardwood Flat/Finger", priceRange: "$260 - $380", unit: "per MT", notes: "FOB Lagos, various shapes" },
      { grade: "Coconut Shell Cube", priceRange: "$350 - $500", unit: "per MT", notes: "FOB Lagos, coconut shell base" },
    ],
    priceDrivers:
      "Hookah charcoal prices from Nigeria are driven by raw material costs (hardwood or coconut shell), labor for production and shaping, and energy costs for carbonization. The Nigerian product competes primarily on price against Indonesian coconut shell charcoal, which dominates the global shisha market at $1,250-$1,500/MT FOB.\n\nDemand from the Middle East (Saudi Arabia, UAE, Egypt) and Europe drives volumes. Regulatory changes in importing countries regarding charcoal standards (ISO 2941) and emissions testing affect market access. Packaging and branding requirements for retail-ready products add cost but also margin.\n\nNigerian producers benefit from abundant hardwood supply and lower labor costs. Quality consistency and meeting international standards remain the key differentiators for premium pricing.",
    seasonalPattern:
      "Hookah charcoal demand peaks during cooler months in the Middle East (October-March) and during Ramadan. Production in Nigeria is relatively consistent year-round, though rainy season (June-September) can slow drying and transport. The best buying window for importers is typically Q2-Q3 when demand in destination markets is lower.",
    recentTrend:
      "Nigerian hookah charcoal has gained market share in 2025-2026 as buyers seek cost-effective alternatives to Indonesian product. The 60-75% price advantage over Indonesian charcoal continues to attract price-sensitive buyers in the Middle East and Europe.",
    comparisonNote:
      "Nigerian hardwood hookah charcoal at $260-500/MT FOB offers a 60-75% cost advantage over Indonesian coconut shell charcoal at $1,250-$1,500/MT FOB. While Indonesian product is considered the premium standard, Nigerian charcoal provides acceptable quality for many markets at a fraction of the cost. For buyers focused on value, Nigerian sourcing can significantly improve margins.",
  },
  {
    name: "Dried Hibiscus",
    slug: "hibiscus",
    productSlug: "hibiscus",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Whole Flowers (Dark Red)", priceRange: "$1,800 - $2,800", unit: "per MT", notes: "Deep color, low moisture" },
      { grade: "Premium Export Grade", priceRange: "$2,400 - $3,400", unit: "per MT", notes: "Hand-sorted, minimal stems" },
      { grade: "Organic Certified", priceRange: "$2,200 - $4,400", unit: "per MT", notes: "+20-30% premium over conventional" },
    ],
    priceDrivers:
      "Hibiscus prices are driven by the annual harvest in Nigeria and Sudan, the two largest producers. Rainfall during the growing season (July-October) directly affects yields and quality. Color intensity, which correlates with anthocyanin content, is the primary quality differentiator - deeper red flowers command premium prices.\n\nDemand from the beverage industry has been the key growth driver, with hibiscus tea and agua de Jamaica gaining popularity in Western markets. The natural food coloring industry also consumes increasing volumes as manufacturers replace synthetic dyes. Mexico and Germany are the largest importers.\n\nExport logistics from Nigeria, including inland transport costs and port congestion, affect final FOB prices. Aflatoxin and pesticide residue testing requirements add compliance costs but are essential for EU and US market access.",
    seasonalPattern:
      "The Nigerian hibiscus harvest runs from November to January. Prices are lowest from December to February when fresh supply hits the market. From March onward, prices climb steadily as stocks deplete, peaking in September-October before the new harvest. Buying early in the season (December-February) offers the best prices and widest selection of grades.",
    recentTrend:
      "Hibiscus prices have been firm in early 2026, driven by growing beverage industry demand and a moderate 2025 harvest. Organic-certified product continues to command a 20-30% premium as health food demand grows.",
  },
  {
    name: "Sesame Seeds",
    slug: "sesame-seeds",
    productSlug: "sesame-seeds",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Hulled White", priceRange: "$1,800 - $2,300", unit: "per MT", notes: "99.95% purity, for tahini and bakery" },
      { grade: "Natural (Unhulled)", priceRange: "$1,500 - $1,800", unit: "per MT", notes: "For oil pressing and hulling" },
      { grade: "Black Sesame", priceRange: "$2,000 - $2,600", unit: "per MT", notes: "Premium, Asian food markets" },
      { grade: "Organic Certified", priceRange: "$2,200 - $2,800", unit: "per MT", notes: "USDA/EU organic, hulled or natural" },
    ],
    priceDrivers:
      "Sesame seed prices are influenced by production in the major growing regions: Nigeria, Tanzania, India, and Myanmar. Nigeria is Africa's largest producer, and Nigerian white sesame is prized for its high oil content (48-52%) and light color, making it ideal for tahini production.\n\nGlobal demand is driven by the food processing industry, particularly tahini, sesame oil, and bakery products. Japan, China, Turkey, and the Middle East are major consumers. Weather conditions during the June-October growing season in Nigeria directly affect yields.\n\nCompetition from Ethiopian and Tanzanian sesame affects pricing. Quality factors like purity, moisture content, and FFA levels determine grade premiums. Mechanized cleaning and sorting improve quality and command higher prices.",
    seasonalPattern:
      "The Nigerian sesame harvest runs from October to December. Prices are lowest from November to January during harvest season. They rise through the year, peaking in August-September before the new crop. The inter-crop period (May-September) sees the highest prices and tightest supply. For best pricing, buy during or shortly after harvest.",
    recentTrend:
      "Nigerian sesame prices have been stable in early 2026, with a good 2025 harvest maintaining adequate supply. Hulled white sesame continues to command premiums as tahini consumption grows in Europe and North America.",
  },
  {
    name: "Moringa Powder",
    slug: "moringa",
    productSlug: "moringa",
    currency: "USD",
    originPort: "Tema, Ghana / Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Conventional", priceRange: "$3,500 - $6,000", unit: "per MT", notes: "Standard dried leaf powder" },
      { grade: "Organic Certified", priceRange: "$8,000 - $15,000", unit: "per MT", notes: "USDA/EU organic, microbiologically tested" },
      { grade: "Pharmaceutical Grade", priceRange: "$15,000 - $30,000", unit: "per MT", notes: "Low microbial, standardized nutrient content" },
    ],
    priceDrivers:
      "Moringa pricing is driven by the wide gap between conventional and organic/pharmaceutical grades. The health food and supplement industry is the primary demand driver, with moringa positioned as a superfood rich in vitamins, minerals, and antioxidants.\n\nOrganic certification costs and the rigorous supply chain documentation required for certified product explain the premium. Pharmaceutical-grade moringa requires controlled drying conditions, microbial testing, and standardized nutrient profiles, pushing prices to the top of the range.\n\nProduction capacity in Ghana and Nigeria is expanding but remains fragmented among small-scale producers. Aggregation, quality control, and consistent supply are the main challenges. Indian moringa competes in the conventional segment, particularly for the Asian market.",
    seasonalPattern:
      "Moringa can be harvested year-round in tropical climates, though leaf quality and nutrient density peak during the dry season (November-March) when growth is slower but more concentrated. Rainy season harvests (May-September) produce more volume but lower nutrient density. Prices are relatively stable year-round for processed powder, with slight premiums during Q1 when Northern Hemisphere supplement demand peaks.",
    recentTrend:
      "Moringa prices have trended upward in 2025-2026, driven by continued superfood demand in Western markets. The organic segment has seen the strongest growth, with premium organic moringa powder commanding $10,000-15,000/MT.",
  },
  {
    name: "Dried Ginger",
    slug: "ginger",
    productSlug: "ginger",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "core",
    grades: [
      { grade: "Split Dried", priceRange: "$2,000 - $3,000", unit: "per MT", notes: "High oleoresin content, bold flavor" },
      { grade: "Whole Dried", priceRange: "$2,200 - $3,200", unit: "per MT", notes: "Unpeeled or lightly scraped" },
      { grade: "Ginger Powder", priceRange: "$2,500 - $3,500", unit: "per MT", notes: "Mesh 60-80, food-grade" },
      { grade: "Organic", priceRange: "$3,000 - $4,500", unit: "per MT", notes: "Organic certified, any form" },
    ],
    priceDrivers:
      "Nigerian dried ginger is known for its high oleoresin and gingerol content, making it particularly valued by the spice extraction and flavoring industries. Prices are driven by the annual harvest in Nigeria (the leading African producer) and competition from Chinese and Indian ginger.\n\nGlobal demand from food processing, beverage manufacturing (ginger beer, ginger ale), and the health/wellness sector supports pricing. The growing use of ginger in functional beverages and supplements has added demand.\n\nWeather during the growing season (April-October) affects yields. Nigerian ginger faces quality challenges around pesticide residues and aflatoxin, and product that passes EU MRL (Maximum Residue Level) testing commands significant premiums.",
    seasonalPattern:
      "The Nigerian ginger harvest runs from November to January. Fresh ginger prices peak in September-October before harvest. Dried ginger prices are lowest in January-March when processing of the new crop is complete. Prices rise through the year as stocks diminish. For dried ginger, the best buying window is Q1, shortly after the harvest and drying season.",
    recentTrend:
      "Ginger prices moderated in late 2025 after the post-COVID spike, but remain above pre-2020 levels. Nigerian ginger continues to find strong demand in Europe for oleoresin extraction due to its higher gingerol content compared to Chinese ginger.",
  },

  // ── Extended Range - West Africa ────────────────────
  {
    name: "Tiger Nuts",
    slug: "tiger-nuts",
    productSlug: "tiger-nuts",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Dried (Standard)", priceRange: "$750 - $900", unit: "per MT", notes: "Cleaned, sorted, dried" },
      { grade: "Premium Export Grade", priceRange: "$850 - $1,000", unit: "per MT", notes: "Machine-sorted, minimal defects" },
    ],
    priceDrivers:
      "Tiger nut prices are driven by growing demand for gluten-free and plant-based products. The Spanish horchata market is the largest consumer, while health food applications in Europe and North America are growing rapidly. Nigeria is the world's largest producer.\n\nHarvest quality varies significantly by region and season. Proper drying is critical - moisture content above 8% leads to mold issues that destroy shipments. Clean, well-sorted product commands a premium.",
    seasonalPattern:
      "Tiger nuts are harvested from October to December in Nigeria. Prices dip during the harvest period and rise steadily through the year. The tightest supply and highest prices occur in August-September before the new crop arrives.",
    recentTrend:
      "Tiger nut prices have remained stable around $830/MT in early 2026, with steady demand from European horchata producers and emerging health food applications driving consistent volumes.",
  },
  {
    name: "Kola Nuts",
    slug: "kola-nuts",
    productSlug: "kola-nuts",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Fresh (Cola nitida)", priceRange: "$2,500 - $3,500", unit: "per MT", notes: "Red variety, highest caffeine" },
      { grade: "Fresh (Cola acuminata)", priceRange: "$2,500 - $3,200", unit: "per MT", notes: "White variety" },
      { grade: "Dried / Extract Grade", priceRange: "$3,500 - $4,800", unit: "per MT", notes: "For functional beverages and supplements" },
    ],
    priceDrivers:
      "Kola nut pricing is driven by both traditional African markets and growing functional beverage demand. Nigeria produces over 52% of global kola nuts. The natural caffeine content makes it attractive for energy drinks and supplements, competing with guarana and green coffee extract.\n\nPerishability is a major factor for fresh kola - proper handling and fast shipping are essential. Dried and extract-grade products have more stable pricing due to longer shelf life.",
    seasonalPattern:
      "Kola nuts have two harvest seasons in Nigeria: the main crop (June-September) and a smaller mid-season crop (January-March). Prices are lowest during the main harvest and peak in April-May when supply is tightest. Fresh kola has a very short shelf life (2-4 weeks), so timing of purchase to harvest is critical.",
    recentTrend:
      "Kola nut prices have risen moderately in 2025-2026 as functional beverage manufacturers increasingly source natural caffeine. The dried/extract segment has seen the strongest price gains.",
  },
  {
    name: "Bitter Kola",
    slug: "bitter-kola",
    productSlug: "bitter-kola",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Fresh Whole", priceRange: "$6,000 - $8,000", unit: "per MT", notes: "For traditional medicine and food" },
      { grade: "Dried / Export Grade", priceRange: "$8,000 - $10,000", unit: "per MT", notes: "For pharmaceutical and supplement extraction" },
    ],
    priceDrivers:
      "Bitter kola (Garcinia kola) commands high prices due to its established medicinal properties and growing pharmaceutical interest. The kolaviron compound has demonstrated anti-inflammatory and antioxidant properties in research, driving demand from the supplement and pharmaceutical sectors.\n\nSupply is constrained because bitter kola trees take 7-10 years to mature and cannot be easily cultivated at scale. Wild harvesting remains the primary source, limiting supply growth.",
    seasonalPattern:
      "Bitter kola is harvested primarily from June to September. Prices peak during the off-season (January-May) when stocks are lowest. The fresh market commands lower prices than dried product due to perishability and shorter shelf life.",
    recentTrend:
      "Bitter kola prices have been trending upward in 2025-2026, with growing international interest from the nutraceutical and pharmaceutical industries pushing export-grade prices toward the top of the range.",
  },
  {
    name: "Castor Oil",
    slug: "castor-oil",
    productSlug: "castor-oil",
    currency: "USD",
    originPort: "Kandla, India",
    lastUpdated: "March 2026",
    category: "extended-india",
    grades: [
      { grade: "Commercial Grade (FSG)", priceRange: "$1,200 - $1,400", unit: "per MT", notes: "First Special Grade, industrial use" },
      { grade: "BS Grade", priceRange: "$1,300 - $1,500", unit: "per MT", notes: "British Standard, cosmetic/pharma" },
      { grade: "Hydrogenated (Castor Wax)", priceRange: "$1,500 - $1,800", unit: "per MT", notes: "Processed, specialty applications" },
    ],
    priceDrivers:
      "India controls 85-90% of global castor oil exports, giving it near-monopoly pricing power. Gujarat state produces the vast majority of Indian castor seed. Prices are driven by the monsoon-dependent castor crop, MSP (Minimum Support Price) set by the Indian government, and global demand from industrial, cosmetic, and pharmaceutical sectors.\n\nCastor oil is a key feedstock for sebacic acid, undecylenic acid, and other oleochemicals used in lubricants, plastics, and nylon. Industrial demand provides a high-volume floor, while cosmetic and pharmaceutical grades command premiums.",
    seasonalPattern:
      "The Indian castor seed harvest runs from October to February. Castor oil prices tend to be lowest in Q1 when processing of new crop is underway. Prices rise in Q3-Q4 as carryover stocks diminish and the market awaits the new crop. Monsoon performance (June-September) heavily influences price expectations for the season ahead.",
    recentTrend:
      "Castor oil prices have stabilized in the $1,200-1,500/MT range in early 2026 after significant volatility in 2024-2025. A normal 2025 monsoon supported adequate castor seed production in Gujarat.",
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    productSlug: "turmeric",
    currency: "USD",
    originPort: "Tuticorin / Nhava Sheva, India",
    lastUpdated: "March 2026",
    category: "extended-india",
    grades: [
      { grade: "Finger (Erode/Salem)", priceRange: "$200 - $300", unit: "per kg", notes: "Whole dried rhizomes, 3%+ curcumin" },
      { grade: "Powder (Standard)", priceRange: "$250 - $350", unit: "per kg", notes: "Mesh 60-80, for food processing" },
      { grade: "High Curcumin (5%+)", priceRange: "$300 - $400", unit: "per kg", notes: "Premium, supplement/pharma grade" },
    ],
    priceDrivers:
      "India produces roughly 80% of the world's turmeric, with Erode (Tamil Nadu), Nizamabad (Telangana), and Sangli (Maharashtra) as key trading centers. Prices swing 70-80% between crop years depending on planted area and monsoon performance.\n\nCurcumin content is the key quality driver - higher curcumin (3-5%+) commands significant premiums for the supplement and pharmaceutical markets. The food industry uses turmeric for coloring and flavoring and is more price-sensitive. Growing Western demand for turmeric supplements has added a demand layer above traditional food use.",
    seasonalPattern:
      "Turmeric is harvested from January to March and arrives at market from February to April. Prices are typically lowest during the harvest/arrival period and rise through the year. Speculative holding by traders can amplify seasonal swings. The NCDEX turmeric futures contract in India is the key price reference.",
    recentTrend:
      "Turmeric prices surged in 2025 due to lower planted area and adverse weather, with prices reaching multi-year highs. Early 2026 has seen some correction as the new crop begins arriving, but prices remain elevated.",
  },
  {
    name: "Cumin Seeds",
    slug: "cumin",
    productSlug: "cumin",
    currency: "USD",
    originPort: "Mundra / Kandla, India",
    lastUpdated: "March 2026",
    category: "extended-india",
    grades: [
      { grade: "Singapore Quality", priceRange: "$180 - $220", unit: "per kg", notes: "99% purity, standard export grade" },
      { grade: "Europe Quality", priceRange: "$220 - $280", unit: "per kg", notes: "99.5% purity, steam-sterilized" },
      { grade: "Organic Certified", priceRange: "$250 - $300", unit: "per kg", notes: "USDA/EU organic" },
    ],
    priceDrivers:
      "India and Syria traditionally dominate cumin production, with India accounting for the majority of global exports. Rajasthan and Gujarat are the main producing states, and the crop is highly sensitive to winter rainfall patterns. Unseasonal rain during the flowering stage (January-February) can devastate yields, causing 50-80% price swings.\n\nDemand is driven by the global spice trade, food processing, and essential oil extraction. The Middle East, Bangladesh, and Western food manufacturers are major buyers. Turkey and Syria provide supply competition when their crops are good.",
    seasonalPattern:
      "The Indian cumin harvest arrives from March to May. Prices are typically lowest from March to June during peak arrivals. They rise from July onward as stocks deplete, peaking in January-February when the market is most dependent on carryover stocks and the next crop is still uncertain. Weather events during January-February can cause sharp price spikes.",
    recentTrend:
      "Cumin prices have been volatile through 2025-2026, with a good 2025 harvest in Rajasthan bringing prices down from 2024 highs. Early 2026 pricing reflects cautious optimism about the 2026 crop, with traders watching winter rainfall closely.",
  },
  {
    name: "Guar Gum",
    slug: "guar-gum",
    productSlug: "guar-gum",
    currency: "USD",
    originPort: "Mundra / Kandla, India",
    lastUpdated: "March 2026",
    category: "extended-india",
    grades: [
      { grade: "Industrial Grade", priceRange: "$1,300 - $1,500", unit: "per MT", notes: "For oil & gas (fracking), mining" },
      { grade: "Food Grade (E412)", priceRange: "$1,400 - $1,600", unit: "per MT", notes: "Food thickener, 5000+ cps viscosity" },
    ],
    priceDrivers:
      "India produces 80%+ of the world's guar gum, derived from guar beans grown in Rajasthan. The crop is rain-fed, making it highly dependent on monsoon performance. Demand comes from two very different sectors: oil and gas (fracking fluid) and food processing (E412 thickener).\n\nUS shale oil drilling activity is the swing demand factor - when oil prices are high and drilling increases, guar gum demand and prices spike. The food industry provides more stable baseline demand. The Indian government's guar seed procurement policies also influence domestic prices.",
    seasonalPattern:
      "Guar beans are harvested from October to December. Guar gum prices are typically lowest in Q4-Q1 when new crop supply arrives. Prices tend to rise in Q2-Q3 as stocks diminish. However, the oil & gas demand cycle can override seasonal patterns entirely.",
    recentTrend:
      "Guar gum prices have been range-bound in early 2026, with moderate US drilling activity and a decent 2025 guar crop in Rajasthan keeping prices stable in the $1,300-1,600/MT range.",
  },
  {
    name: "Psyllium Husk",
    slug: "psyllium-husk",
    productSlug: "psyllium-husk",
    currency: "USD",
    originPort: "Mundra / Kandla, India",
    lastUpdated: "March 2026",
    category: "extended-india",
    grades: [
      { grade: "Husk 85% Purity", priceRange: "$5,500 - $6,600", unit: "per MT", notes: "Standard pharmaceutical grade" },
      { grade: "Husk 98% Purity", priceRange: "$7,000 - $8,500", unit: "per MT", notes: "Premium, high swelling index" },
      { grade: "Husk Powder", priceRange: "$4,000 - $5,500", unit: "per MT", notes: "Mesh 40-80, for food applications" },
    ],
    priceDrivers:
      "India controls over 80% of global psyllium supply, with Gujarat and Rajasthan as the main producing regions. Prices have been rising due to increasing demand from the health food, pharmaceutical, and functional food industries. Psyllium is the active ingredient in Metamucil and similar fiber supplements.\n\nClimate sensitivity is high - psyllium requires specific dry conditions during harvest, and unseasonal rain can destroy the crop. The limited global production base means any supply disruption causes sharp price spikes.",
    seasonalPattern:
      "The psyllium harvest in India runs from March to April. Prices tend to be lowest in Q2 when the new crop is processed. They rise through Q3-Q4 as stocks deplete. The market is thin enough that large orders can move prices at any time of year.",
    recentTrend:
      "Psyllium prices have risen approximately 52% over the past two years, driven by strong global demand for fiber supplements and a series of below-average harvests. Prices remain elevated at around $6,600/MT in early 2026.",
  },
  {
    name: "Kaolin Clay",
    slug: "kaolin-clay",
    productSlug: "kaolin-clay",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Raw / Washed", priceRange: "$300 - $400", unit: "per MT", notes: "For ceramics, construction" },
      { grade: "Processed / Refined", priceRange: "$400 - $550", unit: "per MT", notes: "For paper coating, cosmetics" },
    ],
    priceDrivers:
      "Nigeria has over 2 billion metric tons of kaolin reserves, making it a potentially major global supplier. Prices are driven by processing quality - refined kaolin for paper coating and cosmetics commands higher prices than raw material for ceramics and construction.\n\nThe global kaolin market ($5.8B) is dominated by established producers in the US, UK, and Brazil. Nigerian kaolin competes primarily on price, though quality can be inconsistent without proper beneficiation processing.",
    seasonalPattern:
      "Kaolin mining and processing operate year-round with minimal seasonal variation. Prices are relatively stable, influenced more by industrial demand cycles and shipping costs than seasonal factors. Rainy season (June-September) can slow mining and inland transport in Nigeria.",
    recentTrend:
      "Kaolin prices from Nigeria have been stable around $400/MT in early 2026. Growing interest from Asian ceramics manufacturers in diversifying away from traditional sources has supported steady demand.",
  },
  {
    name: "African Black Soap",
    slug: "african-black-soap",
    productSlug: "african-black-soap",
    currency: "USD",
    originPort: "Tema, Ghana / Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Raw / Traditional", priceRange: "$2,000 - $3,500", unit: "per MT", notes: "Handmade, unprocessed blocks" },
      { grade: "Export Grade (Refined)", priceRange: "$3,500 - $5,500", unit: "per MT", notes: "Uniform texture, branded/private label" },
      { grade: "Liquid / Formulated", priceRange: "$4,000 - $8,000", unit: "per MT", notes: "Ready-to-use formulations" },
    ],
    priceDrivers:
      "African black soap pricing varies enormously depending on form and processing level. The raw traditional product (made from plantain ash, cocoa pod ash, and shea butter) is relatively inexpensive, while branded export products command multiples of the base price.\n\nThe $1B+ global market for African black soap is driven by the natural skincare trend. Clean beauty brands and private-label manufacturers are the main buyers. Quality consistency is the main challenge for scale.",
    seasonalPattern:
      "Production is year-round with minimal seasonal variation. Demand peaks ahead of the holiday gifting season (Q3-Q4) in Western markets. Raw material costs (shea butter, cocoa pods) do follow their own seasonal patterns, which can influence production costs.",
    recentTrend:
      "The African black soap market continues to grow at 8-10% annually, driven by the clean beauty movement. Premium and organic-certified product has seen the strongest price appreciation in 2025-2026.",
  },
  {
    name: "Gum Arabic",
    slug: "gum-arabic",
    productSlug: "gum-arabic",
    currency: "USD",
    originPort: "Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Cleaned & Sifted (Grade 1)", priceRange: "$2,500 - $3,200", unit: "per MT", notes: "Acacia senegal, food/beverage grade" },
      { grade: "Spray-Dried Powder", priceRange: "$3,000 - $4,000", unit: "per MT", notes: "For beverage emulsification" },
      { grade: "Kibbled (Grade 2)", priceRange: "$2,000 - $2,800", unit: "per MT", notes: "Technical grade, for textiles/printing" },
    ],
    priceDrivers:
      "Gum arabic prices are driven by supply from the Sahel belt (Sudan, Chad, Nigeria) and demand from the food and beverage industry. As E414, gum arabic is an essential emulsifier used by major beverage companies including Coca-Cola. Sudan has historically dominated supply, but political instability has disrupted exports.\n\nNigerian gum arabic has gained market share as an alternative source. Quality grading (hand-picked Grade 1 vs. mechanical Grade 2) significantly affects pricing. Food-grade certification and traceability documentation are essential for premium pricing.",
    seasonalPattern:
      "Gum arabic is harvested during the dry season (November-June) when trees are tapped. Peak supply arrives from January to April. Prices are lowest during peak harvest and rise through the wet season when collection stops. Sudanese supply disruptions can cause sharp, unpredictable price spikes at any time.",
    recentTrend:
      "Gum arabic prices have firmed in 2025-2026, partly due to continued supply disruptions from Sudan. Nigerian product has seen increased demand as buyers diversify their sourcing to reduce geopolitical risk.",
  },
  {
    name: "Baobab Powder",
    slug: "baobab-powder",
    productSlug: "baobab-powder",
    currency: "USD",
    originPort: "Tema, Ghana / Lagos, Nigeria",
    lastUpdated: "March 2026",
    category: "extended-wa",
    grades: [
      { grade: "Conventional", priceRange: "$8,000 - $12,000", unit: "per MT", notes: "Standard dried fruit pulp powder" },
      { grade: "Organic Certified", priceRange: "$12,000 - $15,000", unit: "per MT", notes: "USDA/EU organic, for supplements" },
    ],
    priceDrivers:
      "Baobab powder commands premium prices due to its superfood positioning (6x the vitamin C of oranges, high fiber and antioxidants) and limited, wild-harvested supply. The fruit is collected from naturally occurring baobab trees across the African savanna.\n\nDemand from the health food, supplement, and cosmetics industries has been growing rapidly. EU Novel Food approval has opened the European market. Processing quality (low moisture, bright color, high vitamin C retention) differentiates premium product.",
    seasonalPattern:
      "Baobab fruit is harvested during the dry season (November-April). Powder from the new harvest arrives from February onward. Prices are most competitive during Q2 when fresh supply is abundant. Stocks can run thin by Q4, pushing prices higher.",
    recentTrend:
      "Baobab powder prices have been firm in early 2026, supported by continued superfood demand and limited supply expansion. Organic-certified product remains at a significant premium as certification processes are slow for wild-harvested commodities.",
  },
];

export function getCommodityBySlug(slug: string): CommodityPricing | undefined {
  return commodityPrices.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return commodityPrices.map((c) => c.slug);
}
