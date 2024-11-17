import { Avatar, Card } from "flowbite-react";
import team1 from "../assets/team1_plant.jpeg";
import team2 from "../assets/team2_plant.jpg";
import team3 from "../assets/team3_plant.jpg";
export default function PlantCard() {
  return (
    <>
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
          <a
            href="/join-team"
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Join
          </a>
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
          <a
            href="/join-team"
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Join
          </a>
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
          <a
            href="/join-team"
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Join
          </a>
        </div>
        <p className="font-normal text-green-500 dark:text-gray-400">
          Award winner
        </p>
      </Card>
    </>
  );
}
