import { UPDATE_LIT_TEXT, RECEIVE_QUOTES } from "../actionTypes";

// This is the initial state in our app
// There are no quotes loaded from the server yet
const initialState = {
    text: "",
    quotes: [],
};

export default function(state = initialState, action) {
    switch (action.type) {

        // For this action, set the user's text to state
        case UPDATE_LIT_TEXT: {
            const text = action.text;
            console.log(`You typed something. This text has been set to state: ${text}`);
            return {
                ...state,
                text
            };
        }

        // For this action, set the web response's quotes to state
        case RECEIVE_QUOTES: {
            const quotes = action.quotes;
            console.info(`We just received this from the server: ${quotes}`);
            return {
                ...state,
                quotes
            };
        }

        default:
            return state;
    }
}
