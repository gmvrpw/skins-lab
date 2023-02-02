import { ParentComponent, splitProps } from "solid-js";
import * as S from "./styles";

export type IconProps = {
  size: number;
};

export type IconComponent = ParentComponent<IconProps>;

const Icon: IconComponent = (props) => {
  const [local, others] = splitProps(props, ["size", "children"]);
  return (
    <S.Icon {...others}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={local.size}
        height={local.size}
        viewBox={"0 0 24 24"}
      >
        {local.children}
      </svg>
    </S.Icon>
  );
};

export const ExpandRightIcon: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="m8 14.708-.771-.77L11.167 10 7.229 6.062 8 5.292 12.708 10Z" />
    </Icon>
  );
};

export const CheckedIcon: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.575 17.225 4.7 12.35l.675-.65 4.2 4.2 9.075-9.075.65.65Z" />
    </Icon>
  );
};

export const AddIcon: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="M11.55 18.375V12.45H5.625v-.925h5.925V5.6h.925v5.925H18.4v.925h-5.925v5.925Z" />
    </Icon>
  );
};
