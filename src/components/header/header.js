import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrent} from "../../redux/reducers/currencies";

const Header = ({time}) => {
    const currencies = useSelector((s) => s.currencies.currencies);
    const current = useSelector((s) => s.currencies.current);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <header className='header'>
                <div className="header-title">
                    <h1 className='header__title'>Курс валют на {time}</h1>


                </div>
                <div className='header-flexBox'>
                    {
                        Object.keys(currencies).map((item) => {
                            return current === item ? <button type='click' style={{background: "white"}} className='header-flexBox__items' onClick={() => dispatch(updateCurrent(`${item}`))}>
                                {item}
                            </button> : <button type='click' className='header-flexBox__items' onClick={() => dispatch(updateCurrent(`${item}`))}>
                                {item}
                            </button>
                        })
                    }
                </div>
            </header>
        </BrowserRouter>
    );
};

export default Header;