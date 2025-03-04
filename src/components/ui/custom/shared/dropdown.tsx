import style from "@/styles/components/dropdown.module.scss";
import { MouseEvent, useState } from "react";
import { TriangleIcon } from "@/components/ui/custom/icons/triangle-icon";

type Props = {
  onChange: (event: MouseEvent<HTMLLIElement>) => void;
  options: DropdownOptions;
};

type DisplayProps = {
  value: string;
  label: string;
};

export type DropdownOptions = {
  value: string;
  label: string;
  selected: boolean;
  icon: JSX.Element
}[];

const getDefaultValue = (options: DropdownOptions) => {
  const defaultValue = options.find((option) => option.selected);

  if (defaultValue) {
    return {
      value: defaultValue.value,
      label: defaultValue.label,
    };
  }

  return { value: "en", label: "English" };
};

export const Dropdown = ({ options, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<DisplayProps>(
    getDefaultValue(options)
  );

  const handleChange = (event: MouseEvent<HTMLLIElement>) => {
    const { value, label } = event.currentTarget.dataset;

    if (currentOption.value != value) {
      setCurrentOption({ value: value as string, label: label as string });
    }

    if (onChange) { onChange(event); }
    
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.dropdown} data-open={isOpen}>
      <p className={style.display} onClick={toggle}>
        {" "}
        {currentOption.label} <TriangleIcon width="10" height="10" />
      </p>
      <ul className={`${style.dropdownWrapper}`}>
        {options.map((option) => (
          <li
            key={option.value}
            data-selected={option.selected}
            data-value={option.value}
            data-label={option.label}
            onClick={handleChange}
            className={style.dropdownItem}
          >
            {option.label}
            {option.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
