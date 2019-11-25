const SET_PLUS_VALUE = 'SET_PLUS_VALUE';
const SET_RESET = 'SET_RESET';
const SET_SHOW_SETTINGS = 'SET_SHOW_SETTINGS';
const SET_HIDE_SETTINGS = 'SET_HIDE_SETTINGS';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_START_VALUE = 'SET_START_VALUE';

interface IInitialState {
    startValue: number
    maxValue: number
    currentValue: number
    isShowHide: boolean
}

let initialState: IInitialState = {
    startValue: 0,
    maxValue: 3,
    currentValue: 0,
    isShowHide: true
};

const reducer = (state: IInitialState = initialState, action: ReducerActionsType) => {
    switch (action.type) {
        case SET_PLUS_VALUE: {
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        }
        case SET_RESET: {
            return {
                ...state,
                currentValue: state.startValue
            }
        }
        case SET_SHOW_SETTINGS: {
            return {
                ...state,
                isShowHide: false
            }
        }
        case SET_HIDE_SETTINGS: {
            return  {
                ...state,
                isShowHide: true,
                currentValue: state.startValue,
                maxValue: state.maxValue
            }
        }
        case SET_MAX_VALUE: {
            return  {
                ...state,
                maxValue: action.number
            }
        }
        case SET_START_VALUE: {
            return {
                ...state,
                startValue: action.number
            }
        }
        default:
            return state
    }
};

type ReducerActionsType = IOnPlusValue | IOnReset | IOnShowSettings | IOnHideSettings | IOnMaxValueChange | IOnStartValueChange

export interface IOnPlusValue {
    type: typeof SET_PLUS_VALUE
}
export interface IOnReset {
    type: typeof SET_RESET
}
export interface IOnShowSettings {
    type: typeof SET_SHOW_SETTINGS
}
export interface IOnHideSettings {
    type: typeof SET_HIDE_SETTINGS
}
export interface IOnMaxValueChange {
    type: typeof SET_MAX_VALUE
    number: number
}
export interface IOnStartValueChange {
    type: typeof SET_START_VALUE
    number: number
}

export const onPlusValue = ():IOnPlusValue => ({type: SET_PLUS_VALUE});
export const onReset = ():IOnReset => ({type: SET_RESET});
export const onShowSettings = ():IOnShowSettings => ({type: SET_SHOW_SETTINGS});
export const onHideSettings = ():IOnHideSettings =>  ({type: SET_HIDE_SETTINGS});
export const onMaxValueChange = (number:number):IOnMaxValueChange => ({type: SET_MAX_VALUE,number});
export const onStartValueChange = (number: number):IOnStartValueChange => ({type: SET_START_VALUE,number});

export default reducer;