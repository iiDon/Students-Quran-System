import React from "react";
import QrReader from "react-qr-scanner";
import { useState } from "react";

const Attendees = () => {
  const [camResult, setCamResult] = useState();
  console.log(camResult)
  const handleError = (error) => {
    console.log(error);
  };

  const handleScan = (data) => {
    if (data) {
      setCamResult(data);
      console.log(data);
    }
  };

  return (
    <div>
      <QrReader onError={handleError} onScan={handleScan} delay={300} />
    </div>
  );
};

export default Attendees;
