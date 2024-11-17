import { Label, Textarea } from "flowbite-react";
import { useState } from "react";

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with your actual logic)
    console.log("Form submitted!", formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      age: "",
    }); // Clear form data after submission
  };

  return (
    <section className="max-w-md py-28 m-auto ">
      <div className="bg-green-100 flex flex-col justify-center p-8 rounded-lg shadow-lg">
        <h1 className="font-semibold font-serif text-3xl m-auto">
          Join-
          <span className="text-green-400">team</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 mt-3">
            <Label htmlFor="name" className="mb-2 block">
              Your Name
            </Label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
              className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="phone" className="mb-2 block">
              Phone
            </Label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="1234456789"
              className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="address" className="mb-2 block">
              Address
            </Label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="at-brahampura, post-ghoghrdiha, dist-madhubani, state-bihar pin-847402"
              className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="age" className="mb-2 block">
              Age
            </Label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="18"
              className="focus:ring focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-green-400 p-2 shadow-lg rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
