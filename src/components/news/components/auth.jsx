const BASE_URL = "https://api.fireant.vn";

const storage = {
  setTokens: ({ accessToken, refreshToken }) => {
    try {
      localStorage.setItem("accessToken", accessToken || "");
      localStorage.setItem("refreshToken", refreshToken || "");
    } catch {
      // ignore storage errors in non-browser environments
    }
  },
  clear: () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    } catch {
      // ignore
    }
  },
  getAccessToken: () => {
    try {
      return localStorage.getItem("accessToken");
    } catch {
      return null;
    }
  },
};

async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  // Try parse JSON, otherwise return raw text
  try {
    const json = JSON.parse(text);
    if (!res.ok) throw { status: res.status, body: json };
    return json;
  } catch (err) {
    if (err && err.status) throw err;
    // not JSON
    if (!res.ok) throw { status: res.status, body: text };
    return text;
  }
}

const api = {
  // login: posts credentials, stores tokens and returns the response object
  login: async ({ email, password, rememberMe = true } = {}) => {
    // Use default credentials if not provided
    const defaultEmail = "kanest123@gmail.com";
    const defaultPassword = "@Hacker111@";
    const defaultRememberMe = true;

    const loginEmail = email || defaultEmail;
    const loginPassword = password || defaultPassword;
    const loginRememberMe = rememberMe !== undefined ? rememberMe : defaultRememberMe;

    const url = `${BASE_URL}/authentication/login`;
    const body = { email: loginEmail, password: loginPassword, rememberMe: loginRememberMe };

    const response = await postJson(url, body);

    // store tokens when present
    if (response && response.accessToken) {
      storage.setTokens({ accessToken: response.accessToken, refreshToken: response.refreshToken });
    }

    return response;
  },

  logout: () => {
    storage.clear();
  },

  getAccessToken: () => storage.getAccessToken(),
};

export default api;
