import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const agingVelGraphSeries = [
  {
    name: "Korea",
    data: [
      { year: 2000, value: 7 },
      { year: 2018, value: 14 },
      { year: 2026, value: 20 },
    ],
    color: "#ff8150",
  },
  {
    name: "Japan",
    data: [
      { year: 1970, value: 7 },
      { year: 1994, value: 14 },
      { year: 2006, value: 20 },
    ],
    color: "#a21025",
  },
  {
    name: "Germany",
    data: [
      { year: 1932, value: 7 },
      { year: 1972, value: 14 },
      { year: 2010, value: 20 },
    ],
    color: "#7a49a5",
  },
  {
    name: "USA",
    data: [
      { year: 1942, value: 7 },
      { year: 2014, value: 14 },
      { year: 2030, value: 20 },
    ],
    color: "#48cbcf",
  },
  {
    name: "France",
    data: [
      { year: 1864, value: 7 },
      { year: 1979, value: 14 },
      { year: 2019, value: 20 },
    ],
    color: "#4974a5",
  },
];

export const AgingVelocityOfCountriesGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400} className={"p-6"}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickCount={15}
        />
        <YAxis
          dataKey="value"
          domain={["dataMin", "dataMax"]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Legend />
        {agingVelGraphSeries.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            stroke={s.color}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export const KoreaFertilityRateGraph2007 = () => {
  const [data, setData] = useState<
    Array<{ year: number; fertility_rate: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/visstory-web/korea-fertility-rate.csv");
      const csvText = await response.text();

      const rows = csvText.split("\n").slice(1); // Skip header row
      const parsedData = rows
        .map((row) => {
          console.log(row);
          const [year, fertility_rate] = row.split(",");
          return {
            year: parseInt(year.split("-")[0]),
            fertility_rate: parseFloat(fertility_rate),
          };
        })
        .filter((item) => item.year >= 1970 && item.year <= 2007);

      setData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400} className={"p-6"}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[1970, 2007]}
          tickCount={10}
        />
        <YAxis
          domain={[0, "auto"]}
          tickFormatter={(value) => `${value.toFixed(1)}`}
        />
        <Tooltip />
        <Legend />
        <Line
          data={data}
          type="monotone"
          dataKey="fertility_rate"
          name="Fertility Rate"
          stroke="#ff8150"
          strokeWidth={2}
        />
        <ReferenceLine
          y={2.1}
          stroke="#ce1126"
          strokeDasharray="6 6"
          strokeWidth={2}
          label={{
            value: "Replacement Level",
            position: "insideBottomRight",
            fill: "#ce1126",
            fontWeight: "bold",
            fontSize: 12,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const avgMarriageAgeData = [
  { year: 1972, maleAge: 26.7, femaleAge: 22.6 },
  { year: 1981, maleAge: 26.4, femaleAge: 23.2 },
  { year: 1990, maleAge: 27.9, femaleAge: 24.9 },
  { year: 1995, maleAge: 28.4, femaleAge: 25.4 },
  { year: 2000, maleAge: 29.3, femaleAge: 26.5 },
  { year: 2005, maleAge: 30.9, femaleAge: 27.7 },
  { year: 2007, maleAge: 31.1, femaleAge: 28.1 },
];

export const AvgMarriageAgeGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400} className={"p-6"}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[1972, 2007]}
          tickCount={10}
        />
        <YAxis
          domain={["dataMin", "dataMax"]}
          tickFormatter={(value) => `${value.toFixed(1)}`}
          tickCount={10}
        />
        <Tooltip />
        <Legend />
        <Line
          data={avgMarriageAgeData}
          dataKey="maleAge"
          name="Male Age"
          stroke="#0052ff"
          strokeWidth={2}
        />
        <Line
          data={avgMarriageAgeData}
          dataKey="femaleAge"
          name="Female Age"
          stroke="#bf1077"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
