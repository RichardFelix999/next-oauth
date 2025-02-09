"use client";

import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <main className="flex-grow flex items-center justify-center">
      {children}
    </main>
  );
};

export default LoginLayout;
