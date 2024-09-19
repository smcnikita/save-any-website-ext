type Message = {
    action: 'changeIcon';
    iconPath: string;
};
type Sender = browser.runtime.MessageSender;
type SendResponse = (response: { status: string }) => void;

browser.runtime.onMessage.addListener(cb);

function cb(message: Message, sender: Sender, sendResponse: SendResponse) {
    if (message.action === 'changeIcon') {
        browser.action.setIcon({
            path: message.iconPath,
            tabId: sender?.tab?.id,
        });
        sendResponse({ status: 'Icon updated' });
    }
    return true;
}
