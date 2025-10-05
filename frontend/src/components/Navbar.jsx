import React from 'react';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';

const Navbar = () => {
  const { user } = useAuth(); // get user from context

  return (
    <div>
      <div className="navbar shadow-sm bg-custWhite text-black">
        <div className="navbar-start text-black pl-10">
          <svg width="45px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            {/* SVG content */}
          </svg>
          <a className="btn btn-ghost text-xl">
            Mart<span className="text-primaryGreen">Minder</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl link-hover text-primaryGreen"><a>Home</a></li>
            <li className="text-xl link-hover hover:text-primaryGreen"><a>Shop</a></li>
            <li className="text-xl link-hover hover:text-primaryGreen"><a>Contact</a></li>
            <li className="text-xl link-hover hover:text-primaryGreen"><a>About Us</a></li>
          </ul>
        </div>

        <div className="navbar-end pr-14 h-20 flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user.photos[0].value} alt={user.displayName} />
                </div>
              </div>
              <span className="font-medium">{user.displayName}</span>
            </div>
          ) : (
            <>
              <button className="btn w-24 h-10" onClick={() => document.getElementById('openLogin').showModal()}>Login</button>

              <dialog id="openLogin" className="modal modal-bottom sm:modal-middle h-full">
                <div className="modal-box bg-white shadow-lg shadow-black">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <Login />
                </div>
              </dialog>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
