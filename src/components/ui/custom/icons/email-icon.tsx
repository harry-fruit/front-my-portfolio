type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const EmailIcon = ({
  color,
  width,
  height,
  className,
  onClick,
}: Props) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      color={color || "#000"}
      onClick={onClick}
      width={width || "16"}
      height={height || "16"}
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
      />
    </svg>
  );
};
