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
const createBtnEl = document.querySelector("#createBtn");
const divsEl = [...document.querySelectorAll(".item")];
const radioGroup = document.querySelector(".radioBox");

let text = "",
  styles = "",
  type = "",
  attr = "",
  classes = "";
let arrayStyles = [],
  arrayClasses = [],
  arrayAttr = [];
let element = null,
  selectedOption = "",
  created = false;

function init() {
  // Reset input fields and flags
  textInpEl.value = "";
  styleInpEl.value = "";
  attrInpEl.value = "";
  classInpEl.value = "";
  selectEl.value = "";
  element = null;
  selectedOption = "";
  created = false;
}

function getValues() {
  // Extract values from input fields
  text = textInpEl.value.trim();
  styles = styleInpEl.value.trim();
  type = selectEl.value.trim();
  classes = classInpEl.value.trim();
  attr = attrInpEl.value.trim();
}

function valuesToArray() {
  // Parse styles, classes, and attributes
  arrayStyles = styles
    ? styles.split(";").map((e) =>
        e
          .trim()
          .split(":")
          .map((s) => s.trim())
      )
    : [];
  arrayClasses = classes ? classes.split(",").map((e) => e.trim()) : [];
  arrayAttr = attr ? attr.split("=").map((e) => e.trim()) : [];
}

radioGroup.addEventListener("change", (e) => {
  selectedOption = e.target.value;
});

function createHtmlElement() {
  // Ensure a valid tag is selected
  if (!type) {
    alert("Please select a valid HTML tag.");
    return;
  }

  element = document.createElement(type);
  element.textContent = text;

  // Set attributes
  if (arrayAttr.length === 2) {
    element.setAttribute(arrayAttr[0], arrayAttr[1]);
  }

  // Set styles
  if (arrayStyles.length > 0) {
    const styleString = arrayStyles
      .map(([key, value]) => `${key}:${value}`)
      .join("; ");
    element.setAttribute("style", styleString);
  }

  // Set classes
  if (arrayClasses.length > 0) {
    element.classList.add(...arrayClasses);
  }

  created = true;
}

createBtnEl.addEventListener("click", () => {
  getValues();
  valuesToArray();
  createHtmlElement();
});

divsEl.forEach((div) => {
  div.addEventListener("click", () => {
    if (created && element) {
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
        default:
          alert("Please select an action (append, prepend, after, before).");
      }
      init();
    } else {
      alert("Please create an element first.");
    }
  });
});

htmlTags.forEach((tag) => {
  const option = document.createElement("option");
  option.value = tag;
  option.textContent = tag;
  selectEl.append(option);
});
