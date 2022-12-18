import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: "your-secret-here",
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
      authorize(credentials: any) {
        const user = {
          id: "1",
          name: "Test Testing",
          username: "testing",
          password: "testing",
        };
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );
          return null;
        }
      },
      //   async authorize(credentials: any) {
      //     const res = await fetch("https://api.umbraco.io/member", {
      //       method: "POST",
      //       body: JSON.stringify(credentials),
      //       headers: {
      //         "umb-project-alias": "nicole-ba-test",
      //         "api-key": "3wvrfahXVBS0vPH3YqBv",
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //       },
      //     });
      //     const user = await res.json();
      //     if (res.ok && user) {
      //       return user;
      //     }
      //     return null;
      //   },
    }),
  ],
});
