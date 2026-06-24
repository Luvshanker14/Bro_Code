import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Account from "./Pages/Ad_account.jsx";
import Home from "./Pages/Ad_home.jsx";
import Books from "./Pages/Books.jsx";
import Status from "./Pages/Status.jsx";
import EditBook from "./Pages/Editbook.jsx";
import EditPage from "./Pages/Editpage.jsx";
import Userlist from "./Pages/Userlist.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminLayout() {
  const [selected, setSelected] = useState("Home");

  if (!Cookies.get("adminId")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex bg-slate-200 dark:bg-black">
      <Navbar selected={selected} setSelected={setSelected} />
      <MainContent />
    </div>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <TransitionGroup className="main-content">
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <div className="flex-1 p-2 page dark:bg-black ">
          <Routes location={location}>
            <Route path="books" element={<Books />} />
            <Route index element={<Home />} />
            <Route path="status" element={<Status />} />
            <Route path="account" element={<Account />} />
            <Route path="editBook" element={<EditBook />} />
            <Route path="editPage/:bookId" element={<EditPage />} />
            <Route path="userlist" element={<Userlist />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AdminLayout;
