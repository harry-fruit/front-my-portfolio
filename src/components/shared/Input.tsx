import style from "@/styles/components/input.module.scss";


type Props = {
  id: string;
  type: "text" | "email";
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
};

export const Input = ({
  type = "text",
  required = false,
  className = "",
  name,
  placeholder,
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt}`}
        name={name}
      />
      <span className={`${style.inputBorder} ${style.inputBorderAlt}`}></span>
    </div>
  );
};
