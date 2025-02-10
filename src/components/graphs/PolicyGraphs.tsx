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
  BarChart,
  Bar,
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
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
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
      <p className="text-md text-gray-500 italic">
        Graph 1: Aging Velocity of Countries
      </p>
    </div>
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
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
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
      <p className="text-md text-gray-500 italic">
        Graph 2: Fertility Rate in South Korea Over Time
      </p>
    </div>
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
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            type="number"
            domain={[1972, 2007]}
            tickCount={10}
          />
          <YAxis
            domain={[20, 35]}
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
      <p className="text-md text-gray-500 italic">
        Graph 3: Average Marriage Age in South Korea Over Time
      </p>
    </div>
  );
};

const worldElderlyRatioData = [
  { year: 2005, world: 7.4, developed: 15.3, korea: 9.1 },
  { year: 2030, world: 11.8, developed: 22.5, korea: 24.3 },
  { year: 2050, world: 16.1, developed: 25.9, korea: 38.2 },
];

export function WorldElderlyRatioGraph() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={500} height={300} data={worldElderlyRatioData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" type="category" domain={[2005, 2050]}/>
          <YAxis domain={[0, 40]} tickFormatter={(value) => `${value.toFixed(1)}%`} tickCount={10} />
          <Tooltip />
          <Legend />
          <Bar dataKey="world" name="World" fill="#0052ff" label={{position: "top", fill: "#0052ff"}} />
          <Bar dataKey="developed" name="Developed Countries" fill="#bf1077" label={{position: "top", fill: "#bf1077"}} />
          <Bar dataKey="korea" name="Korea" fill="#ff8150" label={{position: "top", fill: "#ff8150"}} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-md text-gray-500 italic">Graph 6: World Elderly Ratio Over Time</p>
    </div>
  );
}

const elderlyDependencyRatioData = [
  { year: 2020, percent: 21.8 },
  { year: 2021, percent: 23.1 },
  { year: 2022, percent: 24.6 },
  { year: 2023, percent: 26.1 },
  { year: 2024, percent: 27.8 },
  { year: 2025, percent: 29.7 },
  { year: 2026, percent: 31.8 },
  { year: 2027, percent: 33.5 },
  { year: 2028, percent: 35.4 },
  { year: 2029, percent: 36.9 },
  { year: 2030, percent: 38.6 },
  { year: 2031, percent: 40.4 },
  { year: 2032, percent: 42.1 },
  { year: 2033, percent: 44.0 },
  { year: 2034, percent: 46.4 },
  { year: 2035, percent: 48.6 },
  { year: 2036, percent: 51.1 },
  { year: 2037, percent: 53.5 },
  { year: 2038, percent: 55.9 },
  { year: 2039, percent: 58.4 },
  { year: 2040, percent: 60.5 },
  { year: 2045, percent: 69.9 },
  { year: 2050, percent: 78.6 },
  { year: 2055, percent: 82.8 },
  { year: 2060, percent: 90.4 },
  { year: 2065, percent: 98.2 },
  { year: 2070, percent: 100.6 },
];

export function ElderlyDependencyRatioGraph() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            type="number"
            domain={[2020, 2070]}
            tickCount={10}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value.toFixed(1)}%`}
            tickCount={10}
          />
          <Tooltip />
          <Legend />
          <Line
            data={elderlyDependencyRatioData}
            dataKey="percent"
            name="Elderly Dependency Ratio"
            stroke="#0052ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-md text-gray-500 italic">
        Graph 5: Elderly Dependency Ratio in South Korea Over Time
      </p>
      <p className="text-md text-gray-500 italic">
        {
          "(Elderly Dependency = Number of People of Age >= 65 / Number of People of Age < 64 and Age >= 15"
        }
      </p>
    </div>
  );
}
