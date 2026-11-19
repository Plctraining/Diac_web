
import type { Metadata } from "next";
import ManpowerHero from "@/components/manpower/ManpowerHero";
import ManpowerMessage from "@/components/manpower/ManpowerMessage";

export const metadata: Metadata = {
  title: "Manpower Solutions | DIAC",
  description:
    "Explore DIAC manpower solutions and industrial workforce expertise.",
};

export default function ManpowerPage() {
  return (
    <main>
      <ManpowerHero />
      <ManpowerMessage />
    </main>
  );
}
