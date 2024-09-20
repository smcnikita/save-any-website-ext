import { Input, Modal } from 'antd';
import { useEffect } from 'react';

type Props = {
    open: boolean;
    newTitle: string;
    oldTitle?: string;
    updateNewTitle: (value: string) => void;
    onOk: () => void;
    onCancel: () => void;
};

const NewNameModal = ({ open, newTitle, oldTitle, onOk, onCancel, updateNewTitle }: Props) => {
    useEffect(() => {
        if (oldTitle) {
            updateNewTitle(oldTitle);
        }
    }, []);

    return (
        <Modal
            title={browser.i18n.getMessage('new_name')}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            cancelText={browser.i18n.getMessage('cancel_modal')}
        >
            <p>
                <Input
                    type="text"
                    name="new_title"
                    id="new_title"
                    value={newTitle}
                    autoComplete="off"
                    placeholder={browser.i18n.getMessage('new_title_placeholder')}
                    onChange={(e) => updateNewTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onOk();
                    }}
                />
            </p>
        </Modal>
    );
};

export default NewNameModal;
