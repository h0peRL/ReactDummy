import React from "react";

interface TextMitTitel {
  titel?: string;
  text?: string;
}

function TextMitTitel(prop: TextMitTitel) {
  let loremIpsum: string =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  let shownTitel: string;
  let shownText: string;

  if (prop.titel == null) {
    shownTitel = "Lorem Ipsum";
  } else {
    shownTitel = prop.titel;
  }

  if (prop.text == null) {
    shownText = loremIpsum;
  } else {
    shownText = prop.text;
  }

  return (
    <div className="w-fit">
      <h1 className="text-3xl mb-3">{shownTitel}</h1>
      <p className="text-lg text-justify">{shownText}</p>
    </div>
  );
}

export default TextMitTitel;
