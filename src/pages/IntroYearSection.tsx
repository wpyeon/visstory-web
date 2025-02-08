export interface IntroYearSectionProps {
  title: string;
  children?: React.ReactNode;
}

export function IntroYearSection({ title, children }: IntroYearSectionProps) {
  return (
    <div className="h-[100vh] w-full space-y-8">
      <div className="sticky top-[38vh]">
        <h1 className="text-7xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}
