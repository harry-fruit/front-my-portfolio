import Image from "next/image";

type Props = {
    src: string;
    alt: string;
}

export const CardImage = ({
  src,
  alt,
}: Props) => {
  return (
    <div
      id="card-img"
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <Image
        src={src}
        alt={alt}
        className="rounded-xl object-cover h-[250px]"
        width={600}
        height={600}
      />
    </div>
  );
};
