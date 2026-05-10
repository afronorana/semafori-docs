# Distribution Plan

This document defines how to sell, fulfill, and support the AI Agent Status Light after manufacturing.

The product is small, hardware-based, Wi-Fi-enabled, and requires a companion desktop app. Distribution must therefore handle both physical logistics and software onboarding.

## Distribution Strategy

Start narrow:

1. Sell directly to early AI coding users.
2. Learn from the first 50-100 shipped units.
3. Move to broader direct-to-consumer sales.
4. Add Amazon only after packaging, compliance, returns, and product listing assets are stable.
5. Add B2B/team packs after support burden is understood.
6. Add retail only if margin and packaging support it.

Do not start with retail. Retail creates margin pressure, inventory commitments, packaging requirements, chargebacks, and slower feedback.

## Kosovo-Based Operating Model

The practical path is:

```text
China prototype/factory -> Kosovo for testing
China production batch -> EU 3PL warehouse + US 3PL warehouse
Shopify/orders -> nearest warehouse -> customer
```

Kosovo should be the founder QA and prototype hub, not the main customer fulfillment hub.

Use Kosovo for:

- Receiving prototypes.
- Firmware testing.
- Wi-Fi setup testing.
- Desktop app testing.
- Packaging inspection.
- Golden sample approval.
- Small local beta tests.
- Keeping a small replacement/spare inventory.

Do not use Kosovo as the default shipping origin for EU and US customers because:

- Cross-border shipping from Kosovo to each customer will be slower.
- Every order can create customs friction.
- Delivery cost will be higher than regional fulfillment.
- Returns will be harder.
- Customers in the EU and US expect local-style delivery speed and tracking.

### Prototype Flow To Kosovo

For prototypes and EVT/DVT samples:

1. Factory ships 5-20 units to Kosovo by DHL/FedEx/UPS or freight forwarder.
2. Import them as samples/prototypes for testing, not normal retail inventory.
3. Keep invoices accurate. Do not ask the supplier to underdeclare value.
4. Photograph, test, and document every issue.
5. Feed defects back to the factory before the next revision.
6. Keep one approved golden sample in Kosovo.

Expected Kosovo import considerations:

- Kosovo generally charges VAT on imports.
- Kosovo's standard VAT rate is 18%.
- Imports can require customs documentation such as invoice, origin certificate, and customs declaration.
- For China-origin goods, expect duty/VAT unless a specific exemption applies.
- Use a Kosovo customs broker once prototype shipments become frequent.

### First Sellable Batch Flow

For the first sellable batch, do not send all inventory to Kosovo.

Recommended split:

- 10-30 units to Kosovo for final founder inspection, content, and replacements.
- 50-150 units to an EU 3PL.
- 50-150 units to a US 3PL.

If the first batch is very small, choose one main sales region first instead of splitting too thinly.

Recommended first region:

- EU first if your early audience is mostly Europe and you can handle EU compliance/VAT.
- US first if the strongest demand is from Codex/AI developer communities there and FCC/import costs are solved.

### Production Flow After Validation

Once the product passes pilot testing:

1. Factory completes production.
2. Third-party inspection checks the batch before final payment.
3. Factory or forwarder ships cartons directly to fulfillment warehouses.
4. EU-bound inventory goes to an EU 3PL.
5. US-bound inventory goes to a US 3PL.
6. A small spare batch goes to Kosovo.
7. Shopify routes each order to the right warehouse.
8. Returns go back to the regional warehouse when possible.

## Dropshipping vs 3PL Warehousing

### Avoid China-To-Customer Dropshipping For This Product

Classic dropshipping means the factory ships each customer order directly from China.

For this product, that is not the recommended model.

Reasons:

- The product is Wi-Fi electronics and needs compliance control.
- Each unit should be tested before sale.
- Customer setup support is easier when batches are consistent.
- Shipping times from China can hurt trust.
- EU VAT/import handling becomes messy for each customer.
- US low-value import rules changed significantly, especially for China-origin goods.
- Returns and replacements become slow and expensive.

Use China-to-customer shipping only for rare test orders or replacement exceptions, not the default business model.

