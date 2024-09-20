import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Actions = () => {
    return (
        <div className="flex items-center gap-3">
            <Button htmlType="button" onClick={() => browser.runtime.openOptionsPage()} icon={<SettingOutlined />}>
                {browser.i18n.getMessage('settings_page')}
            </Button>
        </div>
    );
};

export default Actions;
