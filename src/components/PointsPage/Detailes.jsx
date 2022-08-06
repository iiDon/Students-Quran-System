import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import { GET_STUDENTS_POINTS } from "../../GraphQL/queries";

const Detailes = ({ studentDetails }) => {
  // Queries And Mutatuins
  const { data } = useQuery(GET_STUDENTS_POINTS);
  const [AllStudents, setAllStudents] = useState();

  useEffect(() => {
    if (data) {
      setAllStudents(data.students.data);
    }
  }, [data]);

  return (
    <>
      <div className="mx-4 pt-10 overflow-auto h-screen">
        {AllStudents &&
          AllStudents.map((student, index) =>
            studentDetails === student.id ? (
              <div
                className="sm:flex justify-around border p-4 rounded-md shadow-lg bg-blue-700 text-white"
                key={student.id}
              >
                <h2>
                  <b>اسم الطالب: </b>
                  {student.attributes.name}
                </h2>
                <h2>
                  <b>الحلقة: </b>{" "}
                  {student.attributes.halqa.data.attributes.name}
                </h2>
                <h2>
                  <b>إجمالي النقاط: </b>{" "}
                  {student.attributes.SavingPoints.data.reduce(
                    (total, currentValue) =>
                      (total = total + currentValue.attributes.value),
                    student.attributes.ReapetingPoints.data.reduce(
                      (total, currentValue) =>
                        (total = total + currentValue.attributes.value),
                      student.attributes.links.data.reduce(
                        (total, currentValue) =>
                          (total = total + currentValue.attributes.value),
                        student.attributes.attend.data.reduce(
                          (total, currentValue) =>
                            (total = total + currentValue.attributes.value),
                          student.attributes.recitation.data.reduce(
                            (total, currentValue) =>
                              (total = total + currentValue.attributes.value),
                            0
                          )
                        )
                      )
                    )
                  )}
                </h2>
              </div>
            ) : (
              ""
            )
          )}
        <table className="mt-4 w-full mb-4">
          <thead>
            <tr className=" bg-blue-800 text-white rounded">
              <th className="border p-3 w-12">
                <input type="checkbox" />
              </th>
              <th className="border p-3 w-12">#</th>
              <th className="border p-3 ">النوع</th>
              <th className="border p-3 ">عدد النقاط</th>
              <th className="border p-3 ">تاريخ الإضافة</th>
              <th className="border p-3 w-48">إجرائات</th>
            </tr>
          </thead>
          <tbody className="">
            {AllStudents &&
              AllStudents.map((student, index) =>
                studentDetails === student.id ? (
                  <>
                    {student.attributes.SavingPoints.data.map((value, index) => (
                      <tr className="border p-3 text-center" key={student.id}>
                        <td className="border p-3 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border p-3 text-center">{index + 1}</td>
                        <td className="border p-3 text-center">الحفظ</td>
                        <td className="border p-3 text-center">{value.attributes.value}</td>
                        <td className="border p-3 text-center">{value.attributes.createdAt.substring(0,10)} <span className="block">{value.attributes.createdAt.substring(11,16)}</span></td>
                        <td className="border p-3 text-center"></td>

                      </tr>
                    ))}

                    {/* <td className="border p-3 text-center">{student.attributes.SavingPoints.data[0]}</td> */}
                    {/* {student.attributes.SavingPoints.data.map((value) => (
                      <>
                        <tr>
                          <td className="border p-3 text-center">
                            {value.attributes.value}
                          </td>
                        </tr>
                        
                      </>
                    ))} */}
                    {/* <td className="border p-3 text-center">{index + 1}</td>
                    <td className="border p-3 text-center">{index + 1}</td> */}
                  </>
                ) : (
                  ""
                )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detailes;
