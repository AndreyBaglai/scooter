import { CSSProperties } from 'react';

import { CSSDeclarations } from "types/css-declarations";

export const getElementsByDataAttr = (dataAttr: string): HTMLElement[] =>
  Array.from(document.querySelectorAll(`span[${dataAttr}]`));

export const setElementsListStyleProperty = (
  list: HTMLElement[],
  property: CSSDeclarations,
  value: string,
) => {
  list.forEach((item) => (item.style[property] = value));
};
