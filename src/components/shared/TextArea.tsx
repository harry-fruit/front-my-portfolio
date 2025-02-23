
import style from "@/styles/components/input.module.scss";


type Props = {
id: string;
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
};

export const TextArea = ({
  required = false,
  className = "",
  name,
  placeholder,
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <textarea
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt} text-slate-800 dark:text-slate-50`}
        name={name}
        
      />
      <span className={`${style.inputBorder} ${style.inputBorderAlt}`}></span>
    </div>
  );
};
