
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        username: {
          label: "Brugernavn",
          type: "text",
          placeholder: "Brugernavn",
        },
        password: {
          label: "Adgangskode",
          type: "password",
          placeholder: "Adgangskode",
        },
      },
      async authorize(credentials: any) {
        const formCredentials =
          await `grant_type=password&username=${credentials?.username}&password=${credentials?.password}`;
          const res = await fetch("https://cdn.umbraco.io/member/oauth/token", {
          method: "POST",
          body: formCredentials,
          // body: JSON.stringify(credentials)
          // body: "grant_type=password&username=nicoleisbusy&password=1234567890",
          headers: {
            "umb-project-alias": "nicole-ba-test",
            "api-key": "3wvrfahXVBS0vPH3YqBv",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            // grant_type: "password&username={username}&password={password}",
          },
        });
        const user = { name: credentials?.username,  }
        //const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
});
