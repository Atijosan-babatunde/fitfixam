import cookie from "cookie";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password, slug, artisan, user_category } =
      req.body;
    const strapiRes = await fetch(
      `${NEXT_PUBLIC_API_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          slug,
          artisan,
          user_category,
        }),
      }
    );

    const data = await strapiRes.json();

    if (strapiRes.ok) {
      // Set cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 1825,
          sameSite: "strict",
          path: "/feeds",
        })
      );

      res.status(200).json({ user: data.user });
    } else {
      res.status(data.error.status).json({ message: data.error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
