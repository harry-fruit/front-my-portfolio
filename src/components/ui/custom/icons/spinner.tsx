type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const SpinnerIcon = ({
  color,
  width,
  height,
  className,
  onClick,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      color={color || "#000"}
      onClick={onClick}
      width={width || "16"}
      height={height || "16"}
      className={`bi bi-arrow-counterclockwise ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
      />
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
    </svg>
  );
};
