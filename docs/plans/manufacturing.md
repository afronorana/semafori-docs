# Manufacturing Plan

This document is a practical guide for finding and managing PCB, PCBA, enclosure, and final assembly manufacturers in China for the AI Agent Status Light.

The product is a small ESP32-powered desktop traffic light. It is not a children's toy. It may use toy/gift manufacturers for enclosure sourcing, but the final product should be positioned as a developer desk accessory because toy positioning creates additional compliance obligations.

The current ESP32-C3 Super Mini LED pin layout is documented in [ESP32-C3 Super Mini Pinout](./esp32-pinout.md). PCB, firmware, and manufacturing test files should use that document as the source of truth.

## Manufacturing Strategy

Use a staged hardware process:

1. Prototype with off-the-shelf ESP32 boards and 3D-printed or hand-built traffic-light enclosures.
2. Move to custom PCBA once firmware, LED behavior, HTTP endpoints, USB power, and desktop discovery are stable.
3. Build a 20-100 unit pilot with production-like PCB, enclosure, cable, packaging, firmware flashing, and test process.
4. Run DFM/DFA review before cutting injection tooling.
5. Run a 300-1000 unit first production batch only after compliance pre-checks and a passed pre-shipment inspection.
6. Scale after real customer returns, support issues, and device reliability are understood.

The strongest path is not to find "one magic factory" immediately. Use specialized suppliers at first, then consolidate:

- PCBA supplier for electronics.
- Enclosure/plastic supplier for casing.
- Final assembly partner for flashing, assembly, test, packaging, and shipping carton prep.
- Third-party QC company for independent inspection.
- Freight forwarder for export/import and duties.

## Kosovo Prototype Testing Model

Founder testing should happen in Kosovo.

Use this flow for early hardware:

```text
Chinese supplier/prototype shop -> Kosovo -> founder testing -> supplier revision
```

Order to Kosovo for:

- Hand-built prototypes.
- PCBA prototypes.
- Enclosure samples.
- EVT samples.
- DVT samples.
- Golden sample approval.
- Packaging samples.

Test in Kosovo:

- Firmware.
- Wi-Fi setup.
- Hotspot setup flow.
- Desktop app discovery.
- Manual IP connection.
- LED state patterns.
- USB power stability.
- Repeated power cycles.
- Packaging durability.
- Real desk usage.

Do not route every production unit through Kosovo once the product is sellable. Kosovo is the development and QA base. Customer inventory should go from China to regional fulfillment warehouses in the EU and US after inspection.

Recommended prototype quantities:

- First hand-built sample: 2-5 units.
- EVT custom electronics sample: 5-10 units.
- DVT production-like sample: 10-30 units.
- Pilot production: 50-100 units, with only part of the batch sent to Kosovo.

Supplier RFQs should ask for:

- Sample shipping cost to Kosovo.
- Express courier options.
- Commercial invoice format.
- HS code they plan to use.
- Country-of-origin marking.
- Whether they can split shipments between Kosovo, EU warehouse, and US warehouse after production.

Do not ask suppliers to underdeclare sample value. It creates customs risk and weakens your documentation trail.

## Product Classification

Treat this as:

- Wi-Fi consumer electronics.
- USB-powered desktop accessory.
- Developer tool companion.
- Not intended for children under 12.
- Not a children's toy unless the brand, packaging, sales copy, colors, use cases, or sales channels make it look intended for children.

Why this matters:

- A Wi-Fi device needs RF/electronics compliance.
- A product sold in the EU needs CE/RoHS/WEEE planning.
- A product sold in the US needs FCC planning and country-of-origin marking.
- A children's toy in the US can trigger ASTM F963, CPSIA, CPC, lead, phthalates, small-parts, tracking label, and CPSC third-party testing requirements.

Recommended packaging language:

```text
AI Agent Status Light
Developer desk accessory
For indoor use
USB powered
Not a toy
Not for children under 14
```

## Supplier Types To Find

### 1. Prototype PCBA Supplier

Use for early custom boards and small batches.

Good candidates to compare:

- JLCPCB
- Seeed Fusion
- PCBWay
- Elecrow

What to ask for:

- PCB fabrication.
- SMT assembly.
- Through-hole LED assembly if needed.
- BOM sourcing.
- ESP32 module handling.
- Firmware flashing support.
- Functional test support.
- AOI inspection.
- IPC-A-610 Class 2 workmanship target.

Use these suppliers for speed and iteration. Do not assume they are the final production partner.

