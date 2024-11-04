import React from "react";
import Nav from "../components/Nav";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
