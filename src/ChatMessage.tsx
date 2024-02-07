interface ChatMessageProps {
    author: string, 
    content: string,
} 

const ChatMessage = ({author, content}: ChatMessageProps) => {
    return (
        <div style={{padding: '12px 0px'}}>
            <strong>{author}</strong>
            <div>
                {content}
            </div>
        </div>
    )
}

export {ChatMessage};
export type {ChatMessageProps};