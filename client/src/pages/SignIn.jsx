import { Card, Checkbox, Label, TextInput, Alert } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { HiInformationCircle } from "react-icons/hi";

export default function SignIn() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { oldUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, id) => {
    setUserData({ ...userData, [id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (
        oldUser.email === userData.email &&
        oldUser.password === userData.password
      ) {
        dispatch(signInSuccess(userData));
        navigate("/");
        return;
      }
      setError("Data must be valid!");

      return;
    } catch (err) {
      setError("Something is Wrong!");
    }
  };

  return (
    <section className="pt-24">
      <Card className="max-w-sm m-auto my-8 bg-green-100">
        {error && (
          <Alert color="failure" icon={HiInformationCircle}>
            {error}
          </Alert>
        )}
        <form
          className="flex flex-col gap-4"
          type="submit"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              onChange={(e) => handleChange(e, "email")}
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
              onChange={(e) => handleChange(e, "password")}
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
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="text-blue-600 font-semibold underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </Card>
    </section>
  );
}
