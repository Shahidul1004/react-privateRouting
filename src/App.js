import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Layout from "./Layout";
import PublicPage from "./PublicPage";
import PrivatePage from "./PrivatePage";
import LoginPage from "./LoginPage";
import RequireAuth from "./RequireAuth";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />}></Route>
            <Route
              path="/private"
              element={
                <RequireAuth>
                  <PrivatePage />
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
