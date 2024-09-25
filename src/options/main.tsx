import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';

import App from './App.tsx';

import './style.css';

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
