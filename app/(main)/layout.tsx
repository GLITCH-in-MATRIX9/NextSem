import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

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
