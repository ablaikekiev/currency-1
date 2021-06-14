import actions from "./actions";
import axios from "axios";

const initState = {
    currencies: {},
    base: 0,
    current: 'AED',
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
        case actions.GET_TIME: {
            return {...state, time: action.time}
        }
        default: return state
    }
}

export const getCurrencies = () => {
    return (dispatch) => {
        axios('http://api.exchangeratesapi.io/v1/latest?access_key=21c8cb979a214ea1bf02f8116525e47e&format=1')
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
