import { catchAsyncErrors } from "@/middlewares/error";
import { Task } from "@/models/task";
import { connectDB } from "@/utils/features";

export const POST = catchAsyncErrors(async (req) => {
  await connectDB();

  const body = await req.json();

  const { title, description } = body;

  await Task.create({
    title,
    description,
    user: "60f7a1e4e3c543b288cd0a9a",
  });

  return new Response(
    JSON.stringify({
      success: true,
      message: "Task added successfully",
    }),
    {
      status: 201,
    }
  );
});
