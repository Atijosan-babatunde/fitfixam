import cookie from "cookie";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

export default async (req, res) => {
  const strapiRes = await fetch(`${NEXT_PUBLIC_API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await strapiRes.json();
};
