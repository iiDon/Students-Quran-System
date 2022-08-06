import React from "react";

const Settings = () => {
  return (
    <div className="mx-4 pt-10  w-full overflow-auto h-screen">
      <h2 className="bg-blue-800 text-white mb-4 p-2 rounded text-center text-xl ">
        الإعدادات
      </h2>

      <div>
        <h2 className="bg-blue-700 text-white mb-4 p-1 rounded text-center text- ">
          تعريف النقاط
        </h2>
      </div>

      <button className="bg-blue-700 p-2 rounded  text-white shadow-md mr-2">
        إضافة جديد
      </button>

      <button className="bg-red-600 p-2 rounded  text-white shadow-md mr-2">
        حذف الكل
      </button>
      <div className="mx-4 overflow-auto h-screen">
        <table className="mt-4 w-full mb-4">
          <thead>
            <tr className=" bg-blue-800 text-white rounded">
              <th className="border p-3 ">النوع</th>
              <th className="border p-3 ">عدد النقاط</th>
            </tr>
          </thead>
          <tbody className="">
            {/* <StudentsRows setIsEdit={setIsEdit} setStudentId={setStudentId}/> */}
            {/* <Rows isDetails={isDetails} setIsDetails={setIsDetails} /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
