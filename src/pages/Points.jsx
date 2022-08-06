import React, { useState } from "react";
import Rows from "../components/PointsPage/Rows";
import Detailes from "../components/PointsPage/Detailes";

const Points = () => {
  const [isDetails, setIsDetails] = useState(false);
  const [studentDetails, setStudentDetails] = useState()

  const handleBack = () => {
    if (isDetails) {
      setIsDetails(false)
    }
  }

  return (
    <div className="mx-4 pt-10  w-full overflow-auto h-screen">
      <h2 className="bg-blue-800 text-white mb-4 p-2 rounded text-center text-xl ">
        إجرائات عامة
      </h2>
      <button onClick={handleBack} className="bg-blue-800 p-2 rounded text-white shadow-md">
        {isDetails? 'رجوع' : 'إضافة نقاط للكل'}
      </button>
      <button className="bg-red-600 p-2 rounded  text-white shadow-md mr-2">
        حذف جميع النقاط
      </button>
      <button
        onClick={() => window.location.reload()}
        className="bg-green-600 p-2 mr-2 rounded text-white shadow-md"
      >
        تحديث
      </button>
      {isDetails ? (
        <Detailes studentDetails={studentDetails}/>
      ) : (
        <>
          <div className="mx-4 pt-10 overflow-auto h-screen">
            <table className="mt-4 w-full mb-4">
              <thead>
                <tr className=" bg-blue-800 text-white rounded">
                  <th className="border p-3 w-12">
                    <input type="checkbox" />
                  </th>
                  <th className="border p-3 w-12">#</th>
                  <th className="border p-3 ">اسم الطالب</th>
                  <th className="border p-3 ">الحلقة</th>
                  <th className="border p-3 ">إجمالي النقاط</th>
                  <th className="border p-3 w-48">إجرائات</th>
                </tr>
              </thead>
              <tbody className="">
                {/* <StudentsRows setIsEdit={setIsEdit} setStudentId={setStudentId}/> */}
                <Rows isDetails={isDetails} setIsDetails={setIsDetails}  setStudentDetails={setStudentDetails}/>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Points;
