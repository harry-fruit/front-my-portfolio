import style from "@/styles/components/layouts/portfolio-layout.module.scss";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default async function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
