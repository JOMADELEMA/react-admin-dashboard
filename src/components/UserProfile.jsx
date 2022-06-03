import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from "../components";
import { chatData, userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-16 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-2/3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            User Profile
          </p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div
        id="contenedor-info-usuario"
        className="flex justify-center mt-5"
      >
        <div id="contenedor-avatar" className="w-1/3 flex justify-center">
          <img
            src={avatar}
            alt="avatar-usuario"
            style={{ width: "120px", height: "120px" }}
            className="rounded-full"
          />
        </div>
        <div id="contenedor-info" className="w-2/3 self-center">
          <p className="text-black dark:text-gray-200 text-2xl font-semibold">Michael Roberts</p>
          <p className="text-black dark:text-gray-200 text-lg font-light">Administrator</p>
          <p className="text-black dark:text-gray-200 text-xl font-semibold">exampleemail@example.com</p>
        </div>
      </div>

      <div className="mt-5 ">
        {userProfileData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div
              className="relative p-3 rounded-lg text-2xl"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Log Out"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
