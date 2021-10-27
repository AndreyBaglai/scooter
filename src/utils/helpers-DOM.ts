import { CSSDeclarations } from "types/styles";

export const getElementsByDataAttr = (dataAttr: string): HTMLElement[] =>
  Array.from(document.querySelectorAll(`span[${dataAttr}]`));

export const setElementsListStyleProperty = (
  list: HTMLElement[],
  property: CSSDeclarations,
  value: string,
) => {
  list.forEach((item) => (item.style[property] = value));
};
