import { Link } from "react-router-dom";
import emptyPlayground from "@/assets/empty-playground.jpg";
import { Button } from "@/components/ui/button";

export const MainPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center w-screen h-screen">
      <img
        src={emptyPlayground}
        alt="Image of empty playground"
        className="w-dvw h-dvh absolute object-cover"
      />
      <div className="flex flex-1 justify-center items-center w-full h-full p-8 z-10">
        <div className="flex flex-col justify-center items-center w-full h-full rounded-xl bg-black/0">
          <div className="flex flex-col items-end w-full h-full flex-1">
            <h1 className="text-2xl font-bold text-black text-7xl mt-10 mr-10">
              South Korea's Untold Stories
            </h1>
          </div>
          <div className="flex flex-row gap-10 justify-center items-center w-full h-[20vh] z-10">
            <Link to="/main/history">
              <Button variant="outline" className="w-72 h-12 shadow-xl">
                <p className="text-xl font-bold text-black">History</p>
              </Button>
            </Link>
            <Link to="/main/policies">
              <Button variant="outline" className="w-72 h-12 shadow-xl">
                <p className="text-xl font-bold text-black">
                  Policies & Politics
                </p>
              </Button>
            </Link>
            <Link to="/main/sentiment">
              <Button variant="outline" className="w-72 h-12 shadow-xl">
                <p className="text-xl font-bold text-black">Public Sentiment</p>
              </Button>
            </Link>
            <Link to="/main/industries">
              <Button variant="outline" className="w-72 h-12 shadow-xl">
                <p className="text-xl font-bold text-black">
                  Affected Industries
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
