import React from 'react';
import { FaSun, FaCheckSquare, FaCalendarAlt } from 'react-icons/fa';

function ThanhBen() {
  return (
    <div className="w-64 bg-gray-900 p-4 flex flex-col">
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaSun className="mr-2" /> My Day
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaCheckSquare className="mr-2" /> My Tasks
            </a>
          </li>
          <li className="mb-4 bg-gray-700 rounded">
            <a href="#" className="flex items-center text-white p-2">
              <FaCalendarAlt className="mr-2" /> My Plans
            </a>
          </li>
        </ul>
      </nav>
      <div className="pt-4 text-gray-500 text-sm">
        Pinned
        <p>Pinned items will appear here.</p>
      </div>
      <button className="mt-4 w-full text-left text-gray-300 hover:text-white">
        + New plan
      </button>
    </div>
  );
}

export default ThanhBen; 