

// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the script properties.
// const apiKey = PropertiesService.getScriptProperties().getProperty('AIzaSyBdrSRzJ_0gol1HHM9PDta-fr2kH9VM7ZE');
// const model = 'gemini-2.5-pro';
// const api = 'streamGenerateContent';
// const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

// function main() {
//   const payload = {
//     contents: [
//       {
//         role: 'user',
//         parts: [
//           {
//             text: `INSERT_INPUT_HERE`
//           },
//         ]
//       },
//     ],
//     generationConfig: {
//       thinkingConfig: {
//         thinkingBudget: -1,
//       },
//     },
//     tools: [
//       {
//         googleSearch: {}
//       },
//     ],
//   };

//   const options = {
//     method: 'POST',
//     contentType: 'application/json',
//     muteHttpExceptions: true,
//     payload: JSON.stringify(payload),
//   };

//   const response = UrlFetchApp.fetch(url, options);
//   const chunks = JSON.parse(response.getContentText());

//   for (const chunk of chunks) {
//     console.log(chunk.candidates[0].content.parts[0].text);
//   }
// }

// node --version # should be => 18
//npm install @google/generative-ai

import  {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,

}  from "@google/generative-ai"
 import fs from "fs";
 
const MODEL_NAME = "gemini-2.5-pro";
const API_KEY = "AIzaSyBdrSRzJ_0gol1HHM9PDta-fr2kH9VM7ZE";


async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({model:MODEL_NAME });
  


  const generationConfig = {
    temperature: 0.9,
    topK:1,
    topP: 1,
    maxOutputTokens:2048,

  };

  const safetySettings= [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,

    },
    {
      category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,


    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history:[

    ],




  });


  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());

  return response.text();


}

 export default runChat;


