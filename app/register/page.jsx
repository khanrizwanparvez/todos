"use client";

import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" name="name" placeholder="Enter name" />
          <input type="email" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />

          <button type="submit">Sign Up</button>

          <p>OR</p>

          <Link href="/login">Login</Link>
        </form>
      </section>
    </div>
  );
};


export default Register;
