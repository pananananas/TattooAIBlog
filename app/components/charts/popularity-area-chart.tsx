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
import { popularityChartData } from "../../lib/chartData.js";

const chartConfig: ChartConfig = {
  anime: {
    label: "Anime",
    color: "hsl(210, 100%, 50%)",
  },
  blackwork: {
    label: "Blackwork",
    color: "hsl(0, 0%, 30%)",
  },
  calligraphy: {
    label: "Calligraphy",
    color: "hsl(120, 100%, 25%)",
  },
  cybersigilism: {
    label: "Cybersigilism",
    color: "hsl(300, 100%, 40%)",
  },
  illustrative: {
    label: "Illustrative",
    color: "hsl(var(--chart-1))",
  },
  minimalist: {
    label: "Minimalist",
    color: "hsl(180, 100%, 30%)",
  },
  realism: {
    label: "Realism",
    color: "hsl(var(--chart-2))",
  },
  traditional: {
    label: "Traditional",
    color: "hsl(330, 100%, 40%)",
  },
  trash_polka: {
    label: "trash_polka",
    color: "hsl(330, 100%, 40%)",
  },
};

export default function TattooStylesAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tattoo Styles Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={popularityChartData}
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
              <Tooltip content={<ChartTooltipContent  />} />
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
