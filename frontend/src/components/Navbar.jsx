import React from 'react';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useAuth(); 

  const googleLogout = () => {
    const logoutUrl = `${import.meta.env.VITE_API_URL}/auth/logout`;
    window.open(logoutUrl, "_self");
  }

  return (
    <div>
      <div className="navbar shadow-sm bg-custWhite text-black">
        <div className="navbar-start text-black pl-10">
          {/* <svg width="45px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" ><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="7.488" fill="#08CB00" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linejoin="round" stroke="#CCCCCC"></g><g id="SVGRepo_iconCarrier"> <path d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.4968 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z" fill="#1C274C"></path> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#1C274C"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#1C274C"></path> </g></svg> */}
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 59 59"
            xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
            fill="none"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ECF0F1"
                  d="M15,39.5l-5.167-27H58v23.012c0,2.202-1.785,3.988-3.988,3.988H15"
                />
                <path
                  fill="#556080"
                  d="M54.013,40.5h-39.84l-5.55-29H59v24.013C59,38.263,56.763,40.5,54.013,40.5z M15.827,38.5h38.186
                  C55.66,38.5,57,37.16,57,35.513V13.5H11.043L15.827,38.5z"
                />
                <circle fill="#08CB00" cx="22" cy="48.5" r="5" />
                <path
                  fill="#556080"
                  d="M22,54.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S25.309,54.5,22,54.5z M22,44.5
                  c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S24.206,44.5,22,44.5z"
                />
                <circle fill="#08CB00" cx="45" cy="48.5" r="5" />
                <path
                  fill="#556080"
                  d="M45,54.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S48.309,54.5,45,54.5z M45,44.5
                  c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S47.206,44.5,45,44.5z"
                />
                <path fill="#556080" d="M55,48.5h-5.101a1,1,0,1,1,0-2H55a1,1,0,0,1,0,2z" />
                <path fill="#556080" d="M40.101,48.5H26.899a1,1,0,1,1,0-2h13.201a1,1,0,0,1,0,2z" />
                <path
                  fill="#556080"
                  d="M9.832,13.5c-0.48,0-0.904-0.347-0.985-0.836L8.152,8.5H6a1,1,0,1,1,0-2h3.848l0.972,5.836
                  c0.091,0.545-0.277,1.06-0.822,1.15C9.941,13.496,9.887,13.5,9.832,13.5z"
                />
                <path
                  fill="#556080"
                  d="M59,20.5h-9v-9H39v9h-7v-9H21v9H10.347l2.104,11H21v8.998l11-0.003V31.5h7v8.992l11-0.003V31.5h9V20.5z
                  M41,13.5h7v7h-7V13.5z M48,22.5v7h-7v-7H48z M23,13.5h7v7h-7V13.5z M30,22.5v7h-7v-7H30z M14.104,29.5l-1.34-7H21v7H14.104z
                  M30,38.495l-7,0.003V31.5h7V38.495z M32,29.5v-7h7v7H32z M48,38.489l-7,0.003V31.5h7V38.489z M57,29.5h-7v-7h7V29.5z"
                />
                <path
                  fill="#556080"
                  d="M17.101,48.5H14c-1.406,0-2.758-0.603-3.707-1.652c-0.947-1.047-1.409-2.453-1.268-3.858
                  c0.255-2.518,2.522-4.489,5.163-4.489c0.553,0,1,0.447,1,1s-0.447,1-1,1c-1.627,0-3.021,1.182-3.173,2.69
                  c-0.087,0.855,0.184,1.678,0.761,2.316C12.348,46.138,13.158,46.5,14,46.5h3.101a1,1,0,1,1,0,2z"
                />
                <circle fill="#08CB00" cx="3" cy="7.5" r="3" />
              </g>
          </svg>

          <a className="btn btn-ghost text-2xl ml-1" onClick={() => window.location.href = '/'}>
            Mart<span className="text-primaryGreen">Minder</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li className="text-xl link-hover text-primaryGreen"><a>Home</a></li>
            </Link>
            <Link to="/shop">
              <li className="text-xl link-hover hover:text-primaryGreen"><a>Shop</a></li>
            </Link>
            <li className="text-xl link-hover hover:text-primaryGreen"><a>Contact</a></li>
            <li className="text-xl link-hover hover:text-primaryGreen"><a>About Us</a></li>
          </ul>
        </div>

        <div className="navbar-end pr-14 h-20 flex gap-4 items-center">
          {user ? (
            <div>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photos[0].value} alt={user.displayName} />
                  </div>
                </div>
                <span className="font-medium">{user.displayName}</span>
                <div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className="btn h-7 bg-secondaryGreen border-none hover:bg-black hover:text-primaryGreen" onClick={() => {googleLogout()}}>Logout</button>
              </div>
            </div>
          ) : (
            <>
              <button className="btn w-24 h-10 bg-secondaryGreen hover:bg-black hover:text-primaryGreen" onClick={() => document.getElementById('openLogin').showModal()}>Login</button>

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
