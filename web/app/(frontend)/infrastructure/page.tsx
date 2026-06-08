import type { Metadata } from "next";
import Link from "next/link";
import "./infrastructure.css";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Four shared facilities at the AAU Jorhat campus — Robotics Lab, founder co-working space, AI First GPU compute, and the Build Lab — available to founders in active NEATeHUB programs.",
};

export default function InfrastructurePage() {
  return (
    <>
      <section className="if-hero">
        <div className="container">
          <div className="eyebrow">Infrastructure</div>
          <h1>Shared physical infrastructure for portfolio founders.</h1>
          <p className="lede mt-3">
            Four facilities, all at the AAU Jorhat campus, available to founders
            in active programs. Equipment, training, and bench time are included
            - not metered.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="lab">
          <div className="lab__media">
            <Link href="/infrastructure/robotics-lab">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Robotics Lab - wide shot showing CNC, robotic arms,
                  workbenches
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="num">01 / Lab</div>
            <h2>
              <Link href="/infrastructure/robotics-lab">Robotics Lab</Link>
            </h2>
            <p>
              For deep-tech agri founders building hardware. Robotic arms, CNC
              and laser-cut prototyping, vision systems, electronics bench, and
              full PCB assembly capability.
            </p>
            <div className="lab__specs">
              <div>
                <div className="k">Floor</div>
                <div className="v">1,400 sq ft</div>
              </div>
              <div>
                <div className="k">Access</div>
                <div className="v">24/7</div>
              </div>
              <div>
                <div className="k">Engineer</div>
                <div className="v">Resident</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Link
                href="/infrastructure/robotics-lab"
                className="btn btn-ghost btn-sm"
              >
                Deep-dive <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lab">
          <div className="lab__media">
            <div className="photo">
              <div className="photo-label">
                PHOTO: Co-working floor with founders at desks, daylight
              </div>
            </div>
          </div>
          <div>
            <div className="num">02 / Co-working</div>
            <h2>Founder co-working space</h2>
            <p>
              Hot-desks for 30, four dedicated 4-seat pods for residential
              cohorts. Reservable rooms, secure storage, full A/V. Current
              occupants are visible on this page in production.
            </p>
            <div className="lab__specs">
              <div>
                <div className="k">Desks</div>
                <div className="v">30 + 16</div>
              </div>
              <div>
                <div className="k">Pods</div>
                <div className="v">4</div>
              </div>
              <div>
                <div className="k">Hours</div>
                <div className="v">07-23</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab">
          <div className="lab__media">
            <div className="photo photo-copper">
              <div className="photo-label">
                PHOTO: AI First room - GPU rack and workstations
              </div>
            </div>
          </div>
          <div>
            <div className="num">03 / Lab</div>
            <h2>AI First</h2>
            <p>
              GPU compute for portfolio ML teams. On-prem H100 cluster, dataset
              storage, supervised access to AAU&apos;s historical agronomy data.
            </p>
            <div className="lab__specs">
              <div>
                <div className="k">Compute</div>
                <div className="v">8× H100</div>
              </div>
              <div>
                <div className="k">Storage</div>
                <div className="v">320 TB</div>
              </div>
              <div>
                <div className="k">Access</div>
                <div className="v">SLURM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab">
          <div className="lab__media">
            <div className="photo">
              <div className="photo-label">
                PHOTO: Build Lab - woodworking, metal fabrication,
                agri-equipment prototyping
              </div>
            </div>
          </div>
          <div>
            <div className="num">04 / Lab</div>
            <h2>Build Lab</h2>
            <p>
              Light fabrication for agri-equipment prototypes. Metalworking,
              woodworking, welding, surface finishing. Run by an engineer
              who&apos;s spent 20 years building for farm conditions.
            </p>
            <div className="lab__specs">
              <div>
                <div className="k">Floor</div>
                <div className="v">2,100 sq ft</div>
              </div>
              <div>
                <div className="k">Tools</div>
                <div className="v">40+</div>
              </div>
              <div>
                <div className="k">Engineer</div>
                <div className="v">Resident</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-cream-100" style={{ marginTop: 56 }}>
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">In a future session</div>
              <h2 className="display display-m mt-2">
                Full photo essays, current-occupant view, and booking flow.
              </h2>
              <p className="lede mt-2">
                This page is the v1 scaffold. Session 9 will treat each facility
                photo-heavily and surface live occupancy for the co-working
                space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
