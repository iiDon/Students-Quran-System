import React from "react";
import { DELETE_ONE_STUDENT } from "../../../GraphQL/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_STUDENTS } from "../../../GraphQL/queries";
import Loading from "../../Loading";

const StudentsRows = ({ setIsEdit, setStudentId }) => {
  // Queries And Mutatuins
  const { data, loading, error } = useQuery(GET_ALL_STUDENTS);
  const [deleteStudent] = useMutation(DELETE_ONE_STUDENT);
  // If Error Or loading
  if (loading) return <Loading />;
  if (error)
    return (
      <tr>
        <td>{error.message}</td>
      </tr>
    );

  // delete one student
  const delete_student = (id) => {
    // e.preventDefault();
    // e.stopPropagation();
    deleteStudent({ variables: { id: id } });
  };

  // Click Edit
  const handleEdit = (id) => {
    setIsEdit(true);
    setStudentId(id);
  };

  return (
    <React.Fragment>
      {data?.students.data.map((data, index) => (
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
          {/* Procedures */}
          <td className={`border p-3 text-center `}>
            <button
              onClick={() => delete_student(data.id)}
              className="bg-red-600 p-2 rounded w-16 text-white shadow-md"
            >
              حذف
            </button>
            <button
              onClick={() => handleEdit(data.id)}
              className="bg-gray-600 p-2 rounded w-16 text-white shadow-md mr-2"
            >
              تعديل
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default StudentsRows;
