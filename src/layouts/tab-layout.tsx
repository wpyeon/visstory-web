import { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AgingVelocityOfCountriesGraph,
  AvgMarriageAgeGraph,
  KoreaFertilityRateGraph2007,
} from "@/components/graphs/PolicyGraphs";

function NavButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left hover:text-primary transition-colors"
    >
      {title}
    </button>
  );
}

const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-bold pb-6">{children}</div>;
};

const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl font-bold pb-6">{children}</div>;
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-lg pb-6">{children}</div>;
};

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="text-lg list-disc list-inside pl-4 space-y-2 pb-6">
      {children}
    </ul>
  );
};

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState("first");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col flex-1 w-full px-4 pb-4 gap-4">
      <div className="text-3xl font-bold flex items-center justify-center pb-6 pt-4">
        Phase 1-4 Low Birth Rate Policies Plan Key Information
      </div>
      <div className="w-full">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full relative"
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger key={0} value={"first"}>
              First Phase
            </TabsTrigger>
            <TabsTrigger key={1} value={"second"}>
              Second Phase
            </TabsTrigger>
            <TabsTrigger key={2} value={"third"}>
              Third Phase
            </TabsTrigger>
            <TabsTrigger key={3} value={"fourth"}>
              Fourth Phase
            </TabsTrigger>
          </TabsList>

          <div className="flex">
            <div className="flex-grow">
              <TabsContent key={0} value={"first"}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Heading1>Phase 1 Policies Plan (2006~2010)</Heading1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <Paragraph>
                        Phase 1 Policies Plan was implemented to{" "}
                        <b>restore the birth rate</b> and establish a foundation
                        for <b>addressing aging issues</b>.
                      </Paragraph>
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <Heading1>Policies Development Background</Heading1>
                        <Paragraph>
                          South Korea has one of the world’s lowest birth rates
                          and the fastest aging population, raising concerns
                          about socioeconomic sustainability.
                        </Paragraph>
                        <List>
                          <li>
                            Transition from aging society → aged society →
                            super-aged society is the fastest in the world
                          </li>
                          <li>
                            The country became an aging society (7% of the
                            population aged 65 and older) in 2000, an aged
                            society (14%) in 2018, and is expected to enter a
                            super-aged society (20%) by 2026.
                          </li>
                        </List>
                        <Heading2>
                          Aging Velocity of Different Countries
                        </Heading2>
                        <AgingVelocityOfCountriesGraph />
                        <Paragraph>
                          Even if the birth rate recovers, there will be a
                          significant time lag before the working-age population
                          increases, necessitating long-term preparations. To
                          address these challenges, the government enacted the
                          <b>Low Birth Rate and Aging Society Basic Act</b> in
                          2005 and established the{" "}
                          <b>
                            Presidential Committee on Low Birth Rate and Aging
                            Society
                          </b>
                          .
                        </Paragraph>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <Heading1>
                          Status of Low Birth Rate and Aging Society
                        </Heading1>
                        <Heading2>Worsening Birth Rate</Heading2>
                        <Paragraph>
                          South Korea’s total fertility rate dropped below the
                          replacement level (2.1 children per woman) in 1983 and
                          has continued to decline.
                        </Paragraph>
                        <KoreaFertilityRateGraph2007 />
                        <Heading2>
                          Social Impacts of Demographic Changes
                        </Heading2>
                        <List>
                          <li>
                            The total population is expected to peak at 49.34
                            million in 2018 and then begin to decline.
                          </li>
                          <li>
                            A shrinking working-age population (15–64 years old)
                            will reduce economic vitality and worsen labor
                            shortages.
                          </li>
                          <li>
                            Increased elderly dependency will heighten financial
                            pressures on pensions, health insurance, and other
                            social security programs.
                          </li>
                          <li>
                            Rising medical and long-term care costs for the
                            elderly will further strain government finances.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <Heading1>Causes of Low Birth Rate</Heading1>
                        <Heading2>Income and Employment Instability</Heading2>
                        <List>
                          <li>
                            Rising youth unemployment and unstable job
                            conditions delay marriage and childbirth.
                          </li>
                          <li>
                            Delayed marriage shortens the childbearing period,
                            increases infertility rates, and amplifies the
                            burden of childbirth.
                          </li>
                          <li>
                            The average age of first marriage has increased as a
                            result.
                          </li>
                        </List>
                        <AvgMarriageAgeGraph />
                        <Heading2>Work-Life Balance Challenges</Heading2>
                        <Heading2>Rising Child-Rearing Costs</Heading2>
                        <Heading2>Changing Social Values</Heading2>
                        <Heading2>
                          Policy Directions for Addressing Low Birth Rate
                        </Heading2>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section4"] = el)}>
                        <Heading1>Policy Direction</Heading1>
                        <Paragraph>
                          The government focused on{" "}
                          <b>lowering the age of marriage</b> and{" "}
                          <b>increasing the number of children</b> to address
                          the low birth rate.
                        </Paragraph>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={1} value={"second"}>
                <Card>
                  <CardHeader>
                    <CardTitle>First Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <h2>Section 1</h2>
                        Content for section 1
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <h2>Section 2</h2>
                        Content for section 2
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <h2>Section 3</h2>
                        Content for section 3
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={2} value={"third"}>
                <Card>
                  <CardHeader>
                    <CardTitle>First Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div
                        ref={(el) => (sectionRefs.current["section1"] = el)}
                        className="h-dvh"
                      >
                        <h2>Section 1</h2>
                        Content for section 1
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <h2>Section 2</h2>
                        Content for section 2
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <h2>Section 3</h2>
                        Content for section 3
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={3} value={"fourth"}>
                <Card>
                  <CardHeader>
                    <CardTitle>First Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <h2>Section 1</h2>
                        Content for section 1
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <h2>Section 2</h2>
                        Content for section 2
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <h2>Section 3</h2>
                        Content for section 3
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>

            <nav className="sticky top-0 h-fit min-w-64 pl-4 pt-56">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {activeTab === "first" && "First Phase"}
                    {activeTab === "second" && "Second Phase"}
                    {activeTab === "third" && "Third Phase"}
                    {activeTab === "fourth" && "Fourth Phase"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <NavButton
                      title="Background"
                      onClick={() => scrollToSection("section1")}
                    />
                    <NavButton
                      title="Status"
                      onClick={() => scrollToSection("section2")}
                    />
                    <NavButton
                      title="Causes"
                      onClick={() => scrollToSection("section3")}
                    />
                    <NavButton
                      title="Policy Direction"
                      onClick={() => scrollToSection("section4")}
                    />
                  </div>
                </CardContent>
              </Card>
            </nav>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
