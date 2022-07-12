import React from "react";
import { PortableText } from "@portabletext/react";
import ParagraphText from "./ParagraphText";
const myPortableTextComponent ={
    block :{
        normal:({children}) => <ParagraphText>
            {children}
        </ParagraphText>
    }
}
function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponent} />;
}

export default MyPortableText;
