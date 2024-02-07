import { Content } from "antd/es/layout/layout";
import {  ChatMessage, ChatMessageProps } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { useEffect, useRef } from "react";

interface ChatViewProps {
    messages: ChatMessageProps[]
}

const ChatView = ({messages} : ChatViewProps) => {
    const endOfMessage = useRef<HTMLDivElement | null>(null); 
    
    useEffect(() => {
        endOfMessage.current?.scrollIntoView();
    }, [endOfMessage]); 

    return (
        <Content style={{height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0 16px' ,width: '100%', background: 'white'}}>
                <h3>그냥 없으면 허전해서 넣어봤어 🦔</h3>
            </div>

            <div style={{ padding: 24, minHeight: 360, flexGrow: 1, overflow: 'auto' }}>
                {messages.map((message) => (
                    <ChatMessage author={message.author} content={message.content}/>
                ))}
                <div ref={endOfMessage}/>
            </div>
            <ChatInput />
        </Content>
    )
}

export { ChatView };