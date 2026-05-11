# Manufacturer Longlist

This document lists manufacturer candidates for the AI Agent Status Light.

Research date: May 10, 2026.

Use this as an RFQ starting point, not as final supplier approval. Every supplier still needs direct confirmation, sample evaluation, references, and factory/process due diligence.

## TLDR

Do not start with one all-in-one factory. Use three tracks:

1. PCBA supplier for EVT electronics.
2. Enclosure/plastic/optics supplier for traffic-light shell and lenses.
3. Final assembly/OEM partner for flashing, 100% functional test, labels, packaging, and shipment prep.

Best first outreach:

- PCBA EVT: [JLCPCB](https://jlcpcb.com/pcb-assembly), [PCBWay](https://www.pcbway.com/pcb-assembly.html), [Seeed Fusion](https://www.seeedstudio.com/pcb-assembly.html), [Elecrow](https://www.elecrow.com/pcb-assembly.html), [Makerfabs](https://www.makerfabs.com/one-stop-pcb-assembly-service).
- Enclosure samples: [Shenzhen Chuanglong Plastic Mould](https://www.sz-chuanglong.com/), [Shenzhen Kutuo Technology](https://www.kt-star.com/), [Shenzhen Wide Way Optoelectronics](https://www.wdmtraffic.com/contact-us), [Star Rapid](https://starrapid.com/services/plastic-injection-molding/), [HLH Prototypes](https://www.hlhprototypes.com/about/hlh-prototypes/).
- Final assembly pilot: [MOKO Technology](https://www.mokotechnology.com/electronic-manufacturing/), [Elecrow](https://www.elecrow.com/elecrow-sourcing.html), [Seeed Studio Fusion](https://www.seeedstudio.com/fusion.html), [PCBWay OEM](https://www.pcbway.com/oem/electronics-manufacturing.html), [IBE Electronics](https://www.emspcbassembly.com/), [CEN Electronic Technology](https://www.cenpcba.com/), [STHL PCBA](https://www.sthlpcba.com/).

Best scale-up/backup candidates:

- PCBA: [NextPCB](https://www.nextpcb.com/pcb-assembly-services), [NexPCB](https://www.nexpcb.com/capabilities), [PCBONLINE](https://www.pcbonline.com/PCB-Assembly/), [FS Technology](https://www.fs-pcba.com/), [RayPCB](https://www.raypcb.com/).
- Enclosure/optics: [Eco Molding](https://ecomolding.com/), [Darkoo Optics](https://www.darkoo.com/), [Zhongshan Hord Rapidtools](https://www.hordrt.com/), [Zhongshan Jirui Tools](https://www.jiruimould.com/).
- Final assembly: [PYS High-Tech](https://en.pystech.com/introduce/index.html), [Season Group](https://www.seasongroup.com/), [Country Mate](https://www.countrymate.com/about-us/), [VTech CMS](https://www.vtech.com/en/business/contract-manufacturing-services/), [MacroFab](https://www.macrofab.net/box-build-assembly/).

## Evaluation Criteria

Prioritize suppliers that can support:

- Small EVT/DVT/PVT quantities.
- ESP32-C3 module sourcing.
- USB-powered IoT electronics.
- Firmware flashing.
- MAC/serial/version labeling.
- 100% functional test.
- Pogo-pin fixture or repeatable test jig.
- AOI and clear QC records.
- Enclosure fit checks.
- Retail packaging.
- Shipment to Kosovo for prototypes.
- Later shipment split between EU/US fulfillment if needed.

Reject suppliers quickly if they:

- Avoid direct answers.
- Cannot produce samples.
- Cannot describe QC.
- Cannot support flashing/testing.
- Push unrelated products instead of quoting the spec.
- Require uncontrolled component substitutions.
- Cannot separate tooling, unit cost, test cost, and packaging cost.

## PCBA Candidates

Use these for the custom ESP32-C3 board, LED drive, USB power, SMT assembly, and early functional testing.

| Supplier | Location | Best use | Relevant fit | Caveats |
| --- | --- | --- | --- | --- |
| [JLCPCB](https://jlcpcb.com/pcb-assembly) | China / Hong Kong operations | Fast EVT PCBA | PCB fabrication, SMT assembly, large in-stock component ecosystem, fast iteration | Best when BOM fits JLC/LCSC parts; confirm firmware flashing and custom test support |
| [PCBWay](https://www.pcbway.com/pcb-assembly.html) | Shenzhen / Hangzhou | EVT and DVT | Turnkey PCBA, sourcing, AOI/X-ray, ICT/FCT options | Confirm exact factory/process for repeated production |
| [Seeed Fusion](https://www.seeedstudio.com/pcb-assembly.html) | Shenzhen | EVT and IoT pilot | Turnkey PCBA, DFA review, functional testing, programming support, maker/IoT experience | Confirm production support and parts availability beyond pilot |
| [Elecrow](https://www.elecrow.com/pcb-assembly.html) | Shenzhen | EVT/DVT and early production | PCB/PCBA, SMT/THT, functional test, sub-assembly, kitting, enclosure services | Require process lock, named contact, and fixture ownership terms |
| [Makerfabs](https://www.makerfabs.com/one-stop-pcb-assembly-service) | Shenzhen | ESP32/IoT EVT and pilot | Open-hardware/IoT focus, PCBA, programming, 100% functional testing, custom test jig, mechanical/packaging support | Smaller supplier; validate capacity and production QC |
| [ALLPCB](https://www.allpcb.com/sitePage/pcba) | Hangzhou / China network | DVT/PVT backup | PCB+SMT, AOI/X-ray, IC programming, functional test, box build claims | Validate exact production site and traceability |
| [NextPCB](https://www.nextpcb.com/pcb-assembly-services) | Shenzhen | DVT/PVT PCBA | PCB fab, assembly lines, local parts ecosystem, AOI/X-ray, FCT, IC programming | Confirm English PM quality and ESP32 authorized sourcing |
| [NexPCB](https://www.nexpcb.com/capabilities) | Ningbo / Shenzhen / Hong Kong / US / Indonesia | NPI and production | IoT product realization, DFM, fixtures, flashing, testing, packaging, supply chain | Likely higher cost than instant-quote shops |
| [PCBONLINE](https://www.pcbonline.com/PCB-Assembly/) | Shenzhen plus China/Vietnam footprint | Production PCBA and box build | SMT/THT, box build, IC programming, FCT/ICT/burn-in/RF spectrum testing | EMS-style quote cycle; validate MOQ and commercial terms |
| [FS Technology](https://www.fs-pcba.com/) | Shenzhen | PVT and repeat production | PCB/PCBA, SMT/THT, procurement, functional test, volume PCBA | Needs complete RFQ and test package |
| [RayPCB](https://www.raypcb.com/) | Shenzhen | PCBA production backup | Turnkey PCBA, IC programming/testing, AOI/X-ray/ICT/FCT, box build | Verify facility, certifications, and sourcing channels |
| [PCBSky](https://www.pcbsky.com/pcb-assembly-capabilities.html) | Shenzhen / Jiangxi | Quick-turn backup | Quick-turn PCB/SMT, AOI/SPI/X-ray, testing, box build, small/medium volumes | Audit before PVT |

## Enclosure, Plastic, And Optics Candidates

Use these for the traffic-light body, red/yellow/green lenses, light blockers, internal mounting, USB opening, and plastic tooling.

Split this into two paths:

- Existing mini traffic-light shell path: fastest for DVT if the form factor is acceptable.
- Custom plastic/optics path: better for a polished product but requires tooling discipline.

| Supplier | Location | Best use | Relevant fit | Caveats |
| --- | --- | --- | --- | --- |
| [Shenzhen Chuanglong Plastic Mould](https://www.sz-chuanglong.com/) | Shenzhen | Traffic-light shell tooling | Traffic light shell injection molding, plastic casings, traffic-light molds, PC faceplates | Small operation; verify license, QA, export history, and tooling ownership |
| [Shenzhen Kutuo Technology](https://www.kt-star.com/) | Shenzhen / Dongguan | Existing mini traffic-light housing | ITS/traffic products, mini traffic lights, LED traffic lights, custom hardware/software, PC lens claims | Road/ITS shells may be too large or heavy for a desk product |
| [Shenzhen Noble Opto](https://www.nobleled.com/contact/) | Shenzhen | 100mm shell/lens sample source | LED traffic lights, 100mm traffic light series, traffic-signal experience | More industrial than consumer; verify current OEM options |
| [Sinowatcher Technology](https://www.trafficsolution.cn/) | Shenzhen | Traffic-signal housing reference | LED traffic lights, PC UV-resistant housings/lens options, customization | Standard products may be oversized and not consumer-polished |
| [Shenzhen Wide Way Optoelectronics](https://www.wdmtraffic.com/contact-us) | Shenzhen | Existing mini 100mm traffic-light shell | Mini 100mm PC traffic lights, traffic modules, customized traffic products | Avoid child/gift positioning; request industrial/parking SKU language |
| [Star Rapid](https://starrapid.com/services/plastic-injection-molding/) | Zhongshan | Polished prototype and bridge tooling | Injection molding, CNC, 3D printing, vacuum casting, finishing, color matching | Not traffic-light-specific; define diffuser/lens requirements tightly |
| [HLH Prototypes](https://www.hlhprototypes.com/about/hlh-prototypes/) | Shenzhen / Dongguan | Prototype and pilot enclosures | Rapid tooling, injection molding, CNC, 3D printing, vacuum casting, finishing, assembly | Not an optics specialist; confirm diffuser material and lens finish |
| [Zhongshan Jirui Tools](https://www.jiruimould.com/) | Zhongshan | Rapid tooling and molded shells | Injection molds, rapid tooling, CNC, low-volume and mass production | Pair with optics vendor if lens/diffuser quality is critical |
| [Zhongshan Hord Rapidtools](https://www.hordrt.com/) | Zhongshan | Bridge tooling and low-volume shells | Rapid tooling, plastic injection molding, CNC, no-MOQ messaging | Validate cosmetic consistency before production |
| [Eco Molding](https://ecomolding.com/) | Shenzhen | Custom housing plus optical parts | Injection molding, custom molds, optics molding, optical surface polishing, ABS/PC/PMMA | Due diligence needed on current facility and QC |
| [Darkoo Optics](https://www.darkoo.com/) | Zhongshan | Lens/diffuser stack | Custom LED lenses/reflectors, optical simulation, PMMA/PC lens prototyping, mold development, injection molding | Optical component supplier, not full enclosure/final assembly |

## Final Assembly And OEM Candidates

Use these once the PCBA, enclosure, firmware, labels, and test procedure are stable enough for a pilot run.

They should quote:

- PCBA sourcing/build.
- Enclosure receiving or production.
- Firmware flashing.
- Functional test fixture.
- Serialized labels.
- Retail packaging.
- Carton packing.
- AQL inspection support.

| Supplier | Location | Best use | Relevant fit | Caveats |
| --- | --- | --- | --- | --- |
| [MOKO Technology](https://www.mokotechnology.com/electronic-manufacturing/) | Shenzhen / Vietnam | Pilot and first production | PCBA, box build, firmware install, 100% functional test, enclosure assembly, IoT/LED products | Verify packaging and serialization workflow |
| [Elecrow Sourcing](https://www.elecrow.com/elecrow-sourcing.html) | Shenzhen | Prototype through early batches | PCBA, sourcing, flashing/testing, sub-assembly, kitting, labels, packaging | Require named PM, FAI, process lock, and written test records |
| [Seeed Studio Fusion](https://www.seeedstudio.com/fusion.html) | Shenzhen | IoT pilot and small batch | PCBA, sourcing, DFM, functional testing, programming, prototyping, small-batch production | Confirm final retail box-build scope |
| [PCBWay OEM](https://www.pcbway.com/oem/electronics-manufacturing.html) | China | Pilot and repeat low-volume runs | PCB/PCBA, NPI, box build, mechanical assembly, prototype to mass production | Confirm whether assembly stays in one controlled factory |
| [IBE Electronics](https://www.emspcbassembly.com/) | Shenzhen / Vietnam / US presence | Startup EMS pilot | PCB fabrication, sourcing, PCBA, programming/testing, final box packing, low/no MOQ claims | Audit entity, factory, references, and QA system |
| [CEN Electronic Technology](https://www.cenpcba.com/) | Shenzhen | EMS and box build | PCB/PCBA, AOI/X-ray/ICT/FCT, box build, final assembly, packaging/logistics | Validate certification scope and product references |
| [STHL PCBA](https://www.sthlpcba.com/) | Shenzhen | Flashing, labels, FCT, finished device assembly | PCBA, sourcing, cable assembly, firmware burning, laser labels, FCT, finished-device assembly lines | Confirm legal entity, export experience, and references |
| [Country Mate](https://www.countrymate.com/about-us/) | Huizhou / Hong Kong | Larger consumer electronics ODM/OEM | IoT consumer electronics, SMT/PCBA, plastics/tooling, NPI, quality systems | Likely prefers larger programs and higher MOQ |
| [PYS High-Tech](https://en.pystech.com/introduce/index.html) | Shenzhen / Hunan / Vietnam | Scale-up EMS | High-mix EMS, rapid prototyping, NPI, PCBA, box build, test development, plastics | May be overbuilt for tiny lots |
| [Season Group](https://www.seasongroup.com/) | Dongguan / global | Formal EMS scale-up | DFM/DFT, PCBA, production test, full box build, global manufacturing | Higher cost and more formal onboarding |
| [VTech Contract Manufacturing Services](https://www.vtech.com/en/business/contract-manufacturing-services/) | Dongguan / Malaysia / Mexico | Later-stage high-volume production | Turnkey EMS, PCBA, box build, system integration, NPI, IoT/consumer electronics | Likely high MOQ and slower onboarding |
| [MacroFab](https://www.macrofab.net/box-build-assembly/) | US / Canada / Mexico network | North America second source | PCBA, programming, test, box build, labels, packaging, warehousing/shipping | Higher unit cost; enclosure may still need offshore sourcing |

## Recommended Outreach Order

### Round 1: Fast Learning

Contact:

- JLCPCB.
- PCBWay.
- Seeed Fusion.
- Elecrow.
- Makerfabs.
- Chuanglong.
- Kutuo.
- Wide Way.
- Star Rapid.
- HLH.

Goal:

- Price and lead time for 5-20 EVT PCBAs.
- Price and lead time for 2-5 enclosure samples.
- Confirm whether an existing mini traffic-light shell can be modified.
- Confirm sample shipping to Kosovo.

### Round 2: Pilot Readiness

Contact:

- MOKO.
- IBE.
- CEN.
- STHL.
- PCBWay OEM.
- Seeed Fusion.
- Elecrow.
- Eco Molding.
- Darkoo Optics.

Goal:

- Quote 50 / 100 / 200 unit pilot.
- Quote flashing and functional test fixture.
- Quote labels and packaging.
- Confirm who owns fixtures and tooling.
- Confirm ability to split shipments.

### Round 3: Scale-Up Backup

Contact:

- NextPCB.
- NexPCB.
- PCBONLINE.
- FS Technology.
- RayPCB.
- PYS.
- Season Group.
- Country Mate.
- VTech CMS.
- MacroFab.

Goal:

- Validate production path at 1,000 / 5,000 units.
- Identify second-source options outside one factory.
- Compare China, Vietnam, and North America options for resilience.

## RFQ Questions To Add

Ask every PCBA or final assembly supplier:

1. Have you built ESP32-C3 or ESP32 Wi-Fi products before?
2. Can you source Espressif modules through authorized channels or provide distributor invoices?
3. Can you flash firmware during production?
4. Can you read or record MAC address and serial number?
5. Can you support a pogo-pin test fixture?
6. Can you run a 100% functional test on every unit?
7. Can you test red/yellow/green LEDs individually?
8. Can you test USB power stability?
9. Can you pack failed units separately and report failure categories?
10. Can you provide AOI and first-article reports?
11. Can you support RoHS material declarations?
12. Can you ship prototypes to Kosovo?

Ask every enclosure/plastic supplier:

1. Do you have an existing mini traffic-light shell that can be modified?
2. What is the smallest red/yellow/green housing you currently make?
3. Can you provide ABS/PC material options?
4. Can you provide translucent red/yellow/green lens samples?
5. Can you provide black internal light blockers?
6. Can you support screw bosses and PCBA mounting features?
7. What is tooling cost and who owns the mold?
8. Can the mold be moved to another factory?
9. Can you provide STEP files or enclosure CAD?
10. Can you do surface finish, color matching, and logo printing?

Ask final assembly suppliers:

1. Can you receive PCBA from one supplier and enclosure parts from another?
2. Can you follow a written assembly SOP?
3. Can you run the final product test after enclosure assembly?
4. Can you apply serial/version labels?
5. Can you print and pack retail boxes?
6. Can you support AQL inspection before balance payment?
7. Can you split finished goods between Kosovo, EU, and US destinations?
8. What are your terms for failed units, rework, and scrap?

## Notes

- Existing mini traffic-light suppliers can reduce enclosure risk, but their products may be too large, too industrial, or too toy-like. Evaluate actual samples before committing.
- Western-facing prototype shops such as Star Rapid and HLH will likely cost more, but they may reduce communication and cosmetic-quality risk during DVT.
- EMS companies may be uninterested in tiny first orders. Approach them with a clear path: 50-100 pilot, 300-1000 first production, 5000+ annual target if demand proves out.
- Do not let any supplier substitute the ESP32 module, LEDs, USB connector, 3.3V regulator, or lens material without written approval.
- Keep the first quote request controlled. Send the same RFQ pack to every supplier so responses can be compared.
