import React from 'react';
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

import "./LitSearchPage.css";

class LitSearchPage extends React.Component {

    render() {
        return (
            <div className='lit-search-page'>
                <LeftContainer />
                <RightContainer
                    quotes={this.props.quotes}
                    dispatch={this.props.dispatch}
                />
            </div>
        );
    }

}

export default LitSearchPage;
