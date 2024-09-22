import React, { useState } from 'react';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const checkMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        return accounts.length > 0; // Returns true if the user has an account
    } else {
            console.warn('MetaMask is not installed');
            return false;
    }
    };

    const handleSend = async () => {
    const isConnected = await checkMetaMask();
    if (!isConnected) {
        setMessages((prev) => [...prev, { text: 'Please connect to MetaMask to proceed.', sender: 'chatbot' }]);
        return;
    }

    if (!input) return;

    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

    try {
        const response = await fetch('https://0x4b6e388c3aae7dde01b0e63bd9f05e96c79da7eb.us.gaianet.network/v1/chat/completions', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: input },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`API error: status ${response.status}`);
        }

        const data = await response.json();
        if (data.choices) {
            setMessages((prev) => [...prev, { text: data.choices[0].message.content, sender: 'chatbot' }]);
        } else {
            setMessages((prev) => [...prev, { text: 'No response from the chatbot.', sender: 'chatbot' }]);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        let errorMessage = 'Error fetching response. Please try again.';

        switch (true) {
        case /NetworkError/.test(error.message):
            errorMessage = 'API is unreachable. Check your internet connection.';
            break;
        // Add more cases for specific error messages (e.g., 404 Not Found)
        default:
            errorMessage = 'An unexpected error occurred.';
        }

        setMessages((prev) => [...prev, { text: errorMessage, sender: 'chatbot' }]);
    }

        setInput('');
    }
    return (
        <div className="chat-box">
            <div className="chat-messages">
                <button>What is immutability in blockchain?</button>
                <button>Explain smart contract in simple words.</button>
                <button>What are NFTs and why are they used?</button>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-group">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control chat-input"
                    placeholder="Ask anything about blockchain technology..."
                />
                <button className="btn search-button" onClick={handleSend}>
                    <i className="bi bi-arrow-up">Ask Blockedu</i>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;