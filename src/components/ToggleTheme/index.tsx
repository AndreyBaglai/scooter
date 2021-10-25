import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'stores';

import styles from './styles.module.scss';
import cn from 'classnames';

const getElementsByDataAttr = (dataAttr: string): HTMLElement[] =>
  Array.from(document.querySelectorAll(`span[${dataAttr}]`));

const ToggleTheme: React.FC = observer(() => {
  const { themeStore } = useStore();
  const { theme } = themeStore;

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    // themeFromLS && themeStore.changeTheme(themeFromLS);

    // if (themeFromLS === 'dark') {
    //   document.body.classList.add('dark');

    //   // const toggleThumbs: HTMLElement[] = getToggleThumbs();
    //   // toggleThumbs.forEach((thumb: HTMLElement) => (thumb.style.left = '8px'));
    // }
  }, [theme]);

  const onToggleTheme = () => {
    const toggleThumbs: HTMLElement[] = getElementsByDataAttr('data-thumb="thumb"');
    const lightTextElements = getElementsByDataAttr('data-light="light"');
    const darkTextElements = getElementsByDataAttr('data-dark="dark"');

    document.body.classList.toggle('dark');

    if (theme === 'light') {
      themeStore.changeTheme('dark');
      localStorage.setItem('theme', 'dark');
      toggleThumbs.forEach((thumb: HTMLElement) => (thumb.style.right = '0'));

      lightTextElements.forEach((el: HTMLElement) => (el.style.color = '#f1f1f1'));
      darkTextElements.forEach((el: HTMLElement) => (el.style.color = '#000'));
    } else {
      themeStore.changeTheme('light');
      localStorage.setItem('theme', 'light');
      toggleThumbs.forEach((thumb: HTMLElement) => (thumb.style.right = '115px'));

      lightTextElements.forEach((el: HTMLElement) => (el.style.color = '#000'));
      darkTextElements.forEach((el: HTMLElement) => (el.style.color = '#f1f1f1'));
    }
  };

  return (
    <div className={styles.toggle} onClick={onToggleTheme}>
      <span className={styles.thumb} data-thumb="thumb"></span>
      <span className={styles.light} data-light="light">
        Белый
      </span>
      <span className={styles.dark} data-dark="dark">
        Черный
      </span>
    </div>
  );
});

export default ToggleTheme;
