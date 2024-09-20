import { ClearOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';

type Props = {
    onClick: () => void;
};

const Actions = ({ onClick }: Props) => {
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#EF5A6F',
                    },
                }}
            >
                <Button htmlType="button" onClick={onClick} icon={<ClearOutlined />}>
                    {browser.i18n.getMessage('clear_storage')}
                </Button>
            </ConfigProvider>
        </div>
    );
};

export default Actions;
