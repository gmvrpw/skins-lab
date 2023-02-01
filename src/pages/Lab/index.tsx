import { Component } from "solid-js";
import { Link } from "@solidjs/router";
import * as S from "./styles";

const Lab: Component = () => {
  return (
    <S.Container>
      Hello Skins Lab / Lab!
      <Link href={"/"}>To index</Link>
    </S.Container>
  );
};

export default Lab;
