import { Link } from "react-router-dom";
import useValidation from "../Custom_Hooks/useValidation";
import { Label } from "flowbite-react";

const initialState = {
  name: "",
  email: "",
  password: "",
  conformPassword: "",
};

export default function SignUp() {
  const { errors, setErrors, formData, setFormData, validateForm } =
    useValidation(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
      alert("Form submitted successfully! Check the console for the data.");
    }
  };

  return (
    <section className="pt-28">
      <div className=" max-w-md flex justify-center m-auto rounded-lg shadow-lg h-auto p-8 mb-12 bg-green-100">
        <div className="bg-green-100">
          <h1 className="text-3xl font-bold text-center pb-4">
            Registration <span className="text-green-400">Form</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap gap-4 mt-4"
          >
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Your Name
              </Label>
              <input
                required
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <input
                required
                id="email"
                name="email"
                placeholder="name@gmail.com"
                type="email"
                className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="mb-2 block">
                Password
              </Label>
              <input
                id="password"
                name="password"
                placeholder="***********"
                type="password"
                className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                onChange={handleChange}
                value={formData.password}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>
            <div>
              <Label htmlFor="conformPassword" className="mb-2 block">
                Confirm Password
              </Label>
              <input
                id="conformPassword"
                name="conformPassword"
                placeholder="***********"
                type="password"
                className=" focus:ring-2 focus:ring-green-400 focus:outline-none border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg "
                onChange={handleChange}
                value={formData.conformPassword}
              />
              {errors.conformPassword && (
                <span className="text-red-500">{errors.conformPassword}</span>
              )}
            </div>

            <div>
              <select
                required
                className="border-2 border-gray-300 w-full p-3 bg-gray-100 text-sm rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                <option value="">Select Option</option>
                <option value="member">Member</option>
                <option value="mentor">Mentor</option>
                <option value="leader">Leader</option>
              </select>
            </div>

            <button
              type="submit"
              className="hover:bg-emerald-600 bg-green-400 text-white text-xl p-2 rounded-md border-none shadow-md"
            >
              Submit
            </button>
            <p className="font-thin text-sm">
              Have an account?{" "}
              <Link
                to="/signin"
                className="text-blue-600 font-semibold  underline"
              >
                Signin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
