import Select from "react-select";
import { useState } from "react";
import { GET_ALL_STUDENTS } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import Loading from "../Loading";
const MessegeForm = () => {
  // Variables
  const [number, setNumber] = useState([]);
  const [messege, setMessege] = useState("");
  const [loadingSub, setLoadingSub] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isNotSent, setIsNotSent] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const [success, setSuccess] = useState(0);
  const [totalCosts, setTotalCosts] = useState(0);
  const [currentUserPoints, setCurrentUserPoints] = useState(0);
  const lastPoints = currentUserPoints;

  // Get All Students
  const { data, loading, error } = useQuery(GET_ALL_STUDENTS);

  // If Error Or loading
  if (loading) return <Loading />;
  if (error)
    return (
      <tr>
        <td>{error.message}</td>
      </tr>
    );

  //Send A messege and API
  const API = `https://kingsms.ws/api/sendsms.php?username=sultana&password=ASDasd123123&message=${messege}&numbers=@${number}&sender=TKWIN&unicode=e&return=json`;

  // Get Balance
  // const BALANCE = `https://kingsms.ws/api/getbalance.php?username=sultana&password=ASDasd123123&hangedBalance=true`;

  // const handleBalance = async (e) => {
  //   try {
  //     const response = await fetch(BALANCE, {
  //       method: "GET",
  //     });

  //     const result = await response.json();
  //     setLastPoints(result);
  //     console.log(lastPoints);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleClick = async (e) => {
    setLoadingSub(true);

    try {
      const response = await fetch(API, {
        method: "GET",
      });

      const result = await response.json();
      console.log(result);
      console.log("result is: ", JSON.stringify(result, null, 4));
      if (result.MessageIs === "تم استلام الارقام بنجاح") {
        setIsSent(true);
        setSuccess(result.totalsentnumbers);
        setTotalCosts(result.totalcout);
        setCurrentUserPoints(result.currentuserpoints);
      } else {
        setIsNotSent(true);
        setErrorMessege(result.MessageIs);
      }
    } catch (err) {
      console.log(err);
    }
    setLoadingSub(false);
  };

  // get options
  let options = data.students.data.map(function (student) {
    return {
      value: student.id,
      label: student.attributes.name,
      phone: student.attributes.phoneNumber,
    };
  });

  // selected options
  const handleChange = (options) => {
    const numArray = [];
    options.map((s) => {
      numArray.push(s.phone);
      return null
    });
    setNumber(numArray);
  };
  console.log(number);

  //  const [number, setNumber] = useState([]);

  return (
    <div className=" overflow-y-auto h-screen p-10">
      {/* {console.log(number)} */}
      {loadingSub ? (
        <div></div>
      ) : (
        <form
          className="border p-5 rounded-lg shadow-lg  text-dark-purple"
          action=""
          onSubmit={handleClick}
        >
          <h1 className="text-xl text-center mb-10 bg-blue-800 text-white m-6 p-4 rounded-lg">
            إرسال رسالة
          </h1>
          <div className="">
            <div className="m-6 border p-6 rounded shadow-sm">
              <label className="text-xl">المرسل إليهم</label>
              <br />
              <br />
              <label className="">طلاب:</label>
              <Select
                onChange={handleChange}
                options={options}
                isMulti
                className="mt-4 rounded-md shadow-sm border"
              />
            </div>
            <div className="m-6 border p-6 rounded shadow-sm">
              <label htmlFor="">الرسالة</label>
              <textarea
                onChange={(e) => {
                  setMessege(e.target.value);
                }}
                name=""
                id=""
                cols="300"
                className="w-full p-4 mt-4 rounded-md shadow-sm border"
              ></textarea>
            </div>
            <h3 className="text-xl m-6">{`عدد الحروف = ${messege.length}`}</h3>
            <h3 className="text-xl m-6">{`النقاط المتبقية = ${lastPoints}`}</h3>
            <button className="w-full m-auto bg-blue-800 rounded p-2 text-white hover:bg-dark-purple">
              إرسال
            </button>
            {isSent ? (
              <div className="bg-green-300 mt-2 p-2 border rounded text-center">
                <h2>تم إرسال الرسالة بنجاح</h2>
                <h3 className="text-right text-sm">
                  العمليات الناجحة = {success}
                </h3>
                <h3 className="text-right text-sm">
                  نقاط الحساب السابقة = {totalCosts + currentUserPoints}
                </h3>
                <h3 className="text-right text-sm">
                  نقاط الحساب المخصومة = {totalCosts}
                </h3>
                <h3 className="text-right text-sm">
                  نقاط الحساب المتبقية = {currentUserPoints}
                </h3>
              </div>
            ) : isNotSent ? (
              <div className="bg-red-300 mt-2 p-2 border rounded text-right text-sm">
                <h2 className="text-center text-lg mb-4">
                  حدث خطأ ما ولم يتم إرسال الرسائل، تأكد من: <br />
                </h2>
                <p>
                  <span>{errorMessege}</span>
                  <br />
                  <span>
                    في حال لم يتم حل المشكلة الرجاء الاتصال بمطور النظام
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default MessegeForm;
