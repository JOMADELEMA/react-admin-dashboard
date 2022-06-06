import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors, cartData } from "../data/dummy";
import { Button } from "../components";

import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react/cjs/react.production.min";

const Cart = () => {
  const { currentColor, handleClickClose } = useStateContext();
  console.log(cartData);

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#42464D] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Shopping Cart</p>

          <button
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            type="button"
            onClick={() => handleClickClose("cart")}
            style={{ color: "rgb(152,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          {cartData.map((item, index) => (
            <div
              id="contenedor-item"
              key={item.index}
              className="flex justify-center"
            >
              <div id="contenedor-imagen" className="w-1/3 p-1">
                <img
                  className="rounded-xl"
                  src={item.image}
                  alt="producto"
                  style={{ width: "140px", height: "100px" }}
                />
              </div>
              <div id="contenedor-informacion" className="w-2/3 p-2">
                <div
                  id="producto-nombre"
                  className=" text-black text-lg font-semibold dark:text-gray-300"
                >
                  {item.name}
                </div>
                <div
                  id="producto-categoria"
                  className="text-gray-600 text-md font-medium dark:text-gray-400"
                >
                  {item.category}
                </div>
                <div
                  id="contenedor-precio-botones"
                  className=" flex  justify-between align-middle "
                >
                  <div
                    id="producto-precio"
                    className="text-black font-semibold text-xl self-center dark:text-gray-200"
                  >
                    {item.price}
                  </div>
                  <div
                    id="botones"
                    className=" flex border rounded-lg w-2/3 justify-evenly"
                  >
                    <div
                      id="boton-menos"
                      className="border-r-1 text-2xl py-2 text-center w-full self-center text-red-500 dark:text-red-200"
                    >
                      -
                    </div>
                    <div
                      id="cantidad"
                      className="border-r-1 text-2xl text-center w-full self-center text-green-800 dark:text-green-300"
                    >
                      0
                    </div>
                    <div
                      id="boton-mas"
                      className="text-2xl text-center w-full self-center text-green-600 dark:text-green-200"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <div className="flex justify-between m-2">
            <p className="text-gray-500 font-extralight text-xl dark:text-gray-50" >Sub Total</p>
            <p className="text-black font-semibold text-xl dark:text-gray-200">$890</p>
          </div>
          <div className="flex justify-between m-2">
            <p className="text-gray-500 font-extralight text-xl dark:text-gray-50">Total</p>
            <p className="text-black font-semibold text-xl dark:text-gray-200">$890</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-white hover:shadow-xl w-full mx-5 rounded-lg p-3 text-lg"
            style={{ backgroundColor: currentColor }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
