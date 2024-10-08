export const errorHandler = (
  res,
  statusCode = 500,
  message = "Internal Server Error"
) => {
  return new Response(
    JSON.stringify({
      success: false,
      message,
    }),
    { status: statusCode }
  );
};

export const catchAsyncErrors = (passedFunc) => (req, res) => {
  return Promise.resolve(passedFunc(req, res)).catch((err) => {
    return errorHandler(res, 500, err.message);
  });
};
