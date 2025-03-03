
import style from "@/styles/components/input.module.scss";


type Props = {
id: string;
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  value: string
};

export const TextArea = ({
  required = false,
  className = "",
  name,
  placeholder,
  error,
  onChange
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <textarea
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt} text-slate-800 dark:text-slate-50`}
        name={name}
        onChange={onChange}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
