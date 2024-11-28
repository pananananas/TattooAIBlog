"use client";
import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
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
import { ChartConfig, ChartContainer, ChartTooltipContent } from "../ui/chart";
import { sentimentChartData } from "../../lib/chartData";
import { TrendingDown } from "lucide-react";

const chartConfig: ChartConfig = {
  blackwork: {
    label: "Blackwork",
    color: "hsl(0, 0%, 50%)",
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
    label: "Trash Polka",
    color: "hsl(330, 100%, 40%)",
  },
};

export default function StyleSentimentAreaChart() {
  const [selectedStyle, setSelectedStyle] = useState<string>("minimalist");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStyle(event.target.value);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg">Mean Sentiment by Style </CardTitle>
          <CardDescription>
            Mean sentiment of tattoo styles over the years
          </CardDescription>
        </div>
        <select
          value={selectedStyle}
          onChange={handleStyleChange}
          className="w-[110px] sm:w-[180px] rounded-md border border-zinc-300 dark:border-zinc-900 bg-zinc-100/85 dark:bg-zinc-950/85 px-2 py-2 text-sm ring-offset-background focus:outline-none focus:ring-black focus:ring-ring focus:ring-offset-2"
        >
          {Object.entries(chartConfig).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{ [selectedStyle]: chartConfig[selectedStyle] }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={sentimentChartData}
              margin={{
                top: 20,
                right: 30,
                left: -20,
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
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={3}
                domain={[-0.2, 0.6]}
                ticks={[-0.2, 0, 0.2, 0.4, 0.6]}
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient
                  id={`fill${selectedStyle}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={chartConfig[selectedStyle].color}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={chartConfig[selectedStyle].color}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={selectedStyle}
                stroke={chartConfig[selectedStyle].color}
                fillOpacity={1}
                fill={`url(#fill${selectedStyle})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center gap-2 font-medium leading-none">
              Sentiment trends down in last year
              <TrendingDown className="h-4 w-4" />
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
