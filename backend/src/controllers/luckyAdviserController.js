const { GoogleGenerativeAI } = require('@google/generative-ai');
const { cleanResponse } = require('../services/responseCleaner'); // Importing from backend services
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

exports.getResponseForPrompt = async (req, res) => {
    const { prompt } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        
        const cleanedResponse = cleanResponse(text);
        res.send({ success: true, response: cleanedResponse });
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).send({ success: false, error: "Something went wrong" });
    }
};

exports.getLuckyAdvice = async (req, res) => {
    // prompt to use when I'm feeling lucky button is pressed
    const prompt = "Give 1 financial tip/advice/information" + 
    "so that the users can expand their knowledge overtime." +
    "For the tip provided, there has to be a reliable source for the information." +
    "At the last, please provide links to the websites that are related to the financial information provided.";

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        
        const cleanedResponse = cleanResponse(text);
        res.send({ success: true, response: cleanedResponse });
    } catch (error) {
        console.error("Error generating lucky advice:", error);
        res.status(500).send({ success: false, error: "Something went wrong" });
    }
};
