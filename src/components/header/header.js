import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrent} from "../../redux/reducers/currencies";

const Header = () => {
    const currencies = useSelector((s) => s.currencies.currencies);
    const current = useSelector((s) => s.currencies.current);
    const dispatch = useDispatch();
    return (
        <BrowserRouter>
            <header className='header'>
                <h1 className='header__title'>Курс EUR на 2020.01.19</h1>
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