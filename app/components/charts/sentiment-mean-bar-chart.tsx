"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ErrorBar } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  { tattoo_style: "Traditional", mean_sentiment: 0.322, std_dev: 0.075 },
  { tattoo_style: "Realism", mean_sentiment: 0.32, std_dev: 0.069 },
  { tattoo_style: "Illustrative", mean_sentiment: 0.339, std_dev: 0.074 },
  { tattoo_style: "Anime", mean_sentiment: 0.34, std_dev: 0.11 },
  { tattoo_style: "Blackwork", mean_sentiment: 0.241, std_dev: 0.081 },
  { tattoo_style: "Cybersigilism", mean_sentiment: 0.236, std_dev: 0.114 },
  { tattoo_style: "Trash polka", mean_sentiment: 0.169, std_dev: 0.148 },
  { tattoo_style: "Minimalist", mean_sentiment: 0.115, std_dev: 0.118 },
  { tattoo_style: "Calligraphy", mean_sentiment: 0.077, std_dev: 0.125 },
];

const chartConfig = {
  mean_sentiment: {
    label: "Mean Sentiment",
    color: "hsl(var(--chart-2))",
  },
};

export default function SentimentMeanBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tattoo Styles Sentiment Analysis</CardTitle>
        <CardDescription>
          Showing mean sentiment and standard deviation for various tattoo styles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" >
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: -10,
                bottom: 100,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="tattoo_style"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[-0.1, 0.5]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="mean_sentiment"
                fill={chartConfig.mean_sentiment.color}
                name={chartConfig.mean_sentiment.label}
              >
                <ErrorBar
                  dataKey="std_dev"
                  width={4}
                  strokeWidth={2}
                  stroke="hsl(var(--chart-3))"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

