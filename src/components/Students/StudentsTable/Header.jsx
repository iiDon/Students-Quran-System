import React from "react";

const Header = ( { setIsAdd } ) => {


  return (
    <div className="">
      <h2 className="bg-blue-800 text-white mb-4 p-2 rounded text-center text-xl ">
        إجرائات عامة
      </h2>
      <button
        onClick={() => setIsAdd(true)}
        className="bg-blue-800 p-2 rounded text-white shadow-md"
      >
        إضافة طالب جديد
      </button>
      <button className="bg-red-600 p-2 rounded w-16 text-white shadow-md mr-2">
        حذف
      </button>
      <button
        onClick={() => window.location.reload()}
        className="bg-green-600 p-2 mr-2 rounded text-white shadow-md"
      >
        تحديث
      </button>
    </div>
  );
};

export default Header;
