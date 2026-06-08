import Link from "next/link";

export default function Brand({ ariaLabel }: { ariaLabel?: string }) {
  return (
    <Link href="/" className="brand" aria-label={ariaLabel ?? "NEATeHUB home"}>
      <span className="brand__mark">N</span>
      <span>
        NEATe<span className="brand__hub">HUB</span>
      </span>
    </Link>
  );
}