### Use Regional 3PL Warehousing Instead

A 3PL stores your inventory and ships orders after purchase.

Recommended model:

```text
Factory in China
  -> bulk shipment to EU 3PL
  -> bulk shipment to US 3PL
  -> Shopify sends orders to the correct 3PL
  -> 3PL ships locally/regionally to customer
```

Benefits:

- Faster delivery.
- Better tracking.
- Lower per-order shipping cost at scale.
- Easier returns.
- Better customer trust.
- Easier Amazon/FBA prep later.
- Cleaner batch tracking.

Tradeoff:

- You must buy inventory upfront.
- You must pay storage and receiving fees.
- You must manage import/compliance before sale.

### Hybrid Model For The First Year

Use this hybrid model:

- Kosovo: prototypes, QA, content, spare units.
- EU 3PL: EU customer orders.
- US 3PL: US customer orders.
- Factory: production and bulk export only.
- Amazon FBA: later, after DTC demand and compliance are proven.

This keeps you close to the product without forcing every customer shipment through Kosovo.

## EU Warehouse Plan

Use an EU-based 3PL once you are ready to sell to EU customers.

Good warehouse locations to evaluate:

- Netherlands: strong logistics hub, good for EU-wide shipping.
- Germany: large market, central EU fulfillment.
- Poland/Czech Republic: often lower warehousing costs, good central/eastern EU coverage.

For EU sales, solve before shipping inventory:

- CE/RED compliance.
- RoHS.
- WEEE responsibility in countries where you sell.
- EU Declaration of Conformity.
- VAT handling.
- Whether you need an EU importer of record or fiscal representative.
- Whether Shopify checkout prices include VAT.
- Returns address.

If goods are already stored in an EU warehouse, they are not treated like direct imported low-value parcels for each customer. The inventory is imported first, then sold domestically/cross-border inside the EU VAT framework.

## US Warehouse Plan

Use a US 3PL once FCC/import costs are solved.

Good warehouse locations to evaluate:

- East Coast for EU-to-US freight flexibility and dense population.
- Midwest for balanced US coverage.
- West Coast only if inventory comes by Pacific freight and tariffs/freight plan still makes sense.

For US sales, solve before shipping inventory:

- FCC authorization/compliance path.
- Country-of-origin marking.
- Correct HTS code.
- Importer of record.
- Duties/tariffs estimate.
- Product liability insurance.
- Return address.
- Whether to later send part of the stock to Amazon FBA.

Important: direct low-value dropshipping from China to US customers is no longer the simple fallback it used to be. CBP began enforcing the end of de minimis treatment globally in 2025, and China/Hong Kong-origin shipments were specifically affected earlier. For this product, model US sales around bulk import to a US warehouse instead.

## Warehouse Provider Shortlist

Evaluate providers that can support small hardware brands.

Possible options:

- Shopify Fulfillment Network partners.
- ShipBob.
- Flexport.
- DHL Fulfillment.
- Bigblue for Europe.
- Amazon MCF/FBA later.
- Local EU 3PLs in Germany, Netherlands, Poland, or Czech Republic.
- Local US 3PLs with electronics experience.

Questions to ask every 3PL:

1. What is your minimum monthly fee?
2. What are receiving fees per carton/pallet?
3. What are storage fees?
4. What are pick and pack fees?
5. What are return processing fees?
6. Do you integrate with Shopify?
7. Can you handle serial numbers or batch labels?
8. Can you quarantine returned electronics?
9. Can you ship replacement units?
10. Can you prep inventory for Amazon FBA later?
11. Can you handle branded packaging?
12. Can you support EU and US warehouses under one account?
13. Who is importer of record: you, them, or a broker?
14. Can they support DDP shipments when needed?

## Recommended First Logistics Setup

For the first real batch:

```text
Batch size: 100-300 units

Kosovo:
  10-30 units
  Purpose: QA, content, replacements, local beta

EU warehouse:
  50-150 units
  Purpose: EU customer orders

US warehouse:
  50-150 units
  Purpose: US customer orders
```

If that is too expensive:

