import { Avatar, Card, Label, Modal } from "flowbite-react";
import team1 from "../assets/team1_cleanup.jpg";
import team2 from "../assets/team2_cleanup.jpg";
import team3 from "../assets/team3_cleanup.jpeg";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

export default function CleanPage() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <section className="pt-36 pb-20 flex flex-col  items-center ">
      <div className="flex flex-wrap  justify-around gap-12 mb-12">
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Join us
          </button>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-green-500 dark:text-white">
                  Join us to clean Enviroment
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="team" value="Team Name" />
                  </div>
                  <input
                    id="team"
                    placeholder="Team Name"
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
                    placeholder="Your Address"
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
                    <Label htmlFor="name" value="Name" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
                    required
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
        <Card className="max-w-sm" imgAlt="" imgSrc={team1}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Brahampura Team
            <br />
            <span className="font-bold text-sm text-green-400">
              Brahampura,Madhubani,Bihar(847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Join: {new Date().toDateString()}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Avatar
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
                alt=""
                rounded
              />
              <div>
                <h1>Mentor</h1>
                <p>User1</p>
              </div>
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">
              Join
            </button>
          </div>
          <p className="font-normal text-green-500 dark:text-gray-400">
            Award winner
          </p>
        </Card>
        <Card className="max-w-sm" imgAlt="" imgSrc={team2}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ghoghardiha Team
            <br />
            <span className="font-bold text-sm text-green-400">
              Ghoghardiha,Madhubani, Bihar(847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Join: {new Date().toDateString()}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Avatar
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
                alt=""
                rounded
              />
              <div>
                <h1>Mentor</h1>
                <p>User1</p>
              </div>
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">
              Join
            </button>
          </div>
          <p className="font-normal text-green-300 dark:text-gray-400">
            Upcoming Award winner
          </p>
        </Card>
        <Card className="max-w-sm" imgAlt="" imgSrc={team3}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Phulpras Team
            <br />
            <span className="font-bold text-sm text-green-400">
              Phulpras, Madhubani,Bihar(847402)
            </span>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Join: {new Date().toDateString()}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Avatar
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
                alt=""
                rounded
              />
              <div>
                <h1>Mentor</h1>
                <p>User1</p>
              </div>
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">
              Join
            </button>
          </div>
          <p className="font-normal text-green-500 dark:text-gray-400">
            Award winner
          </p>
        </Card>
      </div>
      <div>
        <button className="font-semibold hover:text-green-600 py-4">
          See more...
        </button>
      </div>
    </section>
  );
}
