import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// const { user } = useAuthContext;

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="flex justify-between items-center px-7 py-0">
      {user ? (
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
          {" "}
          Welcome back, {user.username}
        </p>
      ) : (
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
          Log in to get started
        </p>
      )}
      <img src={logo} alt="logo" className="h-12 md:h-14 lg:h-16 xl:h-20" />
      <div className="flex justify-between items-center gap-4">
        {user && (
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            {" "}
            <button
              className="text-lg sm:text-xl lg:text-2xl font-medium relative z-10"
              onClick={() => setShowRegisterModal(true)}
            >
              SignUp
            </button>
            <button
              className="text-lg sm:text-xl lg:text-2xl font-medium relative z-10"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </button>
          </div>
        )}
        <SignupModal
          open={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
        />
        <LoginModal
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
