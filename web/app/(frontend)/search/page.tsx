import type { Metadata } from "next";
import "./search.css";
import SearchBox from "./SearchBox";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search NEATeHUB — programs, portfolio ventures, insights, events, and resources.",
};

export default function SearchPage() {
  return <SearchBox />;
}
