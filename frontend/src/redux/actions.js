import fetch from 'cross-fetch'
import { UPDATE_LIT_TEXT, RECEIVE_QUOTES } from './actionTypes';

// This updates the literature text in state
// It can be called everytime the user changes their input
export const updateLitText = text => ({
    type: UPDATE_LIT_TEXT,
    text,
});

// This is an internal function (not exported) called by `fetchQuotesByTheme`
// It formats the input payload and actually makes the web request to the server
function fetchQuotes(theme, text) {
    // TODO: use a valid URL and JSON payload format
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://127.0.0.1:5001/';
    const payload = { theme, text };

    console.info('Here is the payload being sent to the server:');
    console.info(payload);

    // Return function which issues a POST web request
    // The server's response is passed over to `receiveQuotes` below
    return dispatch => {
        return fetch((proxyurl + url), {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(json => dispatch(receiveQuotes(theme, json)));
    }
}

// This is the function called when the user clicks on a theme
export function fetchQuotesByTheme(theme) {
    return (dispatch, getState) => {
        const state = getState();
        if (state.themedQuotes && state.themedQuotes.text) {
            return dispatch(fetchQuotes(theme, state.themedQuotes.text));
        } else {
            alert('Error: user has not entered any text!');
        }
    };
}

// This function is called when the web request finishes
// We've defined the `json` parameter to be the response body
export function receiveQuotes(theme, json) {
    return {
        type: RECEIVE_QUOTES,
        theme,
        quotes: json.quotes,
        receivedAt: Date.now()
    };
}
