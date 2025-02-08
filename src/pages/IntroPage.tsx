import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProgressChart } from "@/components/ProgressChart";
import { IntroYearSection } from "@/pages/IntroYearSection";
import { Link } from "react-router-dom";

export function IntroPage() {
  const progress = useScrollProgress();

  return (
    <div className="w-full h-fit top-0 left-0">
      <div className="sticky top-0 left-0 w-full h-[38vh] z-10 bg-gradient-to-t from-transparent from-0% via-background/90 via-5% to-background to-10%">
        <ProgressChart progress={progress} />
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
        <div className="flex pb-8 pr-8 justify-end">
          <Link
            to="/main"
            className="h-16 w-56 bg-red-500 rounded-2xl flex items-center justify-center"
          >
            <p className="text-2xl font-bold text-white">What's next?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
