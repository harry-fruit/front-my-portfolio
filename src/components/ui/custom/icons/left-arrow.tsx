type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const LeftArrow: React.FC<Props> = ({
  color,
  width,
  height,
  className,
  onClick
}: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "16"}
      height={height || "16"}
      fill="currentColor"
      className={`bi bi-arrow-left ${className}`}
      viewBox="0 0 16 16"
      color={color || "#000"}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
      />
    </svg>
  );
};
