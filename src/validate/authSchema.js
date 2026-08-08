import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string({ required_error: "این فیلد الزامی است" })
    .trim()
    .min(1, "شماره موبایل، ایمیل یا نام کاربری را وارد کنید"),

  password: z
    .string({ required_error: "رمز عبور الزامی است" })
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});