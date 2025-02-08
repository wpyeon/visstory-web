export const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-bold pb-6">{children}</div>;
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-lg pb-6">{children}</div>;
};
