import { CHANGE_COLOR, SHOW_COLOR_MIXER } from "../actions/types";

const initialState = {
    r: 255,
    g: 255,
    b: 255,

    show_color_mixer: false,
};

export default function Draw (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_COLOR:
            return {
                ...state,
                [payload.key]: payload.value <= 255 && payload.value >= 0 ? payload.value : state[payload.key],
            };
        case SHOW_COLOR_MIXER:
            return {
                ...state,
                show_color_mixer: payload,
            }
        default:
            return state;
    };
};




