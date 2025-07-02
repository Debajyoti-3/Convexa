import { createContext, useState } from "react";
import main from "../config/GeminiAPI";

export const Context = createContext();

function ContextProvider({children}){

    const [input,setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        }, 75*index)
    }

    const newChat =()=>{
        setLoading(false);
        setShowResult(false)
    }


    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await main(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await main(input)
        }

        // logic to remove the '**', and replace them with bold word
        let responseArray = response.split("**");
        let newResponse=""; // = "", its solves the undefined problem in the answer
        for(let i=0; i< responseArray.length; i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }

        // logic to remove the '*', and replace with new line
        let newResponse2 = newResponse.split("*").join("</br>")

        //setResultData(newResponse2)
        // logic for typing effect
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }

        setLoading(false)
        setInput("")
    }
    //onSent("What is React JS")

    const contextValue={
        prevPrompts,
        setPrevPrompts,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        onSent,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider