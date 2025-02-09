import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useEffect, useState } from "react";

interface ProgressChartProps {
  progress: number;
}

export function ProgressChart({ progress }: ProgressChartProps) {
  const [chartData, setChartData] = useState<
    Array<{ year: string; rate: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/visstory-web/korea-fertility-rate.csv");
        const text = await response.text();
        const rows = text.trim().split("\n").slice(1);
        const parsedData = rows.map((row) => {
          const [date, value] = row.split(",");
          return {
            year: date.split("-")[0],
            rate: parseFloat(value),
          };
        });
        // Insert pseudo datapoints between actual datapoints
        const enhancedData = [];
        for (let i = 0; i < parsedData.length - 1; i++) {
          const current = parsedData[i];
          const next = parsedData[i + 1];

          const granularity = 12;
          const pseudoPoints = Array.from({ length: granularity }, (_, j) => {
            console.log("key: ", j);
            return {
              year: `${current.year}`,
              rate:
                current.rate + (j / granularity) * (next.rate - current.rate),
            };
          });

          enhancedData.push(...pseudoPoints);
        }
        // Add the last point
        enhancedData.push(parsedData[parsedData.length - 1]);
        setChartData(enhancedData);
      } catch (error) {
        console.error("Error loading CSV:", error);
      }
    };

    fetchData();
  }, []);

  const progressIndex = Math.max(1, Math.floor(progress * chartData.length));
  const completedData = chartData.slice(0, progressIndex);
  const remainingData = chartData.slice(progressIndex - 1); // Overlap by 1 for smooth connection

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer
        config={{
          line: {
            label: "Progress",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[full] w-full"
      >
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--chart-1))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--chart-1))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="year" hide />
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Area
            type="monotone"
            data={completedData}
            dataKey="rate"
            stroke="var(--color-line)"
            fill="url(#gradient)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
            label="Progress"
          />
          <Area
            type="monotone"
            data={remainingData}
            dataKey="rate"
            stroke="var(--color-line)"
            strokeWidth={2}
            dot={false}
            strokeOpacity={0}
            fillOpacity={0}
            isAnimationActive={false}
          />
          <ReferenceLine
            y={completedData[completedData.length - 1]?.rate}
            stroke="var(--color-line)"
            strokeWidth={2}
            strokeDasharray="5 5"
            label={{
              value: `${
                completedData[completedData.length - 1]?.year
              } - ${completedData[completedData.length - 1]?.rate.toFixed(2)}`,
              position: "insideBottomRight",
              fontSize: "20px",
              fontWeight: "bold",
              fill: "var(--color-line)",
            }}
          />
        </AreaChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
