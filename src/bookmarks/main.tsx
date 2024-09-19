import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { THEME } from '@const/index.ts';

import './style/reset.css';
import './style/style.css';

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

createRoot(document.getElementById('bookmarks-root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
