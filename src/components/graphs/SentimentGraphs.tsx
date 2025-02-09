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
