import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-200 via-gray-500 to-gray-800 fixed bottom-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-white sm:text-center font-normal">
          © 2024{" "}
          <a href="#" className="hover:underline">
            D.A.D™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 font-normal text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              ...
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              ...
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              ...
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
