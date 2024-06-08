import { ReactNode } from "react";
import { Footer } from "@/components/ui/footer";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      <header>Header</header>
      {children}
      <Footer />
    </div>
  );
}
