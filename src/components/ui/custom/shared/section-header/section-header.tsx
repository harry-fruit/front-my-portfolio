type DefaultProps = {
  className?: string;
};

type SectionHeaderContainerProps = {
  children?: React.ReactNode;
} & DefaultProps;

type SectionTextProps = {
  text: string;
} & DefaultProps;

export const SectionHeaderContainer: React.FC<SectionHeaderContainerProps> = ({
  children = "",
  className,
}: SectionHeaderContainerProps): JSX.Element => {
  return (
    <div
      className={`text-center my-8 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<SectionTextProps> = ({
  text,
  className = "",
}: SectionTextProps): JSX.Element => {
  return <h1 className={`mb-1 ${className}`}>{text}</h1>;
};

export const SectionSubtitle: React.FC<SectionTextProps> = ({
  text,
  className = "",
}: SectionTextProps): JSX.Element => {
  return <h2 className={`m-[0 auto] ${className}`}>{text}</h2>;
};
