import { DeleteOutlined, EditOutlined, EllipsisOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";

interface SideNavMenuItemProps {
    label: string, 
}

const SideNavMenuItem = ({label} : SideNavMenuItemProps) => {
    const [isHover, setHover] = useState(false); 
    const handleMouseOver = () => {
        setHover(true);
    }
    const handleMouseOut = () => {
        setHover(false);
    }
    
    const dropdownItems : MenuProps["items"] = [
        {
            key: '1', 
            label: 'Share',
            icon: <ShareAltOutlined/>,
        },
        {
            key: '2', 
            label: 'Rename',
            icon: <EditOutlined/>,
        },
        {
            key: '3', 
            label: 'Delete chat',
            danger: true,
            icon: <DeleteOutlined/>,
        },
    ]
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div>
                {label}
            </div>
            <div style={{display: isHover ? 'block' : 'none' }} onClick={(e) => e.stopPropagation()}>
                <Dropdown menu={{ items: dropdownItems }} trigger={['click']}>
                    <EllipsisOutlined style={{fontSize: '18px'}} />
                </Dropdown>
            </div>
        </div>
    )
}

export { SideNavMenuItem }; 