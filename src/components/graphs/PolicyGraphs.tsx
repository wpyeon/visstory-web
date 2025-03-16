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
      <p className="text-sm text-gray-500 italic">
        Graph 1: Aging Velocity of Countries. Retrieved from Statistics Korea,
        "Projection of Future Population" (통계청, "미래인구특별추계"), 2005
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
      <p className="text-sm text-gray-500 italic">
        Graph 2: Fertility Rate in South Korea Over Time. Retrieved from
        Organisation for Economic Co-operation and Development, 2024
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
      <p className="text-sm text-gray-500 italic">
        Graph 3: Average Marriage Age in South Korea Over Time Retrieved from
        KOSIS, "Trends in Changes in the Age of First Marriage" (통계청,
        "초혼연령변동추이"), 2007
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
          <XAxis dataKey="year" type="category" domain={[2005, 2050]} />
          <YAxis
            domain={[0, 40]}
            tickFormatter={(value) => `${value.toFixed(1)}%`}
            tickCount={10}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="world"
            name="World"
            fill="#0052ff"
            label={{ position: "top", fill: "#0052ff" }}
          />
          <Bar
            dataKey="developed"
            name="Developed Countries"
            fill="#bf1077"
            label={{ position: "top", fill: "#bf1077" }}
          />
          <Bar
            dataKey="korea"
            name="Korea"
            fill="#ff8150"
            label={{ position: "top", fill: "#ff8150" }}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 italic">
        Graph 4: World Elderly Ratio Over Time. Retrieved from United Nation,
        "World Population Prospects", 2006
      </p>
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
      <p className="text-sm text-gray-500 italic">
        Graph 5: Elderly Dependency Ratio in South Korea Over Time. Retrieved
        from KOSIS, "Key National Population Indicators" (KOSIS, "전국 주요
        인구지표"), 2022.{" "}
        {
          "Note: Elderly Dependency = Number of People of Age >= 65 / Number of People of Age < 64 and Age >= 15"
        }
      </p>
    </div>
  );
}

const ageGroupData = [
  { year: 2020, age_0_14: 12.11, age_15_64: 72.06, age_65_plus: 15.83 },
  { year: 2021, age_0_14: 11.8, age_15_64: 71.54, age_65_plus: 16.66 },
  { year: 2022, age_0_14: 11.41, age_15_64: 71.1, age_65_plus: 17.49 },
  { year: 2023, age_0_14: 10.97, age_15_64: 70.69, age_65_plus: 18.34 },
];

export function AgeGroupGraph() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={500} height={300} data={ageGroupData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" type="category" domain={[2020, 2023]} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value.toFixed(1)}%`}
            tickCount={10}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="age_0_14"
            name="Age 0-14"
            fill="#768a96"
            stackId="a"
          />
          <Bar
            dataKey="age_15_64"
            name="Age 15-64"
            fill="#aac7d8"
            stackId="a"
          />
          <Bar
            dataKey="age_65_plus"
            name="Age 65+"
            fill="#44576d"
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 italic">
        Graph 6: Population by Age Group in South Korea. Retrieved from
        Statistica, "Demographics of South Korea", 2024
      </p>
    </div>
  );
}

export function KoreaFertilityRateLineChart() {
  const [chartData, setChartData] = useState<
    Array<{ year: string; rate: number }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/visstory-web/korea-fertility-rate.csv");
        const text = await response.text();
        const rows = text.trim().split("\n").slice(1);
        const parsedData = rows
          .map((row) => {
            const [date, value] = row.split(",");
            return {
              year: date.split("-")[0],
              rate: parseFloat(value),
            };
          })
          // Filter data to only include years up to 2020
          .filter(item => parseInt(item.year) <= 2019);
        
        setChartData(parsedData);
      } catch (error) {
        console.error("Error loading CSV:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="flex w-full justify-between mt-2 px-10">
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">Population Replacement Level</p>
          <p className="text-xs text-gray-500">Before 1983</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">Low-Fertility Country</p>
          <p className="text-xs text-gray-500">1983-2002</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">Ultra-Low-Fertility Country</p>
          <p className="text-xs text-gray-500">After 2002</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart 
          width={500} 
          height={300} 
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="year" 
            type="category"
            tickCount={10}
            domain={['dataMin', '2019']} // Ensure x-axis only goes up to 2020
          />
          <YAxis
            domain={[0, "auto"]}
            tickFormatter={(value) => `${value.toFixed(1)}`}
          />
          <Tooltip 
            formatter={(value) => [`${value}`, "Fertility Rate"]}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend />
          {/* Vertical reference lines for section boundaries */}
          <ReferenceLine
            x="1983"
            stroke="#333"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <ReferenceLine
            x="2002"
            stroke="#333"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          
          <Line
            type="monotone"
            dataKey="rate"
            name="Fertility Rate"
            stroke="#49566B"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm text-gray-500 italic mt-4">
        Graph 7: South Korea Fertility Rate Trend with Demographic Transition Phases. 
        Retrieved from Statistics Korea, "provisional birth and death statistics" (통계청, "출생사망통계 잠정결과"), 2020
      </p>
    </div>
  );
}

