import React from "react";

const StudentsTableHeader = () => {
  return (
      <tr className=" bg-blue-800 text-white rounded">
        <th className="border p-3 w-12">
          <input type="checkbox" />
        </th>
        <th className="border p-3 w-12">#</th>
        <th className="border p-3 ">اسم الطالب</th>
        <th className="border p-3 ">الحلقة</th>
        <th className="border p-3 w-48">إجرائات</th>
      </tr>
  );
};

export default StudentsTableHeader;
