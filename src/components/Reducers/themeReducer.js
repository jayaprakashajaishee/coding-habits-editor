
import {CHANGE_THEME, CHANGE_AUTO_RUN,CHANGE_EDITOR_VALUE, CHANGE_EDITOR_VALUE_TEMP,ON_RUN, ON_RESET} from "../constants";
//import boilerplate from "../boilerplate/boilerplate";

export default function themeReducer(state,action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state,theme: action.payload};
        case CHANGE_AUTO_RUN:
            return {...state,autoRun: action.payload};
        case CHANGE_EDITOR_VALUE:
            return {...state,...action.payload};
        case CHANGE_EDITOR_VALUE_TEMP:
            return {...state, ...action.payload}
        case ON_RUN:
            return {...state,...action.payload}
        case ON_RESET:
            let ch_boilerplate = localStorage.getItem("ch-boilerplate")
            let boilerplate = JSON.parse(ch_boilerplate)
            return {...state,...boilerplate}
        default:
            return state;
    }
}