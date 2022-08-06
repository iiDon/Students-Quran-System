import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS_POINTS } from "../../GraphQL/queries";
import Loading from "../Loading";

const Rows = ({ setIsDetails, setStudentDetails }) => {
  const [allStudents, setAllStudents] = useState([]);
  // Queries And Mutatuins
  const { data, loading, error } = useQuery(GET_STUDENTS_POINTS);

  useEffect(() => {
    if (data) {
      setAllStudents(data.students.data);
    }
  }, [data]);

  // If Error Or loading
  if (loading) return <Loading />;
  if (error)
    return (
      <tr>
        <td>{error.message}</td>
      </tr>
    );

    const handleDetails = (id) => {
      setIsDetails(true)
      setStudentDetails(id)
    }

    
  //  data && console.log(allStudents)
  return (
    <React.Fragment>
      {allStudents &&
        allStudents.map((data, index) => (
          <tr
            className={`border p-3 text-center  ${
              (index + 1) % 2 === 0
                ? "bg-slate-300 hover:bg-slate-200"
                : "bg-slate-100 hover:bg-gray-100"
            }`}
            key={data.id}
          >
            {/* CheckBox */}
            <td className="border p-3 text-center">
              <input type="checkbox" />
            </td>
            {/* Index of Student */}
            <td className={`border p-3 text-center`}>{index + 1}</td>
            {/* Nmae */}
            <td className={`border p-3 text-center`}>{data.attributes.name}</td>
            {/* Halqa Name */}
            <td className={`border p-3 text-center `}>
              {data.attributes.halqa.data.attributes.name}
            </td>
            {/* Total Points */}
            <td className={`border p-3 text-center `}>



              {
              
              // // console.log()
              // data.students.data.map((student) => {
              //   console.log(
                data.attributes.SavingPoints.data.reduce((total, currentValue) =>(total = total + currentValue.attributes.value), data.attributes.ReapetingPoints.data.reduce((total, currentValue) =>(total = total + currentValue.attributes.value), data.attributes.links.data.reduce((total, currentValue) =>(total = total + currentValue.attributes.value), data.attributes.attend.data.reduce((total, currentValue) =>(total = total + currentValue.attributes.value), data.attributes.recitation.data.reduce((total, currentValue) =>(total = total + currentValue.attributes.value), 0))))) 
              //   );
              // })
              
              }
            </td>
            {/* Procedures */}
            <td className={`border p-3 text-center `}>
              <button
                onClick={() => handleDetails(data.id)}
                className="bg-gray-600 p-2 rounded w-16 text-white shadow-md"
              >
                تفاصيل
              </button>
              <button className="bg-green-600 p-2 rounded w-16 text-white shadow-md mr-2">
                إضافة
              </button>
            </td>
          </tr>
        ))}
    </React.Fragment>
  );
};

export default Rows;
