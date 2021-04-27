import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getCurrencies} from "../../redux/reducers/currencies";
import Header from "../header";
import Main from "../main";

const App = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        return dispatch(getCurrencies())
    },[dispatch]);
    return (
        <div className='container'>
            <Header/>
            <Main input={input} setInput={setInput}/>
        </div>
    );
};

export default App;