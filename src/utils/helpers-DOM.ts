export const getElementsByDataAttr = (dataAttr: string): HTMLElement[] =>
  Array.from(document.querySelectorAll(`span[${dataAttr}]`));

export const setElementsListStyleProperty = (
  list: HTMLElement[],
  property: string,
  value: string,
) => {
  list.forEach((item) => {
    for (let CSSProp in item.style) {
      if (property === CSSProp) item.style[CSSProp] = value;
    }
  });
}
