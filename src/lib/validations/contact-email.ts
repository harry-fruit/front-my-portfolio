import { z } from "zod";

type ErrorMessages = {
  name: string;
  email: string;
  message: string;
};

// Define the schema for user input validation
export const contactEmail = ({ name, email, message }: ErrorMessages) => {
  return z.object({
    name: z.string().min(3, name),
    email: z.string().email(email),
    message: z.string().min(10, message),
  });
};