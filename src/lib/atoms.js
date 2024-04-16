import {atom} from "jotai";

// global state for the editors settings.
const editorThemeAtom =atom("terminal")
const editorLanguageAtom=atom("html")
const editorFontAtom=atom("18");

const menuIsOpen=atom(0)
export {
    editorThemeAtom,
    editorLanguageAtom,
    editorFontAtom,
    menuIsOpen
}