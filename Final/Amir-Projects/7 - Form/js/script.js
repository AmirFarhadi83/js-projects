"use strict";

const htmlTags = [
  "html",
  "head",
  "title",
  "base",
  "link",
  "meta",
  "style",
  "script",
  "noscript",
  "body",
  "section",
  "nav",
  "article",
  "aside",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "footer",
  "address",
  "main",
  "p",
  "hr",
  "pre",
  "blockquote",
  "ol",
  "ul",
  "li",
  "dl",
  "dt",
  "dd",
  "figure",
  "figcaption",
  "div",
  "a",
  "em",
  "strong",
  "small",
  "s",
  "cite",
  "q",
  "dfn",
  "abbr",
  "ruby",
  "rt",
  "rp",
  "data",
  "time",
  "code",
  "var",
  "samp",
  "kbd",
  "sub",
  "sup",
  "i",
  "b",
  "u",
  "mark",
  "bdi",
  "bdo",
  "span",
  "br",
  "wbr",
  "ins",
  "del",
  "picture",
  "source",
  "img",
  "iframe",
  "embed",
  "object",
  "param",
  "video",
  "audio",
  "track",
  "map",
  "area",
  "table",
  "caption",
  "colgroup",
  "col",
  "tbody",
  "thead",
  "tfoot",
  "tr",
  "td",
  "th",
  "form",
  "fieldset",
  "legend",
  "label",
  "input",
  "button",
  "select",
  "datalist",
  "optgroup",
  "option",
  "textarea",
  "output",
  "progress",
  "meter",
  "details",
  "summary",
  "dialog",
  "script",
  "noscript",
  "template",
  "slot",
  "canvas",
  "noscript",
  "applet",
  "bgsound",
  "blink",
  "isindex",
  "keygen",
  "multicol",
  "nextid",
  "rb",
  "spacer",
  "strike",
  "listing",
  "xmp",
  "nextid",
  "acronym",
  "basefont",
  "big",
  "center",
  "font",
  "marquee",
  "nobr",
  "noembed",
  "noframes",
  "plaintext",
  "frame",
  "frameset",
  "nolayer",
  "ilayer",
  "layer",
  "background",
  "bgcolor",
  "text",
  "link",
  "vlink",
  "alink",
  "align",
  "valign",
  "border",
  "cellpadding",
  "cellspacing",
  "height",
  "width",
  "hspace",
  "vspace",
  "nowrap",
  "scrolling",
  "clear",
  "color",
  "face",
  "size",
  "compact",
  "start",
  "type",
  "value",
  "cite",
  "datetime",
  "pubdate",
  "manifest",
  "rel",
  "rev",
  "hreflang",
  "media",
  "target",
  "charset",
  "content",
  "http-equiv",
  "name",
  "scheme",
  "async",
  "defer",
  "language",
  "src",
  "type",
  "integrity",
  "crossorigin",
  "sizes",
  "alt",
  "ismap",
  "usemap",
  "shape",
  "coords",
  "accept",
  "accept-charset",
  "action",
  "enctype",
  "method",
  "novalidate",
  "autocomplete",
  "autofocus",
  "disabled",
  "form",
  "formaction",
  "formenctype",
];

const textInpEl = document.querySelector("#textInp");
const styleInpEl = document.querySelector("#styleInp");
const attrInpEl = document.querySelector("#attrInp");
const classInpEl = document.querySelector("#classInp");
const selectEl = document.querySelector("#tag");
const createBtnEL = document.querySelector("#createBtn");
const divsEl = [...document.querySelectorAll(".item")];
const radioGroup = document.querySelector(".radioBox");

let text,
  styles,
  type,
  attr,
  classes,
  arrayStyles,
  arrayClasses,
  arrayAttr,
  element,
  selectedOption;

let created = false;

function init() {
  textInpEl.value = "";
  styleInpEl.value = "";
  selectEl.value = "";
  classInpEl.value = "";
  attrInpEl.value = "";
  element = "";
  selectedOption = "";
}

function getValues() {
  text = textInpEl.value;
  styles = styleInpEl.value;
  type = selectEl.value;
  classes = classInpEl.value;
  attr = attrInpEl.value;
}

function valuesToArray() {
  arrayStyles = styles
    .split(";")
    .map((e) => e.trim())
    .map((e) => e.split(":"));
  arrayClasses = classes.split(",").map((e) => e.trim());
  arrayAttr = attr.split("=").map((e) => e.trim());
  console.log(arrayStyles);
}

radioGroup.addEventListener("change", (e) => {
  selectedOption = e.target.value;
  console.log(selectedOption);
});

function createHtmlElement() {
  element = document.createElement(type);
  element.textContent = text;
  element.setAttribute(arrayAttr[0], arrayAttr[1]);
  element.setAttribute("style", arrayStyles.map((e) => e.join(":")).join("; "));
  element.classList.add(arrayClasses.join(" "));
  created = true;
}

createBtnEL.addEventListener("click", function () {
  getValues();
  valuesToArray();
  createHtmlElement();
});

divsEl.forEach((div) => {
  div.addEventListener("click", () => {
    if (created) {
      switch (selectedOption) {
        case "append":
          div.append(element);
          break;
        case "prepend":
          div.prepend(element);
          break;
        case "after":
          div.after(element);
          break;
        case "before":
          div.before(element);
          break;
      }
      init();
    }
  });
});

htmlTags.forEach((e) => {
  let option = document.createElement("option");
  option.value = e;
  option.textContent = e;
  selectEl.append(option);
});
