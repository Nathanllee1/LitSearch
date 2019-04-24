import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import LitSearchPage from "./LitSearchPage";

class NewApp extends React.Component {

    render() {
        return (
            <LitSearchPage
                quotes={this.props.quotes}
                dispatch={this.props.dispatch}
            />
        );
    }

}

// Here, we're defining what props we expect to receive from the store
// We're getting dispatch for free from the middleware (see store.js and index.js)
// As for the quotes object, that is being taken from `themedQuotes` via the map function below
NewApp.propTypes = {
    quotes: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

// Here's the function we talked about which maps state from the store to props given to this component
// We're basically extracting the store's stateful quotes so they can be passed down to components and rendered
function mapStateToProps(state) {
    return {
        quotes: state.themedQuotes.quotes,
    };
}

export default connect(mapStateToProps)(NewApp)
