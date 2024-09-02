import { Avatar, Blockquote, Rating, Carousel } from "flowbite-react";

export default function Feedback() {
  return (
    <section className="flex flex-col justify-center w-full h-auto px-8 my-12 ">
      <div className="flex flex-col dark:text-white w-full justify-center items-center py-2">
        <h5 className="text-3xl font-bold text-green-400">Testimonial</h5>
        <h1 className="text-2xl font-sans font-bold my-2">
          What&apos;s <span className="text-green-400">people</span> say
        </h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slideInterval={3000}>
          <div className="flex flex-col h-full items-center justify-center gap-4 bg-white dark:bg-dark dark:text-white p-6">
            <figure className="max-w-screen-md ">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  "The cleanup drives have significantly improved the hygiene in
                  our locality. Everyone participates enthusiastically, and it's
                  inspiring to see our community coming together for a common
                  cause."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3 ">
                <Avatar
                  rounded
                  size="lg"
                  img="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Arjun Mehta"
                />
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-green-400 dark:text-white">
                    Arjun Mehta
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col h-full items-center justify-center bg-white dark:bg-dark dark:text-white p-6">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  "The plantation drives have been a game-changer for our
                  environment. The green cover has increased, and it's wonderful
                  to see so many trees around us now. Kudos to the organizers!"
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <Avatar
                  rounded
                  size="lg"
                  img="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sita Sharma"
                />
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-green-400 dark:text-white">
                    Sita Sharma
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col h-full items-center justify-center bg-white dark:bg-dark dark:text-white p-6">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  "The news updates on the website keep me informed about the
                  latest initiatives and events. It's great to see so much
                  positivity and community spirit being highlighted."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <Avatar
                  rounded
                  size="lg"
                  img="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Ravi Patel"
                />
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-green-400 dark:text-white">
                    Ravi Patel
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
