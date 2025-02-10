import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ProgressChart } from "@/components/ProgressChart";
import { IntroYearSection } from "@/pages/IntroYearSection";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Banner({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <p className="text-7xl font-bold">{title}</p>
    </div>
  );
}

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
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="1970's - Era of Industrialization" />
            <p className="text-xl pb-2">
              The 1970s marked a transformative period for South Korea as the
              government prioritized heavy and chemical industries, investing
              heavily in sectors like steel, shipbuilding, and petrochemicals.
              This shift laid the groundwork for the nation’s export-driven
              economy, while rapid urbanization drew people from rural areas to
              cities in search of better jobs, reshaping family structures and
              lifestyles. Culturally, traditional Confucian values began to
              blend with modern industrial norms, creating a dynamic social
              landscape. During this industrialization phase, South Korea’s
              Total Fertility Rate (TFR) was high (around 4.53 in 1970) but
              started to decline as the government promoted family planning to
              control population growth and support economic development.
              Policies like the “Small Family, Rich Family” campaign encouraged
              couples to have fewer children, reflecting the reduced economic
              need for large families as agricultural work gave way to urban
              factory jobs.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="1980's - Era of Democratization" />
            <p className="text-xl pb-2">
              In 1996, South Korea joined the Organization for Economic
              Co-operation and Development (OECD), marking its integration into
              the global economy. However, the late 1990s brought the Asian
              Financial Crisis, which forced significant economic restructuring
              and led to widespread unemployment and social challenges. During
              this period, societal attitudes began to shift, with greater
              acceptance of diverse lifestyles and a growing emphasis on career
              advancement over traditional family roles. Culturally, the Korean
              Wave (Hallyu) emerged, as Korean pop culture, including music and
              television dramas, gained international popularity. The Total
              Fertility Rate (TFR) continued to decline during this decade,
              heavily influenced by the financial insecurity following the 1997
              crisis. Many young couples postponed or reduced the number of
              children due to economic uncertainty and job instability. The
              pressures of globalization further reinforced a focus on
              competitiveness and career development, making it increasingly
              difficult for individuals to balance work and family life.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="1990's - Era of Globalization" />
            <p className="text-xl pb-2">
              In 1996, South Korea joined the Organization for Economic
              Co-operation and Development (OECD), marking its integration into
              the global economy. However, the late 1990s brought the Asian
              Financial Crisis, which forced significant economic restructuring
              and led to widespread unemployment and social challenges. During
              this period, societal attitudes began to shift, with greater
              acceptance of diverse lifestyles and a growing emphasis on career
              advancement over traditional family roles. Culturally, the Korean
              Wave (Hallyu) emerged, as Korean pop culture, including music and
              television dramas, gained international popularity. The Total
              Fertility Rate (TFR) continued to decline during this decade,
              heavily influenced by the financial insecurity following the 1997
              crisis. Many young couples postponed or reduced the number of
              children due to economic uncertainty and job instability. The
              pressures of globalization further reinforced a focus on
              competitiveness and career development, making it increasingly
              difficult for individuals to balance work and family life.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="2000's - Era of Technological Advancement" />
            <p className="text-xl pb-2">
              In the 2000s, South Korea solidified its position as a global
              technology leader, with companies like Samsung and LG dominating
              the electronics and telecommunications industries. The rise of the
              internet and mobile technology transformed daily life, making
              social media platforms essential for communication and fostering a
              growing emphasis on education and innovation. Culturally, South
              Korea gained international acclaim through K-pop and cinema, with
              films like Oldboy and bands like BTS captivating global audiences.
              During this period, the Total Fertility Rate (TFR) fell below 1.3,
              entering the realm of “ultra-low fertility.” High living costs,
              long working hours, and increasing career demands contributed
              significantly to this decline. The rise of dual-income families
              made balancing work and family life more challenging, while
              expensive childcare, education pressures, and soaring housing
              costs further discouraged couples from having larger families.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="2010's - Era of Cultural Proliferation" />
            <p className="text-xl pb-2">
              In the 2010s, South Korea’s economy saw the expansion of the
              service sector and a growing focus on creative industries, though
              challenges like youth unemployment and housing affordability
              became more pronounced. Socially, discussions around gender
              equality, mental health, and work-life balance gained prominence,
              with movements like #MeToo sparking significant societal
              introspection. Culturally, South Korea’s global influence
              continued to rise, with films like Parasite winning international
              awards and K-pop maintaining its massive global fanbase. During
              this decade, the Total Fertility Rate (TFR) declined further,
              reaching around 0.98 by the end of the 2010s. Shifting social
              norms, such as changing gender roles and the rise of
              individualism, played a key role in this trend. Young people
              increasingly pushed back against traditional expectations around
              marriage and family, advocating for gender equality, better
              work-life balance, and reduced parental pressure. High youth
              unemployment and economic instability further discouraged many
              from starting families, exacerbating the ultra-low fertility rate.
            </p>
          </div>
        </IntroYearSection>
        <IntroYearSection>
          <div className="mx-20 mb-4">
            <Banner title="2020's - Era of Demographic Challenges" />
            <p className="text-xl pb-2">
              In the 2020s, South Korea faces significant economic challenges
              due to an aging population and a sharply declining birth rate,
              with the Total Fertility Rate (TFR) hitting a historic low of 0.72
              in 2023, the lowest in the world. This demographic crisis has
              prompted urgent discussions on immigration, family policies, and
              societal support systems to address labor shortages and ensure
              sustainable economic growth. Culturally, there is a growing
              movement among young people prioritizing personal freedom and
              career over traditional family structures, exemplified by the 4B
              movement, which rejects dating, marriage, sex, and childbirth. The
              decline in TFR is driven by high living costs, low marriage rates,
              and shifting societal attitudes toward family life. Movements like
              4B highlight the desire for greater personal autonomy and economic
              stability, making traditional family roles less appealing. Despite
              the government’s introduction of various pro-natalist policies,
              such as financial incentives and childcare support, these efforts
              have so far had limited success in reversing the trend.
            </p>
          </div>
        </IntroYearSection>
      </div>
    </div>
  );
}
