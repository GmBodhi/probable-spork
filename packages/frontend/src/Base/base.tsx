import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function Base() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
