import { Component, JSX } from "solid-js";
import style from "./style.module.css";

interface ContainerProps {
  children: JSX.Element;
}

export const Container: Component<ContainerProps> = (props) => {
  return <div class={style.container}>{props.children}</div>;
};
