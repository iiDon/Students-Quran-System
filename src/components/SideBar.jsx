import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//import Assets
import Search from "../assets/Search.png";
import Calendar from "../assets/Calendar.png";
import Chart_fill from "../assets/Chart_fill.png";
import Chart from "../assets/Chart.png";
import Chat from "../assets/Chat.png";
import control from "../assets/control.png";
import Folder from "../assets/Folder.png";
import logo from "../assets/logo.png";
import Setting from "../assets/Setting.png";
import User from "../assets/User.png";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const Menus = [
    { title: "الصفحة الرئيسية", src: Chart_fill, link: "/", isWork: false },
    { title: "الطلاب", src: User, gap: true, link: "/students", isWork: false },
    { title: "إرسال الرسائل", src: Chat, link: "/sendmessege", isWork: false },
    {
      title: "التحضير والإحصيائيات",
      src: Search,
      gap: true,
      link: "/attendees",
      isWork: false,
    },
    { title: "ملصقات الطلاب ", src: Folder, link: "/stickers", isWork: false },
    { title: "درجات الطلاب", src: Chart, link: "/points", isWork: false },
    { title: "جدولة", src: Calendar, link: "", isWork: false },
    { title: "الإعدادات", src: Setting, gap: true, link: "/settings", isWork: false },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            حلقات تحفيظ القرآن
          </h1>
        </div>
        <ul className="pt-6 transition duration-500 ease-in-out">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link} key={index} onClick={() => setActive(index)}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 transition duration-500 ease-in-out
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === active &&
                  "bg-light-white duration-500 transition ease-in-out"
                } `}
              >
                <img src={Menu.src} alt="" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
