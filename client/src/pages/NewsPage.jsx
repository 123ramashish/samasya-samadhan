import { Label, Modal } from "flowbite-react";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import team1 from "../assets/team1_cleanup.jpg";
import team2 from "../assets/team2_cleanup.jpg";
export default function NewsPage() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="pt-36 pb-20 flex flex-col  items-center ">
      <div className="flex flex-wrap  justify-around gap-12 mb-12">
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Update News
          </button>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-green-500 dark:text-white">
                  Join us to Today&apos;s Update
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="event" value="Event Name" />
                  </div>
                  <input
                    id="event"
                    placeholder="News Heading"
                    type="text"
                    required
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Address" />
                  </div>
                  <input
                    id="address"
                    placeholder="Address"
                    type="text"
                    required
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="pincode" value="Pin Code" />
                  </div>
                  <input
                    id="pincode"
                    placeholder="Your Pin Code"
                    type="number"
                    required
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="date" value="Date" />
                  </div>
                  <input
                    id="date"
                    type="date"
                    required
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <label
                      htmlFor="newsdescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                  </div>
                  <textarea
                    required
                    id="newsdescription"
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                    placeholder="Write about news"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-green-400 hover:bg-green-600 p-2 w-full text-lg rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className="mb-6 border-2 border-gray-300 shadow-md bg-gray-100 rounded-lg px-2">
          <Label htmlFor="search" className="mb-2 flex items-center">
            <input
              id="search"
              name="search"
              placeholder="Search you want"
              className="  focus:outline-none  w-full p-3 bg-gray-100 text-sm  "
            />
            <IoMdSearch className="text-4xl  text-green-400" />
          </Label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
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
              src={team1}
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
              src={team2}
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
      </div>
      <div>
        <button className="font-semibold hover:text-green-600 py-4">
          See more...
        </button>
      </div>
    </section>
  );
}
