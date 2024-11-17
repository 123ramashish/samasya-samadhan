import { useEffect } from "react";
import { signoutSuccess } from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Dispatch the action to handle signout
    dispatch(signoutSuccess());

    // Navigate to the signin page after signout
    navigate("/signin");
  }, [dispatch, navigate]);

  return null; // No need to render anything
}
