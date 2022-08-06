import React from "react";
import Select from "react-select";
const Label = ({ name, type, onChange, isSelect, options, onChangeOption }) => {
  // const handleChange = (options) => {
  //   const numArray = [];
  //   options.map((s) => {
  //     numArray.push(s.phone);
  //   });
  //   setNumber(numArray);
  // };
  return (
    <div className="">
      <label htmlFor="">
        <h3 className="py-3 text-lg">{name}</h3>
        {isSelect ? (
          <Select options={options} className="shadow " onChange={onChangeOption} />
        ) : (
          <input
            onChange={onChange}
            className="shadow w-full rounded h-10 p-6 border"
            type={type}
            required
          />
        )}
      </label>
    </div>
  );
};

export default Label;
