"use client";

import { FC } from "react";
import {
  LineChart as PrimitiveLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: any[];
};

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const LineChart: FC<Props> = ({ data }) => {
  return (
    <PrimitiveLineChart
      width={540}
      height={360}
      data={data}
      margin={{ top: 20, right: 0, bottom: 20, left: 20 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </PrimitiveLineChart>
  );
};
