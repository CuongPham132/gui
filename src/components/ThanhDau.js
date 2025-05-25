import React from 'react';
import { FaUserFriends, FaCog, FaQuestionCircle } from 'react-icons/fa';

function ThanhDau() {
  return (
    <div className="bg-gray-900 text-gray-300 h-14 flex items-center justify-between px-4">
      {/* Left section */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-white">Planner</span>
      </div>

      {/* Right section (icons and profile) */}
      <div className="flex items-center space-x-4">
        <FaUserFriends className="text-xl hover:text-white cursor-pointer" />
        <FaCog className="text-xl hover:text-white cursor-pointer" />
        <FaQuestionCircle className="text-xl hover:text-white cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
          P
        </div>
      </div>
    </div>
  );
}

export default ThanhDau; 