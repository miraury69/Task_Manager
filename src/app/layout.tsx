import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AllTasks from "./components/allTasks";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="sidebar">
            <AllTasks />
          </div>
          <div className="mainPage">{children}</div>
        </div>
      </body>
    </html>
  );
}
