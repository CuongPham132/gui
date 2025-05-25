import React from 'react';

function KeHoachCuaToi() {
  return (
    <div className="flex-1 p-6 bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-200">My Plans</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + New plan
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6">
        <button className="px-4 py-2 text-sm text-white border-b-2 border-blue-500">Recent</button>
        <button className="px-4 py-2 text-sm text-gray-400 hover:text-white">Shared</button>
        <button className="px-4 py-2 text-sm text-gray-400 hover:text-white">Personal</button>
        <button className="px-4 py-2 text-sm text-gray-400 hover:text-white">Pinned</button>
      </div>

      {/* Plan List */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-4 pb-2 border-b border-gray-700 text-gray-400 text-sm">
          <div>Name</div>
          <div>Privacy</div>
          <div>Last accessed by you</div>
          <div>Shared with</div>
        </div>
        {/* Example Plan Item */}
        <div className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-700">
          <div className="flex items-center">
            <span className="mr-2 text-purple-400">🗄️</span>Project Management
          </div>
          <div className="text-gray-400 text-sm flex items-center">
              <span className="mr-1">🔒</span>Only you
          </div>
          <div className="text-gray-400 text-sm">Wed at 1:20 PM</div>
          <div></div> {/* Shared with */}
        </div>
        <div className="mt-2">
          <a href="#" className="text-blue-400 hover:underline text-sm">Show more</a>
        </div>
      </div>
    </div>
  );
}

export default KeHoachCuaToi; 