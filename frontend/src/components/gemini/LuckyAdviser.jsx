import React, { useState } from 'react';
import LuckyButton from './LuckyButton';
import axios from 'axios';
import { LoadingSpinner } from '../LoadingSpinner';

function LuckyAdviser() {
    const [inputValue, setInputValue] = useState('');
    const [promptResponses, setPromptResponses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResponses, setShowResponses] = useState(true);

    // Create axios instance with base URL and authorization token
    const axiosInstance = axios.create({
        baseURL: "http://localhost:4000",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const getResponseForGivenPrompt = async (e) => {
        e.preventDefault();
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
                setShowResponses(true);
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
                setShowResponses(true);
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

  const handleCloseResponses = () => {
    setShowResponses(false); // Close the response box
};

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col mb-4">
                <label htmlFor="prompt" className="mb-2 text-sm font-medium text-gray-900 sr-only">Ask Me Something You Want</label>
                <div className="relative">
                    <textarea
                        id="prompt"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask Me Something You Want"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 h-16 resize-none"
                        required
                    />
                    <div className="absolute right-2 -bottom-16 flex space-x-2">
                        <button onClick={getResponseForGivenPrompt} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                            Send
                        </button>
                        <LuckyButton onGetAdvice={handleLuckyAdvice} />
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="text-center mt-3">
                    <LoadingSpinner />
                </div>
            ) : (
                showResponses && promptResponses.length > 0 && (
                    <div className="flex flex-col mb-4 p-4 border border-gray-300 rounded-md shadow-md">
                        {promptResponses.map((promptResponse, index) => (
                            <div key={index}>
                                <div className="font-bold text-lg mb-2">{promptResponse.title}</div>
                                <ul>
                                    {promptResponse.content.map((item, idx) => (
                                        <li key={idx} className="mb-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <button
                            onClick={handleCloseResponses}
                            className="self-end bg-white text-violet-800 rounded-md px-4 py-2 border border-violet-800 hover:bg-gray-200 transition"
                        >
                            Close
                        </button>
                    </div>
                )
            )}
        </div>
    );
}

export default LuckyAdviser;
