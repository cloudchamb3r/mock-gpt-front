import Search from "antd/es/input/Search";
import { useState } from "react";

const ChatInput = () => {
    const [chat, setChat] = useState<string>('');

    const handleSend = () => {
        console.log( `'${chat}' 을 서버에 보냈습니다`);
        setChat('');
    }; 
    return (
        <Search style={{padding: '0 16px', position:'relative', bottom: 0 , margin: '12px 0px'}}  
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="ChatGPT에게 무엇이든 물어보세요"
            onSearch={handleSend}
        />
    );
}

export {ChatInput};