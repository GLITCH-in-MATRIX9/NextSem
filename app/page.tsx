import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Features from "./components/home/Features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      
      <main className="flex-grow">
        <Features />
      </main>

    </div>
  );
}