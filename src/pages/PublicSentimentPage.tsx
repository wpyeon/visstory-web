import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MdArrowBack } from "react-icons/md";
import {
  HousingSupportPage,
  JobSupportPage,
  WorkLifeBalancePage,
  ChildcareSupportPage,
  MitigationOfCompetitiveEducationPage,
  FinancialSupportPage,
  MedicalSupportPage,
} from "./SentimentSubpages";
import { Paragraph } from "@/components/ui/typography";

const data = [
  { id: 1, name: "Housing Support", value: 33.4 },
  { id: 2, name: "Job Support", value: 20.8 },
  { id: 3, name: "Work-life Balance", value: 14.0 },
  { id: 4, name: "Childcare Support", value: 11.5 },
  { id: 5, name: "Mitigation of Competitive Education", value: 9.1 },
  { id: 6, name: "Financial Support", value: 8.0 },
  { id: 7, name: "Medical Support", value: 3.1 },
];

const COLORS = [
  "#44576d",
  "#51647a",
  "#65798f",
  "#7c90a6",
  "#91a5ba",
  "#9db0c4",
  "#b0c1d4",
];

export const PublicSentimentPage = () => {
  const [startAngle, setStartAngle] = useState(90);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showLabel, setShowLabel] = useState(true);

  const handlePieClick = (entry: any, index: number) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const angles = data.map((item) => (item.value / total) * 360);
    const startAngles = angles.reduce((acc: number[], _: number, i: number) => {
      acc[i] = i === 0 ? 0 : acc[i - 1] + angles[i - 1];
      return acc;
    }, new Array(angles.length));

    const centerAngle = startAngles[index] + angles[index] / 2;
    setSelectedId(entry.id);
    setShowLabel(false);
    setStartAngle(90 - centerAngle);
  };

  function handleSectionBack() {
    setSelectedId(null);
    setStartAngle(90);
    setTimeout(() => {
      setShowLabel(true);
    }, 500);
  }

  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <div
        className={`w-full flex items-center justify-center z-10 transition-all duration-500 ${
          selectedId ? "translate-x-[-100%]" : "translate-x-[0%]"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-bold">
            Public Sentiment: What People Think They Need the Most
          </h1>
          <Paragraph>
            Click on the pie chart to see the stories and policies related to
            the selected section.
          </Paragraph>
        </div>
      </div>
      <div
        className={`relative flex-1 flex-col items-center justify-center transition-all duration-500 ${
          selectedId
            ? "-translate-x-[50%] scale-150"
            : ""
        }`
      }
      >
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
          className={"transition-all duration-500"}
          style={{ transform: `rotate(${90 - startAngle}deg)` }}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={"20%"}
              outerRadius={"70%"}
              labelLine={false}
              stroke="none"
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => {
                if (showLabel) return `${name}: ${value}%`;
                return null;
              }}
              fontWeight={"bold"}
              fontSize={26}
              onClick={(_, index) => handlePieClick(data[index], index)}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={500}
              animationEasing="ease-in-out"
              style={{ outline: "none" }}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div
        className={`absolute top-0 left-0 w-[70dvw] h-full transition-all duration-500 p-4 ${
          selectedId ? "translate-x-[30dvw]" : "translate-x-[100dvw]"
        }`}
      >
        <div className="relative w-full h-full rounded-2xl shadow-xl overflow-y-hidden">
          <div className="overflow-y-auto h-full bg-accent">
            <div
              className="sticky top-0 left-0 w-12 h-12 flex items-center justify-center"
              onClick={handleSectionBack}
            >
              <MdArrowBack className="text-3xl text-gray-400" />
            </div>
            <div className="px-12 pb-6 -mt-4">
              {selectedId === 1 && <HousingSupportPage />}
              {selectedId === 2 && <JobSupportPage />}
              {selectedId === 3 && <WorkLifeBalancePage />}
              {selectedId === 4 && <ChildcareSupportPage />}
              {selectedId === 5 && <MitigationOfCompetitiveEducationPage />}
              {selectedId === 6 && <FinancialSupportPage />}
              {selectedId === 7 && <MedicalSupportPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
