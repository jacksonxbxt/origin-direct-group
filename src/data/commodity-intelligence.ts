export interface GrowingRegion {
  name: string;
  country: string;
  lat: number;
  lon: number;
  production: string;
  risk: "high" | "medium" | "low";
  rainfall: string;
  detail: string;
}

export interface SeasonalMonth {
  month: string;
  activity: string;
  buySignal: "buy" | "wait" | "neutral";
}

export interface OriginComparison {
  origin: string;
  production: string;
  quality: string;
  price: string;
  advantage: string;
}

export interface CommodityIntel {
  slug: string;
  name: string;
  ours: boolean;
  productPage: string;
  category: string;
  currentPrice: number;
  unit: string;
  change30d: number;
  projectedPrice: string;
  riskLevel: string;
  ensoImpact: string;
  regions: GrowingRegion[];
  seasonal: SeasonalMonth[];
  origins: OriginComparison[];
  priceDrivers: string[];
  bestTimeToBuy: string;
  supplyOutlook: string;
  faqs: { question: string; answer: string }[];
}

export const commodityIntelData: CommodityIntel[] = [
  // ── 1. Cocoa ──────────────────────────────────────────
  {
    slug: "cocoa",
    name: "Cocoa",
    ours: true,
    productPage: "/products/cocoa",
    category: "Agriculture",
    currentPrice: 3500,
    unit: "MT",
    change30d: 12.5,
    projectedPrice: "$3,800 - $4,200 within 3 months",
    riskLevel: "high",
    ensoImpact: "El Nino reduces West African rainfall during critical growing months, cutting yields 10-20%. La Nina brings excess moisture, increasing black pod disease pressure.",
    regions: [
      { name: "Western Ghana", country: "Ghana", lat: 6.1, lon: -2.3, production: "350,000 MT", risk: "high", rainfall: "Below normal (-18%)", detail: "Main cocoa belt. Dry conditions persisting since November. COCOBOD reports below-target purchases." },
      { name: "Ashanti Region", country: "Ghana", lat: 6.7, lon: -1.6, production: "280,000 MT", risk: "high", rainfall: "Below normal (-15%)", detail: "Second-largest producing region. Swollen shoot virus affecting older plantations. Replanting programs underway." },
      { name: "Ondo State", country: "Nigeria", lat: 7.1, lon: 4.8, production: "120,000 MT", risk: "medium", rainfall: "Normal range", detail: "Nigeria's top cocoa state. Fermentation quality improving with new buying centers." },
      { name: "Cross River State", country: "Nigeria", lat: 5.9, lon: 8.3, production: "80,000 MT", risk: "medium", rainfall: "Normal range", detail: "Aromatic beans prized by specialty buyers. Smaller farms, organic potential." },
      { name: "Ivory Coast East", country: "Ivory Coast", lat: 6.8, lon: -5.3, production: "800,000 MT", risk: "high", rainfall: "Below normal (-12%)", detail: "World's largest producing region. EUDR compliance creating supply chain disruptions." },
      { name: "Ivory Coast West", country: "Ivory Coast", lat: 6.5, lon: -7.5, production: "600,000 MT", risk: "high", rainfall: "Below normal (-10%)", detail: "Expanding production area. Younger trees but infrastructure challenges." },
      { name: "Los Rios", country: "Ecuador", lat: -1.8, lon: -79.5, production: "350,000 MT", risk: "low", rainfall: "Normal", detail: "Fine flavor Nacional variety. Growing share of global premium market." },
      { name: "South West Region", country: "Cameroon", lat: 5.5, lon: 9.4, production: "250,000 MT", risk: "medium", rainfall: "Slightly below normal", detail: "Third-largest African producer. Quality improving with industry investment." },
    ],
    seasonal: [
      { month: "Jan", activity: "Main crop peak exports", buySignal: "buy" },
      { month: "Feb", activity: "Main crop winding down", buySignal: "buy" },
      { month: "Mar", activity: "Dry season, stocks depleting", buySignal: "neutral" },
      { month: "Apr", activity: "Low supply, prices firm", buySignal: "wait" },
      { month: "May", activity: "Light crop begins", buySignal: "neutral" },
      { month: "Jun", activity: "Light crop harvest", buySignal: "neutral" },
      { month: "Jul", activity: "Light crop processing", buySignal: "neutral" },
      { month: "Aug", activity: "Between seasons, lowest supply", buySignal: "wait" },
      { month: "Sep", activity: "Early main crop arrivals", buySignal: "neutral" },
      { month: "Oct", activity: "Main crop harvest begins", buySignal: "buy" },
      { month: "Nov", activity: "Peak fermentation, best quality", buySignal: "buy" },
      { month: "Dec", activity: "Strong export volumes", buySignal: "buy" },
    ],
    origins: [
      { origin: "Ghana", production: "700,000 MT/yr", quality: "Consistent Grade 1 fermented, gold standard for blending", price: "$3,200 - $3,800/MT", advantage: "Highest consistency, COCOBOD quality control" },
      { origin: "Ivory Coast", production: "2,200,000 MT/yr", quality: "Volume leader, variable fermentation quality", price: "$2,800 - $3,400/MT", advantage: "Largest volume, competitive pricing" },
      { origin: "Nigeria", production: "250,000 MT/yr", quality: "Aromatic flavor profile, improving fermentation", price: "$3,000 - $3,500/MT", advantage: "Distinctive aroma, growing specialty market" },
      { origin: "Ecuador", production: "380,000 MT/yr", quality: "Fine flavor Nacional, floral and fruity notes", price: "$3,600 - $4,500/MT", advantage: "Premium fine flavor, highest price" },
    ],
    priceDrivers: [
      "EUDR compliance costs adding $150-300/MT for traceable supply chains",
      "El Nino / La Nina cycles directly impact West African rainfall and yields",
      "Black pod disease and swollen shoot virus reducing Ghana/Ivory Coast output",
      "Rising demand from Asian chocolate markets (China, India, Japan)",
      "Speculative trading on ICE cocoa futures amplifying price swings",
      "Currency weakness in producing countries affecting FOB pricing",
      "Sustainability premiums (Fairtrade, Rainforest Alliance) adding $100-300/MT",
    ],
    bestTimeToBuy: "Lock in main crop prices in October-November before demand peaks. Forward contracts 3-6 months out offer the best value during harvest season.",
    supplyOutlook: "The 2025/26 main crop is tracking below initial forecasts. Ghana's COCOBOD has lowered its production target, and Ivory Coast is seeing similar shortfalls driven by unfavorable weather during the critical pod development phase. Global stocks are at their lowest level in over a decade.\n\nEUDR implementation is creating a two-tier market: compliant beans command a significant premium over non-traceable supply. Buyers who have not secured EUDR-compliant sourcing should act now, as the price gap will widen.\n\nWe recommend locking in Q4 2026 supply by June. Prices are likely to remain elevated through 2026, with downside limited by structural supply deficits and growing Asian demand.",
    faqs: [
      { question: "What is the difference between Ghana Grade 1 and Grade 2 cocoa?", answer: "Grade 1 cocoa is well-fermented (min 80% fully brown beans), properly dried to 7-8% moisture, with maximum 5% defective beans. Grade 2 allows up to 10% defects and slightly less consistent fermentation. Grade 1 commands a $200-400/MT premium and is preferred by European chocolate manufacturers." },
      { question: "How does EUDR affect cocoa sourcing from West Africa?", answer: "The EU Deforestation Regulation requires full traceability to farm level with GPS coordinates, proving no deforestation after December 2020. This adds $150-300/MT in compliance costs and excludes smallholders who cannot provide documentation. Origin Direct provides fully EUDR-compliant cocoa with complete chain of custody." },
      { question: "What minimum order quantity do you require for cocoa?", answer: "Our minimum order is 1 FCL (Full Container Load), which is approximately 15-18 MT for cocoa beans. For cocoa butter and powder, MOQ is 1 FCL at 18-20 MT. We can arrange split containers for first-time buyers looking to test quality." },
    ],
  },

  // ── 2. Shea Butter ──────────────────────────────────────
  {
    slug: "shea-butter",
    name: "Shea Butter",
    ours: true,
    productPage: "/products/shea-butter",
    category: "Oils & Fats",
    currentPrice: 2800,
    unit: "MT",
    change30d: 8.2,
    projectedPrice: "$3,000 - $3,500 within 3 months",
    riskLevel: "elevated",
    ensoImpact: "Shea trees are resilient to moderate drought but prolonged dry spells reduce nut yields. El Nino years tend to produce smaller nuts with lower butter content.",
    regions: [
      { name: "Northern Region", country: "Ghana", lat: 9.5, lon: -1.0, production: "80,000 MT nuts", risk: "medium", rainfall: "Slightly below normal", detail: "Largest shea processing hub in Ghana. Organized cooperatives with quality standards." },
      { name: "Upper West Region", country: "Ghana", lat: 10.3, lon: -2.5, production: "50,000 MT nuts", risk: "medium", rainfall: "Normal range", detail: "High-quality shea nuts. Strong cooperative networks with organic certification." },
      { name: "Upper East Region", country: "Ghana", lat: 10.8, lon: -0.8, production: "40,000 MT nuts", risk: "low", rainfall: "Normal range", detail: "Traditional processing methods. Women-led cooperatives." },
      { name: "Niger State", country: "Nigeria", lat: 9.6, lon: 6.5, production: "200,000 MT nuts", risk: "low", rainfall: "Normal", detail: "Nigeria's largest shea producing state. Large volumes but variable processing quality." },
      { name: "Centre-Ouest", country: "Burkina Faso", lat: 12.4, lon: -1.5, production: "180,000 MT nuts", risk: "medium", rainfall: "Slightly below normal", detail: "World's largest shea nut exporter by volume. Raw nut focus, limited local processing." },
      { name: "Sikasso Region", country: "Mali", lat: 11.3, lon: -5.7, production: "100,000 MT nuts", risk: "medium", rainfall: "Normal range", detail: "Growing organic production. Underexploited potential." },
      { name: "Borgou Department", country: "Benin", lat: 9.3, lon: 2.3, production: "60,000 MT nuts", risk: "low", rainfall: "Normal", detail: "Expanding shea belt. Good quality nuts, improving infrastructure." },
    ],
    seasonal: [
      { month: "Jan", activity: "Export peak, butter available", buySignal: "buy" },
      { month: "Feb", activity: "Export season continues", buySignal: "buy" },
      { month: "Mar", activity: "Export season, stocks good", buySignal: "buy" },
      { month: "Apr", activity: "Pre-harvest, stocks declining", buySignal: "neutral" },
      { month: "May", activity: "Fruit drop begins in south", buySignal: "neutral" },
      { month: "Jun", activity: "Fruit collection peak", buySignal: "wait" },
      { month: "Jul", activity: "Collection and drying", buySignal: "wait" },
      { month: "Aug", activity: "Nut processing begins", buySignal: "wait" },
      { month: "Sep", activity: "Processing continues", buySignal: "neutral" },
      { month: "Oct", activity: "Processing, new butter arriving", buySignal: "neutral" },
      { month: "Nov", activity: "New season butter ready", buySignal: "buy" },
      { month: "Dec", activity: "Export season opens", buySignal: "buy" },
    ],
    origins: [
      { origin: "Ghana", production: "170,000 MT nuts/yr", quality: "Highest quality butter, best processing standards", price: "$2,500 - $5,000/MT", advantage: "Gold standard quality, organic certified cooperatives" },
      { origin: "Burkina Faso", production: "180,000 MT nuts/yr", quality: "Largest raw nut volume, variable processing", price: "$2,200 - $3,800/MT", advantage: "Lowest cost raw nuts, largest volume" },
      { origin: "Nigeria", production: "400,000 MT nuts/yr", quality: "Largest total production, mixed quality", price: "$2,000 - $3,500/MT", advantage: "Cost-effective, huge supply base" },
      { origin: "Mali", production: "100,000 MT nuts/yr", quality: "Good quality, growing organic sector", price: "$2,300 - $4,000/MT", advantage: "Organic potential, underexploited" },
    ],
    priceDrivers: [
      "Annual wild harvest is weather-dependent with no irrigation or cultivation possible",
      "Cosmetics industry demand growing 7-9% annually (natural/organic trend)",
      "Food industry demand as cocoa butter equivalent (CBE) in confectionery",
      "Processing capacity expansion in origin countries competing for raw nuts",
      "Export restrictions or policy changes in producing countries",
      "Organic certification premiums at 30-40% over conventional",
      "Seasonal supply concentration creates annual price cycles",
    ],
    bestTimeToBuy: "Best prices January-March after harvest processing completes. Unrefined butter is cheapest August-October when new harvest arrives. Plan purchases 2-3 months ahead of need.",
    supplyOutlook: "The 2025 shea harvest was below average in parts of Ghana and Burkina Faso due to irregular rainfall patterns. This is supporting firm prices heading into 2026. Nigeria's production remains robust but quality consistency varies by processor.\n\nDemand from European and North American cosmetics brands continues to grow strongly, particularly for certified organic and fair trade butter. The CBE market in confectionery provides a solid price floor.\n\nFor 2026, we expect prices to remain elevated through Q2 until the new harvest arrives. Buyers needing large volumes should consider forward contracts now. Ghana-origin butter will continue to command the highest premiums due to superior processing standards.",
    faqs: [
      { question: "What is the difference between refined and unrefined shea butter?", answer: "Unrefined (raw) shea butter retains its natural yellow color, nutty scent, and full nutrient profile including vitamins A, E, and F. Refined shea is bleached and deodorized, resulting in a white, odorless product preferred by cosmetics manufacturers for formulation consistency. Unrefined is valued for natural skincare; refined is used in commercial cosmetics and food." },
      { question: "Can you supply organic certified shea butter?", answer: "Yes. We work with COSMOS and ECOCERT certified cooperatives in Northern Ghana. Our organic shea butter carries full chain-of-custody certification from wild-harvested nuts through processing and export. MOQ for organic is 1 FCL (18-20 MT). Lead time is 4-6 weeks." },
      { question: "What certifications do your shea butter cooperatives hold?", answer: "Our partner cooperatives in Ghana hold COSMOS Organic, ECOCERT, USDA Organic (through equivalency), Fair Trade, and ISO 22000 food safety certifications. We can also supply conventionally produced shea butter with phytosanitary certificates and COA (Certificate of Analysis) for every shipment." },
    ],
  },

  // ── 3. Cashew Nuts ──────────────────────────────────────
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    ours: true,
    productPage: "/products/cashew-nuts",
    category: "Nuts & Seeds",
    currentPrice: 1050,
    unit: "MT (RCN)",
    change30d: 5.1,
    projectedPrice: "$1,100 - $1,250 within 3 months",
    riskLevel: "elevated",
    ensoImpact: "El Nino tends to reduce flowering in West African cashew trees, leading to lower nut set. Dry conditions during flowering (December-February) are critical.",
    regions: [
      { name: "Brong-Ahafo Region", country: "Ghana", lat: 7.9, lon: -1.7, production: "90,000 MT RCN", risk: "medium", rainfall: "Normal range", detail: "Ghana's primary cashew belt. Well-organized buying network." },
      { name: "Northern Region", country: "Ghana", lat: 9.4, lon: -0.9, production: "50,000 MT RCN", risk: "medium", rainfall: "Slightly below normal", detail: "Expanding cashew cultivation. Younger trees coming into full production." },
      { name: "Benue State", country: "Nigeria", lat: 7.7, lon: 8.5, production: "120,000 MT RCN", risk: "low", rainfall: "Normal", detail: "Major producing state. Strong local processing capacity growing." },
      { name: "Bondoukou Region", country: "Ivory Coast", lat: 8.0, lon: -2.8, production: "900,000 MT RCN", risk: "medium", rainfall: "Slightly below normal", detail: "World's #1 RCN producer. Massive scale but most exported raw for processing." },
      { name: "Cacheu Region", country: "Guinea-Bissau", lat: 12.3, lon: -15.2, production: "200,000 MT RCN", risk: "medium", rainfall: "Normal range", detail: "Cashew is 90% of export revenue. Entire economy tied to this crop." },
      { name: "Mtwara Region", country: "Tanzania", lat: -10.3, lon: 40.2, production: "250,000 MT RCN", risk: "low", rainfall: "Normal", detail: "Rapidly growing producer. Government investing in local processing." },
      { name: "Nampula Province", country: "Mozambique", lat: -15.1, lon: 40.5, production: "180,000 MT RCN", risk: "low", rainfall: "Normal", detail: "Recovery from decades of underinvestment. Good quality nuts." },
      { name: "Binh Phuoc Province", country: "Vietnam", lat: 11.7, lon: 106.9, production: "Processing hub", risk: "low", rainfall: "N/A", detail: "World's largest cashew processor. Processes 60%+ of global RCN." },
    ],
    seasonal: [
      { month: "Jan", activity: "Pre-harvest, stocks tight", buySignal: "wait" },
      { month: "Feb", activity: "Early harvest West Africa", buySignal: "neutral" },
      { month: "Mar", activity: "Peak harvest Africa", buySignal: "buy" },
      { month: "Apr", activity: "Harvest continues, good supply", buySignal: "buy" },
      { month: "May", activity: "Late harvest, processing ramps", buySignal: "buy" },
      { month: "Jun", activity: "Post-harvest, RCN available", buySignal: "neutral" },
      { month: "Jul", activity: "Processing season", buySignal: "neutral" },
      { month: "Aug", activity: "Kernels hitting market", buySignal: "neutral" },
      { month: "Sep", activity: "Steady supply from processors", buySignal: "neutral" },
      { month: "Oct", activity: "E. Africa harvest (Tanzania)", buySignal: "buy" },
      { month: "Nov", activity: "Indian/Vietnam processing peak", buySignal: "neutral" },
      { month: "Dec", activity: "Stocks declining, prices firm", buySignal: "wait" },
    ],
    origins: [
      { origin: "Ghana", production: "140,000 MT RCN/yr", quality: "Good nut count (180-200/kg), consistent quality", price: "$900 - $1,100/MT RCN", advantage: "43.8% of global in-shell exports, reliable quality" },
      { origin: "Ivory Coast", production: "900,000 MT RCN/yr", quality: "Variable quality, massive scale", price: "$800 - $1,050/MT RCN", advantage: "#1 volume worldwide, competitive pricing" },
      { origin: "Tanzania", production: "250,000 MT RCN/yr", quality: "Good quality, improving infrastructure", price: "$850 - $1,000/MT RCN", advantage: "Growing fast, government-backed processing" },
      { origin: "Mozambique", production: "180,000 MT RCN/yr", quality: "Good nuts, rebuilding industry", price: "$800 - $950/MT RCN", advantage: "Growth potential, lower competition" },
      { origin: "Vietnam (kernels)", production: "3,600,000 MT processed", quality: "Excellent processing, all kernel grades", price: "$5,800 - $6,500/MT W320", advantage: "World's processing hub, full grade range" },
    ],
    priceDrivers: [
      "West African harvest timing and volumes set the annual price tone",
      "Vietnam/India processing capacity and RCN demand drive raw nut prices",
      "Kernel demand from US, EU, and emerging Asian snack markets",
      "Currency fluctuations in producing countries affect FOB pricing",
      "Shipping costs and container availability from West African ports",
      "Quality metrics (nut count, KOR) vary by origin and season",
    ],
    bestTimeToBuy: "Best RCN prices March-May during peak African harvest. For kernels, August-October offers competitive pricing as processed volume from the Africa crop hits the market.",
    supplyOutlook: "The 2026 West African cashew crop is expected to be moderate. Ivory Coast remains the dominant supplier, with Ghana and Tanzania growing their share. Vietnam continues to dominate processing, handling over 60% of global RCN.\n\nKernel prices have stabilized after the volatility of 2024-2025. Demand from snack food manufacturers in the US and Europe remains strong, and Indian domestic consumption is growing rapidly.\n\nWe recommend securing RCN positions early in the harvest season (March-April) for best pricing. For kernel buyers, forward contracts with Vietnamese processors offer the most stable pricing. Our Ghana and Nigeria origins provide consistent quality with direct farm-to-port traceability.",
    faqs: [
      { question: "What does W320 mean for cashew kernels?", answer: "W320 refers to 'Whole' kernels with a count of 300-320 nuts per pound (roughly 660-700 per kg). It is the most widely traded grade globally. Lower numbers like W240 indicate larger, more premium kernels. Other grades include W450 (smaller), splits, butts, and pieces at progressively lower prices." },
      { question: "Do you supply raw cashew nuts (RCN) or processed kernels?", answer: "We supply both. Our primary offering is RCN (Raw Cashew Nuts in shell) from Ghana and Nigeria, ideal for buyers with their own processing capacity or who supply processors in Vietnam/India. We also source processed kernels (W180 through W450, splits, and pieces) through our processing partners." },
      { question: "What is KOR and why does it matter?", answer: "KOR (Kernel Outturn Ratio) measures the weight of usable kernels extracted from raw nuts, expressed in pounds per 80kg bag. A KOR of 48-52 lbs is good, meaning roughly 27-29% of the raw nut weight converts to usable kernels. Higher KOR means better value per MT of RCN purchased. Ghana and Ivory Coast typically achieve KOR of 46-52." },
    ],
  },

  // ── 4. Sesame Seeds ──────────────────────────────────────
  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    ours: true,
    productPage: "/products/sesame-seeds",
    category: "Oils & Seeds",
    currentPrice: 1900,
    unit: "MT",
    change30d: 2.1,
    projectedPrice: "$1,850 - $2,100 within 3 months",
    riskLevel: "normal",
    ensoImpact: "Moderate. El Nino can delay rainy season onset in the Sahel, shortening the growing window. Well-drained soils buffer against excess moisture.",
    regions: [
      { name: "Jigawa State", country: "Nigeria", lat: 12.2, lon: 9.4, production: "150,000 MT", risk: "low", rainfall: "Normal", detail: "Nigeria's top sesame state. High oil content seeds (48-55%), valued for crushing." },
      { name: "Nasarawa State", country: "Nigeria", lat: 8.5, lon: 8.5, production: "100,000 MT", risk: "low", rainfall: "Normal", detail: "Growing production area. Good quality white sesame for hulling." },
      { name: "Gedaref State", country: "Sudan", lat: 14.0, lon: 35.4, production: "400,000 MT", risk: "high", rainfall: "Below normal", detail: "World's traditional sesame heartland. Conflict disrupting trade routes." },
      { name: "Humera (Tigray)", country: "Ethiopia", lat: 14.3, lon: 36.6, production: "300,000 MT", risk: "medium", rainfall: "Normal range", detail: "Premium Humera white sesame. Post-conflict recovery, logistics improving." },
      { name: "Rajasthan", country: "India", lat: 26.9, lon: 75.8, production: "200,000 MT", risk: "low", rainfall: "Normal", detail: "India's main sesame belt. Competitive pricing, large volume." },
      { name: "Sagaing Region", country: "Myanmar", lat: 21.9, lon: 95.1, production: "150,000 MT", risk: "high", rainfall: "Normal", detail: "Major Asian producer. Political instability affecting exports." },
    ],
    seasonal: [
      { month: "Jan", activity: "Nigerian harvest arriving", buySignal: "buy" },
      { month: "Feb", activity: "Good supply from Africa", buySignal: "buy" },
      { month: "Mar", activity: "African exports strong", buySignal: "buy" },
      { month: "Apr", activity: "Stocks adequate", buySignal: "neutral" },
      { month: "May", activity: "Planting season begins", buySignal: "neutral" },
      { month: "Jun", activity: "Growing season", buySignal: "neutral" },
      { month: "Jul", activity: "Growing season continues", buySignal: "neutral" },
      { month: "Aug", activity: "Pre-harvest, prices firm", buySignal: "wait" },
      { month: "Sep", activity: "Indian harvest begins", buySignal: "neutral" },
      { month: "Oct", activity: "Indian/Ethiopian harvest", buySignal: "buy" },
      { month: "Nov", activity: "Sudan harvest, supply improving", buySignal: "buy" },
      { month: "Dec", activity: "Multiple origins available", buySignal: "buy" },
    ],
    origins: [
      { origin: "Nigeria", production: "480,000 MT/yr", quality: "High oil content (48-55%), white and brown varieties", price: "$1,700 - $2,100/MT", advantage: "Best oil yield, cost-effective" },
      { origin: "Ethiopia", production: "300,000 MT/yr", quality: "Premium Humera white, excellent appearance", price: "$2,000 - $2,500/MT", advantage: "Premium variety, best appearance for hulled" },
      { origin: "Sudan", production: "400,000 MT/yr", quality: "Traditional volume supplier, good quality", price: "$1,600 - $2,000/MT", advantage: "Largest African volume, competitive" },
      { origin: "India", production: "750,000 MT/yr", quality: "Multiple varieties, competitive processing", price: "$1,800 - $2,200/MT", advantage: "Reliable supply, competitive pricing" },
    ],
    priceDrivers: [
      "Nigerian oil content (48-55%) makes it preferred for crushing and oil extraction",
      "Sudan/Ethiopian political stability directly affects global supply",
      "China and Japan bakery/confectionery demand for hulled sesame",
      "Oil prices influence demand for sesame as cooking oil alternative",
      "Weather during the short growing window (60-90 days) in Sahel",
      "Indian production volumes set floor for global pricing",
    ],
    bestTimeToBuy: "Best prices November-March when multiple African harvests overlap. Nigerian origin offers best value for oil extraction year-round. Ethiopian Humera commands peak premiums in Q2-Q3.",
    supplyOutlook: "Global sesame supply for 2026 looks balanced. Nigeria's production continues to grow, supported by expanding acreage in Jigawa and Nasarawa states. Sudan remains disrupted by conflict, removing significant volume from the premium market and supporting prices for alternative origins.\n\nEthiopian Humera sesame is recovering post-conflict but logistics remain challenging. India's monsoon crop was adequate, providing steady supply.\n\nNigerian sesame offers the best value proposition for oil extraction buyers due to its consistently high oil content. For bakery/confectionery buyers needing hulled white sesame, Ethiopian Humera remains the benchmark but Nigerian white grades are increasingly competitive.",
    faqs: [
      { question: "Why is Nigerian sesame preferred for oil extraction?", answer: "Nigerian sesame seeds consistently achieve 48-55% oil content, among the highest globally. This higher oil yield means more oil per metric ton of seeds, providing better economics for crushers and oil extractors. The seeds also have a favorable fatty acid profile with high linoleic and oleic acid content." },
      { question: "What is the difference between hulled and natural sesame seeds?", answer: "Natural (unhulled) sesame seeds retain their outer seed coat, which can be white, brown, or black. Hulled sesame has the seed coat mechanically removed, producing uniform white kernels preferred for bakery toppings, tahini, and confectionery. Hulled sesame commands a $300-500/MT premium over natural seeds." },
      { question: "Can you supply organic sesame seeds?", answer: "Yes, we can source organic sesame from Nigeria and Ethiopia. Nigerian organic sesame is available from select farming cooperatives in Nasarawa state. Lead time for organic is typically 6-8 weeks, with MOQ of 1 FCL (18-22 MT depending on packing)." },
    ],
  },

  // ── 5. Hookah Charcoal ──────────────────────────────────
  {
    slug: "hookah-charcoal",
    name: "Hookah Charcoal",
    ours: true,
    productPage: "/products/hookah-charcoal",
    category: "Industrial",
    currentPrice: 380,
    unit: "MT",
    change30d: -1.2,
    projectedPrice: "$350 - $420 within 3 months",
    riskLevel: "normal",
    ensoImpact: "Minimal direct weather impact. Raw material availability (hardwood, coconut shell) is the primary concern. Extended dry seasons can increase fire risk in forest areas.",
    regions: [
      { name: "Ogun State", country: "Nigeria", lat: 7.0, lon: 3.4, production: "Major producer", risk: "low", rainfall: "N/A", detail: "Hub for acacia hardwood charcoal production. Multiple factories with export capacity." },
      { name: "Oyo State", country: "Nigeria", lat: 7.8, lon: 3.9, production: "Major producer", risk: "low", rainfall: "N/A", detail: "Large-scale charcoal kilns. Somali-profile aroma preferred by Middle East market." },
      { name: "Ondo State", country: "Nigeria", lat: 7.1, lon: 4.8, production: "Growing producer", risk: "low", rainfall: "N/A", detail: "Expanding production with newer facilities. Hardwood forests provide raw material." },
      { name: "West Java", country: "Indonesia", lat: -6.9, lon: 107.6, production: "500,000 MT", risk: "low", rainfall: "N/A", detail: "Major coconut shell charcoal briquette producer. Standard cube and flat shapes." },
      { name: "Mindanao", country: "Philippines", lat: 7.1, lon: 125.7, production: "150,000 MT", risk: "low", rainfall: "N/A", detail: "Coconut shell briquettes. Mid-price option between Nigeria and Indonesia." },
    ],
    seasonal: [
      { month: "Jan", activity: "Stable production", buySignal: "neutral" },
      { month: "Feb", activity: "Dry season aids production", buySignal: "buy" },
      { month: "Mar", activity: "Peak production, dry conditions", buySignal: "buy" },
      { month: "Apr", activity: "Good production continues", buySignal: "buy" },
      { month: "May", activity: "Pre-Ramadan stocking", buySignal: "wait" },
      { month: "Jun", activity: "Rainy season slows Nigeria kilns", buySignal: "neutral" },
      { month: "Jul", activity: "Rainy season, higher moisture risk", buySignal: "neutral" },
      { month: "Aug", activity: "Rainy season continues", buySignal: "neutral" },
      { month: "Sep", activity: "Production recovering", buySignal: "neutral" },
      { month: "Oct", activity: "Dry season begins, quality improves", buySignal: "buy" },
      { month: "Nov", activity: "Good production season", buySignal: "buy" },
      { month: "Dec", activity: "Stable supply", buySignal: "neutral" },
    ],
    origins: [
      { origin: "Nigeria (hardwood)", production: "Large scale", quality: "Acacia/hardwood, Somali-profile aroma, long burn time", price: "$260 - $500/MT", advantage: "Lowest price, unique aroma profile prized in Middle East" },
      { origin: "Indonesia (coconut)", production: "500,000+ MT/yr", quality: "Coconut shell briquettes, uniform shape, low ash", price: "$1,250 - $1,500/MT", advantage: "Standard quality, consistent supply, all shapes available" },
      { origin: "Philippines (coconut)", production: "150,000 MT/yr", quality: "Coconut shell, good quality, smaller scale", price: "$1,100 - $1,350/MT", advantage: "Mid-price option, growing capacity" },
    ],
    priceDrivers: [
      "Middle Eastern hookah culture driving steady demand growth",
      "Nigerian acacia hardwood offers price advantage of 60-70% vs coconut",
      "Shipping costs from Lagos vs Southeast Asian ports affect landed price",
      "Rainy season in Nigeria (June-September) can slow kiln production",
      "Container availability at Lagos/Apapa port affects lead times",
      "EU regulations on charcoal imports (sustainability documentation)",
    ],
    bestTimeToBuy: "Nigerian hardwood charcoal is cheapest February-April during dry season when production peaks. Avoid buying May-June ahead of Ramadan demand spikes. Coconut charcoal pricing is more stable year-round.",
    supplyOutlook: "The hookah charcoal market continues to grow, driven by expanding shisha culture in the Middle East, Europe, and North America. Nigerian hardwood charcoal offers a compelling value proposition at $260-500/MT compared to $1,250-1,500/MT for Indonesian coconut alternatives.\n\nOur Nigerian supply features the Somali-profile aroma that is specifically demanded by Middle Eastern importers. Production capacity is not a constraint; the main variables are shipping logistics from Lagos port and seasonal moisture levels affecting charcoal quality.\n\nFor buyers looking to reduce per-unit costs, Nigerian hardwood charcoal is the clear winner. We recommend ordering during the dry season (October-April) for optimal quality and fastest turnaround.",
    faqs: [
      { question: "What is the difference between hardwood and coconut hookah charcoal?", answer: "Hardwood charcoal (from Nigerian acacia) burns longer, produces a distinctive aromatic smoke, and costs 60-70% less than coconut alternatives. Coconut shell charcoal (from Indonesia/Philippines) produces less ash, has more neutral flavor, and is available in uniform briquette shapes (cubes, flats, fingers). The choice depends on market preference and price sensitivity." },
      { question: "What shapes and sizes are available?", answer: "We supply Nigerian hardwood charcoal in traditional lump form and can produce custom briquette shapes. Indonesian coconut charcoal is available in cubes (25mm, 26mm), flat squares, hexagonal, and finger shapes. Custom sizes are available with MOQ of 1x40ft container." },
      { question: "How is the charcoal packaged for export?", answer: "Standard packing is in 10kg master cartons with inner poly bags for moisture protection. Custom retail packing (0.5kg, 1kg, 3kg boxes with your branding) is available with MOQ of 1x40ft container and 30-day lead time for packaging production." },
    ],
  },

  // ── 6. Hibiscus ──────────────────────────────────────
  {
    slug: "hibiscus",
    name: "Hibiscus",
    ours: true,
    productPage: "/products/hibiscus",
    category: "Agriculture",
    currentPrice: 2600,
    unit: "MT",
    change30d: 3.4,
    projectedPrice: "$2,500 - $2,800 within 3 months",
    riskLevel: "normal",
    ensoImpact: "Moderate. Hibiscus (Hibiscus sabdariffa) is relatively drought-tolerant but requires reliable rainfall during the 4-month growing season. El Nino can reduce yields in the Sahel.",
    regions: [
      { name: "Kano State", country: "Nigeria", lat: 12.0, lon: 8.5, production: "250,000 MT", risk: "low", rainfall: "Normal", detail: "Nigeria's hibiscus capital. Largest concentration of sorters and exporters." },
      { name: "Jigawa State", country: "Nigeria", lat: 12.2, lon: 9.6, production: "150,000 MT", risk: "low", rainfall: "Normal", detail: "Second-largest producing state. Good quality dark red calyces." },
      { name: "Bauchi State", country: "Nigeria", lat: 10.3, lon: 9.8, production: "80,000 MT", risk: "low", rainfall: "Normal", detail: "Growing production. Lower yields but good quality." },
      { name: "Gedaref State", country: "Sudan", lat: 14.0, lon: 35.4, production: "100,000 MT", risk: "high", rainfall: "Below normal", detail: "Traditional supplier. Conflict disrupting production and trade routes." },
      { name: "Upper Egypt", country: "Egypt", lat: 26.0, lon: 32.5, production: "50,000 MT", risk: "low", rainfall: "Irrigated", detail: "Nile valley irrigated production. Premium quality for local and export markets." },
      { name: "Fujian Province", country: "China", lat: 26.1, lon: 119.3, production: "200,000 MT", risk: "low", rainfall: "Normal", detail: "Large-scale production. Lower anthocyanin content, cheaper price point." },
    ],
    seasonal: [
      { month: "Jan", activity: "Nigerian harvest peak, best supply", buySignal: "buy" },
      { month: "Feb", activity: "Drying and sorting continues", buySignal: "buy" },
      { month: "Mar", activity: "Export season, abundant supply", buySignal: "buy" },
      { month: "Apr", activity: "Good stocks available", buySignal: "buy" },
      { month: "May", activity: "Stocks steady, planting begins", buySignal: "neutral" },
      { month: "Jun", activity: "Growing season", buySignal: "neutral" },
      { month: "Jul", activity: "Growing season, rain critical", buySignal: "neutral" },
      { month: "Aug", activity: "Growing season continues", buySignal: "neutral" },
      { month: "Sep", activity: "Pre-harvest, old stocks low", buySignal: "wait" },
      { month: "Oct", activity: "Harvest beginning in south", buySignal: "neutral" },
      { month: "Nov", activity: "Harvest expanding northward", buySignal: "neutral" },
      { month: "Dec", activity: "New harvest arriving", buySignal: "buy" },
    ],
    origins: [
      { origin: "Nigeria", production: "480,000+ MT/yr", quality: "Dark red calyces, high anthocyanin, well-sorted", price: "$2,200 - $2,800/MT", advantage: "#1 world exporter, supplies 85% of Mexico's imports" },
      { origin: "Sudan", production: "100,000 MT/yr", quality: "Traditional quality, dark color", price: "$2,400 - $3,000/MT", advantage: "Traditional supplier, conflict-disrupted" },
      { origin: "Egypt", production: "50,000 MT/yr", quality: "Premium irrigated, consistent quality", price: "$3,000 - $3,500/MT", advantage: "Consistent year-round, irrigated production" },
      { origin: "China", production: "200,000 MT/yr", quality: "Lower anthocyanin, paler color", price: "$1,500 - $2,000/MT", advantage: "Cheapest option, large volume" },
    ],
    priceDrivers: [
      "Nigeria dominates global exports, especially to Mexico (85% market share)",
      "Mexican agua de jamaica market provides consistent base demand",
      "Health food trend driving European/US demand for hibiscus tea and extracts",
      "Anthocyanin content determines premium pricing (darker = more valuable)",
      "Sudan supply disruptions redirect demand to Nigeria",
      "Sorting quality (removal of stems, foreign matter) affects price grades",
    ],
    bestTimeToBuy: "January-April offers best pricing and freshest crop from Nigeria. The Mexican market typically books large volumes in Q1, so early orders secure the best grades.",
    supplyOutlook: "Nigeria remains the world's dominant hibiscus exporter, and the 2025/26 harvest has been good. Production in Kano and Jigawa states met expectations, with adequate rainfall during the growing season.\n\nSudan's ongoing conflict continues to remove significant volume from the market, which supports Nigerian pricing. China offers a cheaper alternative but with notably lower anthocyanin content, making it unsuitable for premium beverage and extract applications.\n\nDemand is growing from the health food sector in Europe and North America, where hibiscus is valued for its antioxidant properties. Mexico remains the largest single market. We see stable to slightly higher prices through 2026.",
    faqs: [
      { question: "What is the anthocyanin content of your hibiscus?", answer: "Our Nigerian hibiscus (Hibiscus sabdariffa) typically contains 1.5-2.5% anthocyanins by dry weight, making it among the highest-quality origins globally. Anthocyanin content determines the depth of color in beverages and the potency of extracts. We can provide COA (Certificate of Analysis) with anthocyanin levels for every shipment." },
      { question: "Do you supply hibiscus powder or only whole calyces?", answer: "We primarily supply whole dried calyces, which are preferred for maximum freshness and buyer flexibility. We can also supply ground hibiscus powder (40-80 mesh) with additional lead time. Powder is popular for beverage manufacturers and supplement companies." },
      { question: "What is the shelf life and storage requirements?", answer: "Properly dried hibiscus calyces (moisture below 12%) have a shelf life of 18-24 months when stored in cool, dry, dark conditions. We pack in polypropylene bags with inner poly liners, 25-50kg per bag, palletized for container shipping. Temperature-controlled storage is recommended but not required for short-term holding." },
    ],
  },

  // ── 7. Ginger ──────────────────────────────────────
  {
    slug: "ginger",
    name: "Ginger",
    ours: true,
    productPage: "/products/ginger",
    category: "Spices",
    currentPrice: 2500,
    unit: "MT",
    change30d: 4.3,
    projectedPrice: "$2,400 - $2,800 within 3 months",
    riskLevel: "watch",
    ensoImpact: "Ginger requires consistent moisture during its 8-10 month growing cycle. El Nino-related drought in Nigeria and India can significantly reduce yields and increase oleoresin content.",
    regions: [
      { name: "Kaduna State", country: "Nigeria", lat: 10.5, lon: 7.4, production: "300,000 MT", risk: "medium", rainfall: "Slightly below normal", detail: "Nigeria's ginger capital. Highest oleoresin content globally (4-6%). Split and dried for export." },
      { name: "Kerala", country: "India", lat: 10.9, lon: 76.3, production: "500,000 MT", risk: "low", rainfall: "Normal (monsoon)", detail: "Traditional ginger heartland. Cochin ginger variety, 3-4% oleoresin." },
      { name: "Guangxi Province", country: "China", lat: 23.7, lon: 108.3, production: "400,000 MT", risk: "low", rainfall: "Normal", detail: "Largest global producer. Lower quality but cheapest price." },
      { name: "Chiang Rai Province", country: "Thailand", lat: 19.9, lon: 99.8, production: "100,000 MT", risk: "low", rainfall: "Normal", detail: "Clean ginger for fresh market. Less relevant for dried/industrial." },
    ],
    seasonal: [
      { month: "Jan", activity: "Nigerian harvest and drying", buySignal: "buy" },
      { month: "Feb", activity: "Good supply, fresh harvest", buySignal: "buy" },
      { month: "Mar", activity: "Export season, stocks available", buySignal: "buy" },
      { month: "Apr", activity: "Planting new crop begins", buySignal: "neutral" },
      { month: "May", activity: "Growing season", buySignal: "neutral" },
      { month: "Jun", activity: "Growing season, monsoon India", buySignal: "neutral" },
      { month: "Jul", activity: "Growing season continues", buySignal: "neutral" },
      { month: "Aug", activity: "Pre-harvest, old stocks depleting", buySignal: "wait" },
      { month: "Sep", activity: "Stocks low, prices rising", buySignal: "wait" },
      { month: "Oct", activity: "Indian fresh ginger harvest", buySignal: "neutral" },
      { month: "Nov", activity: "Indian dried ginger processing", buySignal: "neutral" },
      { month: "Dec", activity: "Nigerian harvest begins", buySignal: "buy" },
    ],
    origins: [
      { origin: "Nigeria", production: "300,000 MT/yr", quality: "Highest oleoresin (4-6%), strong pungency, split dried", price: "$2,200 - $2,800/MT", advantage: "Best oleoresin content, most pungent" },
      { origin: "India", production: "2,000,000 MT/yr", quality: "Cochin variety, 3-4% oleoresin, established grades", price: "$1,800 - $2,500/MT", advantage: "Largest producer, full product range (fresh/dried/oil/oleoresin)" },
      { origin: "China", production: "3,000,000+ MT/yr", quality: "Lower oleoresin (1.5-3%), milder flavor", price: "$1,200 - $1,800/MT", advantage: "Cheapest option, massive volume" },
    ],
    priceDrivers: [
      "Nigerian ginger commands premium for highest oleoresin content (4-6%)",
      "Indian production dominates global supply, monsoon affects output",
      "Chinese production provides price floor but lower quality",
      "Health food demand driving growth in ginger extract and supplement markets",
      "Oleoresin content is the key quality differentiator for industrial buyers",
      "Currency movements in India and Nigeria affect export pricing",
    ],
    bestTimeToBuy: "January-March offers best pricing for Nigerian dried ginger (fresh harvest, maximum availability). Indian dried ginger is best purchased December-February. Avoid August-October when stocks are lowest.",
    supplyOutlook: "Nigeria's 2025/26 ginger crop from Kaduna state is on track for average to slightly below-average production. Rainfall was adequate during the growing season, and oleoresin content is testing well at 4.5-5.5%.\n\nIndia remains the dominant global supplier with over 2 million MT annually, but much is consumed domestically. Chinese ginger is the cheapest option but its lower oleoresin content (1.5-3%) makes it unsuitable for extract and oleoresin buyers.\n\nFor industrial buyers needing high pungency and oleoresin yield, Nigerian ginger remains the gold standard. We recommend securing Q1-Q2 needs before March, as Nigerian stocks typically thin out by mid-year.",
    faqs: [
      { question: "Why is Nigerian ginger more expensive than Indian or Chinese?", answer: "Nigerian ginger from Kaduna state has the highest oleoresin content globally at 4-6%, compared to 3-4% for Indian and 1.5-3% for Chinese. For buyers extracting oleoresin or needing maximum pungency (flavoring, pharmaceutical), the higher active compound concentration means better yield per MT, often making it more cost-effective despite the higher per-MT price." },
      { question: "What forms of ginger do you supply?", answer: "We supply Nigerian dried split ginger (the primary export form), which is washed, split, and sun-dried to 10-12% moisture. From India we can also source fresh ginger, dried sliced ginger, ginger powder, ginger oil, and ginger oleoresin. MOQ is 1 FCL for all products." },
      { question: "What are the food safety certifications for your ginger?", answer: "All shipments come with phytosanitary certificates from origin country authorities. We can supply ginger with organic certification (USDA/EU Organic), HACCP documentation, and SGS/Bureau Veritas quality inspection at loading. Aflatoxin, pesticide residue, and heavy metal testing certificates are standard." },
    ],
  },

  // ── 8. Turmeric ──────────────────────────────────────
  {
    slug: "turmeric",
    name: "Turmeric",
    ours: true,
    productPage: "/products/turmeric",
    category: "Spices",
    currentPrice: 2000,
    unit: "MT",
    change30d: 15.8,
    projectedPrice: "$2,200 - $2,800 within 3 months",
    riskLevel: "high",
    ensoImpact: "Highly sensitive to monsoon timing and intensity. El Nino weakens the Indian monsoon, reducing yields across all producing states. 2024-2025 El Nino caused significant price spikes.",
    regions: [
      { name: "Erode District", country: "India", lat: 11.3, lon: 77.7, production: "250,000 MT", risk: "high", rainfall: "Below normal (-20%)", detail: "Turmeric capital of the world. Erode market sets benchmark prices. Salem variety prized for curcumin content." },
      { name: "Telangana", country: "India", lat: 17.4, lon: 78.5, production: "300,000 MT", risk: "high", rainfall: "Below normal (-15%)", detail: "Largest producing state by volume. Nizamabad variety. Crop area expanding." },
      { name: "Tamil Nadu", country: "India", lat: 11.1, lon: 78.7, production: "200,000 MT", risk: "high", rainfall: "Below normal (-18%)", detail: "Premium varieties including Erode and Salem. Processing infrastructure concentrated here." },
      { name: "Maharashtra", country: "India", lat: 19.8, lon: 75.3, production: "150,000 MT", risk: "medium", rainfall: "Slightly below normal", detail: "Sangli district is key production zone. Good quality, growing acreage." },
    ],
    seasonal: [
      { month: "Jan", activity: "Harvest begins, fresh turmeric", buySignal: "buy" },
      { month: "Feb", activity: "Peak harvest, boiling and drying", buySignal: "buy" },
      { month: "Mar", activity: "Harvest winding down, processing", buySignal: "buy" },
      { month: "Apr", activity: "New dried turmeric at market", buySignal: "buy" },
      { month: "May", activity: "Erode auctions active", buySignal: "neutral" },
      { month: "Jun", activity: "Planting new crop (monsoon)", buySignal: "neutral" },
      { month: "Jul", activity: "Growing season, monsoon rains", buySignal: "neutral" },
      { month: "Aug", activity: "Growing, stocks from last harvest", buySignal: "neutral" },
      { month: "Sep", activity: "Pre-harvest, stocks declining", buySignal: "wait" },
      { month: "Oct", activity: "Stocks low, prices firm", buySignal: "wait" },
      { month: "Nov", activity: "Prices peak before new harvest", buySignal: "wait" },
      { month: "Dec", activity: "Early harvest in some areas", buySignal: "neutral" },
    ],
    origins: [
      { origin: "India (Erode/Salem)", production: "250,000 MT/yr", quality: "Highest curcumin (5-7%), gold standard", price: "$2,200 - $3,500/MT", advantage: "Premium curcumin content, benchmark quality" },
      { origin: "India (Telangana)", production: "300,000 MT/yr", quality: "Good curcumin (3-5%), large volume", price: "$1,800 - $2,500/MT", advantage: "Largest volume, competitive pricing" },
      { origin: "India (Maharashtra)", production: "150,000 MT/yr", quality: "Sangli variety, good color", price: "$1,900 - $2,400/MT", advantage: "Strong coloring properties" },
    ],
    priceDrivers: [
      "India produces 80% of world turmeric; Indian monsoon is the primary driver",
      "Curcumin content (3-7%) determines pricing tier and end-use suitability",
      "Supplement industry demand for high-curcumin turmeric growing 12-15% annually",
      "Erode spot market auctions set daily benchmark prices",
      "Government minimum support prices affect farmer planting decisions",
      "Currency (INR/USD) movements directly affect export competitiveness",
      "El Nino/La Nina cycles have outsized impact due to India concentration",
    ],
    bestTimeToBuy: "February-April offers best pricing when the new harvest floods the market. Erode and NCDEX auction prices are lowest during this window. Avoid October-December when stocks are depleted.",
    supplyOutlook: "Turmeric prices have spiked in late 2025 and early 2026, driven by a below-normal monsoon in key producing states. The Erode benchmark has risen sharply, and Telangana/Tamil Nadu production is estimated 15-20% below normal.\n\nThe supplement industry's growing demand for high-curcumin turmeric (5%+ curcumin content) is adding structural upward pressure to prices for premium grades. India's near-monopoly on production (80% of global output) means there are few alternative sources.\n\nFor 2026, we recommend forward booking by February to secure competitive pricing from the new harvest. Prices are unlikely to return to 2023 levels given the structural demand growth from the nutraceutical sector.",
    faqs: [
      { question: "What curcumin content does your turmeric have?", answer: "We source from Erode/Salem (5-7% curcumin), Telangana (3-5%), and Maharashtra (3-4.5%). For supplement manufacturers requiring high curcumin, Erode/Salem is the best origin. Every shipment includes a COA with curcumin content tested by HPLC method. We can also source curcumin extract (95%) for pharmaceutical applications." },
      { question: "Why have turmeric prices risen so sharply?", answer: "Below-normal monsoon rainfall in 2024-2025 reduced Indian production by 15-20%. Since India produces 80% of global turmeric, any production shortfall has an outsized price impact. Additionally, growing demand from the supplement industry (12-15% annual growth) is adding structural demand that did not exist a decade ago." },
      { question: "Do you supply turmeric powder or only whole fingers?", answer: "We supply both. Whole dried turmeric fingers (polished and unpolished) are our primary product, as they offer maximum shelf life and buyer flexibility. Turmeric powder (200 mesh) is available from our processing partners in Erode. We also source turmeric oleoresin and curcumin extract (95%) for industrial buyers." },
    ],
  },

  // ── 9. Moringa ──────────────────────────────────────
  {
    slug: "moringa",
    name: "Moringa",
    ours: true,
    productPage: "/products/moringa",
    category: "Superfoods",
    currentPrice: 5500,
    unit: "MT",
    change30d: 6.7,
    projectedPrice: "$5,200 - $6,000 within 3 months",
    riskLevel: "normal",
    ensoImpact: "Low. Moringa oleifera is exceptionally drought-tolerant and can produce leaves year-round in tropical climates. Extreme drought may reduce leaf quality and yield per harvest.",
    regions: [
      { name: "Kano/Kaduna", country: "Nigeria", lat: 11.0, lon: 7.6, production: "Growing rapidly", risk: "low", rainfall: "Normal", detail: "Expanding moringa cultivation. Organic potential with minimal pesticide use." },
      { name: "Northern Region", country: "Ghana", lat: 9.5, lon: -1.0, production: "Small but growing", risk: "low", rainfall: "Normal", detail: "Pilot farms and cooperatives. Strong organic certification potential." },
      { name: "Tamil Nadu", country: "India", lat: 11.1, lon: 78.7, production: "1,500,000 MT leaves", risk: "low", rainfall: "Normal", detail: "India's moringa capital. Largest global producer by far. PKM-1 and PKM-2 varieties." },
      { name: "Rajasthan", country: "India", lat: 26.9, lon: 75.8, production: "500,000 MT leaves", risk: "low", rainfall: "Normal", detail: "Dry climate ideal for moringa. Growing acreage for powder production." },
    ],
    seasonal: [
      { month: "Jan", activity: "Dry season harvest, good quality", buySignal: "buy" },
      { month: "Feb", activity: "Harvest continues", buySignal: "buy" },
      { month: "Mar", activity: "Peak dry season, best drying", buySignal: "buy" },
      { month: "Apr", activity: "Hot season, abundant leaves", buySignal: "neutral" },
      { month: "May", activity: "Pre-monsoon, leaf production high", buySignal: "neutral" },
      { month: "Jun", activity: "Monsoon onset, quality variable", buySignal: "neutral" },
      { month: "Jul", activity: "Rainy season, drying challenges", buySignal: "wait" },
      { month: "Aug", activity: "Rainy, higher moisture risk", buySignal: "wait" },
      { month: "Sep", activity: "Rains subsiding, quality improving", buySignal: "neutral" },
      { month: "Oct", activity: "Post-monsoon, good growth", buySignal: "neutral" },
      { month: "Nov", activity: "Harvest season begins", buySignal: "buy" },
      { month: "Dec", activity: "Good supply, dry conditions", buySignal: "buy" },
    ],
    origins: [
      { origin: "India", production: "2,200,000 MT leaves/yr", quality: "Established industry, consistent quality, all products", price: "$4,500 - $6,000/MT powder", advantage: "Volume leader, full product range, competitive" },
      { origin: "Nigeria", production: "Growing", quality: "Good leaf quality, organic potential", price: "$5,000 - $7,000/MT powder", advantage: "Organic potential, less pesticide exposure" },
      { origin: "Ghana", production: "Small scale", quality: "Premium organic, small batches", price: "$6,000 - $8,000/MT powder", advantage: "Organic certified, traceable cooperatives" },
    ],
    priceDrivers: [
      "Global superfood/supplement trend driving 15-20% annual demand growth",
      "India's dominant production (2.2M MT) sets global pricing benchmark",
      "Organic certification commands 30-50% premium over conventional",
      "Leaf powder quality (color retention, nutrient content) affects pricing",
      "Growing demand from food manufacturers for moringa as an ingredient",
      "African origins gaining market share as organic/traceable alternatives to India",
    ],
    bestTimeToBuy: "January-March during the dry season offers best quality (optimal drying conditions) and competitive pricing. Avoid July-August when rainy season creates drying challenges and quality risks.",
    supplyOutlook: "The moringa market continues to grow rapidly, driven by the superfood and supplement trend in Western markets. India dominates with over 2 million MT of leaf production annually, providing a reliable supply base.\n\nAfrican moringa from Nigeria and Ghana is gaining traction among buyers seeking organic, traceable alternatives. These origins offer lower pesticide exposure and strong organic certification potential, but volumes are smaller and prices higher.\n\nWe expect continued price growth of 5-10% annually as demand outpaces supply expansion. Indian moringa powder at $4,500-6,000/MT remains the benchmark for volume buyers, while African origins command premiums for the organic/specialty segment.",
    faqs: [
      { question: "What is the nutrient profile of your moringa powder?", answer: "Our moringa leaf powder contains approximately 25-30% protein, high levels of iron (25-30mg/100g), calcium (2,000-2,500mg/100g), vitamin A (18,000-20,000 IU/100g), and vitamin C (15-20mg/100g). Exact values vary by origin and season. Every shipment includes a full nutritional analysis certificate." },
      { question: "Do you supply moringa oil as well as powder?", answer: "Yes. We supply moringa (ben) oil pressed from moringa seeds, which is valued in the cosmetics industry for its stability and moisturizing properties. Moringa oil is typically $15,000-25,000/MT depending on purity and certification. Our primary product is moringa leaf powder, with oil available on request." },
      { question: "What is the difference between Indian and African moringa?", answer: "Indian moringa (PKM-1/PKM-2 varieties) is commercially cultivated at scale with established processing infrastructure. African moringa from Nigeria/Ghana tends to be from semi-wild or small-farm cultivation with lower pesticide use, making it easier to certify organic. Nutritional content is comparable, but African origins are gaining a premium market position for traceability and organic claims." },
    ],
  },

  // ── 10. Castor Oil ──────────────────────────────────────
  {
    slug: "castor-oil",
    name: "Castor Oil",
    ours: true,
    productPage: "/products/castor-oil",
    category: "Industrial Oils",
    currentPrice: 1350,
    unit: "MT",
    change30d: 3.1,
    projectedPrice: "$1,300 - $1,500 within 3 months",
    riskLevel: "normal",
    ensoImpact: "Moderate. Castor (Ricinus communis) is drought-tolerant but optimal yields require monsoon moisture. El Nino weakens the Indian monsoon, potentially reducing Gujarat/Rajasthan production.",
    regions: [
      { name: "Gujarat (Mehsana/Banaskantha)", country: "India", lat: 23.6, lon: 72.4, production: "1,200,000 MT seeds", risk: "low", rainfall: "Normal", detail: "World's castor capital. 70% of Indian production. Advanced crushing infrastructure." },
      { name: "Rajasthan (Jodhpur/Barmer)", country: "India", lat: 26.3, lon: 73.0, production: "400,000 MT seeds", risk: "low", rainfall: "Normal", detail: "Second-largest producing state. Expanding acreage. Dry climate suits castor." },
    ],
    seasonal: [
      { month: "Jan", activity: "Harvest winding down, processing", buySignal: "buy" },
      { month: "Feb", activity: "New oil at market, abundant", buySignal: "buy" },
      { month: "Mar", activity: "Export season, best availability", buySignal: "buy" },
      { month: "Apr", activity: "Good supply continues", buySignal: "buy" },
      { month: "May", activity: "Stocks adequate, pre-planting", buySignal: "neutral" },
      { month: "Jun", activity: "Planting with monsoon onset", buySignal: "neutral" },
      { month: "Jul", activity: "Growing season (monsoon)", buySignal: "neutral" },
      { month: "Aug", activity: "Growing season continues", buySignal: "neutral" },
      { month: "Sep", activity: "Pre-harvest, stocks thinning", buySignal: "neutral" },
      { month: "Oct", activity: "Early harvest begins", buySignal: "neutral" },
      { month: "Nov", activity: "Harvest expanding", buySignal: "buy" },
      { month: "Dec", activity: "Peak harvest, processing ramps", buySignal: "buy" },
    ],
    origins: [
      { origin: "India (Gujarat)", production: "1,200,000 MT seeds/yr", quality: "Global benchmark quality, full product range", price: "$1,200 - $1,500/MT oil", advantage: "85-90% of global exports, most reliable supply" },
      { origin: "India (Rajasthan)", production: "400,000 MT seeds/yr", quality: "Good quality, expanding production", price: "$1,200 - $1,450/MT oil", advantage: "Growing capacity, competitive" },
    ],
    priceDrivers: [
      "India controls 85-90% of global castor oil exports (near-monopoly)",
      "Indian monsoon rainfall is the primary production driver",
      "Industrial demand from lubricants, coatings, and bioplastics growing",
      "Cosmetics/personal care demand for cold-pressed castor oil",
      "NCDEX futures trading provides price transparency",
      "Government policies (MSP, export taxes) can shift supply/demand balance",
      "Limited alternative sources create supply concentration risk",
    ],
    bestTimeToBuy: "February-April when new-harvest oil is abundant and Gujarat crushers are running at full capacity. Prices are typically 10-15% lower than the September-November trough period.",
    supplyOutlook: "India's dominance in castor oil (85-90% of global exports) creates a concentrated supply chain. The 2025/26 Gujarat crop benefited from adequate monsoon rainfall, and production is tracking near normal levels.\n\nIndustrial demand continues to grow, particularly from the bioplastics, coatings, and lubricant sectors. The cosmetics industry is also driving increased demand for cold-pressed, organic castor oil at premium prices.\n\nThe main risk is India's near-monopoly. Any production disruption (drought, pest outbreak, policy changes) has an immediate global impact with no alternative supplier able to fill the gap. We recommend buyers maintain 2-3 months of safety stock and consider forward contracts during the post-harvest window (February-April).",
    faqs: [
      { question: "What grades of castor oil do you supply?", answer: "We supply commercial grade (for industrial use), first special grade (FSG, for cosmetics and pharmaceuticals), cold-pressed (for premium cosmetics), and hydrogenated castor oil (castor wax). Commercial grade is the most traded at $1,200-1,500/MT. Cold-pressed and FSG command premiums of $200-500/MT over commercial grade." },
      { question: "Why is India so dominant in castor oil production?", answer: "India's dominance comes from Gujarat's ideal growing conditions (semi-arid climate, suitable soils), decades of variety development for high oil content (48-55%), established crushing infrastructure, and a large farming base familiar with the crop. No other country has replicated this combination at scale. Brazil and China produce castor but primarily for domestic use." },
      { question: "What are the main industrial uses of castor oil?", answer: "Castor oil's unique ricinoleic acid (85-90% of fatty acid composition) makes it valuable for: sebacic acid production (nylon, plasticizers), hydrogenated castor oil (cosmetics, coatings), dehydrated castor oil (paints, varnishes), sulfonated castor oil (textile processing), and polyurethane production. The bioplastics sector is the fastest-growing end use." },
    ],
  },
];

export function getCommodityBySlug(slug: string): CommodityIntel | undefined {
  return commodityIntelData.find((c) => c.slug === slug);
}

export function getAllCommoditySlugs(): string[] {
  return commodityIntelData.map((c) => c.slug);
}
