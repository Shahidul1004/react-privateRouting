import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const auth = React.useContext(AuthContext);
  console.log(auth);
  const navigate = useNavigate();
  return (
    <>
      {!auth.user && (
        <div>
          <p>not logged in</p>
        </div>
      )}
      {auth.user && (
        <div>
          <p>logged in</p>
          <button
            onClick={() => {
              auth.signout(() => navigate("/"));
            }}
          >
            Log out
          </button>
        </div>
      )}

      <ul>
        <li>
          <Link to="/">Public page</Link>
        </li>
        <li>
          <Link to="/private">Private page</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
