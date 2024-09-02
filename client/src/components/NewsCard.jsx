import { useState } from "react";

export default function NewsCard() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="flex flex-wrap gap-4">
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/1-vwMJme5dM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="International Yoga Day Celebration"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            International Yoga Day Celebration
            <br />
            <span className="font-bold text-sm text-green-400">
              Brahampura, Madhubani, Bihar (847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore
              ? "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body. Yoga has many benefits, including improving flexibility, building muscle strength, and reducing stress. It helps in maintaining a balanced metabolism and improves respiration, energy, and vitality. Regular practice of yoga can help protect from injury and improve cardiovascular and circulatory health."
              : "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body."}
          </p>
          <button
            onClick={handleShowMore}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </section>
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/1-vwMJme5dM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="International Yoga Day Celebration"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            International Yoga Day Celebration
            <br />
            <span className="font-bold text-sm text-green-400">
              Brahampura, Madhubani, Bihar (847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore
              ? "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body. Yoga has many benefits, including improving flexibility, building muscle strength, and reducing stress. It helps in maintaining a balanced metabolism and improves respiration, energy, and vitality. Regular practice of yoga can help protect from injury and improve cardiovascular and circulatory health."
              : "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body."}
          </p>
          <button
            onClick={handleShowMore}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </section>
      <section className="flex flex-col max-w-sm shadow-lg rounded-lg my-8">
        <div className="w-full">
          <iframe
            className="object-cover w-full rounded-t-lg"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/1-vwMJme5dM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="International Yoga Day Celebration"
          ></iframe>
        </div>
        <div className="p-4 w-full flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            International Yoga Day Celebration
            <br />
            <span className="font-bold text-sm text-green-400">
              Brahampura, Madhubani, Bihar (847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date: {new Date().toDateString()}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            {showMore
              ? "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body. Yoga has many benefits, including improving flexibility, building muscle strength, and reducing stress. It helps in maintaining a balanced metabolism and improves respiration, energy, and vitality. Regular practice of yoga can help protect from injury and improve cardiovascular and circulatory health."
              : "Today is International Yoga Day, so the whole society, school, and college people are doing yoga for the fitness of the body."}
          </p>
          <button
            onClick={handleShowMore}
            className="text-sm text-green-400 hover:underline self-start"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </section>
    </section>
  );
}
