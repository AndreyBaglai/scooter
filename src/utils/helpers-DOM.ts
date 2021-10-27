export const getElementsByDataAttr = (dataAttr: string): HTMLElement[] =>
  Array.from(document.querySelectorAll(`span[${dataAttr}]`));

export const setElementsListStyleProperty = (
  list: HTMLElement[],
  property: 'right' | 'color',
  value: string,
) => {
  list.forEach((item) => (item.style[property] = value));
};