```text
Batch size: 50-100 units

Kosovo:
  10-20 units

One target region warehouse:
  40-80 units

Other regions:
  waitlist only until demand is proven
```

Do not split tiny inventory across too many warehouses. If each warehouse has only a few units, storage/admin overhead becomes inefficient.

## Best Initial Channel Mix

### Phase 1: Private Beta

Quantity:

- 20-50 units.

Audience:

- Developers already using Codex or other AI coding agents.
- Friends, local devs, community members, small agencies.
- People willing to give feedback and tolerate early friction.

Fulfillment:

- Manual shipping.
- Founder-managed support.

Goal:

- Find hardware defects.
- Find onboarding friction.
- Confirm that users keep the device plugged in.
- Confirm that Codex integration creates daily utility.

### Phase 2: Paid Pilot

Quantity:

- 100-300 units.

Channel:

- Own website.
- Stripe/Shopify checkout.
- Limited preorder or limited in-stock batch.

Fulfillment:

- Manual if still manageable.
- Small 3PL if orders are geographically spread.

Goal:

- Validate willingness to pay.
- Measure return rate.
- Measure support time per customer.
- Measure how many users successfully connect Wi-Fi and Codex.

### Phase 3: Public DTC Launch

Quantity:

- 500-2000 units.

Channel:

- Shopify storefront.
- Product Hunt / Hacker News / Reddit launch traffic routed to owned site.
- Email waitlist.

Fulfillment:

- 3PL for main region.
- Manual exceptions for replacements and support cases.

Goal:

- Create repeatable sales.
- Own customer data.
- Learn true conversion rate.
- Build review base.

### Phase 4: Amazon

Use Amazon after:

- FCC/CE/RoHS/WEEE path is clear for target markets.
- Packaging is final.
- Barcode/GTIN is ready.
- Returns process is ready.
- Listing images and video are ready.
- Support docs are strong.

Amazon can increase trust and speed but reduces control. It is better as a second major channel, not the first.

### Phase 5: B2B / Team Packs

Potential buyers:

- Engineering teams.
- AI-heavy agencies.
- Coding bootcamps.
- Developer tool companies.
- Coworking spaces.
- Hackathon organizers.

Offer:

- 3-pack.
- 5-pack.
- 10-pack.
- Branded team pack later.

Do not overbuild enterprise features early. Sell simple packs first.

## Pricing Model

Target a hardware margin that leaves room for support, returns, ads, payment fees, and future wholesale.

Suggested pricing tests:

- Beta price: lower, with clear "early batch" framing.
- Public DTC price: target full product value.
- Team pack: small discount for multiple units.
- Amazon price: same or slightly higher than DTC to account for marketplace fees.

Pricing should consider:

- Factory unit cost.
- Tooling amortization.
- Packaging.
- Firmware flashing/testing cost.
- Third-party inspection.
- Freight.
- Duties/tariffs.
- Customs brokerage.
- 3PL receiving.
- Storage.
- Pick and pack.
- Shipping subsidy.
- Payment fees.
- Returns.
- Warranty replacements.
- Customer support.
- Marketing spend.

Rule of thumb:

- DTC MSRP should usually be at least 3x landed cost for small hardware.
- If wholesale/retail is planned later, MSRP may need to be 4x-5x landed cost.
- If the product cannot support that margin, simplify the hardware or raise price before scaling.

## Landed Cost Formula

Track this per unit:

```text
landed cost =
factory unit cost
+ packaging
+ factory testing/flashing
+ inspection cost per unit
+ freight to destination
+ insurance
+ import duty/tariff
+ customs/brokerage allocation
+ receiving cost
+ expected defect/replacement allowance
```

Then calculate contribution margin:

```text
contribution margin =
selling price
- landed cost
- payment fees
- pick/pack fee
- outbound shipping subsidy
- expected return cost
- support allowance
- channel fee
- ad/customer acquisition cost
```

## Fulfillment Strategy

### Box Contents For Customer Orders

Every customer order should ship with a complete retail-ready box.

Default contents:

- AI Agent Status Light.
- USB power cable if included in that SKU.
- Printed setup leaflet / quick start card.
- Warranty/support note if separate.
- Protective insert or tray.