### 2. Production PCBA Supplier

Use after the schematic, PCB, BOM, and test jig are stable.

Search terms:

```text
Shenzhen ESP32 PCBA assembly OEM
Shenzhen WiFi IoT PCBA manufacturer
ESP32 smart device PCBA factory China
IoT device PCB assembly firmware flashing
PCB assembly functional testing Shenzhen
```

Must-have capabilities:

- SMT line.
- Through-hole or hand assembly if the traffic-light LED stack requires it.
- Firmware flashing station.
- MAC/serial labeling.
- Functional test fixture.
- Stable component procurement.
- Clear nonconforming-material process.
- Lot traceability.

### 3. Enclosure / Plastic Factory

Use for the traffic light body, lens covers, LED separators, base, and internal mounting.

Search terms:

```text
mini traffic light plastic enclosure manufacturer China
custom traffic light toy shell OEM
LED traffic light toy manufacturer Dongguan
custom ABS plastic enclosure injection molding Shenzhen
desktop traffic light gift manufacturer China
custom LED desk light enclosure factory
```

What to ask for:

- Existing mini traffic-light shells or ODM designs.
- ABS/PC material options.
- Translucent red/yellow/green lens material.
- Screw bosses and mounting options.
- Tooling cost.
- Tooling ownership.
- Surface finish.
- Color matching.
- Logo printing or pad printing.
- Drop test expectations.
- Packaging options.

Pragmatic route:

- First try to find an existing mini traffic light enclosure that can be modified.
- Only cut a full custom mold after pilot demand is proven.
- If modifying an existing enclosure, confirm exclusivity risk and whether other customers can buy the same shell.

### 4. Final Assembly Partner

The final assembly partner combines:

- PCBA.
- Enclosure.
- LEDs/lenses.
- USB cable or connector.
- Firmware.
- Product label.
- Packaging.
- Carton packing.

Search terms:

```text
Shenzhen electronics final assembly OEM small batch
IoT device contract manufacturer Shenzhen
consumer electronics OEM assembly firmware flashing packaging
Dongguan electronic gift assembly factory
```

Must-have capabilities:

- Can receive parts from other suppliers.
- Can follow a written assembly SOP.
- Can flash firmware.
- Can test every unit.
- Can keep failed units separate.
- Can pack with serial/version labels.
- Can support small pilot batches before large MOQ.

## Best Regions To Search

Use region keywords in supplier searches:

- Shenzhen: electronics, PCBA, IoT devices, firmware flashing, sourcing agents.
- Dongguan: plastic injection molding, toy/gift manufacturing, electronics assembly.
- Huizhou: electronics assembly and lower-cost production around the Shenzhen ecosystem.
- Zhongshan: lighting, LED products, lamps, small electrical products.
- Guangzhou: trade shows and general sourcing base.
- Yiwu/Ningbo: gifts and commodity sourcing, useful for packaging/accessories but less ideal for custom electronics.

For this product, Shenzhen + Dongguan is the strongest first search area.

## Supplier Search Process

### Step 1: Build A Longlist

Create a spreadsheet with 20-30 possible suppliers.

Columns:

- Supplier name.
- Website/profile URL.
- Location.
- Supplier type.
- Claimed capabilities.
- Main product category.
- MOQ.
- Prototype support.
- Export experience.
- Certifications claimed.
- Contact person.
- Response quality.
- Notes.

Use:

- Alibaba.
- Global Sources.
- Made-in-China.
- Canton Fair / trade fair exhibitor lists.
- Referrals from PCB suppliers.
- Sourcing agents in Shenzhen.
- LinkedIn searches.

### Step 2: Send The Same RFQ To Everyone

Do not ask "can you make this?" with only photos. Send a controlled RFQ pack.

RFQ pack should include:

- Product summary.
- Target retail price.
- Target factory cost range.
- Estimated first order quantity.
- Estimated annual quantity.
- Required certifications.
- Assembly photos or renders.
- PCB files if available.
- BOM if available.
- Enclosure CAD if available.
- Firmware flashing requirements.
- Functional test requirements.
- Packaging requirements.
- Expected delivery market: US, EU, UK.
- Questions they must answer.

### Step 3: Reject Weak Suppliers Quickly

Reject suppliers that:

- Avoid direct answers.
- Refuse to quote without pushing unrelated products.
- Cannot explain their QC process.
- Cannot show similar products.
- Have no clear factory address.
- Only want to talk outside the sourcing platform before trust is built.
- Ask for 100% upfront payment.
- Cannot separate tooling ownership from production orders.
- Cannot produce a sample or pilot run.

