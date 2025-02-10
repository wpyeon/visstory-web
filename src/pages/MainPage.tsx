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
          <div className="flex flex-col items-center w-full h-full flex-1 gap-10">
            <h1 className="text-2xl font-bold text-black text-7xl mt-10 mr-10">
              South Korea's Untold Stories
            </h1>
            <div className="flex flex-col items-center w-full h-full gap-10">
              <p className="text-xl text-black bg-gray-200/80 w-4/5 rounded-xl p-6 shadow-xl">
                South Korea's fertility rate has reached an all-time low,
                prompting the government to implement various measures to
                address this pressing issue. As members of society, it is
                crucial for us to engage with and understand the current
                situation, as well as the direction of policies aimed at
                tackling this challenge. Through this interactive website, we
                offer key insights and visual storytelling to help you gain a
                deeper understanding of the issue and its implications for the
                future.
                <br />
                <br />
                <b>Click the button below to start your journey.</b>
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="flex flex-row h-full gap-10 justify-center items-center w-full z-10">
              <div className="flex flex-col justify-end h-72">
                <Link to="/main/history">
                  <Button
                    variant="outline"
                    className="flex flex-col justify-start w-72 h-12 shadow-xl hover:h-72 transition-all duration-300 overflow-y-hidden"
                  >
                    <div className="text-xl font-bold text-black max-h-12 pb-4">
                      History
                    </div>
                    <div className="flex flex-col flex-1 text-lg text-black max-w-72 text-wrap text-left">
                      Scroll down through the modern history of South Korea and
                      see how the fertility rate has changed over time.
                    </div>
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col justify-end h-72">
                <Link to="/main/policies">
                  <Button
                    variant="outline"
                    className="flex flex-col justify-start w-72 h-12 shadow-xl hover:h-72 transition-all duration-300 overflow-y-hidden"
                  >
                    <div className="text-xl font-bold text-black max-h-12 pb-4">
                      Policies & Politics
                    </div>
                    <div className="flex flex-col flex-1 text-lg text-black max-w-72 text-wrap text-left">
                      Explore the four phases of South Korea's policy
                      development plan, where the government implemented adequate
                      strategies to address the issue of fertility rate.
                    </div>
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col justify-end h-72">
                <Link to="/main/sentiment">
                  <Button
                    variant="outline"
                    className="flex flex-col justify-start w-72 h-12 shadow-xl hover:h-72 transition-all duration-300 overflow-y-hidden"
                  >
                    <div className="text-xl font-bold text-black max-h-12 pb-4">
                      Public Sentiment
                    </div>
                    <div className="flex flex-col flex-1 text-lg text-black max-w-72 text-wrap text-left">
                      Learn about the public sentiment towards the issue of
                      fertility rate in South Korea, and see how it has shaped
                      the policies.
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
