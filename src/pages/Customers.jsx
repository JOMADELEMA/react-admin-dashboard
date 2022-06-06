import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Customers = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"
      style={{ background: currentMode === "Dark" ? "#33373e" : "#fff" }}
    >
      <Header category="Page" title="Customers"></Header>
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
