import { getToken, getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session) return { status: "unauthenticated!" };

  const config = useRuntimeConfig();
  const token = await getToken({ event });
  const settings = {
    method: "GET",
    headers: {
      "umb-project-alias": "nicole-ba-test",
      "api-key": "3wvrfahXVBS0vPH3YqBv",
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.email,
    },
  };

  const response = await $fetch("https://api.umbraco.io/member", settings);
  return response;
});
