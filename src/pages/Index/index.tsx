import { Component } from "solid-js";
import { Link } from "@solidjs/router";
import * as S from "./styles";

const Index: Component = () => {
  return (
    <S.Container>
      Hello Skins Lab / Index!
      <Link href={"/lab"}>To lab</Link>
    </S.Container>
  );
};

export default Index;
