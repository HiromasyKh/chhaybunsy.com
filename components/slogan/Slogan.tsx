type SloganProps = {
  children: string;
};

const Slogan = ({ children }: SloganProps) => {
  return (
    <div className="max-w-3xl w-full mx-auto flex justify-center items-center p-8">
      <blockquote className="relative p-4 text-xl">
        <div className="text-6xl absolute right-full top-0 mr-2">&ldquo;</div>
        <p className="text-lg sm:text-3xl text-center font-bold">{children}</p>
        <div className="text-6xl absolute left-full bottom-0 ml-2 rotate-180">
          &ldquo;
        </div>
      </blockquote>
    </div>
  );
};

export default Slogan;
