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

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400">
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
          <div id="contenedor-item" className="flex justify-center">
            <div id="contenedor-imagen" className=" w-1/3"></div>
            <div>
              <div id="producto-nombre" className=" text-black text-xl font-semibold">
                Producto de prueba 1
              </div>
              <div id="producto-categoria" className="text-gray-600 text-lg font-medium">
                Producto lacteo
              </div>
              <div
                id="contenedor-precio-botones"
                className=" flex  justify-between"
              >
                <div id="producto-precio" className="text-black font-semibold text-xl">
                  $15.00
                </div>
                <div id="botones" className=" flex">
                  <div id="boton-menos">-</div>
                  <div id="cantidad">0</div>
                  <div id="boton-mas">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <div className="flex justify-between m-2">
            <p className="text-gray-500 font-extralight text-xl">Sub Total</p>
            <p className="text-black font-semibold text-xl">$890</p>
          </div>
          <div className="flex justify-between m-2">
            <p className="text-gray-500 font-extralight text-xl">Total</p>
            <p className="text-blac font-semibold text-xl">$890</p>
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
