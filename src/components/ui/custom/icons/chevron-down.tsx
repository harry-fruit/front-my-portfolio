type Props = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const ChevronDown = ({
  color,
  width,
  height,
  className,
  onClick,
}: Props) => {
  return (
    <svg
      version="1.1"
      id="Camada_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      color={color || "#000"}
      onClick={onClick}
      width={width || "16"}
      height={height || "16"}
      className={className}
      fill="currentColor"
    >
      <style type="text/css"></style>
      <path
        className="st0"
        d="M1.6,4.6c0.2-0.2,0.5-0.2,0.7,0c0,0,0,0,0,0L8,10.3l5.6-5.6c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-6,6
	c-0.2,0.2-0.5,0.2-0.7,0c0,0,0,0,0,0l-6-6C1.5,5.2,1.5,4.8,1.6,4.6C1.6,4.6,1.6,4.6,1.6,4.6"
      />
    </svg>
  );
};
