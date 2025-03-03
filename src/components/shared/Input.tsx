import style from "@/styles/components/input.module.scss";


type Props = {
  id: string;
  type: "text" | "email";
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  value: string;
};

export const Input = ({
  type = "text",
  required = false,
  className = "",
  name,
  placeholder,
  onChange,
  error,
  value
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt}`}
        name={name}
        onChange={onChange}
        value={value}
      />
      {/* <span className={`${style.inputBorder} ${style.inputBorderAlt}`}></span> */}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
