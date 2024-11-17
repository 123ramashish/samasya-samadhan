const features = [
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Gain deeper insights with our new analytics tools designed to help you make informed decisions.",
    imgSrc: "/images/analytics-dashboard.png",
  },
  {
    title: "Donate to Protect the Environment",
    description:
      "Personalize your experience with new profile settings and customization options.",
    imgSrc: "/images/user-profiles.png",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Stay updated with instant alerts and real-time updates tailored to your preferences.",
    imgSrc: "/images/real-time-notifications.png",
  },
];
export default function Donate() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center ">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Exciting Features Coming Soon!
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center">
          We&apos;re constantly innovating to bring you the best experience.
          Here&apos;s a sneak peek at some amazing features.
        </p>

        {/* Features List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-green-200 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-32 h-32 object-cover rounded-full mb-4"
              /> */}
              <h2 className="text-2xl font-semibold text-green-900 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-700 mt-2 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-green-800">
            Stay tuned! These features are just the beginning of what we have in
            store for you.
          </p>
        </div>
      </div>
    </div>
  );
}
