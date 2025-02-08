import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MdBook,
  MdQuestionAnswer,
  MdContactPage,
  MdInfo,
  MdWork,
} from "react-icons/md";
import { MdHome } from "react-icons/md";
import { Card } from "@/components/ui/card";

const screens = [
  { id: 1, title: "Economy", icon: <MdHome className="scale-200" /> },
  { id: 2, title: "Society", icon: <MdInfo size={80} /> },
  { id: 3, title: "Culture", icon: <MdWork size={80} /> },
  { id: 4, title: "Politics", icon: <MdContactPage size={80} /> },
  { id: 5, title: "Education", icon: <MdBook size={80} /> },
  { id: 6, title: "National Defense", icon: <MdQuestionAnswer size={80} /> },
  { id: 7, title: "Healthcare System", icon: <MdQuestionAnswer size={80} /> },
  { id: 8, title: "Welfare", icon: <MdQuestionAnswer size={80} /> },
];

interface Screen {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface ButtonGridProps {
  screens: Screen[];
  onSelectScreen: (screenId: number) => void;
}

function ButtonGrid({ screens, onSelectScreen }: ButtonGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {screens.map((screen) => (
        <Button
          key={screen.id}
          onClick={() => onSelectScreen(screen.id)}
          variant="outline"
          className="h-full w-full"
        >
          <div className="flex flex-col text-2xl font-bold items-center justify-center text-wrap">
            {screen.title}
          </div>
        </Button>
      ))}
    </div>
  );
}

interface ContentDisplayProps {
  screenId: number;
}

function ContentDisplay({ screenId }: ContentDisplayProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">
        {screens.find((screen) => screen.id === screenId)?.title}
      </h2>
      <p className="text-lg">test</p>
    </div>
  );
}

export function IndustriesPage() {
  const [selectedScreenId, setSelectedScreenId] = useState(screens[0].id);

  return (
    <div className="flex flex-col flex-1 h-full mx-4 mb-4 overflow-hidden gap-4">
      <div className="text-3xl font-bold">
        Affected Industries
      </div>
      <Card className="flex flex-col h-full">
        <div className="flex h-full">
          <div className="w-full md:w-1/3 p-4 bg-gray-100">
            <ButtonGrid
              screens={screens}
              onSelectScreen={setSelectedScreenId}
            />
          </div>
          <div className="w-full md:w-2/3 p-4 bg-white">
            <ContentDisplay screenId={selectedScreenId} />
          </div>
        </div>
      </Card>
    </div>
  );
}
