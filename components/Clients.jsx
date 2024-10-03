"use client";



export const Button = ({ text }) => {
  const clickHandler = () => {
    alert("Logged out successfully");
  };

  return (
    <button className="btn" onClick={clickHandler}>
      {text}
    </button>
  );
};
