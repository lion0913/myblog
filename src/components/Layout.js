import { Link } from "gatsby";
import React from "react";

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
  } from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div class={container}>
        <main>
        <div style={{ display: "flex", gap: 10 }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        {children}
        <div>-박다정 씀.</div>
        </main>
    </div>
  );
}

export default Layout;