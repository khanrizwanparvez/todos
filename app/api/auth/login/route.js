import { catchAsyncErrors, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, jwtToken } from "@/utils/features";
import bcrypt from "bcrypt";

export const POST = catchAsyncErrors(async (req, res) => {
  await connectDB();

  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return errorHandler(res, 400, "Please enter all fields");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) return errorHandler(res, 400, "Invalid email or password");

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return errorHandler(res, 400, "Invalid email or password");
  }

  const token = jwtToken(user._id);

  const headers = new Headers();

  cookieSetter(headers, token, true);

  return new Response(
    JSON.stringify({
      success: true,
      message: `Welcome back, ${user.name}`,
    }),
    { status: 200, headers }
  );
});
