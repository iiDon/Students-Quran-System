import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect, useState } from "react";
import { GET_ALL_STUDENTS, GET_ALL_HALQAT } from "../GraphQL/queries";
import Select from "react-select";
const Stickers = () => {
  const [students, setStudents] = useState();
  const { data, loading, error } = useQuery(GET_ALL_STUDENTS);
  const { data: dataH } = useQuery(GET_ALL_HALQAT);

  useEffect(() => {
    data && setStudents(data?.students.data);
  }, [data]);

  // Get Halqa Options
  let halqaOptions =
    dataH &&
    dataH.halqas.data.map(function (halqa) {
      return {
        value: halqa.id,
        label: halqa.attributes.name,
      };
    });

const filterStudents = () => {
    students.map((student) => {
        if (student.id != 185) {
            console.log("dd")
        }
    })
}


  return (
    <React.Fragment>
      <div className=" mx-4 pt-10  w-full overflow-auto h-screen pb-4">
        <div className="border grid md:grid-cols-2 grid-cols-1">
          <h3 className="m-4 texl-lg">فرز حسب: </h3>
          <div className="md:flex pl-8 ">
            <h3 className="m-auto ml-4 text-lg mr-4">الحلقة:</h3>
            <Select className="w-full m-auto mr-4" options={halqaOptions} onSelected={() => filterStudents}  />
          </div>
        </div>
        <div className="border  grid md:grid-cols-3 grid-cols-1">
          {students &&
            students.map((student) => (
              <div
                className="border justify-center text-center m-2 shadow-lg rounded-lg mt-6"
                key={student.id}
              >
                <img
                  className="m-auto w-7/12"
                  src={student.attributes.qrCode}
                  alt=""
                />
                <h3>{student.attributes.name}</h3>
                <button className="bg-blue-700 p-2 rounded-lg text-white m-4 w-24">
                  طباعة
                </button>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stickers;
