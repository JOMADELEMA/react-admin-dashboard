import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip, 
  AccumulationLegend
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
        legendSettings={{visible: true, background: 'white'}}
        tooltip={{enable: true}}
      >
        <Inject services={[PieSeries, AccumulationDataLabel,AccumulationLegend, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            pointColorMapping="fill"
            dataLabel={{ visible: true, name: "x", position: "Outside" }}
            xName="x"
            yName="y"
            name="sale"
            type="Pie"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
