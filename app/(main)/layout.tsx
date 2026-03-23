import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
