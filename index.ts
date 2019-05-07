// Import stylesheets
import './style.css';

// Write TypeScript code!

// Font used font family: Firicico
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>WorksPACE settings</h1>`;

const json = {
    "terminal.integrated.shell.osx": "/bin/bash",
    "references.preferredLocation": "view",
    "editor.minimap.enabled": false,
    "editor.tokenColorCustomizations": {
      "textMateRules": [
        {
          "scope": [
            //following will be in italics (=Pacifico)
           // "entity.name.type.class", //class names
            "keyword", //import, export, return…
            //"support.class.builtin.js", //String, Number, Boolean…, this, super
            "storage.modifier", //static keyword
            "storage.type.class.js", //class keyword
            "storage.type.function.js", // function keyword
            "storage.type.js", // Variable declarations
            "keyword.control.import.js", // Imports
            "keyword.control.from.js", // From-Keyword
            //"entity.name.type.js", // new … Expression
            "keyword.control.flow.js", // await
            "keyword.control.conditional.js", // if
            "keyword.control.loop.js", // for
            "keyword.operator.new.js", // new,

            //"entity.name.type",
            //"entity.other.attribute-name",
            //"entity.other.inherited-class",
            //"entity.type.namespace,
            "punctuation.definition.tag",
            "storage.type",
            "storage.type.cs",   
            "support.constant.math",
     
          ],
          "settings": {
            "fontStyle": "bold",
             "foreground": "#666666"
          }
        },
        {
          "scope": [
            //following will be excluded from italics (My theme (Monokai dark) has some defaults I don't want to be in italics)
            "invalid",
            "keyword.operator",
            "constant.numeric.css",
            "keyword.other.unit.px.css",
            "constant.numeric.decimal.js",
            "constant.numeric.json",
            "entity.name.type.class.js"
          ],
          "settings": {
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "comment",
            "comment variable",
            "comment support.variable", 
            "comment support.class",
            "comment support.type",
            "comment entity.name.type",
            "comment entity.name.class",
            "comment keyword.operator"
          ],
          "settings": {
            "fontStyle": "italic",
            "foreground": "#666666"
          }
        },
      ]
  },
    "window.zoomLevel": 0,
    "javascript.referencesCodeLens.enabled": true,
    "typescript.referencesCodeLens.enabled": true,
    "terminal.external.linuxExec": "null",
    "terminal.explorerKind": "internal",
    "liveServer.settings.donotVerifyTags": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "breadcrumbs.enabled": true,
    "todohighlight.isEnable": true,
    "todohighlight.isCaseSensitive": true,
    "todohighlight.keywords": [
        "DEBUG:",
        "REVIEW:",
        {
            "text": "NOTE:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px",
            "backgroundColor": "lightgreen",
            "overviewRulerColor": "grey"
        },
        {
            "text": "HACK:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px",
            "backgroundColor": "pink",
            "isWholeLine": false,
        },
        {
            "text": "BUG:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px", //BUG: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "red",
            "isWholeLine": false,
        },
        {
            "text": "TODO:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px", //NOTE: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "orange",
            "isWholeLine": false,
            //other styling properties goes here ... 
        },
        {
            "text": "DUPLICATE:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px", //NOTE: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "cyan",
            "isWholeLine": false,
            //other styling properties goes here ... 
        },
        {
            "text": "CLEANUP:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px", //NOTE: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "yellow",
            "isWholeLine": false,
            //other styling properties goes here ... 
        },
        {
            "text": "FUTURE_UPDATE:",
            "color": "black",
            "border": "1px dashed black",
            "borderRadius": "1px", //NOTE: using borderRadius along with `border` or you will see nothing change
            "backgroundColor": "white",
            "isWholeLine": false,
            //other styling properties goes here ... 
        }
    ],
    "editor.fontSize": 14,
    "terminal.integrated.fontFamily": "Fira Code",
    "editor.formatOnType": true,
    "editor.fontLigatures": true,
    "editor.fontFamily": "Firicico",
    "workbench.settings.useSplitJSON": true

}