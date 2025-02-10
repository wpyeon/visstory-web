import { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AgingVelocityOfCountriesGraph,
  AvgMarriageAgeGraph,
  ElderlyDependencyRatioGraph,
  KoreaFertilityRateGraph2007,
  WorldElderlyRatioGraph,
} from "@/components/graphs/PolicyGraphs";
import { Heading1, Heading2, Paragraph } from "@/components/ui/typography";

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
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-3xl font-bold flex items-center justify-center  pt-4">
          Phase 1-4 Low Birth Rate Policies Plan Key Information
        </div>
        <Paragraph>
          Click on the tabs to change between the different phases. Click on the
          navigation buttons on the right to navigate to the different sections
          of the phase.
        </Paragraph>
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
                          address these challenges, the government enacted the{" "}
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
                        <List>
                          <li>
                            Women's workforce participation is increasing, but
                            returning to work after childbirth remains
                            difficult.
                          </li>
                          <li>
                            Parental leave and reduced working-hour policies
                            exist, but utilization rates are low, and workplace
                            culture does not support parental leave.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section4"] = el)}>
                        <Heading1>
                          Policy Direction for Addressing Low Birth Rate
                        </Heading1>
                        <Heading2>
                          Strengthening Support for Childbirth and Parenting
                        </Heading2>
                        <List>
                          <li>
                            Housing Support: Enhanced housing assistance for
                            newlyweds.
                          </li>
                          <li>
                            Childcare Subsidies: Increased funding for childcare
                            and reduced education costs.
                          </li>
                          <li>
                            Childcare Infrastructure: More public childcare
                            facilities and diverse parenting services.
                          </li>
                          <li>
                            Maternal Support: Improved prenatal care in
                            underprivileged areas and government vaccination
                            programs.
                          </li>
                        </List>
                        <Heading2>Promoting Work-Life Balance</Heading2>
                        <List>
                          <li>
                            Parental Leave: Expanded paternity leave and
                            flexible work hours.
                          </li>
                          <li>
                            Family-Friendly Workplaces: Certification for
                            family-oriented companies.
                          </li>
                          <li>
                            Support for Women: Reduced working hours for parents
                            and job support for mothers returning to work.
                          </li>
                        </List>
                        <Heading2>
                          Creating a Family-Friendly Social Environment
                        </Heading2>
                        <List>
                          <li>
                            Gender Equality: Promote male involvement in
                            childcare and shared household duties.
                          </li>
                          <li>
                            Family Values Education: Foster a cultural
                            appreciation for childbirth and parenting.
                          </li>
                        </List>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={1} value={"second"}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Heading1>Phase 2 Policies Plan (2011~2015)</Heading1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <Paragraph>
                        South Korea is experiencing an unprecedentedly rapid
                        transition into a low birth rate and aging society,
                        necessitating urgent{" "}
                        <b>economic and social responses</b>.
                      </Paragraph>
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <Heading1>Background of the Second Phase</Heading1>
                        <List>
                          <li>
                            By 2050, the elderly population is projected to
                            account for 38.2% of the total population,
                            significantly exceeding the average of advanced
                            European and North American countries (25.9%).
                          </li>
                          <li>
                            These demographic shifts are expected to lead to
                            labor shortages, economic stagnation, increased
                            financial burdens, and intergenerational conflicts.
                          </li>
                          <li>
                            In response, the government enacted the Low Birth
                            Rate and Aging Society Basic Act (2005) and
                            established the Presidential Committee on Low Birth
                            Rate and Aging Society to implement comprehensive
                            policies.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <Heading1>
                          Current Status of Low Birth Rate and Aging Society
                        </Heading1>
                        <Heading2>Worsening Low Birth Rate</Heading2>
                        <List>
                          <li>
                            While the First Basic Plan slowed the sharp decline
                            in birth rates, the overall decrease in births and
                            low fertility rate persisted.
                          </li>
                          <li>
                            The total fertility rate in 2009 was 1.15, the
                            lowest among OECD countries.
                          </li>
                        </List>
                        <Heading2>Accelerating Aging Population</Heading2>
                        <List>
                          <li>
                            Due to rising life expectancy, the proportion of the
                            elderly population (65 years and older) is steadily
                            increasing.
                          </li>
                          <li>
                            The elderly population ratio, which was 11.0% in
                            2010, is expected to reach 38.2% by 2050, making
                            South Korea one of the world's most aged societies.
                          </li>
                        </List>
                        <WorldElderlyRatioGraph />
                        <Heading2>
                          Social Impacts of Demographic Changes
                        </Heading2>
                        <List>
                          <li>
                            Elderly dependency ratio (the number of elderly per
                            100 working-age individuals) is projected to
                            increase significantly, from 37.2% in 2010 to 72% in
                            2050, adding financial strain on pensions and health
                            insurance systems.
                          </li>
                          <li>
                            Rising financial burdens on welfare systems could
                            exacerbate intergenerational conflicts.
                          </li>
                        </List>
                        <ElderlyDependencyRatioGraph />
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <Heading1>Causes of Low Birth Rate</Heading1>
                        <Heading2>
                          Rising Childcare and Education Costs
                        </Heading2>
                        <List>
                          <li>
                            High costs of private education and childcare
                            discourage childbirth.
                          </li>
                          <li>
                            Public childcare facilities are expanding but fail
                            to meet qualitative expectations.
                          </li>
                          <li>
                            The rise in dual-income households has increased
                            demand for extended childcare services and
                            customized parental support, which remains
                            insufficient.
                          </li>
                        </List>
                        <Heading2>Changing Social Values</Heading2>
                        <List>
                          <li>
                            Evolving societal perceptions of marriage and
                            childbirth have led to an increase in the unmarried
                            population.
                          </li>
                          <li>
                            Greater individualism and a stronger emphasis on
                            self-fulfillment reduce motivation for having
                            children.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section4"] = el)}>
                        <Heading1>Causes of Low Birth Rate</Heading1>
                        <Heading2>
                          Rising Childcare and Education Costs
                        </Heading2>
                        <Heading2>Changing Social Values</Heading2>
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
