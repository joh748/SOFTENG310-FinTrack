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
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Me Something You Want"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>
        <div className="col-auto">
          <button onClick={getResponseForGivenPrompt} className="bg-white text-violet-800 rounded-md px-4 py-2 border border-violet-800 hover:bg-gray-200 transition">Send</button>
        </div>
        <LuckyButton onGetAdvice={handleLuckyAdvice} />
      </div>
      {loading ? (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        promptResponses.length > 0 && (
        <div className="mb-4 p-4 border border-gray-300 rounded-md shadow-md">
          {console.log(promptResponses)}
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
        </div>
      ))}
    </div>
  );
}

export default LuckyAdviser;
