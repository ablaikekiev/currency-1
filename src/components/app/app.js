import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {currentTime, getCurrencies} from "../../redux/reducers/currencies";
import Header from "../header";
import Main from "../main";

const App = () => {
    const [input, setInput] = useState();
    const [time, setTime] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        return dispatch(getCurrencies())
    },[dispatch]);
    useEffect(() => {
        const date = new Date();
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        const timeHandler = () => {
            return setTimeout(() => {
                setTime(`${day}.${month}.${year} | ${hours} : ${minutes} : ${seconds}`)
            }, 1000)

        };
        timeHandler()
    }, [time]);
    return (
        <div className='container'>
            <Header time={time}/>
            <Main input={input} setInput={setInput}/>
        </div>
    );
};

export default App;