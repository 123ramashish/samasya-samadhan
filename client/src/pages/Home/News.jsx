import { Link } from "react-router-dom";
import NewsCard from "../../components/NewsCard";

export default function News() {
  return (
    <section className="flex flex-col items-center justify-center my-16">
      <h1 className="text-3xl font-semibold text-green-400">
        Today&apos;s News
      </h1>
      <div className="flex flex-wrap items-center justify-around my-4 gap-4">
        <NewsCard />
      </div>
      <Link
        to="/news"
        className="hover:text-green-600 font-semibold underline underline-offset-4"
      >
        See All
      </Link>
    </section>
  );
}
