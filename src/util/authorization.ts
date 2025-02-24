import { sign } from "jsonwebtoken";

export const getAuthorizationHeader = (): string => {
    console.log(process.env.JWT_SECRET);
    console.log(process.env.API_SECRET);
    return sign({ user: "My front end app", apiSecret: process.env.API_SECRET }, process.env.JWT_SECRET as string);
};