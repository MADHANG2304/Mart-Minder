import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Products from '../pages/Products';
import Login from '../pages/Login';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !user.email) {
      const modal = document.getElementById('openLogin');
      if (modal){ 
        modal.showModal();
        console.log("Modal opened");
      }
      else {
      modal?.close();
      console.log("Modal element not found");
      }
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Products />

      
      {!user ? (<dialog
        id="openLogin"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white shadow-lg shadow-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Login />
        </div>
      </dialog>) : null}
    </div>
  );
};

export default Layout;
