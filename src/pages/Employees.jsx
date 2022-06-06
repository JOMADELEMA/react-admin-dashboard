import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
  const { currentMode } = useStateContext();
  return (
    <>
      <div
        className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"
        style={{ background: currentMode === "Dark" ? "#33373e" : "#fff" }}
      >
        <Header category="Page" title="Employees"></Header>
        <GridComponent
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar]} />
        </GridComponent>
      </div>
    </>
  );
};

export default Employees;
