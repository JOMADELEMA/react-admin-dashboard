import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Editor = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
      style={{ background: currentMode === "Dark" ? "#33373e" : "#fff" }}
    >
      <Header category={"App"} title="Editor" />

      <RichTextEditorComponent>
        {/* <EditorData /> */}
        <Inject services={[Toolbar, HtmlEditor, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