The setup leaflet is required, not optional. The product depends on a Wi-Fi setup flow, desktop app, and Codex integration, so printed onboarding reduces returns and support tickets.

The leaflet should direct users to:

- Plug in the light.
- Connect to `AI-Light-Setup` if all three LEDs blink.
- Enter Wi-Fi credentials.
- Wait for green blinking.
- Open the desktop app.
- Click `Find Light`.
- Use `Manual IP` if discovery fails.
- Click `Connect to Codex`.
- Scan a QR code for the latest setup guide.

### Warehouse Packaging Requirements

Before sending inventory to any 3PL, confirm:

- Each unit has a scannable SKU barcode.
- Each unit has a serial or lot number.
- Cartons have carton labels.
- Cartons state quantity per carton.
- Cartons identify SKU and hardware version.
- The product box protects the device well enough for ecommerce handling.
- The 3PL knows whether to ship the retail box directly or place it in an outer mailer/carton.

Do not send loose devices to a warehouse. They should arrive as finished, packed, sellable units.

### Manual Fulfillment

Use for:

- First 20-100 units.
- Beta.
- Local/regional orders.

Benefits:

- You see packaging problems.
- You learn common customer questions.
- You can insert handwritten or batch-specific notes.
- You can inspect each unit before shipping.

Downside:

- Does not scale.
- Becomes distracting after volume grows.

### 3PL Fulfillment

Use after:

- Packaging is stable.
- SKU count is simple.
- Monthly order volume is predictable.
- Returns flow is documented.

3PL requirements:

- Shopify integration.
- International shipping support or region-specific warehouses.
- Serial/batch tracking if possible.
- Low minimum storage fees.
- Clear receiving process.
- Can handle replacements.
- Can hold quarantined inventory.

### Amazon FBA

Use for:

- Amazon marketplace sales.
- Prime-speed delivery.
- Customers who trust Amazon more than a standalone site.

Requirements:

- Proper barcode/GTIN/FNSKU flow.
- Packaging that survives Amazon handling.
- Product compliance documentation ready.
- Listing and support content ready.
- Inventory planning to avoid stockouts and storage fees.

Amazon should not be the only distribution channel because you need direct customer data and more control over onboarding.

### Amazon MCF

Amazon Multi-Channel Fulfillment can ship orders from non-Amazon channels, but evaluate:

- Packaging branding.
- Fees.
- Return experience.
- Whether it conflicts with your DTC customer experience.

## Barcode And SKU Plan

Create a clean SKU system early.

Example:

```text
AILIGHT-US-BLK-V1
AILIGHT-EU-BLK-V1
AILIGHT-UK-BLK-V1
AILIGHT-USB-CABLE-V1
```

Use GS1 GTINs/UPC/EANs if selling through Amazon, retail, or larger marketplaces.

Track:

- SKU.
- Hardware version.
- Firmware version.
- Region.
- Power/cable variant.
- Packaging language variant.
- Compliance label variant.

## Inventory Plan

Initial inventory rule:

- Keep first public batch intentionally small.
- Do not manufacture more than you can support.
- Use sales velocity from the first batch before committing to larger production.

Inventory targets:

- Beta: 20-50 units.
- Pilot: 100-300 units.
- Public launch: 500-2000 units.
- Reorder trigger: when sell-through plus lead time shows less than 6-8 weeks of inventory remaining.

For hardware, stockouts are bad but overstock is worse. Overstock traps cash and hides product problems.

## Returns And Warranty

Create this before launch:

- 30-day return policy.
- 1-year limited warranty for manufacturing defects.
- Simple replacement flow for dead-on-arrival units.
- Return reason codes.
- Refurbish/test procedure for returned units.

Return reason codes:

- Could not connect Wi-Fi.
- Could not install Codex integration.
- Device not discovered.
- LED defect.
- Physical damage.
- Changed mind.
- App issue.
- Other.

Every return should teach either product, onboarding, or manufacturing.

## Customer Support Plan

Support must cover both hardware and software.

Required docs:

