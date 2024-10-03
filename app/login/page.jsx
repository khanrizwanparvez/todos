import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />

          <button type="submit">Login</button>

          <p>OR</p>

          <Link href="/register">New User</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "Todos Login",
  description: "Login page of Todo app",
};

export default Login;
