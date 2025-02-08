import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MdArrowBack } from "react-icons/md";
import { SamplePage1 } from "./SamplePage1";
import { SamplePage2 } from "./SamplePage2";
import { SamplePage3 } from "./SamplePage3";
import { SamplePage4 } from "./SamplePage4";
import { SamplePage5 } from "./SamplePage5";
import { SamplePage6 } from "./SamplePage6";

export const PublicSentimentPage = () => {
  const data = [
    { id: 1, name: "Category A", value: 39.6 },
    { id: 2, name: "Category B", value: 32.3 },
    { id: 3, name: "Category C", value: 30.3 },
    { id: 4, name: "Category D", value: 28.6 },
    { id: 5, name: "Category D", value: 24.1 },
    { id: 6, name: "Category D", value: 22.0 },
  ];

  const COLORS = [
    "#e64747",
    "#e35d5d",
    "#e37676",
    "#e38f8f",
    "#e6a8a8",
    "#e6bebe",
  ];
  const [startAngle, setStartAngle] = useState(90);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlePieClick = (entry: any, index: number) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const angles = data.map((item) => (item.value / total) * 360);
    const startAngles = angles.reduce((acc: number[], _: number, i: number) => {
      acc[i] = i === 0 ? 0 : acc[i - 1] + angles[i - 1];
      return acc;
    }, new Array(angles.length));

    const centerAngle = startAngles[index] + angles[index] / 2;
    setSelectedId(entry.id);

    // Set rotation to make the center of the clicked section point right (90 degrees)
    setStartAngle(90 - centerAngle);
  };

  function handleSectionBack() {
    setSelectedId(null);
    setStartAngle(90);
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
                if (selectedId) return null;
                return `${name}: ${value}%`;
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
          selectedId ? "translate-x-[30dvw]" : "translate-x-[99dvw]"
        }`}
      >
        <div className="relative w-full h-full rounded-2xl border-2 border-gray-300 overflow-y-hidden">
          <div className="overflow-y-auto h-dvh">
            <div
              className="sticky top-0 left-0 w-12 h-12 flex items-center justify-center"
              onClick={handleSectionBack}
            >
              <MdArrowBack className="text-3xl text-gray-400" />
            </div>
            {selectedId === 1 && <SamplePage1 />}
            {selectedId === 2 && <SamplePage2 />}
            {selectedId === 3 && <SamplePage3 />}
            {selectedId === 4 && <SamplePage4 />}
            {selectedId === 5 && <SamplePage5 />}
            {selectedId === 6 && <SamplePage6 />}
          </div>
        </div>
      </div>
    </div>
  );
};
