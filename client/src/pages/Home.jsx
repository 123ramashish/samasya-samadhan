import Banner from "../components/Banner";
import Clean from "./Home/Clean";
import News from "./Home/News";
import Plantation from "./Home/Plantation";
import Feedback from "./Home/Feedback";

export default function Home() {
  return (
    <section className="pt-24">
      <Banner />
      <Clean />
      <Plantation />
      <News />
      <Feedback />
    </section>
  );
}
