import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Features from "./components/home/Features";
import JoinTeam from "./components/home/JoinTeam";
import HeroCards from "./components/home/herocards";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCards />
      <Features />
      <JoinTeam />
    </>
  );
}
