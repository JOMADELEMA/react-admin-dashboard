import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  DateTime,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Financial = () => {
  const { currentMode } = useStateContext();

  // const date1 = new Date("2017, 1, 1");

  // // eslint-disable-next-line consistent-return
  // function filterValue(value) {
  //   if (value.x >= date1) {
  //     // eslint-disable-next-line no-sequences
  //     return value.x, value.high, value.low;
  //   }
  // }
  // const returnValue = financialChartData.filter(filterValue);

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white
  dark:bg-secondary-dark-bg rounded-3xl "
    >
      <Header category="Chart" title="Financial Chart" />

      <ChartComponent
        id="financial-chart"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        title="Grafico financiero"
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[
            HiloSeries,
            Tooltip,
            Category,
            Crosshair,
            Zoom,
            DateTime,
            Logarithmic,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="Apple inc"
            low="low"
            high="high"
            type="Hilo"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
