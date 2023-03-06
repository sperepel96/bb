
import  './chat.scss'
import React from "react";

const ChatPage = () => {

    const users = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
        { id: 5, name: "User 5" },
    ];

    const messages = [
        { user_id: 1, text: "Hello", created_at: "2022-03-03T14:49:00.000Z" },
        {
            user_id: 2,
            text: "Hi, how are you?",
            created_at: "2022-03-03T14:50:00.000Z",
        },
        {
            user_id: 1,
            text: "I'm fine, thank you",
            created_at: "2022-03-03T14:51:00.000Z",
        },
    ];

    return (
        <div className="chat-page-container">
            <div className="chat-page-header">
                <h2>Chat</h2>
            </div>
            <div className="chat-page-content row">
                <div className="col s3">
                    <h5>Users</h5>
                    <ul className="collection">
                        {users.map((user) => (
                            <li key={user.id} className="collection-item">
                                {user.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col s9">
                    <h5>Chat</h5>
                    <div className="chat-messages">
                        <ul className="collection">
                            {messages.map((message, index) => (
                                <li key={index} className="collection-item">
                                    <span className="badge">{message.created_at}</span>
                                    {message.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col s10">
                            <input type="text" placeholder="Type a message..." />
                        </div>
                        <div className="col s2">
                            <button className="btn waves-effect waves-light">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
