import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Features from "./components/home/Features";
import JoinTeam from "./components/home/JoinTeamSection/JoinTeam";
import HeroCards from "./components/home/herocards";
import FAQs from "./components/home/FAQs";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCards />
      <Features />
      <JoinTeam />
      <FAQs />
    </>
  );
}
