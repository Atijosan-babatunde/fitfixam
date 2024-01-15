import cookie from "cookie";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, url } = req.body;
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(
      `http://localhost:1337/auth/forgot-password`,
      {
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        body: JSON.stringify({
          email,
          url,
        }),
      }
    );

    const data = await strapiRes.json();

    console.log(data);

    if (strapiRes.ok) {
      res.status(200).json({ data });
    } else {
      res.status(403).json({ message: "Email not authorized" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
