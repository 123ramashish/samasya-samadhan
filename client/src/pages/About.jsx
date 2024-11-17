export default function About() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center pb-8 pt-36">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          About Samasya-Samadhan
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center">
          A transformative initiative dedicated to environmental cleanup,
          plantation, farming, and keeping you informed with the latest news.
        </p>

        {/* About Us Content */}
        <div className="mt-6 space-y-8">
          {/* Section 1 */}
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">
              Our Mission
            </h2>
            <p className="text-gray-700 mt-2">
              Samasya-Samadhan aims to tackle environmental issues by promoting
              sustainable practices, planting trees, and ensuring a cleaner,
              greener planet.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">
              Environmental Cleanup
            </h2>
            <p className="text-gray-700 mt-2">
              We organize regular drives to clean public spaces, rivers, and
              forests, removing waste and restoring natural beauty.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">
              Plantation Drives
            </h2>
            <p className="text-gray-700 mt-2">
              Our plantation efforts focus on increasing forest cover and urban
              greenery to combat climate change and enhance biodiversity.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">
              Farming Innovation
            </h2>
            <p className="text-gray-700 mt-2">
              We support sustainable farming practices, helping farmers adopt
              modern techniques that boost productivity while protecting the
              environment.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-4 bg-green-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">
              Stay Informed
            </h2>
            <p className="text-gray-700 mt-2">
              Our platform provides the latest news and updates on environmental
              issues, farming advancements, and project milestones.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-green-800">
            Together, we can create a sustainable future. Join Samasya-Samadhan
            in our mission to make a difference!
          </p>
        </div>
      </div>
    </div>
  );
}
