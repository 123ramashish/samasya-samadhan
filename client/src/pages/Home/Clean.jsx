import { Link } from "react-router-dom";
import CleanCard from "../../components/CleanCard";
export default function Clean() {
  return (
    <section className="flex flex-col items-center justify-center my-16">
      <h1 className="text-3xl font-semibold">
        Clean<span className="text-green-400">-up</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around my-4 gap-4">
        <CleanCard />
      </div>
      <Link
        to="/clean"
        className="hover:text-green-600 font-semibold underline underline-offset-4"
      >
        See All
      </Link>
    </section>
  );
}
