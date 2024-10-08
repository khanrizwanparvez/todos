import { catchAsyncErrors } from "@/middlewares/error";
import { cookieSetter } from "@/utils/features";

export const POST = catchAsyncErrors(async () => {
  const headers = new Headers();
  cookieSetter(headers, null, false);

  return new Response(
    JSON.stringify({
      success: true,
      message: "Logged out successfully",
    }),
    {
      status: 200,
      headers,
    }
  );
});
