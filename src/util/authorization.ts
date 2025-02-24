import { sign } from "jsonwebtoken";

export const getAuthorizationHeader = (): string => {
    return sign({ user: "My front end app", apiSecret: process.env.API_SECRET }, process.env.JWT_SECRET as string);
};