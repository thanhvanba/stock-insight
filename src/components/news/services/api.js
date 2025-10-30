const BASE_URL = "https://api.fireant.vn";
import auth from "../components/auth";

async function getJsonOrThrow(res) {
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    if (!res.ok) throw { status: res.status, body: json };
    return json;
  } catch (err) {
    if (err && err.status) throw err;
    if (!res.ok) throw { status: res.status, body: text };
    return text;
  }
}

const api = {
  // fetch popular posts
  getAll: async () => {
    let token = auth.getAccessToken();
    if (!token) {
      await auth.login();
      token = auth.getAccessToken();
    }
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const res = await fetch(`${BASE_URL}/posts?type=1&offset=0&limit=20`, {
      headers,
    });
    return getJsonOrThrow(res);
  },

  // get post details by id, automatically attach token when present
  getDetails: async (postId) => {
    if (!postId) throw new Error("postId is required");
    let token = auth.getAccessToken();
    if (!token) {
      await auth.login();
      token = auth.getAccessToken();
    }
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const res = await fetch(`${BASE_URL}/posts/${postId}`, { headers });
    return getJsonOrThrow(res);
  },

  getPopularSymbolsToday: async () => {
    let token = auth.getAccessToken();
    if (!token) {
      await auth.login();
      token = auth.getAccessToken();
    }
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const res = await fetch(`${BASE_URL}/posts/popular-symbols/today`, {
      headers,
    });
    return getJsonOrThrow(res);
  },


};

export default api;
