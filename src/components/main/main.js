import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBase} from "../../redux/reducers/currencies";

const Main = ({input, setInput}) => {
    const inputHandler = (e) => {
          setInput(e.target.children[0].value)
    };
    const dispatch = useDispatch();
    const formHandler = (e) => {
          e.preventDefault()
        dispatch(getBase(e.target.children[0].value))
    };
    const currencies = useSelector((s) => s.currencies.currencies);
    const base = useSelector((s) => s.currencies.base);
    const current = useSelector((s) => s.currencies.current);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(4);
    const increaseHandler = () => {
        if (firstIndex < 30 && lastIndex < 33){
            setFirstIndex(firstIndex + 3);
            setLastIndex(lastIndex + 3)
        }
    };
    const decreaseHandler = () => {
        if (firstIndex > 0 && lastIndex > 3){
            setFirstIndex(firstIndex - 3);
            setLastIndex(lastIndex - 3)
        }
    };
    return (
        <main className='main'>
            <form className='main-flex' onSubmit={formHandler}>
                <input type="text" placeholder='Введите количество купюр' onChange={() => inputHandler} value={input} required/>
                <button type='submit' className="main__currency">Submit</button>
            </form>
            <div className="main-flexBox">
                {
                    Object.keys(currencies).slice(firstIndex,lastIndex).map((item,index, array) => {
                        return (
                            <div className="main-flexBox__items">
                                <h3 className="main__text">{base} {current} =</h3>
                                <p className="main__content">{(base / currencies[`${current}`] * currencies[`${item}`]).toFixed(2)} {item}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="button-flex">
                <button type='button' className="button__first" onClick={decreaseHandler} disabled={firstIndex === 0 ? 'disable' : ''}>Назад</button>
                <button type='button' className="button__second" onClick={increaseHandler} disabled={firstIndex === 30 ? 'disable' : ''}>Далее</button>
            </div>
        </main>
    );
};
export default Main;