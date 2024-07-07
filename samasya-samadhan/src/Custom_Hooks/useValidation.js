import { useEffect, useState } from "react";

const useValidation = (initialState) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const validateForm = (data) => {
    let validationErrors = {};
    if (!data.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (!data.conformPassword.trim()) {
      validationErrors.conformPassword = "Confirm Password is required";
    } else if (data.password !== data.conformPassword) {
      validationErrors.conformPassword = "Passwords do not match";
    }
    return validationErrors;
  };

  useEffect(() => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  }, [formData]);

  return { errors, setErrors, formData, setFormData, validateForm };
};

export default useValidation;
