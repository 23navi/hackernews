export type SuccessRespone<T = void> = {
  success: true;
  message: string;
} & (T extends void ? {} : { data: T });
// We are telling that, if the generic T is void then nothing, but if T is given, then we will have a third field named data: T

// // Eg
// const data: SuccessRespone<{ id: number }> = {
//   success: true,
//   message: "Post created",
//   data: { id: 1 },
// };

export type ErrorResponse = {
  success: false;
  error: string;
  isFormError?: boolean; // This is for the cases when error is send where client request with wrong data in the form (zod)
};