### Step 4: Shortlist 5-8 Suppliers

Score them on:

- Communication clarity.
- Relevant experience.
- Engineering capability.
- MOQ flexibility.
- Sample speed.
- QC process.
- Compliance awareness.
- Cost.
- Willingness to use written specs.
- Export experience.

### Step 5: Sample 2-3 Suppliers

Never pick a manufacturer from a PDF quote only.

Order:

- One PCBA prototype run.
- One enclosure sample or modified shell sample.
- One assembled golden sample if possible.

Evaluate:

- LED brightness and diffusion.
- Heat.
- Wi-Fi range.
- USB power stability.
- Enclosure fit.
- Lens quality.
- Button/reset access if any.
- Firmware flashing reliability.
- Packaging damage risk.

### Step 6: Audit Before Production

Before placing a serious order:

- Run a factory audit or supplier verification.
- Confirm address, machines, staff, production lines, QC room, warehouse, and actual export history.
- Use a third party if you cannot visit.

Do not rely only on platform badges. Badges are useful filters, not proof of capability.

## RFQ Questions

Send these questions to every serious supplier:

1. Are you a factory, trading company, or sourcing agent?
2. What is your exact factory address?
3. Can you make both PCBA and final assembly, or only one part?
4. Have you produced Wi-Fi or ESP32-based products before?
5. Can you flash firmware during production?
6. Can you run a 100% functional test on every unit?
7. Can you create or support a test jig?
8. What is your MOQ for pilot and mass production?
9. What is your lead time for samples, pilot, and production?
10. What certifications do similar products from your factory have?
11. Can you support FCC/CE/RoHS test sample preparation?
12. Do you use AOI inspection?
13. What AQL level do you normally use?
14. Can we use a third-party inspection before balance payment?
15. What payment terms do you accept?
16. Who owns the mold/tooling after payment?
17. Can tooling be moved to another factory?
18. Can you provide a breakdown of tooling, unit cost, packaging, and testing cost?
19. Can you sign an NNN/NDA and manufacturing agreement?
20. Can you provide references for exported electronics products?

## Manufacturing Files Needed

Do not move to serious quotes until these files exist:

- Product requirements document.
- Firmware behavior/state machine.
- ESP32 API documentation.
- Schematic.
- PCB layout.
- Gerber files.
- BOM with manufacturer part numbers.
- CPL / pick-and-place file.
- Assembly drawing.
- Test points definition.
- Firmware flashing instructions.
- Functional test procedure.
- Enclosure CAD: STEP preferred.
- Lens material and color spec.
- Packaging dieline.
- Product label artwork.
- Serial number format.
- Carton label requirements.
- Compliance label requirements.

## EVT, DVT, PVT Gates

### EVT: Engineering Validation Test

Goal: prove that the electronics and firmware work.

Pass criteria:

- ESP32 connects to Wi-Fi.
- Setup hotspot works.
- `/info` works.
- `/status` works.
- LEDs match the state plan.
- Desktop app can discover the device.
- Manual IP works.
- Device survives repeated power cycles.

Batch size:

- 5-20 units.

### DVT: Design Validation Test

Goal: prove that the full product design works.

Pass criteria:

- Production-like enclosure.
- Production-like PCB.
- Production-like LED lenses.
- No major fit issues.
- No overheating.
- Wi-Fi range acceptable.
- USB power stable.
- Packaging protects the unit.
- Firmware can be flashed repeatably.
- Compliance pre-scan is acceptable.

Batch size:

- 20-100 units.

### PVT: Production Validation Test

Goal: prove the factory can build the product consistently.

Pass criteria:

- Factory uses final assembly SOP.
- Factory uses final test jig.
- Defect rate is acceptable.
- Serial numbers and firmware versions are tracked.
- Pre-shipment inspection passes.
- Packaging and carton labels are correct.

Batch size:

- 100-500 units.

## Quality Control Plan

### Golden Sample

Create one approved golden sample before production.

It defines:

- LED brightness.
- LED colors.
- Blink rate.
- Lens fit.
- Enclosure finish.
- Logo placement.
- Packaging.
- Cable/accessory inclusion.
- Firmware behavior.
- `/info` response.
- Default state after Wi-Fi connection.

The golden sample should be signed or photographed and referenced in the purchase order.

### 100% Functional Test

Every unit should pass:

