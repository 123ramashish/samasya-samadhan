import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../public/logo.gif";
export default function FooterPage() {
  return (
    <Footer container className="bg-green-100 mt-2">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center">
            <img src={logo} alt="" className="size-12 rounded-full" />
            <h1 className="font-semibold text-2xl mx-2">Samasya Samadhan</h1>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:mt-4 sm:grid-cols-3 sm:gap-12 ">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Samasya Samadhan</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Youtube</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Samasya Samadhan" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="hover:text-blue-500"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-pink-500"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-sky-400"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="hover:text-black"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
