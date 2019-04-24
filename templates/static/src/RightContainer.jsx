import React from 'react';
import ThemeSelect from './ThemeSelect';

class RightContainer extends React.Component {

    _renderQuotes() {
        const quotes = this.props.quotes || [];

        // If there's at least one quote, render a "Quotes:" header
        // For each quote, we're rendering it as a list item
        // TODO: instead of rendering a list item, render a custom card component
        // This is your homework! :)
        return (
            <div className='themed-quotes'>
                {quotes.length > 0 ? <h2>Quotes:</h2> : null}
                <ul>
                    {quotes.map(quote => <li key={quote}>{quote}</li>)}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className='right-container'>
                <ThemeSelect dispatch={this.props.dispatch} />
                <hr />
                {this._renderQuotes()}
            </div>
        );
    }

}

export default RightContainer;
