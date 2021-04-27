import actions from "./actions";
import axios from "axios";

const initState = {
    currencies: {},
    base: 0,
    current: 'GBP'
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.GET_CURRENCIES: {
            return {...state, currencies: action.currencies}
        }
        case actions.GET_BASE: {
            return {...state, base: action.base}
        }
        case actions.GET_CURRENT: {
            return {...state, current: action.current}
        }
        default: return state
    }
}

export const getCurrencies = () => {
    return (dispatch) => {
        axios('https://api.openrates.io/latest')
            .then(({data: {rates}}) => {
                return dispatch(
                    {
                        type: actions.GET_CURRENCIES,
                        currencies: rates
                    }
                )
            })
    }
};

export const getBase = (baseVal) => {
    return (dispatch) => {
        return dispatch(
            {
                type: actions.GET_BASE,
                base: baseVal
            }
        )
    }
};

export const updateCurrent = (current) => {
    return (dispatch) => {
        return dispatch(
            {
                type: actions.GET_CURRENT,
                current: current
            }
        )
    }
};