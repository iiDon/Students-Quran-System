import { useState } from "react";
import MessegeForm from "./MessegeForm";
const SendMessege = () => {
  
  // Var
  const [number, setNumber] = useState([]);
  const [messege, setMessege] = useState("");
  const [loadingSub, setLoadingSub] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isNotSent, setIsNotSent] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const [success, setSuccess] = useState(0);
  const [totalCosts, setTotalCosts] = useState(0);
  const [currentUserPoints, setCurrentUserPoints] = useState(0);
  //Send A messege and API
  const API = `https://kingsms.ws/api/sendsms.php?username=suoltana&password=ASDasd123123&message=${messege}&numbers=@${number}&sender=TKWIN&unicode=e&return=json`;


  const handleClick = async (e) => {
    console.log("test")
    setLoadingSub(true);

    try {
      const response = await fetch(API, {
        method: "GET",
      });

      const result = await response.json();
      console.log(result);
      console.log("result is: ", JSON.stringify(result, null, 4));
      if (result.MessageIs == "تم استلام الارقام بنجاح") {
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

}
export default SendMessege;
