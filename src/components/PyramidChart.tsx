import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ChartContainer } from "./ui/chart";

// Your data should be in this format
const data = [
  { value: "10-20", count: 5 },
  { value: "20-30", count: 10 },
  { value: "30-40", count: 15 },
  { value: "40-50", count: 8 },
];

export const PyramidChart = () => {
  // Create negative values for the first chart
  const negativeData = data.map((item) => ({
    ...item,
    count: -item.count,
  }));

  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <ChartContainer
        config={{
          bar: {
            label: "Progress",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[40vh] w-[40vh]"
      >
        <BarChart
          width={600}
          height={400}
          data={negativeData}
          layout="vertical"
          margin={{right: 0}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            tickFormatter={(value, _) => String(Math.abs(value))}
            domain={[-20, 0]}
          />
          <YAxis dataKey="value" type="category" />
          <Tooltip formatter={(value) => Math.abs(Number(value))} />
          <Bar dataKey="count" fill="red" />
        </BarChart>
      </ChartContainer>
      <ChartContainer
        config={{
          bar: {
            label: "Progress",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[40vh] w-[40vh]"
      >
        <BarChart
          width={600}
          height={400}
          data={data}
          layout="vertical"
          margin={{right: 0}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 20]}/> {/* For the count/frequency */}
          <YAxis dataKey="value" type="category" hide={true} /> {/* For the value ranges */}
          <Tooltip />
          <Bar dataKey="count" fill="var(--chart-1)" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
