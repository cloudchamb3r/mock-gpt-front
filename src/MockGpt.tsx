import { Layout } from 'antd';
import { SideNav } from './SideNav';
import { ChatView } from './ChatView';




const MockGpt = () => {
    return (
        <Layout style={{width: '100%', height: '100%'}}>
            <SideNav items={[
                {
                    label: '채팅방 1',
                    url: '/chat/1'
                },
                {
                    label: '채팅방 2',
                    url: '/chat/2'
                },
                {
                    label: '채팅방 3',
                    url: '/chat/3'
                },
                {
                    label: '채팅방 4',
                    url: '/chat/4'
                },
                {
                    label: '채팅방 5',
                    url: '/chat/5'
                },
                {
                    label: '채팅방 6',
                    url: '/chat/6'
                },
            ]}/>
            <Layout>
                <ChatView messages={[
                    {
                        author: 'Me', 
                        content: "1+1은 뭐야?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    }, 
                    {
                        author: 'Me', 
                        content: "1+2은 뭐야?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    }, 
                    {
                        author: 'Me', 
                        content: "넌 대체 뭘 할 수 있어?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    },
                    {
                        author: 'Me', 
                        content: "넌 대체 뭘 할 수 있어?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    },
                    {
                        author: 'Me', 
                        content: "넌 대체 뭘 할 수 있어?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    },
                    {
                        author: 'Me', 
                        content: "넌 대체 뭘 할 수 있어?"
                    },
                    {
                        author: 'Gpt', 
                        content: '모르겠어요'
                    },
                ]}/>
            </Layout>
        </Layout>
    );
}

export { MockGpt }; 