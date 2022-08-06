import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_A_STUDENT } from "../../../GraphQL/mutations";
import Loading from "../../../components/Loading";
import QRCode from "qrcode";
import {
  GET_ALL_STUDENTS,
  GET_ALL_HALQAT,
  GET_ALL_STAGES,
} from "../../../GraphQL/queries";
import Label from "./Label";

//add student
const Addstudent = ({ setIsAdd }) => {
  //Var
  const [name, setName] = useState("");
  const [num, setNum] = useState(null);
  const [stage, setStage] = useState();
  const [halqa, setHalqa] = useState();
  const [GName, setGName] = useState(); // اسم ولي الأمر
  const [GNum, setGNum] = useState(); // رقم ولي الأمر
  const [newQr, setNewQr] = useState("");
  // Queries & Mutations
  const { data } = useQuery(GET_ALL_HALQAT);
  const { data: dataS } = useQuery(GET_ALL_STAGES);
  const [AddStudent, { loading, error }] = useMutation(ADD_A_STUDENT);
  // useEffect(() => {
  //   generateQrCode();
  // }, [])
  

  if (loading) return <Loading />;
  if (error)
    return (
      <tr>
        <td>{error.message}</td>
      </tr>
    );

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(`${Math.random()}`);
      console.log(response);
      setNewQr(response)
    } catch (error) {
      console.log(error);
    }
  };


  // Queries Functions
  const add_new_student = (e) => {
    e.preventDefault();
    AddStudent({
      variables: {
        name: name,
        stage: stage,
        halqa: halqa,
        phoneNumber: num,
        fatherName: GName,
        fatherPhoneNumber: GNum,
        qrCode: newQr,
      },
      refetchQueries: [{ query: GET_ALL_STUDENTS }],
    });
  };

  // Get Stage Options
  let stagesOptions =
    dataS &&
    dataS.stages.data.map(function (stage) {
      return {
        value: stage.id,
        label: stage.attributes.stage,
      };
    });

  // Get Halqa Options
  let halqaOptions =
    data &&
    data.halqas.data.map(function (halqa) {
      return {
        value: halqa.id,
        label: halqa.attributes.name,
      };
    });

  // Return
  return (
    <div className="mx-4 pt-10  w-full overflow-auto h-screen pb-4">
      <div className="">
        <h2 className="bg-blue-800 text-white mb-4 p-2 rounded text-center text-xl">
          إضافة طالب جديد
        </h2>
        <button
          onClick={() => setIsAdd(false)}
          className="bg-blue-800 p-2 rounded text-white shadow-md mb-4 w-24"
        >
          رجوع
        </button>
        <div className=" bg-blue-50 p-4  border shadow rounded">
          <form
            onClick={() => setNewQr(generateQrCode())}
            className="overflow-auto h-screen"
            action=""
            onSubmit={add_new_student}
          >
            <div className="">
              <h2 className="bg-blue-800 text-center p-2 text-lg text-white rounded mb-4">
                {" "}
                معلومات الطالب
              </h2>
              <Label
                name={"اسم الطالب:"}
                type={"text"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Label
                name={"المرحلة الدراسية:"}
                isSelect={true}
                options={stagesOptions}
                onChangeOption={(selectedOption) =>
                  setStage(selectedOption.value)
                }
              />
              <Label
                name={"الحلقة:"}
                isSelect={true}
                options={halqaOptions}
                onChangeOption={(selectedOption) =>
                  setHalqa(selectedOption.value)
                }
              />
              <Label
                name={"رقم الجوال:"}
                type={"number"}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
              <h2 className="bg-blue-800 text-center p-2 text-lg text-white rounded mb-4 mt-4">
                {" "}
                معلومات ولي الأمر
              </h2>
              <Label
                name={"اسم ولي الأمر:"}
                type={"text"}
                onChange={(e) => {
                  setGName(e.target.value);
                }}
              />
              <Label
                name={"رقم الجوال"}
                type={"text"}
                onChange={(e) => {
                  setGNum(e.target.value);
                }}
              />
            </div>
            <button className="w-full m-auto bg-blue-800 rounded p-2 text-white hover:bg-dark-purple mt-4">
              أضف
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addstudent;
