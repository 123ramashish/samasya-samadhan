import { Label, Textarea } from "flowbite-react";

export function Contact() {
  return (
    <>
      <section className="max-w-md py-28  m-auto ">
        <div className="bg-green-100 flex flex-col justify-center p-8 rounded-lg shadow-lg">
          <h1 className="font-semibold font-serif text-3xl  m-auto">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <input
                id="email"
                name="email"
                placeholder="name@gmail.com"
                type="email"
                className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <input
                id="subject"
                name="subject"
                placeholder="Let us know how we can help you"
                className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
                className="focus:ring focus:ring-green-400 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-green-400 p-2 shadow-lg rounded-lg hover:bg-green-600"
              >
                Send message
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="mailto:samasyasamadhan@company.com"
                className="hover:underline"
              >
                samasyasamadhan@company.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:7542918414" className="hover:underline">
                7542918414
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
