import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {


  console.log(data);
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      dataSource={data}
      // format="${x}: data ${yval}: data"
      type={type}
      tooltipSettings={{
        visible: true, 
        format: "${x}: data ${yval}",
        trackLineSettings: {
          visible:true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
