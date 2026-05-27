import PrismNav from "@/components/prism/PrismNav";
import PrismFooter from "@/components/prism/PrismFooter";

export default function PrismLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrismNav />
      {children}
      <PrismFooter />
    </>
  );
}