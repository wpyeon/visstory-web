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

export const PublicSentimentPage = () => {
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
    "#646CFF",
    "#8086ff",
    "#9197ff",
    "#a8adff",
    "#bfc2ff",
    "#d4d6ff",
    "#e0e2ff",
  ];
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
    // Set rotation to make the center of the clicked section point right (90 degrees)
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
    <div className="relative top-0 left-0 h-full w-full overflow-hidden">
      <div
        className={`w-full h-[10dvh] flex items-center justify-center z-10 transition-all duration-500 ${
          selectedId ? "translate-x-[-100%]" : "translate-x-[0%]"
        }`}
      >
        <h1 className="text-3xl font-bold">
          Public Sentiment: What People Think They Need the Most
        </h1>
      </div>
      <div
        className={`absolute w-[800px] h-[400px] top-[50%] translate-y-[-50%] left-[50%] transition-all duration-500 ${
          selectedId
            ? "-translate-x-[calc(50dvw+50%)] scale-150"
            : "translate-x-[-50%]"
        }`}
      >
        <ResponsiveContainer
          width={800}
          height={400}
          className={"transition-all duration-500"}
          style={{ transform: `rotate(${90 - startAngle}deg) scale(1.5)` }}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={150}
              labelLine={false}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => {
                if (showLabel) return `${name}: ${value}%`;
                return null;
              }}
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
        <div className="relative w-full h-full rounded-2xl border-2 border-gray-300 overflow-y-hidden">
          <div className="overflow-y-auto h-full">
            <div
              className="sticky top-0 left-0 w-12 h-12 flex items-center justify-center"
              onClick={handleSectionBack}
            >
              <MdArrowBack className="text-3xl text-gray-400" />
            </div>
            <div className="px-12 py-4">
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
