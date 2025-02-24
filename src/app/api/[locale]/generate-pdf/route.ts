import { getAuthorizationHeader } from "@/util/authorization";

export async function GET(request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;

  return await fetch(`${process.env.API_URL}/generate-pdf`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization-Token": getAuthorizationHeader(),
    },
    body: JSON.stringify({ locale }),
    method: "POST",
  });

}