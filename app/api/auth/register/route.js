import { catchAsyncErrors, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, jwtToken } from "@/utils/features";
import bcrypt from "bcrypt";

export const POST = catchAsyncErrors(async (req, res) => {
  await connectDB();

  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return errorHandler(res, 400, "Please enter all fields");
  }

  let user = await User.findOne({ email });
  if (user) return errorHandler(res, 400, "User already registered");

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwtToken(user._id);

  const headers = new Headers();

  cookieSetter(headers, token, true);

  return new Response(
    JSON.stringify({
      success: true,
      message: "Registered successfully",
    }),
    { status: 201, headers }
  );
});
