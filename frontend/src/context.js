import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const NewsContext = createContext();

const NewsProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "4a7bab92bce14874920306f0148ce3b6";
    // const apiKeyCalendar = "439b65ab47627877c6ff49f2aa8d9943d5bd4410";
    const [bitcoin, setBitcoin] = useState();
    
    useEffect(() => {
        axios.get(
            `
            https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
            )
            .then(response => {
                // console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
        .then((res) => {
            console.log("calendar: ", res);
            setBitcoin(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    // console.log(data);
    console.log("day la books: ",bitcoin);

    return (
        <NewsContext.Provider value={{ data, bitcoin }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export { NewsContext, NewsProvider };
