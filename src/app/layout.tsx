import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AETHER NOIR | Cybernetic High-Fidelity Orchestration | Antigravity Secured",
  description: "Building the future, one commit at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-slate-950 text-slate-200"}>{children}</body>
    </html>
  );
}