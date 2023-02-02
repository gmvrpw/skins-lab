import {
  Component,
  ComponentProps,
  JSX,
  ParentComponent,
  Show,
  splitProps,
} from "solid-js";
import * as S from "./styles";

export type ButtonWrapperProps = ComponentProps<"div">;
const ButtonWrapper: ParentComponent<ButtonWrapperProps> = (props) => {
  const [local, others] = splitProps(props, ["children"]);
  return (
    <S.Button {...others} tabIndex={0}>
      {local.children}
    </S.Button>
  );
};

export type ButtonProps = {
  icon?: JSX.Element;
  text?: string;
} & ButtonWrapperProps;
export const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["icon", "text"]);
  return (
    <ButtonWrapper {...others}>
      {local.icon}
      <Show keyed={true} when={local.text !== undefined}>
        <S.Text>{local.text}</S.Text>
      </Show>
    </ButtonWrapper>
  );
};
