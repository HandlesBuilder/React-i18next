> react-i18next with Locales

- 安装插件

```
npm install i18next react-i18next i18next-xhr-backend i18next-browser-languagedetector --save
```

- 在 public 目录下新建 locales 文件夹，继续新建对应语言的文件夹 (例如：en，zh)，然后创建 translation.json。

例：public/locales/en/translation.json：

```
{
  "Welcome to React": "Welcome to React and react-i18next"
}
```

- 使用示例：

```
import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// append app to dom
ReactDOM.render(<App />, document.getElementById('root'));
```
