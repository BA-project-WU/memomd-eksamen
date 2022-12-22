import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  console.log('test1')
  const session = await getServerSession(event);
  if (!session) {
    return { status: "unauthenticated!" };
  }
  return {
    status: "authenticated!",
    text: "im protected by an in-endpoint check",
    session,
  };
});
