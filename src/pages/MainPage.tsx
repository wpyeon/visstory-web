import { Link } from "react-router-dom";
import emptyPlayground from "@/assets/empty-playground.jpg";

export const MainPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center w-screen h-screen">
      <img
        src={emptyPlayground}
        alt="Image of empty playground"
        className="w-dvw h-dvh absolute"
      />
      <div className="flex flex-1 justify-center items-center w-full h-full p-8 z-10">
        <div className="flex flex-col justify-center items-center w-full h-full rounded-xl bg-black/0">
          <div className="flex flex-col items-end w-full h-full flex-1">
            <h1 className="text-2xl font-bold text-black text-7xl mt-10 mr-10">South Korea's Untold Stories</h1>
          </div>
          <div className="flex flex-row gap-40 justify-center items-center w-full h-[20vh] z-10">
        <Link to="/main/policies">
          <div className="bg-black/20 rounded-xl w-72 h-16 flex items-center justify-center">
            <p className="text-2xl font-bold text-black">Policies & Politics</p>
          </div>
        </Link>
        <Link to="/main/sentiment">
          <div className="bg-black/20 rounded-xl w-72 h-16 flex items-center justify-center">
            <p className="text-2xl font-bold text-black">Public Sentiment</p>
          </div>
        </Link>
        <Link to="/main/industries">
          <div className="bg-black/20 rounded-xl w-72 h-16 flex items-center justify-center ">
            <p className="text-2xl font-bold text-black">Affected Industries</p>
          </div>
        </Link>
      </div>
        </div>
        
      </div>
    </div>
  );
};
