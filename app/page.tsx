import EsgScores from "./components/EsgScores";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProtocolInTesting from "./components/ProtocolInTesting";
import WhoItsFor from "./components/WhoItsFor";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <EsgScores />
      <HowItWorks />
      <WhoItsFor />
      <ProtocolInTesting />
      <Footer />
    </main>
  );
}
