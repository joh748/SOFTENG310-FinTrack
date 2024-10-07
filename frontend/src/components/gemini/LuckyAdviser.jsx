import React, { useState } from 'react';
import LuckyButton from './LuckyButton';
import axios from 'axios';

function LuckyAdviser() {
    const [inputValue, setInputValue] = useState('');
    const [promptResponses, setPromptResponses] = useState([]);
    const [loading, setLoading] = useState(false);

    // Create axios instance with base URL and authorization token
    const axiosInstance = axios.create({
        baseURL: "http://localhost:4000",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const getResponseForGivenPrompt = async () => {
        if (!inputValue.trim()) {
            console.error("Input value is required.");
            return;
        }

        try {
            setLoading(true);
            const response = await axiosInstance.post('/api/generate-response', {
                prompt: inputValue,
            });

            if (response.data.success) {
                setPromptResponses(response.data.response);
            } else {
                console.error(response.data.error);
            }
        } catch (error) {
            console.error(error);
            console.log("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleLuckyAdvice = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.post('/api/lucky-advice');

            if (response.data.success) {
                setPromptResponses(response.data.response);
            } else {
                console.error(response.data.error);
            }
        } catch (error) {
            console.error(error);
            console.log("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask Me Something You Want"
                        className="form-control"
                    />
                </div>
                <div className="col-auto">
                    <button onClick={getResponseForGivenPrompt} className="btn btn-primary">Send</button>
                </div>
            </div>
            <LuckyButton onGetAdvice={handleLuckyAdvice} />
            {loading ? (
                <div className="text-center mt-3">
                    <div className="spinner-border text-primary">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                promptResponses.map((promptResponse, index) => (
                    <div key={index}>
                        <div className="response-title font-bold mb-4 mt-4">{promptResponse.title}</div>
                        <ul>
                            {promptResponse.content.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default LuckyAdviser;
