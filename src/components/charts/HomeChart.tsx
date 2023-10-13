"use client";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    revenue: 240,
  },
  {
    name: "Feb",
    revenue: 139,
  },
  {
    name: "Mar",
    revenue: 180,
  },
  {
    name: "Apr",
    revenue: 390,
  },
  {
    name: "May",
    revenue: 480,
  },
  {
    name: "Jun",
    revenue: 300,
  },
  {
    name: "Jul",
    revenue: 430,
  },
  {
    name: "Aug",
    revenue: 400,
  },
  {
    name: "Sep",
    revenue: 43,
  },
  {
    name: "Oct",
    revenue: 300,
  },
  {
    name: "Nov",
    revenue: 4,
  },
  {
    name: "Dec",
    revenue: 43,
  },
];

export default class HomeChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  render() {
    return (
      <div style={{ width: "100%" }} className="text-sm font-bold">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 0,
              left: -25,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D0D0FB" stopOpacity={1} />
                <stop offset="100%" stopColor="#D0D0FB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#D0D0FB" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              className=""
            //   tickMargin={15}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#26264C"
              //   fill="#D0D0FB"
              fill="url(#colorUv)"
              
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
