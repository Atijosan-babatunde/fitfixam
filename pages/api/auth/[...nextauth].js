import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const options = {
  providers: [
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // secret: process.env.SECRET,
};

export default (req, res) => NextAuth(req, res, options);
