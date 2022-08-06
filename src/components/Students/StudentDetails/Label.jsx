import React from 'react'

const Label = ( {name, onChange, type, value}) => {
  return (
    <div className="">
    <label htmlFor="">
      <h3 className="py-3 text-lg">{name}</h3>
        <input
          onChange={onChange}
          className="shadow w-full rounded h-10 p-6 border"
          type={type}
          required
          value={value}
        />
    </label>
  </div>
  )
}

export default Label