- Quick start guide.
- Wi-Fi setup guide.
- Manual IP guide.
- Codex integration guide.
- Reset Wi-Fi guide.
- Meaning of LED states.
- Firmware update plan when available.
- Troubleshooting checklist.

Support channels:

- Email first.
- Help docs.
- In-app diagnostics later.
- Discord/community only if you can moderate it.

Support metrics:

- Tickets per 100 shipped units.
- Top 5 support reasons.
- Average time to first response.
- Average time to resolution.
- Percentage solved without replacement.
- Replacement rate.

## Compliance Before Distribution

Do not broadly sell until compliance is ready for the target market.

US:

- FCC path confirmed.
- Country-of-origin marking.
- Product label.
- User instructions.
- Product liability insurance.

EU:

- CE/RED path confirmed.
- RoHS.
- WEEE registration/producer responsibility.
- EU Declaration of Conformity.
- Required language/instruction handling.

UK:

- UKCA if selling directly in the UK, depending on applicable rules.

General:

- Do not list as a children's toy unless toy compliance is complete.

## Crowdfunding Distribution

Crowdfunding is useful only if the product has already reached a credible prototype/manufacturing stage.

Use Kickstarter or similar if:

- Working prototype exists.
- DFM prototype is close.
- Manufacturing options are reviewed.
- Supplier quotes are real.
- Shipping costs are modeled.
- Timeline includes contingency.
- Compliance testing is budgeted.

Do not use crowdfunding to discover whether the product can be manufactured. Use it to fund a known manufacturing plan.

Campaign fulfillment plan:

1. Collect pledges.
2. Finalize DVT.
3. Run PVT.
4. Confirm compliance.
5. Manufacture.
6. Inspect.
7. Ship to fulfillment center.
8. Collect final shipping/tax details through pledge manager if needed.
9. Fulfill by region.
10. Keep backers updated even when delayed.

## Distribution Launch Sequence

### Step 1: Beta Batch

- Ship 20-50 units manually.
- Run onboarding calls.
- Watch where users fail.
- Track defects.
- Ask for desk photos and short quotes.

### Step 2: Limited Paid Batch

- Sell 100-300 units on owned site.
- Add basic help center.
- Add return policy.
- Add analytics.
- Add email sequence.

### Step 3: Public Launch

- Launch DTC.
- Send waitlist email.
- Launch Product Hunt.
- Post Show HN if the technical story is strong.
- Publish firmware/API docs.
- Publish a build story.

### Step 4: Fulfillment Scale

- Move inventory to 3PL.
- Keep 20-50 units locally for support replacements.
- Standardize replacement process.

### Step 5: Marketplace Expansion

- Get GS1 barcode.
- Register Amazon account.
- Prepare product compliance docs.
- Create listing with product video.
- Send small FBA quantity first.
- Watch reviews and returns.

### Step 6: B2B Packs

- Offer team packs from own website.
- Create invoice/manual payment option.
- Build simple team onboarding guide.
- Add "buy 5 for your team" landing page section.

## Wholesale And Retail Later

Retail is attractive only after:

- DTC sales are stable.
- Returns are low.
- Packaging is retail-ready.
- MSRP supports retailer margin.
- Production can handle larger POs.
- Compliance and insurance are mature.

Retail economics:

- Retailers may expect 40-60% margin.
- Distributors add another margin layer.
- Chargebacks and packaging requirements can be strict.

Retail candidates later:

- Developer stores.
- Museum/gadget shops.
- Computer accessory shops.
- Coworking operators.
- Conference merch partners.

## Distribution Risks

| Risk | Prevention |
| --- | --- |
| Product ships before compliance is ready | Gate sales by region |
| Wi-Fi setup causes returns | Improve setup UX and docs |
| Amazon reviews hurt launch | Start with DTC and beta first |
| 3PL loses batch traceability | Use serial/lot labels |
| Stockout after launch | Pre-plan reorder lead time |
| Overstock after hype | Keep first batches small |
| High support cost | Improve app diagnostics |
| Customs delay | Use experienced forwarder |
| Wrong barcode/label | Validate with 3PL/Amazon before mass print |

## Proven Methods To Follow

