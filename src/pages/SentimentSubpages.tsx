import {
  RealEstateRentalGraph,
  WorkLifeBalanceGraph,
} from "@/components/graphs/SentimentGraphs";
import { Heading1, Heading2, Paragraph } from "@/components/ui/typography";

interface GovernmentSupportCardProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeValue?: string;
  afterValue?: string;
}

const GovernmentSupportCard = ({
  title,
  beforeImage,
  afterImage,
  beforeValue,
  afterValue,
}: GovernmentSupportCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4 gap-2">
      <div className="flex flex-col w-full">
        <p className="font-bold">{title}</p>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-2 justify-content items-center">
          <div className="flex flex-1 flex-col gap-2 items-center">
            <img
              src={beforeImage}
              alt="Government Support Before"
              className="h-20"
            />
            <div className="items-center justify-center leading-[0]">
              <span className="inline px-2 text-xs font-bold bg-gray-500 text-white rounded-full">
                Before
              </span>
              <span className="inline text-sm font-bold">
                {"  "}
                {beforeValue}
              </span>
            </div>
          </div>
          <span className="text-xl font-bold">{"->"}</span>
          <div className="flex flex-1 flex-col gap-2 items-center">
            <img
              src={afterImage}
              alt="Government Support After"
              className="h-20"
            />
            <div className="w-full items-center justify-center leading-[0]">
              <span className="inline px-2 text-xs font-bold bg-[#646cff] text-white rounded-full">
                After
              </span>
              <span className="inline text-sm font-bold">
                {"  "}
                {afterValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HousingSupportPage = () => {
  return (
    <div>
      <Heading1>Housing Support</Heading1>
      <Paragraph>
        South Korea faces one of the world's lowest birth rates, with housing
        affordability emerging as a critical barrier for young couples
        considering starting families. Skyrocketing real estate prices,
        particularly in urban areas like Seoul, have made homeownership
        increasingly unattainable for many. High rental costs and stringent loan
        requirements further exacerbate the financial strain on young adults.
        Public sentiment strongly reflects the need for robust housing support
        policies, such as subsidized housing or low-interest loans, to alleviate
        this burden. Addressing housing instability is widely viewed as a vital
        step in encouraging family formation and tackling the nation's
        demographic crisis.
      </Paragraph>
      <Heading2>Average Real Estate Rental Prices / Income Ratio</Heading2>
      <RealEstateRentalGraph />
      <Paragraph>
        The Average Real Estate Rental Prices/Income Ratio in South Korea has
        shown an increasing trend, indicating that housing costs are rising
        faster than average incomes. This growing gap highlights the growing
        financial burden on households, as a larger portion of income is being
        allocated to rent.
      </Paragraph>
      <br />
      <Heading2>Government Support</Heading2>
      <div className="grid grid-cols-2 gap-4">
        <GovernmentSupportCard
          title="Housing Supply Increase for Families with Newborns"
          beforeImage="/visstory-web/pol-icons/1-1-b.svg"
          afterImage="/visstory-web/pol-icons/1-1-a.svg"
          beforeValue="7K Houses"
          afterValue="12K Houses"
        />
        <GovernmentSupportCard
          title="Housing Supply Increase by Urbanizing Areas"
          beforeImage="/visstory-web/pol-icons/1-2-b.svg"
          afterImage="/visstory-web/pol-icons/1-2-a.svg"
          beforeValue="None"
          afterValue="44K Houses"
        />
        <GovernmentSupportCard
          title="Increased Mortgage for Families with Newborns"
          beforeImage="/visstory-web/pol-icons/1-3-b.svg"
          afterImage="/visstory-web/pol-icons/1-3-a.svg"
          beforeValue="200M KRW"
          afterValue="250M KRW"
        />
        <GovernmentSupportCard
          title="Allowance of One Additional Special Supply for Households with Newborns"
          beforeImage="/visstory-web/pol-icons/1-4-b.svg"
          afterImage="/visstory-web/pol-icons/1-4-a.svg"
          beforeValue="None"
          afterValue="1 Additional Supply"
        />
        <GovernmentSupportCard
          title="Public Rental Renewal and Unit Size Upgrade Support for Households with Newborns"
          beforeImage="/visstory-web/pol-icons/1-5-b.svg"
          afterImage="/visstory-web/pol-icons/1-5-a.svg"
          beforeValue="None"
          afterValue="1 Additional Renewal & Unit Size Upgrade"
        />
      </div>
    </div>
  );
};

export const JobSupportPage = () => {
  return (
    <div>
      <Heading1>Job Support</Heading1>
      <Paragraph>
        South Korea's persistently low birth rate is closely tied to economic
        uncertainties, particularly job insecurity and stagnant wages for young
        adults. High youth unemployment and the prevalence of irregular or
        contract-based jobs have made financial stability a significant concern
        for those considering starting families. Many young people delay
        marriage and parenthood due to the lack of stable, well-paying jobs and
        the pressure to compete in a highly demanding job market. Public
        sentiment highlights the urgent need for job support measures, such as
        creating more permanent positions, improving work-life balance, and
        offering parental leave benefits. Strengthening job security and career
        opportunities is seen as essential to fostering a more family-friendly
        environment and addressing the demographic decline.
      </Paragraph>
    </div>
  );
};

export const WorkLifeBalancePage = () => {
  return (
    <div>
      <Heading1>Work-life Balance</Heading1>
      <Paragraph>
        South Korea's notoriously long working hours and rigid corporate culture
        have made achieving work-life balance a significant challenge,
        particularly for young adults juggling careers and family aspirations.
        The pressure to prioritize work over personal life often discourages
        individuals from starting families, contributing to the nation's
        critically low birth rate. Many cite the lack of flexible working
        arrangements, inadequate parental leave policies, and societal
        expectations around overtime as key barriers to balancing work and
        family life. Public sentiment increasingly calls for systemic changes,
        such as shorter workweeks, remote work options, and stronger enforcement
        of labor rights, to create a more family-friendly environment. Improving
        work-life balance is widely viewed as a crucial step in encouraging
        young couples to have children and reversing the demographic decline.
      </Paragraph>
      <Heading2>Work vs. Family - What's More Important?</Heading2>
      <WorkLifeBalanceGraph />
      <Paragraph>
        In recent years, Koreans have increasingly prioritized work-life
        balance, marking a notable shift in societal values. As the country
        faces the pressures of long working hours and a highly competitive
        corporate culture, many individuals are seeking ways to better balance
        their professional and personal lives. This growing emphasis reflects a
        broader desire for well-being and family time, highlighting the need for
        systemic changes to support a healthier, more sustainable lifestyle amid
        the nation’s demographic challenges.
      </Paragraph>
      <Heading2>Government Support Changes in 2025</Heading2>
      <div className="grid grid-cols-2 gap-4">
        <GovernmentSupportCard
          title="Short-term Parental Leave"
          beforeImage="/visstory-web/pol-icons/3-1-b.svg"
          afterImage="/visstory-web/pol-icons/3-1-a.svg"
          beforeValue="None"
          afterValue="A Week of Leave per Year, Maximum 2 Weeks"
        />
        <GovernmentSupportCard
          title="Family Care Leave, Spouse Leave"
          beforeImage="/visstory-web/pol-icons/3-2-b.svg"
          afterImage="/visstory-web/pol-icons/3-2-a.svg"
          beforeValue="Per-day Usage"
          afterValue="Per-hour Usage"
        />
        <GovernmentSupportCard
          title="Improved Parental Leave Benefits"
          beforeImage="/visstory-web/pol-icons/3-3-b.svg"
          afterImage="/visstory-web/pol-icons/3-3-a.svg"
          beforeValue="1.5M KRW/Month"
          afterValue="~2.5M KRW/Month"
        />
        <GovernmentSupportCard
          title="Division-of-Labor Support Fund for Colleagues"
          beforeImage="/visstory-web/pol-icons/3-4-b.svg"
          afterImage="/visstory-web/pol-icons/3-4-a.svg"
          beforeValue="None"
          afterValue="200K KRW/Month"
        />
      </div>
    </div>
  );
};

export const ChildcareSupportPage = () => {
  return (
    <div>
      <Heading1>Childcare Support</Heading1>
      <Paragraph>
        South Korea's low birth rate is closely linked to the high costs and
        limited accessibility of childcare, which pose significant challenges
        for working parents. Many families struggle to afford private daycare or
        find available spots in public childcare facilities, particularly in
        urban areas. The burden of childcare often falls disproportionately on
        women, forcing many to leave the workforce and further discouraging
        family planning. Public sentiment strongly emphasizes the need for
        expanded childcare support, including affordable daycare services,
        extended parental leave, and subsidies for early education.
        Strengthening childcare infrastructure is seen as a vital measure to
        ease parental burdens and encourage higher birth rates in the face of
        the country's demographic crisis.
      </Paragraph>
      <Heading2>Government Support Changes in 2025</Heading2>
      <div className="grid grid-cols-2 gap-4">
        <GovernmentSupportCard
          title="Adjusted Kindergarden Operation Hours"
          beforeImage="/visstory-web/pol-icons/4-1-b.svg"
          afterImage="/visstory-web/pol-icons/4-1-a.svg"
          beforeValue="Depends on Localities"
          afterValue="Operational 12 Hours a Day"
        />
        <GovernmentSupportCard
          title="Eased Government Subsidized Childcare Eligibility"
          beforeImage="/visstory-web/pol-icons/4-2-b.svg"
          afterImage="/visstory-web/pol-icons/4-2-a.svg"
          beforeValue="Household Below 150% of the Median Income"
          afterValue="Household Below 200% of the Median Income"
        />
        <GovernmentSupportCard
          title="Expanded Licensed Caretaker Support"
          beforeImage="/visstory-web/pol-icons/4-3-b.svg"
          afterImage="/visstory-web/pol-icons/4-3-a.svg"
          beforeValue="86K Households"
          afterValue="Targeting 300K Households"
        />
        <GovernmentSupportCard
          title="Expanded Foreign Domestic Helpers Support"
          beforeImage="/visstory-web/pol-icons/4-4-b.svg"
          afterImage="/visstory-web/pol-icons/4-4-a.svg"
          beforeValue="Experimental Support of 100 Households"
          afterValue="Targeting 1200 Households"
        />
      </div>
    </div>
  );
};

export const MitigationOfCompetitiveEducationPage = () => {
  return (
    <div>
      <Heading1>Mitigation Of Competitive Education</Heading1>
      <Paragraph>
        South Korea's intensely competitive education system, often referred to
        as "education fever," places immense financial and emotional strain on
        families, contributing to the nation's low birth rate. The high costs of
        private tutoring (hagwons) and the pressure to excel academically from a
        young age deter many parents from having more children. Families often
        feel compelled to invest heavily in their children's education to secure
        future opportunities, creating a significant financial burden. Public
        sentiment calls for reforms to reduce educational competition, such as
        improving public school quality, regulating private tutoring costs, and
        promoting alternative pathways to success. Addressing the pressures of
        competitive education is seen as essential to creating a more supportive
        environment for raising children and reversing the declining birth rate.
      </Paragraph>
    </div>
  );
};

export const FinancialSupportPage = () => {
  return (
    <div>
      <Heading1>Financial Support</Heading1>
      <Paragraph>
        South Korea's low birth rate is deeply intertwined with the financial
        pressures faced by young couples, including high living costs, stagnant
        wages, and the economic burden of raising children. Many young adults
        delay or forgo starting families due to concerns about affordability,
        particularly in light of rising housing, education, and childcare
        expenses. Public sentiment strongly advocates for increased financial
        support, such as direct cash incentives, child allowances, and tax
        benefits for families, to alleviate these economic challenges. These
        measures are seen as critical to reducing the financial barriers to
        parenthood and encouraging higher birth rates. Strengthening financial
        support systems is widely viewed as a key strategy to address the
        nation's demographic crisis and ensure a sustainable future.
      </Paragraph>
    </div>
  );
};

export const MedicalSupportPage = () => {
  return (
    <div>
      <Heading1>Medical Support</Heading1>
      <Paragraph>
        South Korea's low birth rate is partly attributed to the high costs and
        limited accessibility of medical care related to pregnancy, childbirth,
        and postnatal support. Many young couples are deterred by the financial
        burden of fertility treatments, prenatal care, and postpartum services,
        which are often not fully covered by insurance. Additionally, the lack
        of adequate maternal and pediatric healthcare infrastructure, especially
        outside major cities, further exacerbates concerns about starting
        families. Public sentiment highlights the need for expanded medical
        support, including subsidized fertility treatments, comprehensive
        prenatal and postnatal care, and improved access to pediatric services.
        Strengthening medical support systems is seen as a crucial step in
        reducing barriers to parenthood and addressing the nation's demographic
        challenges.
      </Paragraph>
    </div>
  );
};