- Power on.
- Startup LED pattern.
- Setup hotspot mode if no Wi-Fi is configured.
- Firmware version check.
- Red LED test.
- Yellow LED test.
- Green LED test.
- Wi-Fi radio starts.
- HTTP server responds.
- `/info` returns valid JSON.
- `/status?state=idle` turns green solid.
- `/status?state=waiting` blinks yellow.
- `/status?state=busy` turns red solid.
- Reset/setup recovery works if implemented.

### AQL Inspection

Use third-party inspection before final payment for every production batch.

Recommended initial AQL:

- Critical defects: 0.
- Major defects: 1.0.
- Minor defects: 2.5.

Critical defects:

- Electrical safety issue.
- Short circuit.
- Burning smell.
- Exposed live conductor.
- Wi-Fi cannot start.
- Incorrect power input labeling.
- Product does not boot.
- Missing compliance label where required.

Major defects:

- Any LED does not work.
- Wrong LED state behavior.
- `/info` missing or invalid.
- `/status` endpoint fails.
- Enclosure does not close.
- USB connector loose.
- Firmware version wrong.
- Packaging missing required contents.

Minor defects:

- Small cosmetic marks.
- Slight print alignment issue.
- Small packaging scuff.
- Minor color variance within approved range.

## Compliance Plan

This section is not legal advice. Confirm final requirements with a qualified compliance lab and import specialist before selling.

### United States

Likely requirements:

- FCC compliance for radio-frequency device.
- Country-of-origin marking.
- Product labeling and user instructions.
- Product liability insurance before broad sale.

Use a pre-certified ESP32 module where possible, but do not assume that the finished product is automatically cleared. The enclosure, antenna placement, power design, PCB, and firmware can affect compliance. Ask the test lab whether the final product can rely on the module certification and what host testing or SDoC testing remains.

Important: US rules allow limited importation of RF devices for testing and evaluation under specific conditions, but those units cannot be marketed or sold as normal product until authorization requirements are satisfied.

### European Union

Likely requirements:

- CE marking.
- Radio Equipment Directive because the product intentionally uses Wi-Fi.
- RoHS.
- WEEE registration/producer responsibility if selling into EU countries.
- EU Declaration of Conformity.
- Technical file retained for the required period.
- User instructions and safety information in required languages.

### Toy-Like Risk

If the product is marketed as a toy, sold in toy categories, shown with children, or designed primarily for children, it may trigger children's product rules.

Avoid:

- "Toy" in public product copy.
- Child-oriented packaging.
- Claims for children.
- Children's marketplace categories.
- Photos of children using it.

Use:

- "Developer desk accessory".
- "AI coding agent status light".
- "For office/desk use".
- "Not a toy".

## Payment Terms

Recommended:

- Samples: pay upfront if amount is small.
- Tooling: milestone payments; define mold ownership in writing.
- Production: 30% deposit, 70% after passed inspection and before shipment.
- First supplier relationship: use Alibaba Trade Assurance or another traceable payment route when available.

Avoid:

- 100% upfront production payment.
- Paying balance before inspection.
- Paying tooling without mold ownership terms.
- Wire transfers to personal bank accounts.
- Changing specs through chat only.

## Purchase Order Requirements

Every PO should include:

- Product name and version.
- Quantity.
- Unit price.
- Incoterm.
- Delivery date.
- Approved sample reference.
- BOM version.
- PCB version.
- Firmware version.
- Enclosure version.
- Packaging version.
- Inspection standard.
- AQL levels.
- Functional test requirements.
- Compliance label requirements.
- Payment terms.
- Penalties or remedies for late shipment and failed inspection.
- Requirement that changes need written approval.

## Incoterms And Shipping

For early batches:

- Avoid EXW unless your forwarder can manage pickup, export paperwork, and local China logistics.
- Prefer FOB or FCA with a freight forwarder you choose.
- Be careful with DDP from unknown suppliers because duties, importer records, and compliance responsibilities can become unclear.

For production:

- Compare air express, air freight, and sea freight.
- Use air for small pilot batches.
- Use sea for larger batches once packaging is stable.
- Add carton drop tests before sea freight.

## Packaging Requirements

Packaging should protect the product and support ecommerce shipping.

Must include:

- Product box.
- Internal tray or insert.
- Printed setup leaflet / quick start card.
- USB cable if included.
- Regulatory label area.
- Barcode area.
- Serial number or lot number.
- Country-of-origin marking.
- Carton labels.

Default box contents:

