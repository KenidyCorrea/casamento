import Hero from "../components/sections/Hero";
import InfoDay from "../components/sections/InfoDay";
import Thanks from "../components/sections/Thanks";
import Gifts from "../components/sections/Gifts";

export default function Index() {
  return (
    <div className="pt-16">
      <Hero />
      <InfoDay />
      <Thanks />
      <Gifts />
    </div>
  );
}
