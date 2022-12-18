import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: "a-not-so-good-secret",
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {}, // Object is required but can be left empty.
      async authorize(credentials: any) {
        const response = await $fetch("https://api.umbraco.io/member", {
          method: "POST",
          headers: {
            "umb-project-alias": "nicole-ba-test",
            "api-key": "3wvrfahXVBS0vPH3YqBv",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials.username,
            password: credentials.password,
          }),
        });

        if (response.user) {
          const u = {
            id: response.id,
            username: response.user.username,
            email: response.user.email,
          };
          return u;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
});