- AI Agent Status Light.
- USB power cable if included in the SKU.
- Printed setup leaflet.
- Warranty/support card if not included on the leaflet.
- Protective internal tray, pulp insert, foam insert, or folded cardboard insert.

The factory quote must separate:

- Unit assembly cost.
- Product box cost.
- Insert/tray cost.
- Leaflet printing cost.
- Outer carton cost.
- Barcode/serial label cost.
- Packing labor.

Do not let the supplier quote only the device and then add packaging later. Packaging affects landed cost, 3PL receiving, damage rate, Amazon readiness, and customer setup success.

Plan for:

- One-unit ecommerce shipping.
- 10-20 unit master cartons.
- Amazon/3PL barcode requirements if using those channels.

### Setup Leaflet Requirements

Include a printed setup leaflet in every retail box.

Recommended format:

- Small folded card or folded leaflet.
- Black/white or two-color printing at first to keep cost low.
- Durable enough not to look like a throwaway scrap.
- QR code to the latest setup page.
- QR code to download the desktop app.
- Short URL printed under every QR code.
- Support email.
- Version number, for example `Quick Start v1.0`.

The leaflet should explain only the minimum setup path:

1. Plug in the light with USB power.
2. If all three lights blink, connect your phone or laptop to Wi-Fi network `AI-Light-Setup`.
3. Enter your Wi-Fi name and password.
4. Wait for green blinking.
5. Open the desktop app.
6. Click `Find Light`.
7. When the app finds the device, the light turns green solid.
8. Click `Connect to Codex`.

Add a short LED meaning table:

| Light | Meaning |
| --- | --- |
| All three blinking | Setup hotspot is active |
| Yellow blinking | Connecting or waiting |
| Green blinking | Connected to Wi-Fi, waiting for desktop app |
| Green solid | Ready |
| Red solid | Agent busy |
| Red blinking | Error |

Troubleshooting section:

- If the app cannot find the light, use `Manual IP`.
- If Wi-Fi setup fails, reconnect to `AI-Light-Setup` and try again.
- If the light was moved to a new Wi-Fi network, reset Wi-Fi and repeat setup.
- Keep the device indoors and powered by USB.

The leaflet should avoid long technical details. Put advanced docs online.

### Packaging Design Requirements

Packaging should make the product feel like a real desk gadget, not a loose electronics kit.

Front of box:

- Product name.
- Real product image or clean render.
- Short value prop: `A traffic light for your AI coding agent`.
- Compatibility note: `Codex integration included`.

Back/side of box:

- LED state summary.
- Requirements:
  - Wi-Fi network.
  - macOS or Windows desktop app.
  - USB power.
- QR code to setup page.
- Regulatory icons/labels where required.
- Country-of-origin marking.
- Barcode.
- SKU and serial/lot label.

Avoid:

- Calling it a toy.
- Child-focused copy.
- Safety-device language.
- Claims for unsupported AI tools.

### Packaging Tests

Before production, test:

- One-unit courier shipment to Kosovo.
- One-unit shipment to a beta user.
- Carton drop test.
- Product box scuffing.
- Internal tray fit.
- Whether the leaflet is visible immediately after opening.
- Whether the barcode label is accepted by the 3PL/Amazon workflow.

Packaging pass criteria:

- Device arrives undamaged.
- LEDs/lenses are not scratched.
- Box still looks acceptable after normal shipping.
- User can find setup instructions without searching online.
- 3PL can scan the SKU/barcode.
- Serial/lot number remains readable.

## First Factory Visit Checklist

If visiting China, inspect:

- Is the address real?
- Are there actual production lines?
- Are products similar to yours being made?
- Is the QC area real?
- Are failed units separated?
- Are incoming components labeled?
- Are ESD controls used for electronics?
- Are workers following written SOPs?
- Are finished goods stored cleanly?
- Can they show past export cartons and labels?
- Can they explain how your product will move through the factory?

Bring:

- Golden sample.
- Spec sheet.
- Functional test checklist.
- Packaging sample.
- List of open engineering issues.

## Trade Shows

Useful shows and sourcing events:

- Global Sources Hong Kong Shows: strong for consumer electronics, components, and Asian OEM/ODM suppliers.
- Canton Fair: useful for electronics, lighting, gifts, and toy/enclosure supplier discovery.
- Shenzhen supplier visits: best once you have shortlisted factories and need to inspect actual capability.

Trade show method:

