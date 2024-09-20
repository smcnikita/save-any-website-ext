import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { THEME } from '@const/index.ts';
import { ConfigProvider, theme } from 'antd';

import './style.css';

browser.storage.local.get(THEME.STORAGE_KEY).then((res) => {
    if (
        res.theme === THEME.DARK_THEME ||
        (!('theme' in res) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add(THEME.DARK_THEME);
    } else {
        document.documentElement.classList.remove(THEME.DARK_THEME);
    }
});

const windowQuery = window.matchMedia('(prefers-color-scheme:dark)');

createRoot(document.getElementById('options-root')!).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                algorithm: windowQuery.matches ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <App />
        </ConfigProvider>
    </StrictMode>
);
