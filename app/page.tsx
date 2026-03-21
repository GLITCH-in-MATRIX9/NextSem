import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import Features from "./components/home/Features";
import JoinTeam from "./components/home/JoinTeamSection/JoinTeam";
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