1. Search exhibitor lists before going.
2. Book meetings before the show.
3. Bring a one-page spec.
4. Photograph booth, business card, sample, and quoted MOQ.
5. Do not place a production order at the show.
6. Follow up within 48 hours.
7. Ask for factory address and audit permission.

## Proven Methods To Follow

- Use a complete RFQ pack, not vague messages.
- Get samples from multiple suppliers.
- Keep a golden sample.
- Use written specs and version numbers.
- Keep PCBA and enclosure development separate until each is stable.
- Run EVT/DVT/PVT instead of jumping from prototype to mass production.
- Use AQL and third-party inspection.
- Keep final payment tied to inspection.
- Confirm compliance before public sales.
- Start with a small production batch.
- Track every defect from beta users and feed it back into the next build.

## Common Mistakes To Avoid

- Marketing it as a toy.
- Cutting injection tooling too early.
- Assuming ESP32 module certification covers the entire finished product.
- Letting the factory choose substitute components without approval.
- Accepting a sample that was hand-polished and not production-like.
- Skipping the functional test fixture.
- Paying the final balance before inspection.
- Shipping directly to customers before checking a random sample yourself.
- Launching a large crowdfunding campaign before DVT.
- Not budgeting for failed units, replacements, customs delays, and compliance retesting.

## Source Notes

- JLCPCB lists PCB, PCBA, parts sourcing, DFM checks, 3D printing, and CNC services useful for early electronics iteration: https://jlcpcb.com/
- Seeed Fusion describes one-stop PCB/PCBA, component procurement, engineering/DFA review, functional testing, and prototype-to-production services: https://www.seeedstudio.com/pcb-assembly.html
- Alibaba Trade Assurance can reduce first-order risk when contract terms and coverage are clearly defined: https://activities.alibaba.com/alibaba/buyer/cp/tradeassuranceguide.php
- QIMA describes IPC, DUPRO, PSI, CLC, production monitoring, and AQL sampling based on ISO 2859 / ANSI-ASQ Z1.4: https://www.qima.com/consumer-products/product-inspections
- QIMA's China QC page covers audits, inspections, and lab testing in China: https://www.qima.com/consumer-products/quality-control/quality-control-in-china
- FCC Part 15 intentional radiators generally require certification before marketing unless an exemption applies: https://www.law.cornell.edu/cfr/text/47/15.201
- FCC import rules limit how RF devices can be imported before authorization and allow testing/evaluation imports under specific conditions: https://www.law.cornell.edu/cfr/text/47/2.1204
- EU CE guidance says the manufacturer is responsible for identifying requirements, conformity assessment, technical documentation, and the EU Declaration of Conformity: https://europa.eu/youreurope/business/product-requirements/labels-markings/ce-marking/index_en.htm
- EU Radio Equipment Directive applies to products that intentionally emit or receive radio waves, including Wi-Fi products: https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en
- EU RoHS restricts hazardous substances in electrical and electronic equipment: https://environment.ec.europa.eu/topics/waste-and-recycling/rohs-directive_en
- EU WEEE rules create producer/distributor responsibilities for electrical and electronic equipment: https://europa.eu/youreurope/business/product-requirements/recycling-waste-management/weee-responsibilities/index_en.htm
- CPSC explains that products intended primarily for children 12 or under can trigger children's product rules and CPC requirements: https://www.cpsc.gov/Business--Manufacturing/Business-Education/Childrens-Products
- CPSC toy guidance explains ASTM F963/CPSIA obligations for children's toys: https://www.cpsc.gov/toysafety
- ICC Incoterms guidance explains that trade terms define delivery point, risk transfer, cost allocation, transport, insurance, customs, and packaging/marking responsibilities: https://academy.iccwbo.org/incoterms/article/incoterms-2020-exw-or-ddp/
- Kosovo import guidance notes that imports require documentation such as certificate of origin, commercial invoice, and customs declaration: https://www.trade.gov/country-commercial-guides/kosovo-import-requirements-and-documentation
- Kosovo tax guidance lists 18% standard VAT and import VAT considerations: https://taxsummaries.pwc.com/Kosovo/Corporate/Other-taxes
- Global Sources Hong Kong Shows are a sourcing venue for consumer electronics, components, OEM/ODM suppliers, and Asian manufacturers: https://exhibitions.globalsources.com/
- US CBP country-of-origin marking guidance explains that imported articles generally need conspicuous, legible, sufficiently permanent origin marking: https://www.cbp.gov/trade/rulings/informed-compliance-publications/marking-country-origin-us-imports
