import Link from "next/link";

/** Small floating action button → the AI assistant, bottom-right, site-wide. */
export default function AskFab() {
  return (
    <Link href="/ask" className="ask-fab" aria-label="Ask NEATeHUB AI">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M3 4.5h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 17 14.5H8l-4 3v-3H3A1.5 1.5 0 0 1 1.5 13V6A1.5 1.5 0 0 1 3 4.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M6 8.5h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span>Ask</span>
    </Link>
  );
}
