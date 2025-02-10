import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const RealEstateRentalData = [
  {
    year: 2018,
    price: {
      national: 21.7,
      metropolitan: 25.2,
      provincial: 16.1,
    },
  },
  {
    year: 2019,
    price: {
      national: 21.3,
      metropolitan: 24.4,
      provincial: 16.2,
    },
  },
  {
    year: 2020,
    price: {
      national: 22.3,
      metropolitan: 25.4,
      provincial: 16.3,
    },
  },
  {
    year: 2021,
    price: {
      national: 22.3,
      metropolitan: 25.1,
      provincial: 16.6,
    },
  },
  {
    year: 2022,
    price: {
      national: 22.1,
      metropolitan: 24.4,
      provincial: 17.6,
    },
  },
  {
    year: 2023,
    price: {
      national: 22.9,
      metropolitan: 26.2,
      provincial: 17.2,
    },
  },
];

export const RealEstateRentalGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={RealEstateRentalData}>
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 40]} />
        <XAxis dataKey="year" />
        <Tooltip />
        <Bar
          dataKey="price.national"
          fill="#8884d8"
          label={{ position: "top" }}
          name="National"
        />
        <Bar
          dataKey="price.metropolitan"
          fill="#82ca9d"
          label={{ position: "top" }}
          name="Metropolitan"
        />
        <Bar
          dataKey="price.provincial"
          fill="#ffc658"
          label={{ position: "top" }}
          name="Provincial"
        />

        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

const workLifeBalanceData = [
  {
    year: 2015,
    importance: {
      Work: 53.7,
      Family: 11.9,
      Both: 34.4,
    },
  },
  {
    year: 2017,
    importance: {
      Work: 43.1,
      Family: 13.9,
      Both: 42.9,
    },
  },
  {
    year: 2019,
    importance: {
      Work: 42.1,
      Family: 13.7,
      Both: 44.2,
    },
  },
];

export const WorkLifeBalanceGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={workLifeBalanceData}>
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 60]} />
        <XAxis dataKey="year" />
        <Tooltip />
        <Line
          dataKey="importance.Work"
          stroke="grey"
          name="Work"
          strokeWidth={2}
          strokeDasharray="6 6"
        />
        <Line
          dataKey="importance.Family"
          stroke="#82ca9d"
          name="Family"
          strokeWidth={2}
        />
        <Line
          dataKey="importance.Both"
          stroke="#ffc658"
          name="Both"
          strokeWidth={2}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const EducationSpendingGraph = () => {
  const [chartData, setChartData] = useState<
    Array<{
      year: string;
      all: number;
      elementary: number;
      middle: number;
      high: number;
    }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/visstory-web/edu-spending.csv");
      const text = await response.text();
      const rows = text.trim().split("\n").slice(1); // Skip header row
      const parsedData = rows.map((row) => {
        const [year, all, elementary, middle, high] = row.split(",");
        return {
          year: year,
          all: parseFloat(all) * 10000,
          elementary: parseFloat(elementary) * 10000,
          middle: parseFloat(middle) * 10000,
          high: parseFloat(high) * 10000,
        };
      });
      setChartData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line dataKey="all" stroke="#8884d8" strokeWidth={2} name="All" />
        <Line
          dataKey="elementary"
          stroke="#82ca9d"
          strokeWidth={2}
          name="Elementary"
        />
        <Line dataKey="middle" stroke="#ffc658" strokeWidth={2} name="Middle" />
        <Line dataKey="high" stroke="#ff7300" strokeWidth={2} name="High" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `${value / 1000}K`} domain={[0, 60]} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const childCareUsageGraph = [
  {
    year: 2014,
    usage: 3.64,
  },
  {
    year: 2015,
    usage: 3.92,
  },
  {
    year: 2016,
    usage: 4.04,
  },
  {
    year: 2017,
    usage: 4.19,
  },
];

export const ChildCareUsageGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={childCareUsageGraph}>
        <Line
          dataKey="usage"
          stroke="#8884d8"
          strokeWidth={2}
          name="Percentage of Working Couples Using Childcare Service"
        />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[3, 5]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
