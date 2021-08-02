import React, { useRef } from "react";
import Editor from "jodit-react";
import Grid from "../component/Grid";
import "./CreateArticle.css";
import { createArticle } from "../API";

const ArticleEditor = ({ initial }) => {
  let newArticle = useRef(
    initial
      ? initial
      : {
          title: "",
          content: "",
          desc: "",
          tags: [],
          categories: [],
        }
  ).current;

  const onChangeTag = (tags) => (newArticle.tags = tags);
  const onChangeCategory = (categories) => (newArticle.categories = categories);
  const onChangeContent = (content) => (newArticle.content = content);
  const onChangeDesc = (event) => (newArticle.desc = event.target.value);
  const onChangeTitle = (event) => (newArticle.title = event.target.value);
  const onSaveClick = () => {
    if (!newArticle.title || !newArticle.content) {
      return alert("Title or Content is empty!");
    }
    return createArticle(newArticle);
  };
  return (
    <Grid container className={"create_article_root"}>
      <Grid xl={9}>
        <input placeholder="Title" onChange={onChangeTitle} />
        <input placeholder="desc" onChange={onChangeDesc} />
        <Editor
          value={newArticle.content}
          config={config}
          tabIndex={1}
          onBlur={onChangeContent}
          onChange={onChangeContent}
        />
      </Grid>
      <Grid xl={3}>
        <button className={"create_article_save_button"} onClick={onSaveClick}>
          Save
        </button>
      </Grid>
    </Grid>
  );
};

export default ArticleEditor;

const config = {
  zIndex: 0,
  readonly: false,
  activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
  toolbarButtonSize: "middle",
  theme: "default",
  enableDragAndDropFileToEditor: true,
  saveModeInCookie: false,
  spellcheck: true,
  editorCssClass: false,
  triggerChangeEvent: true,
  height: 500,
  direction: "ltr",
  language: "en",
  debugLanguage: false,
  i18n: "en",
  tabIndex: -1,
  toolbar: true,
  enter: "P",
  useSplitMode: false,
  colorPickerDefaultTab: "background",
  imageDefaultWidth: 100,
  disablePlugins: ["paste", "stat"],
  events: {},
  textIcons: false,
  uploader: {
    insertImageAsBase64URI: true,
    imagesExtensions: ["jpg", "png", "jpeg", "gif"],
    filesVariableName: function (t) {
      return "files[" + t + "]";
    },
    withCredentials: false,
    pathVariableName: "path",
    format: "json",
    method: "POST",
  },
  placeholder: "Writing...",
  showXPathInStatusbar: false,
};
