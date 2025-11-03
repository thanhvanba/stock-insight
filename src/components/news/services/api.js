// const BASE_URL = "https://api.fireant.vn";

// import auth from "../components/auth";

// async function getJsonOrThrow(res) {
//   const text = await res.text();
//   try {
//     const json = JSON.parse(text);
//     if (!res.ok) throw { status: res.status, body: json };
//     return json;
//   } catch (err) {
//     if (err && err.status) throw err;
//     if (!res.ok) throw { status: res.status, body: text };
//     return text;
//   }
// }

// const api = {
//   // fetch popular posts
//   getAll: async () => {
//     let token = auth.getAccessToken();
//     if (!token) {
//       await auth.login();
//       token = auth.getAccessToken();
//     }
//     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

//     const res = await fetch(`${BASE_URL}/posts?type=1&offset=0&limit=20`, {
//       headers,
//     });
//     return getJsonOrThrow(res);
//   },

//   // get post details by id, automatically attach token when present
//   getDetails: async (postId) => {
//     if (!postId) throw new Error("postId is required");
//     let token = auth.getAccessToken();
//     if (!token) {
//       await auth.login();
//       token = auth.getAccessToken();
//     }
//     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

//     const res = await fetch(`${BASE_URL}/posts/${postId}`, { headers });
//     return getJsonOrThrow(res);
//   },

//   getPopularSymbolsToday: async () => {
//     let token = auth.getAccessToken();
//     if (!token) {
//       await auth.login();
//       token = auth.getAccessToken();
//     }
//     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

//     const res = await fetch(`${BASE_URL}/posts/popular-symbols/today`, {
//       headers,
//     });
//     return getJsonOrThrow(res);
//   },

//   getSymbolsMovers: async () => {
//     let token = auth.getAccessToken();
//     if (!token) {
//       await auth.login();
//       token = auth.getAccessToken();
//     }
//     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

//     const res = await fetch(`${BASE_URL}/symbols/movers`, {
//       headers,
//     });
//     return getJsonOrThrow(res);
//   },
// };

// export default api;
const BASE_URL = "https://api.fireant.vn";

import auth from "../components/auth";

/**
 * Gửi yêu cầu có xác thực, tự động login nếu chưa có token.
 * @param {string | Request} input - URL hoặc Request object
 * @param {RequestInit} [init] - Tùy chọn fetch
 * @returns {Promise<any>} - Dữ liệu JSON hoặc text từ response
 */
async function authenticatedFetch(input, init = {}) {
  let token = auth.getAccessToken();
  if (!token) {
    await auth.login();
    token = auth.getAccessToken();
  }

  const headers = {
    ...init.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(input, { ...init, headers });

  if (!res.ok) {
    const text = await res.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
    throw { status: res.status, body };
  }

  const contentType = res.headers.get("content-type");
  return contentType?.includes("application/json") ? res.json() : res.text();
}

const api = {
  getAll: () =>
    authenticatedFetch(`${BASE_URL}/posts?type=1&offset=0&limit=20`),

  getDetails: (postId) => {
    if (!postId) throw new Error("postId is required");
    return authenticatedFetch(`${BASE_URL}/posts/${postId}`);
  },

  getPopularSymbolsToday: () =>
    authenticatedFetch(`${BASE_URL}/posts/popular-symbols/today`),

  getSymbolsMovers: () => authenticatedFetch(`${BASE_URL}/symbols/movers`),
};

export default api;
