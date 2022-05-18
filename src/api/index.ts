const API_URL = "https://twilio-video-chat-app-7815-dev.twil.io";

const request = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: {}
) => {
  return fetch(url, {
    mode: "cors",
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const getAccessToken = async (username: string) => {
  const response = await request(`${API_URL}/functions/get_token`, "POST", {
    username,
  });
  const json = await response.json();
  return json.token;
};

export { getAccessToken };