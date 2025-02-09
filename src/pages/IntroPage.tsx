import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProgressChart } from "@/components/ProgressChart";
import { IntroYearSection } from "@/pages/IntroYearSection";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function IntroPage() {
  const progress = useScrollProgress();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-fit">
      <div className="sticky top-0 left-0 w-full flex flex-col h-[38vh] z-10 bg-gradient-to-t from-transparent from-0% via-background/90 via-5% to-background to-10%">
        <div
          className="w-12 min-h-12 flex items-center justify-center z-20"
          onClick={handleBack}
        >
          <MdArrowBack className="text-3xl text-gray-400" />
        </div>
        <div className="flex-1">
          <ProgressChart progress={progress} />
        </div>
      </div>
      <div className="h-fit">
        <IntroYearSection title="1970's">
          <div className="m-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection title="1980's">
          <div className="m-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection title="1990's">
          <div className="m-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection title="2000's">
          <div className="m-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection title="2010's">
          <div className="m-4">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection title="2020's">
          <div className="m-4 flex flex-1 flex-col gap-30">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </IntroYearSection>
      </div>
    </div>
  );
}
