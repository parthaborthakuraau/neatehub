import type { Metadata } from "next";
import Link from "next/link";
import "./robotics-lab.css";
import LabSubnav from "./LabSubnav";

export const metadata: Metadata = {
  title: "Robotics Lab — Infrastructure",
  description:
    "1,400 square feet of shared prototyping space at the AAU Jorhat campus — CNC, robotic arms, vision systems, PCB assembly — open 24/7 to founders in active NEATeHUB programs.",
};

const SUBNAV = [
  { label: "Overview", id: "story" },
  { label: "Equipment", id: "equipment" },
  { label: "Resident engineer", id: "engineer" },
  { label: "Access ladder", id: "access" },
  { label: "Current occupants", id: "occupants" },
  { label: "Book", id: "booking" },
];

export default function RoboticsLabPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/infrastructure">Infrastructure</Link>
        <span className="sep">/</span>
        <span className="cur">Robotics Lab</span>
      </nav>

      {/* Hero */}
      <section className="lab-hero">
        <div className="container">
          <div className="lab-hero__head">
            <div>
              <div className="eyebrow">Lab 01 of 04 · Inaugurated April 2024</div>
              <h1>
                Robotics Lab
                <small>For deep-tech agri founders building hardware</small>
              </h1>
            </div>
            <div className="lab-hero__pitch">
              <p>
                1,400 square feet of shared prototyping space - CNC, robotic
                arms, vision systems, PCB assembly. Open 24/7 to founders in
                active NEATeHUB programmes. One resident engineer who&apos;s
                spent two decades building for farm conditions.
              </p>
              <div className="row" style={{ gap: 10 }}>
                <a href="#booking" className="btn btn-primary">
                  Request access <span className="arrow">→</span>
                </a>
                <a href="#equipment" className="btn btn-ghost">
                  See equipment
                </a>
              </div>
            </div>
          </div>

          {/* Multi-photo essay */}
          <div className="lab-photos">
            <div className="photo photo-tea ph-1">
              <div className="photo-label">
                PHOTO: Wide hero shot - Robotics Lab interior, mid-morning
                natural light from south-facing windows, founder mid-work at
                workbench in foreground, CNC machine and robotic arms in soft
                background
              </div>
            </div>
            <div className="photo ph-2">
              <div className="photo-label">
                PHOTO: Close-up - robotic arm during a precision pick-and-place
                demonstration, focus tight on end-effector
              </div>
            </div>
            <div className="photo photo-copper ph-3">
              <div className="photo-label">
                PHOTO: Hands at the PCB assembly bench, soldering iron
                mid-action, components organised, shallow depth-of-field
              </div>
            </div>
            <div className="photo ph-4">
              <div className="photo-label">
                PHOTO: Wide shot of resident engineer Pranab Borgohain
                demonstrating the CNC mill to two cohort founders, late
                afternoon light
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lab-stats">
            <div>
              <div className="k">Floor area</div>
              <div className="v">
                1,400 <small>sq ft</small>
              </div>
            </div>
            <div>
              <div className="k">Access</div>
              <div className="v">
                24/7 <small>active cohorts</small>
              </div>
            </div>
            <div>
              <div className="k">Equipment items</div>
              <div className="v">
                22 <small>major</small>
              </div>
            </div>
            <div>
              <div className="k">Resident engineer</div>
              <div className="v">
                1.0 <small>full-time</small>
              </div>
            </div>
            <div>
              <div className="k">Current occupants</div>
              <div className="v">
                7 <small>ventures</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <LabSubnav items={SUBNAV} />

      <div className="container">
        {/* Story */}
        <section className="lab-section" id="story">
          <div className="lab-section__head">
            <div className="eyebrow">Overview</div>
            <h2>Built for founders who need a CNC at 11pm.</h2>
            <p className="lede">
              The Robotics Lab was inaugurated in April 2024 to answer a
              specific problem we&apos;d watched repeat for years - deep-tech
              founders in our cohort were renting hourly bench time at college
              labs in Guwahati and losing two days per week to commute. We built
              shared infrastructure so that doesn&apos;t happen anymore. Founders
              in active programmes get 24/7 swipe access. There&apos;s no
              metering. There&apos;s no booking system for the equipment itself -
              only for the engineer&apos;s time, when you need supervised
              training.
            </p>
          </div>
        </section>

        {/* Equipment */}
        <section className="lab-section" id="equipment">
          <div className="lab-section__head">
            <div className="eyebrow">Equipment</div>
            <h2>What&apos;s on the floor.</h2>
            <p className="lede">
              A representative selection. The full inventory list is in the
              orientation pack, including the dozen smaller hand-tools and
              benchtop instruments we don&apos;t photograph well.
            </p>
          </div>

          <div className="equip">
            <article className="equip-card">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: 6-axis robotic arm with workpiece, isolated on
                  workbench
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">01 / Robotics</div>
                <h3>UR5e 6-axis robotic arm</h3>
                <p>
                  Programmable collaborative robot for pick-and-place, agri-task
                  prototyping, and end-effector testing. Two units available.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Reach</div>
                    <div className="v">850 mm</div>
                  </div>
                  <div>
                    <div className="k">Payload</div>
                    <div className="v">5 kg</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="equip-card">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: CNC mill in operation, swarf visible
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">02 / Machining</div>
                <h3>Tormach 1100MX CNC mill</h3>
                <p>
                  3-axis CNC milling for aluminium and mild steel parts.
                  ATC-equipped. Suitable for production-quality prototype runs.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Work envelope</div>
                    <div className="v">762×304 mm</div>
                  </div>
                  <div>
                    <div className="k">Spindle</div>
                    <div className="v">10,000 rpm</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="equip-card">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: Laser cutter in action, sheet of plywood being cut
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">03 / Fabrication</div>
                <h3>Trotec Speedy 400 laser cutter</h3>
                <p>
                  120W CO₂ laser. Wood, acrylic, fabric, leather. The most-used
                  machine in the lab by hours-of-operation.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Bed</div>
                    <div className="v">1000×610 mm</div>
                  </div>
                  <div>
                    <div className="k">Power</div>
                    <div className="v">120 W</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="equip-card">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: PCB assembly station with reflow oven
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">04 / Electronics</div>
                <h3>PCB assembly bench</h3>
                <p>
                  Pick-and-place, reflow oven, hot-air rework, full SMD assembly
                  capability. Includes stereo microscope.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Min component</div>
                    <div className="v">0402</div>
                  </div>
                  <div>
                    <div className="k">Throughput</div>
                    <div className="v">~50/hr</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="equip-card">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Vision system with calibration target
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">05 / Sensing</div>
                <h3>Vision &amp; sensing test rig</h3>
                <p>
                  Calibrated lighting, motorised stages, multiple camera mounts.
                  For founders developing agri-vision systems.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Cameras</div>
                    <div className="v">4 channel</div>
                  </div>
                  <div>
                    <div className="k">Stage</div>
                    <div className="v">XYZ + tilt</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="equip-card">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: 3D printer farm with parts in progress
                </div>
              </div>
              <div className="equip-card__body">
                <div className="ix">06 / Prototyping</div>
                <h3>3D printer farm</h3>
                <p>
                  Four FDM printers + one SLA. PLA, PETG, TPU, ABS, and
                  high-resolution resin. Materials charged at cost.
                </p>
                <div className="equip-card__spec">
                  <div>
                    <div className="k">Build vol.</div>
                    <div className="v">250×250×300</div>
                  </div>
                  <div>
                    <div className="k">Min layer</div>
                    <div className="v">50 µm</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Resident engineer */}
        <section className="lab-section" id="engineer">
          <div className="lab-section__head">
            <div className="eyebrow">Resident engineer</div>
            <h2>The most important asset on the floor.</h2>
          </div>

          <div className="engineer">
            <div className="photo">
              <div className="photo-label">
                PHOTO: Pranab Borgohain - environmental portrait in lab, at a CNC
                mill, eye-level, available light, workmanlike
              </div>
            </div>
            <div>
              <h3>Pranab Borgohain</h3>
              <div className="role">
                Resident engineer · NEATeHUB Robotics Lab
              </div>

              <blockquote>
                Founders come in thinking the machine is the bottleneck. The
                machine is never the bottleneck. The bottleneck is knowing what
                to build first.
              </blockquote>

              <p>
                Pranab joined NEATeHUB in March 2024 after twenty years of
                building for farm conditions across India - from sugar-cane
                harvesters to fish-feed dispensers to pond-aeration sensor packs.
                He runs the lab six days a week. Founders book his time for
                supervised training, design reviews, and the inevitable
                &quot;this should work but it doesn&apos;t&quot; sessions.
              </p>

              <p>
                He&apos;s also the safety officer, the inventory keeper, and the
                person who teaches you not to put metal in the laser cutter.
              </p>

              <ul>
                <li>
                  <strong>Office hours</strong> Mon-Sat · 09:30-18:00
                </li>
                <li>
                  <strong>Training slots</strong> Tue &amp; Thu afternoons
                </li>
                <li>
                  <strong>Booking</strong> via the cohort Slack or in person
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Access ladder */}
        <section className="lab-section" id="access">
          <div className="lab-section__head">
            <div className="eyebrow">Access</div>
            <h2>Three tiers, by program status.</h2>
            <p className="lede">
              If you&apos;re in an active NEATeHUB programme, access is free and
              unmetered. Other access tiers exist for alumni, partner-university
              students, and external researchers.
            </p>
          </div>

          <div className="access-grid">
            <div className="access-card is-current">
              <div className="ix">Tier 01 · Default</div>
              <h3>Active programme founder</h3>
              <p>
                Any founder currently in RKVY (Navyam · Isanya · Saranya), AIC,
                ASRLM, AAU Student First, or Build Club. 24/7 swipe access.
                Unmetered. Materials at cost.
              </p>
              <div className="price">
                Free<small>Included in programme</small>
              </div>
            </div>
            <div className="access-card">
              <div className="ix">Tier 02</div>
              <h3>NEATeHUB alumni</h3>
              <p>
                Founders from any past cohort. 09:00-21:00 access. Day-passes
                available. Materials at cost + 10%.
              </p>
              <div className="price">
                ₹500<small>/ day pass</small>
              </div>
            </div>
            <div className="access-card">
              <div className="ix">Tier 03</div>
              <h3>External researcher</h3>
              <p>
                Partner-university students, external researchers, sector
                partners. Supervised access only. Project-based application.
              </p>
              <div className="price">
                ₹1,500<small>/ day pass · supervised</small>
              </div>
            </div>
          </div>
        </section>

        {/* Current occupants */}
        <section className="lab-section" id="occupants">
          <div className="lab-section__head">
            <div className="eyebrow">Currently in the lab</div>
            <h2>Seven ventures, this month.</h2>
            <p className="lede">
              Updated weekly. If you&apos;re considering applying to NEATeHUB,
              this is a useful proxy for whether the lab makes sense for your
              venture.
            </p>
          </div>

          <div className="occupants">
            <div className="occupant">
              <div className="what">Robotics · Build Club</div>
              <div className="name">Pukhuri Fish</div>
              <div className="ctx">
                Pond-sensor enclosure prototyping. Using the laser cutter + 3D
                printers heavily.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Sensing · Saranya &apos;24</div>
              <div className="name">Mati Labs</div>
              <div className="ctx">
                Mobile soil-test rig - vision-system calibration, PCB iteration.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Hardware · Saranya &apos;24</div>
              <div className="name">Thalo Cold</div>
              <div className="ctx">
                Cold-chain micro-unit sensor pack revision. Bench-testing
                reliability.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Mech · Saranya &apos;23</div>
              <div className="name">Bambusa Build</div>
              <div className="ctx">
                Engineered-bamboo joinery jig prototypes. CNC + Build Lab
                cross-use.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Robotics · Isanya &apos;25</div>
              <div className="name">AgriPick</div>
              <div className="ctx">
                Robotic harvester end-effector design for tea leaf. Early-stage.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Sensing · Build Club</div>
              <div className="name">PondML</div>
              <div className="ctx">
                Water-quality vision system. Lighting calibration ongoing.
              </div>
            </div>
            <div className="occupant">
              <div className="what">Hardware · AIC</div>
              <div className="name">Brahma Aqua</div>
              <div className="ctx">
                Fish-feed dispenser hardware revision. CNC + electronics.
              </div>
            </div>
            <div
              className="occupant"
              style={{ background: "var(--cream-100)", borderStyle: "dashed" }}
            >
              <div className="what" style={{ color: "var(--ink-500)" }}>
                Vacant
              </div>
              <div className="name" style={{ color: "var(--ink-500)" }}>
                1 slot
              </div>
              <div className="ctx">
                Reserved for the incoming Isanya Cohort 7 (Sep 2026).
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="lab-section" id="booking">
          <div className="booking">
            <div>
              <div className="eyebrow">How to book</div>
              <h3>From walking in the door to swipe-card access.</h3>
              <p>
                If you&apos;re in an active cohort, this is a one-week process. If
                you&apos;re an alumnus or external researcher, allow two to three
                weeks for project review.
              </p>
              <Link href="/for-founders#wizard" className="btn btn-primary">
                Apply to a programme first <span className="arrow">→</span>
              </Link>
            </div>
            <ol className="booking__steps">
              <li>
                Submit an access request
                <small>
                  Through the cohort Slack channel, or via the form below if
                  you&apos;re not in a programme yet.
                </small>
              </li>
              <li>
                Orientation with Pranab
                <small>
                  90-minute walk-through. Safety briefing. Inventory tour.
                  Equipment-specific training scheduled.
                </small>
              </li>
              <li>
                Equipment-specific training
                <small>
                  Tue/Thu afternoon slots. You only get trained on equipment
                  you&apos;re going to use. Sign-off per machine.
                </small>
              </li>
              <li>
                Swipe card issued
                <small>
                  24/7 access for active cohorts. Time-limited swipe for
                  alumni/external.
                </small>
              </li>
            </ol>
          </div>
        </section>

        {/* Other labs */}
        <section className="lab-section">
          <div className="lab-section__head">
            <div className="eyebrow">Three other facilities</div>
            <h2>Need something else? Try one of these.</h2>
          </div>

          <div className="other-labs">
            <Link href="/infrastructure" className="other-lab">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: Build Lab - woodworking and metal fabrication
                </div>
              </div>
              <div className="body">
                <div className="ix">Lab 02</div>
                <h3>Build Lab</h3>
                <p>
                  Light fabrication for agri-equipment prototypes. Metalworking,
                  woodworking, welding, surface finishing.
                </p>
              </div>
            </Link>
            <Link href="/infrastructure" className="other-lab">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: AI First - GPU rack and workstations
                </div>
              </div>
              <div className="body">
                <div className="ix">Lab 03</div>
                <h3>AI First</h3>
                <p>
                  GPU compute for portfolio ML teams. 8× H100, dataset storage,
                  supervised access to AAU&apos;s historical agronomy data.
                </p>
              </div>
            </Link>
            <Link href="/infrastructure" className="other-lab">
              <div className="photo">
                <div className="photo-label">PHOTO: Co-working space</div>
              </div>
              <div className="body">
                <div className="ix">Lab 04</div>
                <h3>Co-working</h3>
                <p>
                  30 hot-desks plus four 4-seat pods for residential cohorts.
                  Reservable rooms, secure storage, full A/V.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
