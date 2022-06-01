import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  BarSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barChartData,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {

  const {currentMode} = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl "
    >
      <Header category="Chart" title="Bar Chart" />
      <ChartComponent
        id="bar-chart"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        title="Grafico de ..."
        tooltip={{enable: true}}
        width="650px"
        height="420px"
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject
          services={[BarSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barChartData.map((item, index) => (
            <SeriesDirective
              key={index}
              dataSource={item}
              xName="x"
              yName="y"
              type="Bar"
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
