import type { Metadata } from "next";
import StartupPortal from "./StartupPortal";

export const metadata: Metadata = {
  title: "Startup Portal",
  description: "Sign in to edit your NEATeHUB venture profile.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <section>
      <div className="container-text">
        <div className="eyebrow">Startup portal</div>
        <h1 className="display display-m mt-2">Edit your venture profile.</h1>
        <p className="lede mt-2">
          Sign in with the email NEATeHUB set up for your venture to update your
          public profile — tagline, description, website, and more.
        </p>
        <StartupPortal />
      </div>
    </section>
  );
}
