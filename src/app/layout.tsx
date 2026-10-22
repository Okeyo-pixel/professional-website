import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maurice Okeyo | Energy & Geospatial Engineer",
  description:
    "Portfolio of Maurice Okeyo, specializing in Building Energy Audits, M&V, Energy Modeling, and Geospatial Analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-slate-950 text-slate-300 min-h-screen antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}