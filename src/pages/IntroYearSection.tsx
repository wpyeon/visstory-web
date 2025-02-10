export interface IntroYearSectionProps {
  children?: React.ReactNode;
}

export function IntroYearSection({ children }: IntroYearSectionProps) {
  return (
    <div className="h-[100vh] w-full space-y-8">
      <div className="sticky top-[38vh]">{children}</div>
    </div>
  );
}
