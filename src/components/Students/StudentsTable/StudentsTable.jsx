import React, { useState } from "react";
import StudentsTableHeader from "./StudentsTableHeader";
import StudentsRows from "./StudentsRows";
import Header from "./Header";
import Addstudent from "../AddStudent/Addstudent";
import StudentDetails from "../StudentDetails/StudentDetails";
const StudentsTable = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [StudentId, setStudentId] = useState()
  return (
    <>
      {isAdd ? (
        <Addstudent setIsAdd={setIsAdd}/>
      ) : isEdit ? (
        <StudentDetails StudentId={StudentId} setIsEdit={setIsEdit}/>
      ) : (
        <div className="mx-4 pt-10  w-full overflow-auto h-screen">
          <Header setIsAdd={setIsAdd} />
          <table className="mt-4 w-full mb-4">
            <thead>
              <StudentsTableHeader />
            </thead>
            <tbody className="">
              <StudentsRows setIsEdit={setIsEdit} setStudentId={setStudentId}/>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StudentsTable;
