import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const NewsContext = createContext();

const NewsProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "4a7bab92bce14874920306f0148ce3b6";
    
    useEffect(() => {
        axios.get(
            `
            https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
            )
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(data);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export { NewsContext, NewsProvider };
