import { useState } from "react";

export default function NewsCard() {
  const [showMore, setShowMore] = useState({ 1: false, 2: false, 3: false });

  const handleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="flex flex-wrap gap-4">
      {/* News Item 1 */}
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Community Cleanup Drive"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Community Cleanup Drive
            <br />
            <span className="font-bold text-sm text-green-400">
              Downtown City Park, Springfield
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore[1]
              ? "The community came together today for a cleanup drive at Downtown City Park. Volunteers removed over 500 lbs of trash, planted 50 trees, and installed new recycling bins. The event aims to promote a cleaner, greener environment."
              : "The community came together today for a cleanup drive at Downtown City Park. Volunteers removed over 500 lbs of trash."}
          </p>
          <button
            onClick={() => handleShowMore(1)}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore[1] ? "Show less" : "Show more"}
          </button>
        </div>
      </section>

      {/* News Item 2 */}
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Annual Tech Fest Highlights"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Annual Tech Fest Highlights
            <br />
            <span className="font-bold text-sm text-green-400">
              Greenfield University, California
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore[2]
              ? "Greenfield University hosted its Annual Tech Fest, showcasing over 100 innovative projects, including AI-powered robots, sustainable energy solutions, and VR-based educational tools. The event drew tech enthusiasts and industry leaders from across the nation."
              : "Greenfield University hosted its Annual Tech Fest, showcasing over 100 innovative projects."}
          </p>
          <button
            onClick={() => handleShowMore(2)}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore[2] ? "Show less" : "Show more"}
          </button>
        </div>
      </section>

      {/* News Item 3 */}
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/l9nh1l8ZIJQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Food Festival Extravaganza"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Food Festival Extravaganza
            <br />
            <span className="font-bold text-sm text-green-400">
              Riverbank Plaza, Chicago
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore[3]
              ? "The Food Festival at Riverbank Plaza featured cuisines from over 30 countries. Attendees enjoyed live cooking demos, tasting sessions, and cultural performances. The highlight was a cooking competition judged by celebrity chefs."
              : "The Food Festival at Riverbank Plaza featured cuisines from over 30 countries and cultural performances."}
          </p>
          <button
            onClick={() => handleShowMore(3)}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore[3] ? "Show less" : "Show more"}
          </button>
        </div>
      </section>
    </section>
  );
}
