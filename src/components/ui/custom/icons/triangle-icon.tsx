type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const TriangleIcon = ({
  color,
  width,
  height,
  className,
  onClick,
}: Props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      color={color || "#000"}
      onClick={onClick}
      width={width || "16"}
      height={height || "16"}
      className={className}
      viewBox="0 0 490 490"
      xmlSpace="preserve"
    >
      <polygon points="245,456.701 490,33.299 0,33.299 " />
    </svg>
  );
};
