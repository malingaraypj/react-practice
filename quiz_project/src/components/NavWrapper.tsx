import { Outlet } from "react-router";

function NavWrapper() {
  return (
    <div style={{ position: "relative" }}>
      <Outlet />
    </div>
  );
}

export default NavWrapper;
