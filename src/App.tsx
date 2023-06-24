import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import sha256 from "crypto-js/sha256";

const encryptSha256 = (str: string | null | undefined): string | null => {
  if (!str) return null;
  return sha256(str).toString();
};

const Top = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Top page</p>
        <Link to="/login" style={{ color: "white" }}>
          Loginページ
        </Link>
        <Link to="/thanks" style={{ color: "white" }}>
          購入ボタン
        </Link>
      </header>
    </div>
  );
};

const ThanksPage = () => {
  const user = {
    email: "matsubara@example.com",
    telNumber: "09012345678",
    sex: "make",
    birthday: "1990/01/01",
    givenName: "山田",
    familyName: "太郎",
  };

  const value = {
    ip: "56.24.111.57",
    em: encryptSha256(user.email) || "",
    ph: encryptSha256(user.telNumber) || "",
    ge: encryptSha256(user.sex === "male" ? "m" : "f") || "",
    db: encryptSha256(user.birthday) || "",
    ln: encryptSha256(user.givenName) || "",
    fn: encryptSha256(user.familyName) || "",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thanks page</p>

        <input
          id="fb_capi_ip"
          name="fb_capi_ip"
          type="hidden"
          value={value.ip}
        />
        <input
          id="fb_capi_em"
          name="fb_capi_em"
          type="hidden"
          value={value.em}
        />
        <input
          id="fb_capi_ph"
          name="fb_capi_ph"
          type="hidden"
          value={value.ph}
        />
        <input
          id="fb_capi_ge"
          name="fb_capi_ge"
          type="hidden"
          value={value.ge}
        />
        <input
          id="fb_capi_db"
          name="fb_capi_db"
          type="hidden"
          value={value.db}
        />
        <input
          id="fb_capi_ln"
          name="fb_capi_ln"
          type="hidden"
          value={value.ln}
        />
        <input
          id="fb_capi_fn"
          name="fb_capi_fn"
          type="hidden"
          value={value.fn}
        />
      </header>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" style={{ color: "white" }}>
          Loginボタン
        </Link>
      </header>
    </div>
  );
};

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "thanks", element: <ThanksPage /> },
  { path: "login", element: <LoginPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