- Own the first customer relationship through DTC.
- Manually fulfill the first small batch to learn.
- Keep inventory batches small until defect rate is known.
- Use 3PL only after packaging and SKU rules are stable.
- Use Amazon after direct sales prove demand and support flows.
- Use GS1 barcodes for marketplace/retail readiness.
- Keep regional compliance tied to regional sales.
- Track landed cost and contribution margin, not only factory cost.
- Treat returns as product research.
- Keep spare units for replacements.

## Source Notes

- Shopify explains ecommerce fulfillment as the full path from receiving, warehousing, inventory management, picking, packing, shipping, and returns: https://www.shopify.com/blog/ecommerce-fulfillment
- Shopify Fulfillment Network connects stores with 3PL partners and supports inventory transfers, order routing, fulfillment monitoring, and 3PL operations from Shopify admin: https://help.shopify.com/en/manual/fulfillment/shopify-fulfillment-network
- Shopify lists Fulfillment Network partners such as Flexport, Amazon MCF, Bigblue, DHL Fulfillment, GoBolt, Mayple, Shipfusion, and ShipBob: https://help.shopify.com/en/manual/fulfillment/shopify-fulfillment-network/logistics-partners
- ShipBob describes EU/UK/US fulfillment centers, Shopify integrations, inventory management, pick/pack/ship, returns, and global shipping capabilities: https://www.shipbob.com/shipbob-locations/europe/
- Flexport describes China-to-US ecommerce logistics into pre-approved 3PL fulfillment centers: https://www.flexport.com/logistics/flow-direct/fulfillment-network/
- Amazon's FBA guide explains the value of FBA for Prime-speed shipping and marketplace fulfillment: https://sell.amazon.com/blog/ask/amazon-fba-beginners-guide-2026
- Amazon Seller Central notes that commingling practices changed in 2026, making product identification and barcode planning important for marketplace operations: https://sellercentral.amazon.com/seller-forums/discussions/t/106d0747-e5c6-44d8-86f3-7669f11238fe
- GS1 says GTINs/barcodes are needed for many online and traditional retailers, including Amazon and major marketplaces: https://www.gs1.org/standards/get-barcodes
- US CBP country-of-origin guidance explains marking requirements for imported goods: https://www.cbp.gov/trade/rulings/informed-compliance-publications/marking-country-origin-us-imports
- US CBP stated it began enforcing the end of the de minimis loophole in 2025 after earlier China/Hong Kong-specific changes, which affects direct low-value ecommerce shipping strategy: https://www.cbp.gov/newsroom/national-media-release/cbp-ready-enforce-end-de-minimis-loophole-securing-borders-and
- European Commission VAT ecommerce guidance explains that all goods imported into the EU are subject to VAT and IOSS applies to imported distance sales of goods not exceeding EUR 150: https://vat-one-stop-shop.ec.europa.eu/index_en
- ICC Incoterms guidance explains how delivery, risk, costs, customs, packaging, marking, and transport responsibilities are allocated: https://academy.iccwbo.org/incoterms/article/incoterms-2020-exw-or-ddp/
- Kosovo import guidance notes that the Single Administrative Document and documents such as certificate of origin, commercial invoice, and customs declaration are required for imports: https://www.trade.gov/country-commercial-guides/kosovo-import-requirements-and-documentation
- Kosovo tax guidance lists 18% standard VAT and import VAT considerations: https://taxsummaries.pwc.com/Kosovo/Corporate/Other-taxes
- Kickstarter hardware/product design rules require honesty, working prototypes, clear production plans, and no misleading photorealistic renders: https://help.kickstarter.com/hc/en-us/articles/115005134554-What-are-the-rules-for-hardware-and-product-design-projects
- Kickstarter funding guidance recommends setting the funding goal as the minimum needed to make and fulfill the promised rewards, including less obvious costs: https://www.kickstarter.com/help/handbook/funding
- Kickstarter Pledge Manager can collect fulfillment details and shipping costs closer to delivery: https://help.kickstarter.com/hc/en-us/articles/30353536404891-How-do-I-use-Kickstarter-s-Pledge-Manager
