import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white
  dark:bg-secondary-dark-bg rounded-3xl "
    >
      <Header category="Chart" title="Pie Chart" />
      <AccumulationChartComponent
        id="pie-chart"
        height="420px"
        width="650px"
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
        enableSmartLabels="true"
      >
        <Inject services={[PieSeries, AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            pointColorMapping="fill"
            dataLabel={{ visible: true, name: "x", position: "Outside" }}
            xName="x"
            yName="y"
            type="Pie"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
