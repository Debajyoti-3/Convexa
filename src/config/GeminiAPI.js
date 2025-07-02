import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const GEMINI_API_KEY = import.meta.env.VITE_API_KEY

console.log('api key is : ', GEMINI_API_KEY)

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);

  return response.text      // to get it
}

export default main;