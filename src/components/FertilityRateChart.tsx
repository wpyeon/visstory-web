"use client";

import { ExternalLink } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#49566B",
  },
} satisfies ChartConfig;

export function FertilityRateChart() {
  const [chartData, setChartData] = useState<
    Array<{ year: string; rate: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/visstory-web/korea-fertility-rate.csv");
        const text = await response.text();
        const rows = text.trim().split("\n").slice(1); // Skip header row
        const parsedData = rows.map((row) => {
          const [date, value] = row.split(",");
          return {
            year: date.split("-")[0], // Extract year from date
            rate: parseFloat(value),
          };
        });
        setChartData(parsedData);
        console.log("parsedData", parsedData);
      } catch (error) {
        console.error("Error loading CSV:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex bg-background text-foreground p-4">
      <div className="flex-1 flex flex-col mr-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">South Korea's Fertility Rate</h2>
          <p className="text-sm text-muted-foreground">
            Showing fertility rate per capita over the years (1960-2022)
          </p>
        </div>
        <div className="flex-grow">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="rate"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-4 flex items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              <a href="https://fred.stlouisfed.org/series/SPDYNTFRTINKOR" className="inline-flex items-center gap-2">
                Source: Federal Reserve Bank of St. Louis <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </div>
      <Card className="w-1/3 max-w-md">
        <CardHeader>
          <CardTitle>About This Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This area chart visualizes the fertility rate per capita in South Korea over the years (1960-2022).
          </p>
          <p className="mb-4">
            Key observations:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Generally, fertility rate has been decreasing over the years.</li>
            <li>There was a steep decrease in fertility rate until 1990s.</li>
            <li>2018 was the year where the fertility rate dropped below 1.0.</li>
          </ul>
          <p className="mt-4">
            Use this data to inform your marketing strategies and to understand seasonal trends in website traffic.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
