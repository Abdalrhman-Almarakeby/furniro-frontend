import { ReactNode } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col pt-[82px] md:p-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
