import React from 'react'

export const checkDataValidation = (email, password , confirmPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (!emailRegex.test(email)) {
    return  "Invalid email format" ;
  }
  if (!passwordRegex.test(password)) {
    return  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
  }
  if (confirmPassword && password !== confirmPassword) {
    return "Passwords do not match";
  }
  return  null;
};

