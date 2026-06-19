import { Nav } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}