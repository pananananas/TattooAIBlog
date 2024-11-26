"use client";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

import { topicChartData } from "../../lib/chartData.js";

const chartConfig: ChartConfig = {
  kotki_w_chwilach_relaksu: {
    label: "🐈 Kotki w chwilach relaksu",
    color: "hsl(var(--chart-4))",
  },
  motyle_z_rozłożonymi_skrzydłami: {
    label: "🦋 Motyle ze skrzydłami",
    color: "hsl(210, 100%, 50%)",
  },
  pejzażyste_kwiaty_i_liście: {
    label: "🌸 Pejzażyste kwiaty i liście",
    color: "hsl(330, 100%, 50%)",
  },
  nieustraszone_tygrysy: {
    label: "🐅 Nieustraszone tygrysy",
    color: "hsl(var(--chart-1))",
  },
  wilki_wyjące_w_dziczy: {
    label: "🐺 Wilki wyjące w dziczy",
    color: "hsl(120, 100%, 15%)",
  },
};

export default function TopicAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tattoo Topic Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={topicChartData}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value}
              />
              <Tooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
                // defaultIndex={5}
              />
              <defs>
                {Object.entries(chartConfig).map(([key, config]) => (
                  <linearGradient
                    key={key}
                    id={`fill${key}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={config.color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={config.color}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                ))}
              </defs>
              {Object.keys(chartConfig).map((key) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={chartConfig[key].color}
                  fillOpacity={1}
                  fill={`url(#fill${key})`}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up year by year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              2015 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
