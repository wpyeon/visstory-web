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
                          South Korea has one of the world's lowest birth rates
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
                        <Heading1>
                          Policy Directions for Addressing Low Birth Rate
                        </Heading1>
                        <Paragraph>
                          To tackle the declining birth rate, the government
                          established the Second Basic Plan (2011-2015) and
                          implemented the following measures:
                        </Paragraph>
                        <Heading2>
                          Strengthening Support for Childbirth and Parenting
                        </Heading2>
                        <List>
                          <li>
                            Housing Support: Enhanced assistance for newlyweds
                            in home purchases and rentals.
                          </li>
                          <li>
                            Childcare Subsidies: More public childcare
                            facilities and reduced private education costs.
                          </li>
                          <li>
                            Childcare Infrastructure: Extended-hour childcare
                            and tailored parenting support services.
                          </li>
                          <li>
                            Maternal Support: Improved healthcare services in
                            underserved areas.
                          </li>
                        </List>
                        <Heading2>
                          Creating a Family-Friendly Social Environment
                        </Heading2>
                        <List>
                          <li>
                            Gender Equality: Encourage male involvement in
                            childcare and promote shared responsibilities.
                          </li>
                          <li>
                            Family Values Education: Foster appreciation for
                            childbirth and parenting in society.
                          </li>
                        </List>
                        <Heading2>Improving Public Awareness</Heading2>
                        <List>
                          <li>
                            Awareness Campaigns: Strengthen publicity on low
                            birth rate issues through collaboration.
                          </li>
                          <li>
                            Community Programs: Implement local initiatives to
                            encourage births.
                          </li>
                          <li>
                            Collaborative Efforts: Build partnerships across
                            sectors for effective policy execution.
                          </li>
                        </List>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={2} value={"third"}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Heading1>Phase 3 Policies Plan (2016~2020)</Heading1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <Heading1>Background of the Third Phase</Heading1>
                        <List>
                          <li>
                            South Korea faces a crisis in economic and social
                            sustainability due to the world's lowest birth rate
                            and rapid aging.
                          </li>
                          <li>
                            Despite the implementation of the First and Second
                            Basic Plans, the birth rate (below 1.3) has remained
                            stagnant for over a decade, and elderly poverty
                            remains the highest among OECD countries.
                          </li>
                          <li>
                            The low birth rate is not merely a childbirth issue
                            but is deeply linked to structural factors such as
                            employment, education, and housing.
                          </li>
                          <li>
                            South Korea has entered the "demographic burden era"
                            as the demographic dividend era ended with the
                            decline of the working-age population (2017) and
                            transition into an aged society (2018).
                          </li>
                          <li>
                            The Third Basic Plan (2016-2020) represents the last
                            golden opportunity to address the looming
                            demographic cliff, necessitating stronger policy
                            measures.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <Heading1>
                          Current Status of Low Birth Rate and Aging Society
                        </Heading1>
                        <Heading2>
                          Persistent Low Birth Rate and Increasing Life
                          Expectancy
                        </Heading2>
                        <List>
                          <li>
                            The total fertility rate has remained below 2.1 for
                            over 30 years, with ultra-low fertility (below 1.3)
                            persisting since 2001.
                          </li>
                          <li>
                            In 2014, South Korea’s total fertility rate was
                            1.21, among the lowest globally, and it is the only
                            OECD country that has not experienced a birth rate
                            rebound.
                          </li>
                          <li>
                            With rising life expectancy, South Korea is entering
                            a longevity society:{" "}
                          </li>
                          <li>
                            Life expectancy trends: 61.9 years (1970) → 81.5
                            years (2014) → 88.6 years (2060).
                          </li>
                          <li>
                            Population aged 90+ years: 160,000 (2015) → 2
                            million (2060).
                          </li>
                        </List>
                        <Heading2>
                          Persistent Low Birth Rate and Increasing Life
                          Expectancy
                        </Heading2>
                        <List>
                          <li>Elderly population (65+ years) growth: </li>
                          <li>
                            6.62 million (2015) → 12.69 million (2030) → 18
                            million (2050).
                          </li>
                          <li>
                            Rapid aging will accelerate from 2020, with the
                            elderly proportion reaching 37.4% by 2050.
                          </li>
                          <li>Total population decline will begin in 2031: </li>
                          <li>
                            Peak population of 52.16 million (2030) → 48.12
                            million (2050).
                          </li>
                          <li>
                            Working-age population (15–64 years) decline:{" "}
                          </li>
                          <li>
                            37.04 million (2016) → 25.35 million (2050) (a loss
                            of over 10 million).
                          </li>
                        </List>
                        <Heading2>
                          Social Rists from Demographic Changes
                        </Heading2>
                        <List>
                          <li>
                            Transition to a labor-deficient society, with
                            significant workforce shortages starting in the
                            2030s.
                          </li>
                          <li>
                            Aging workforce: Average worker age rising from 40.3
                            years (2015) → 42.9 years (2030).
                          </li>
                          <li>Potential GDP growth rate decline: </li>
                          <li>4.42% (2001-2010) → 0.99% (2051-2060).</li>
                          <li>Increasing social security burdens: </li>
                          <li>National pension deficit expected by 2044.</li>
                          <li>
                            Health insurance fund depletion expected by 2025.
                          </li>
                          <li>
                            Military manpower shortages: Expected deficit of
                            23,000 soldiers per year from the early 2030s.
                          </li>
                          <li>Rural depopulation crisis: </li>
                          <li>
                            Rural population projected to shrink to 2.82 million
                            by 2053.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <Heading1>Causes of Low Birth Rate</Heading1>
                        <Heading2>Economic and Employment Instability</Heading2>
                        <List>
                          <li>
                            Rising youth unemployment and income insecurity
                            delay marriage and childbirth.
                          </li>
                          <li>Increasing average age at first marriage:</li>
                          <li>
                            Men: 27.8 years (1990) → 31.6 years (2009) → 32.4
                            years (2014).
                          </li>
                          <li>
                            Women: 24.8 years (1990) → 28.7 years (2009) → 29.8
                            years (2014).
                          </li>
                          <li>
                            Declining marriage rates directly contribute to the
                            low birth rate.
                          </li>
                        </List>
                        <Heading2>Work-Life Balance Challenges</Heading2>
                        <List>
                          <li>
                            Excessive working hours and a women-centered
                            childcare approach remain problematic.
                          </li>
                          <li>
                            South Korea had the longest working hours among OECD
                            countries in 2014 (2,057 hours per year).
                          </li>
                          <li>
                            Lack of paternal involvement in childcare increases
                            the burden on women.
                          </li>
                          <li>
                            Non-regular workers and employees of small
                            businesses have limited access to parental leave.
                          </li>
                          <li>
                            Work-family balance policies primarily benefit
                            public sector and large corporation employees,
                            excluding most small business workers.
                          </li>
                        </List>
                        <Heading2>
                          High Costs of Childcare and Education
                        </Heading2>
                        <List>
                          <li>
                            Rising private education and childcare costs deter
                            childbirth.
                          </li>
                          <li>
                            Despite the expansion of childcare services,
                            high-quality public childcare facilities remain
                            insufficient.
                          </li>
                          <li>
                            Lack of after-school care for lower elementary
                            school students.
                          </li>
                        </List>
                        <Heading2>Changing Social Values</Heading2>
                        <List>
                          <li>
                            Increasing delayed marriage and non-marriage trends
                            due to shifting social perceptions of family.
                          </li>
                          <li>
                            Weakening belief in children as a source of
                            financial security for old age.
                          </li>
                          <li>
                            Growing emphasis on individualism and
                            self-fulfillment over family life.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section4"] = el)}>
                        <Heading1>
                          Policy Directions for Addressing Low Birth Rate
                        </Heading1>
                        <Paragraph>
                          The Third Basic Plan (2016-2020) shifts toward more
                          practical support and structural improvements beyond
                          previous policies.
                        </Paragraph>
                        <Heading2>
                          Strengthening Youth Employment and Housing Policies
                        </Heading2>
                        <List>
                          <li>
                            Boosting youth employment: Supporting transition to
                            regular employment and expanding youth jobs in the
                            public sector.
                          </li>
                          <li>
                            Enhancing housing support for newlyweds: Expanding
                            loans for newlyweds and developing affordable
                            housing towns for young couples.
                          </li>
                        </List>
                        <Heading2>
                          Expanding Support for Childbirth and Parenting
                        </Heading2>
                        <List>
                          <li>
                            Increasing medical support for pregnancy and
                            childbirth: Expanding infertility treatment support
                            and high-risk pregnancy medical aid.
                          </li>
                          <li>
                            Increasing childcare and education subsidies:
                            Expanding free early childhood education and
                            increasing public daycare centers.
                          </li>
                          <li>
                            Enhancing tailored childcare services: Extending
                            childcare hours and expanding after-school programs
                            for elementary students.
                          </li>
                        </List>
                        <Heading2>Supporting Work-Life Balance</Heading2>
                        <List>
                          <li>
                            Encouraging parental leave and reduced working
                            hours: Expanding paternity leave and introducing
                            flexible work arrangements.
                          </li>
                          <li>
                            Fostering family-friendly workplace cultures:
                            Expanding the family-friendly company certification
                            program.
                          </li>
                          <li>
                            Enhancing parental support for non-regular and small
                            business workers.
                          </li>
                        </List>
                        <Heading2>
                          Creating a Family-Friendly Social Culture
                        </Heading2>
                        <List>
                          <li>
                            Encouraging fathers to take parental leave:
                            Increasing parental leave benefits and promoting
                            greater paternal involvement.
                          </li>
                          <li>
                            Recognizing diverse family structures: Expanding
                            support for single-parent and multicultural
                            families.
                          </li>
                        </List>
                        <Heading2>
                          Improving Public Awareness and Strengthening Policy
                          Implementation
                        </Heading2>
                        <List>
                          <li>
                            Raising awareness of the low birth rate crisis:
                            Strengthening public-private cooperation and
                            launching national awareness campaigns.
                          </li>
                          <li>
                            Expanding regional low birth rate policies:
                            Implementing tailored local policies to address
                            regional disparities.
                          </li>
                        </List>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent key={3} value={"fourth"}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Heading1>Phase 4 Policies Plan (2021~2025)</Heading1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div ref={(el) => (sectionRefs.current["section1"] = el)}>
                        <Heading1>Background of the Fourth Phase</Heading1>
                        <List>
                          <li>
                            Despite implementing three previous Basic Plans over
                            the past 15 years, South Korea continues to
                            experience ultra-low fertility (total fertility rate
                            below 1.3) and rapid aging.
                          </li>
                          <li>
                            In 2019, the total fertility rate dropped to 0.92,
                            the lowest among OECD countries.
                          </li>
                          <li>
                            By 2025, South Korea’s elderly population is
                            expected to exceed 20%, officially entering a
                            super-aged society.
                          </li>
                          <li>
                            As natural population decline accelerates,
                            population imbalances between urban and rural areas
                            are becoming more pronounced.
                          </li>
                          <li>
                            Unlike previous plans focused on encouraging
                            childbirth, the Fourth Basic Plan shifts towards
                            improving quality of life.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section2"] = el)}>
                        <Heading1>
                          Current Status of Low Birth Rate and Aging Society
                        </Heading1>
                        <Heading2>Persistent Low Birth Rate</Heading2>
                        <List>
                          <li>
                            South Korea's low birth rate trend began in 1983 and
                            has continued as an ultra-low fertility society
                            since 2002.
                          </li>
                          <li>
                            In 2019, the total fertility rate was 0.92, making
                            South Korea the only country in the world with a
                            birth rate below 1.0.
                          </li>
                          <li>
                            Declining number of births: 303,000 births (2019) →
                            260,000 births (2025) (projected).
                          </li>
                          <li>
                            Increasing rates of non-marriage and delayed first
                            marriages are reducing the population of potential
                            mothers.
                          </li>
                        </List>
                        <Heading2>Accelerating Aging</Heading2>
                        <List>
                          <li>
                            By 2025, more than 20% of the population will be
                            aged 65 or older, marking South Korea's transition
                            to a super-aged society.
                          </li>
                          <li>
                            Rising life expectancy: 88.6 years (2060 projected).
                          </li>
                          <li>
                            Total population decline begins in 2031: 52.16
                            million (2030) → 48.12 million (2050) (projected).
                          </li>
                          <li>
                            Working-age population (15–64 years) decline: 37.04
                            million (2016) → 25.35 million (2050).
                          </li>
                        </List>
                        <Heading2>
                          Social Risks from Demographic Changes
                        </Heading2>
                        <List>
                          <li>
                            Economic slowdown due to labor shortages: Potential
                            GDP growth rate could drop to 0.99% by 2050.
                          </li>
                          <li>
                            Increased social security burdens: Deterioration of
                            national pension and health insurance funds.
                          </li>
                          <li>
                            Widening generational and regional disparities:
                            Population concentration in metropolitan areas and
                            depopulation of rural regions.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section3"] = el)}>
                        <Heading1>Causes of Low Birth Rate</Heading1>
                        <Paragraph>
                          The low birth rate issue is not merely a decline in
                          fertility but a complex result of social, economic,
                          and cultural factors.
                        </Paragraph>
                        <Heading2>Economic and Employment Instability</Heading2>
                        <List>
                          <li>
                            Youth employment instability and income insecurity
                            discourage marriage and childbirth.
                          </li>
                          <li>
                            Rising housing costs force many to delay or forgo
                            marriage and childbirth.
                          </li>
                          <li>Increasing average age at first marriage:</li>
                          <li>Men: 27.8 years (1990) → 33.4 years (2019).</li>
                          <li>Women: 24.8 years (1990) → 30.6 years (2019).</li>
                        </List>
                        <Heading2>Challenges in Work-Life Balance</Heading2>
                        <List>
                          <li>
                            Long working hours and gender-imbalanced childcare
                            responsibilities.
                          </li>
                          <li>
                            Lack of paternal involvement in childcare and
                            increased career disruption for women.
                          </li>
                          <li>
                            Limited parental leave access for non-regular and
                            small business workers.
                          </li>
                        </List>
                        <Heading2>
                          High Costs of Childcare and Education
                        </Heading2>
                        <List>
                          <li>
                            Rising childcare and education costs, with
                            insufficient public childcare facilities.
                          </li>
                          <li>
                            Heavy reliance on private education and lack of
                            after-school care for elementary students.
                          </li>
                        </List>
                        <Heading2>Changing Family and Social Values</Heading2>
                        <List>
                          <li>
                            Increasing perception of marriage and childbirth as
                            a choice rather than a necessity.
                          </li>
                          <li>
                            Rising number of single-parent and non-married
                            households, with insufficient policy support for
                            diverse family structures.
                          </li>
                        </List>
                      </div>
                      <div ref={(el) => (sectionRefs.current["section4"] = el)}>
                        <Heading1>
                          Policy Directions for Addressing Low Birth Rate
                        </Heading1>
                        <Paragraph>
                          The Fourth Basic Plan (2021-2025) shifts from
                          childbirth encouragement to improving quality of life
                          and respecting personal choices.
                        </Paragraph>
                        <Heading2>
                          Creating a Society Where Work and Family Are Balanced
                        </Heading2>
                        <List>
                          <li>
                            Improving work-life balance: Expanding flexible work
                            arrangements and reducing working hours.
                          </li>
                          <li>
                            Promoting gender-equal workplaces: Encouraging
                            paternal leave and preventing career disruptions for
                            women.
                          </li>
                          <li>
                            Strengthening childcare responsibilities: Expanding
                            public childcare centers and after-school programs.
                          </li>
                          <li>
                            Guaranteeing children's basic rights: Strengthening
                            universal childbirth and parenting support.
                          </li>
                        </List>
                        <Heading2>
                          Establishing a Healthy and Active Aging Society
                        </Heading2>
                        <List>
                          <li>
                            Ensuring financial security in old age: Reforming
                            the national pension system and expanding basic
                            pension benefits.
                          </li>
                          <li>
                            Expanding preventive healthcare services:
                            Strengthening health screenings and local healthcare
                            services.
                          </li>
                          <li>
                            Building a community-based elderly care system:
                            Expanding senior-friendly housing and long-term care
                            services.
                          </li>
                        </List>
                        <Heading2>
                          Creating a Society Where All Generations Can Thrive
                        </Heading2>
                        <List>
                          <li>
                            Strengthening youth support: Expanding housing,
                            education, and job support.
                          </li>
                          <li>
                            Supporting women's career continuity: Providing
                            customized job training and career maintenance
                            programs.
                          </li>
                          <li>
                            Promoting social participation among middle-aged and
                            elderly individuals: Supporting re-employment and
                            entrepreneurship for retirees.
                          </li>
                        </List>
                        <Heading2>
                          Strengthening National and Social Adaptability to
                          Demographic Changes
                        </Heading2>
                        <List>
                          <li>
                            Supporting diverse family structures: Expanding
                            support for single-parent, non-married, and
                            multicultural families.
                          </li>
                          <li>
                            Preparing for an age-integrated society: Encouraging
                            intergenerational cooperation and social exchange.
                          </li>
                          <li>
                            Strengthening social safety nets: Expanding
                            comprehensive social security coverage.
                          </li>
                        </List>
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
