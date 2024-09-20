import { CheckCircleOutlined } from '@ant-design/icons';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Message = ({ children }: Props) => {
    return (
        <div className="text-green-700 flex items-center gap-3">
            <CheckCircleOutlined />
            {children}
        </div>
    );
};

export default Message;
