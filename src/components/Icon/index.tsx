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
        viewBox={"0 0 20 20"}
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
      <path d="m8.229 13.771-3.208-3.229.729-.75 2.479 2.458 6.021-6 .729.771Z" />
    </Icon>
  );
};
