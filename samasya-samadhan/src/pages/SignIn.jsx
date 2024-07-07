import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Alert,
} from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//   import { useDispatch, useSelector } from "react-redux";
// import { SigninSuccess, SigninFailure } from "../Redux/User/userSlice.js";
// import { HiInformationCircle } from "react-icons/hi";

export default function SignIn() {
  //   const [userData, setUserData] = useState({ email: "", password: "" });
  // const { currentUser, error } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handleChange = (e, id) => {
  //     setUserData({ ...userData, [id]: e.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("/api/user/signin", {
  //         mode: "cors",
  //         method: "POST",
  //         body: JSON.stringify(userData),
  //         headers: { "Content-Type": "application/json; charset=UTF-8" },
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || "Invalid Credentials!");
  //       }

  //   const data = await response.json();

  // dispatch(SigninSuccess(data.user));
  //   navigate("/");
  // } catch (err) {
  // dispatch(SigninFailure(err.message));
  //     }
  //   };

  return (
    <section className="pt-24">
      <Card className="max-w-sm m-auto my-8 bg-green-100">
        {/* {error && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Info alert!</span> {error}
            </Alert>
          )} */}
        <form className="flex flex-col gap-4">
          {/* // onSubmit={handleSubmit}> */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              //   onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="*********"
              required
              //   onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <button
            type="submit"
            className="hover:bg-emerald-600 bg-green-400 text-white text-xl p-2 rounded-md border-none shadow-md"
          >
            Submit
          </button>
          <p className="text-xs font-thin">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-600 font-semibold underline"
            >
              {" "}
              Signup
            </Link>
          </p>
        </form>
      </Card>
    </section>
  );
}
