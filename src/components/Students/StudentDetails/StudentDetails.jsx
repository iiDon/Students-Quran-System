import { useQuery } from "@apollo/client";
import { GET_ONE_STUDENT } from "../../../GraphQL/queries";
import Loading from "../../Loading";
import Label from "./Label";
const StudentDetails = ({ StudentId, setIsEdit }) => {
  const { loading, error, data } = useQuery(GET_ONE_STUDENT, {
    variables: { id: StudentId },
  });

  if (loading) return <Loading />;
  if (error)
    return (
      <tr>
        <td>{error.message}</td>
      </tr>
    );

  const studentDetails = data.student.data;

  data && console.log(studentDetails);
  return (
    <div className="mx-4 pt-10  w-full overflow-auto h-screen pb-4">
      <div className="">
        <h2 className="bg-blue-800 text-white mb-4 p-2 rounded text-center text-xl">
          إضافة طالب جديد
        </h2>
        <button onClick={() => {setIsEdit(false)}} className="bg-blue-800 p-2 rounded text-white shadow-md mb-4 w-24">
          رجوع
        </button>
        <div className=" bg-blue-50 p-4  border shadow rounded">
          <form className="overflow-auto h-screen" action="">
            <div className="">
              <h2 className="bg-blue-800 text-center p-2 text-lg text-white rounded mb-4">
                {" "}
                معلومات الطالب
              </h2>
              <Label name={"اسم الطالب"} type={"text"} value={studentDetails.attributes.name} />
              <Label name={"المرحلة الدراسية"} type={"text"} value={studentDetails.attributes.stage.data.attributes.stage}/>
              <Label name={"الحلقة"} type={"text"} value={studentDetails.attributes.halqa.data.attributes.name}/>
              <Label name={"رقم الجوال"} type={"number"} value={studentDetails.attributes.phoneNumber}/>

              <h2 className="bg-blue-800 text-center p-2 text-lg text-white rounded mb-4 mt-4">
                معلومات ولي الأمر
              </h2>
              <Label name={"اسم ولي الأمر"} type={"text"} value={studentDetails.attributes.fatherName}/>
              <Label name={"رقم ولي الأمر"} type={"number"} value={studentDetails.attributes.fatherPhoneNumber}/>
            </div>
            <button className="w-full m-auto bg-blue-800 rounded p-2 text-white hover:bg-dark-purple mt-4">
              اعتماد التعديل
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
