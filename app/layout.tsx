import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riri Dev | Software Engineering",
  description: "Portfolio of Rama Alhuthali, software engineering student and tutor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
