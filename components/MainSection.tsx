type MainSectionProps = {
  children: React.ReactNode;
};

const MainSection = ({ children }: MainSectionProps) => {
  return (
    <main className="max-w-3xl w-full mx-auto py-8 bg-opacity-60 flex-col">
      {children}
    </main>
  );
};

export default MainSection;
