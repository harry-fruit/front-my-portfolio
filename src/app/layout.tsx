import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Isaque Duarte | Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className={"bg-slate-100 dark:bg-slate-900/95"}>
        {children}
      </body>
    </html>
  );
}
