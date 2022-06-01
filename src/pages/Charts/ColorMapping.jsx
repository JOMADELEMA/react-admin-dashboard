import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl "
    >
      <Header category="Chart" title="Color Mapping" />

      <ChartComponent
        id="column-chart"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ mode: "Range", background: "white" }}
      >
        <Inject services={[ColumnSeries, Legend, Category, Tooltip, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            xName="x"
            yName="y"
            name="USA"
            type="Column"
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
