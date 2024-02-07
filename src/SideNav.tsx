import { FormOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { SideNavMenuItem } from './SideNavMenuItem';

const { Sider } = Layout;


interface SideNavItem {
    label: string, 
    url: string, 
}

interface SideNavProps {
    items: SideNavItem[]
}


const SideNav = ({items} : SideNavProps) => {

    const menuItems = items.map((item, index) => ({
        ...item,
        key: String(index + 1), 
        label: <SideNavMenuItem label={item.label} />
    })); 

    return (
        <Sider
            theme='light'
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ display: 'flex', margin: '12px 12px '}}>
                <Button type='text' style={{ fontSize: '16px',margin: '0 12px',  width: '100%' }}>
                    <span>🦔 New Chat</span>
                    <FormOutlined/>
                </Button>
            </div>
            <hr style={{ margin: '12px 22px', border: '1px solid #cecece'}}/>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
        </Sider>
    )
}

export { SideNav }