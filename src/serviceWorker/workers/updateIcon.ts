import browser from 'webextension-polyfill';

type Message = {
    action: 'changeIcon';
    iconPath: string;
};
type Sender = browser.Runtime.MessageSender;
type SendResponse = (response: { status: string }) => void;

browser.runtime.onMessage.addListener(cb);

function cb(message: unknown, sender: Sender, sendResponse: SendResponse): true {
    if (typeof message === 'object' && message !== null && 'action' in message && 'iconPath' in message) {
        const typedMessage = message as Message;

        if (typedMessage.action === 'changeIcon') {
            browser.action.setIcon({
                path: typedMessage.iconPath,
                tabId: sender?.tab?.id,
            });
            sendResponse({ status: 'Icon updated' });
        }
    }

    return true;
}
