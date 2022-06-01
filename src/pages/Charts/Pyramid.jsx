import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip, 
  AccumulationLegend, 
  PyramidSeries
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white
  dark:bg-secondary-dark-bg rounded-3xl "
    >
      <Header category="Chart" title="Pyramid Chart" />
      <AccumulationChartComponent
        id="pyramid-chart"
        height="420px"
        width="650px"
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
        enableSmartLabels="true"
        legendSettings={{visible: true, background: 'white'}}
        tooltip={{enable: true}}
      >
        <Inject services={[PyramidSeries, AccumulationDataLabel,AccumulationLegend, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            pointColorMapping="fill"
            dataLabel={{ visible: true, name: "x", position: "Inside" }}
            xName="x"
            yName="y"
            type="Pyramid"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;