import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'stores';

import { getElementsByDataAttr, setElementsListStyleProperty } from 'utils/helpers-DOM';

import styles from './styles.module.scss';

const ToggleTheme: React.FC = observer(() => {
  const { themeStore } = useStore();
  const { theme } = themeStore;

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    themeFromLS && themeStore.changeTheme(themeFromLS);

    if (themeFromLS === 'light') {
      const toggleThumbs: HTMLElement[] = getElementsByDataAttr('data-thumb="thumb"');
      const lightTextElements = getElementsByDataAttr('data-light="light"');

      setElementsListStyleProperty(toggleThumbs, 'right', '115px');
      setElementsListStyleProperty(lightTextElements, 'color', '#f1f1f1');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  const onToggleTheme = () => {
    const toggleThumbs: HTMLElement[] = getElementsByDataAttr('data-thumb="thumb"');
    const lightTextElements = getElementsByDataAttr('data-light="light"');
    const darkTextElements = getElementsByDataAttr('data-dark="dark"');

    document.body.classList.toggle('dark');

    setElementsListStyleProperty(lightTextElements, 'color', '#f1f1f1');
    setElementsListStyleProperty(darkTextElements, 'color', '#000000');

    if (theme === 'light') {
      themeStore.changeTheme('dark');
      localStorage.setItem('theme', 'dark');

      setElementsListStyleProperty(toggleThumbs, 'right', '0');
    } else if (theme === 'dark') {
      themeStore.changeTheme('light');
      localStorage.setItem('theme', 'light');

      setElementsListStyleProperty(toggleThumbs, 'right', '115px');
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
