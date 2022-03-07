import React, { useEffect } from "react";

export default function useWindow(eventName,callback){
    useEffect(()=>{
        window.addEventListener(eventName,callback);

        return()=>{
            window.removeEventListener(eventName,callback);
        };
    });
}