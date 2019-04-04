import React from 'react';
import { connect } from "react-redux";
import { fetchQuotesByTheme } from "./redux/actions";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


class ThemeSelect extends React.Component {

    _renderDropdownItems() {
        // TODO: get available themes from server
        // This is your homework! :)
        const THEMES = [
          'family', 'identity', 'love', 'women', 'power', 'language', 'religion',
     'death', 'justice', 'class', 'storytelling', 'nature', 'racism',
     'education', 'survival', 'freedom', 'memory', 'coming of age',
     'morality', 'war', 'fate', 'gender roles', 'growing up', 'time',
     'isolation', 'guilt', 'christianity', 'friendship', 'marriage',
     'community', 'tradition', 'home', 'appearances', 'heroism',
     'fate and free will', 'america', 'work', 'redemption', 'perspective',
     'resistance', 'corruption', 'duality', 'secrecy', 'art'
        ];
        return THEMES.map(theme => {
            // For each possible theme, we're creating an anonymous function which
            // fetches quotes from the server when clicked
            // It's not the most performant solution but it's good enough for now
            const onClick = () => this.props.dispatch(fetchQuotesByTheme(theme));
            return (
                <Dropdown.Item key={theme} onClick={onClick}>
                    {theme}
                </Dropdown.Item>
            );
        });
    }

    render() {
        return (
            <div className="theme-select">
                <DropdownButton id="theme-select-dropdown" title="Pick a theme...">
                    {this._renderDropdownItems()}
                </DropdownButton>
            </div>
        );
    }

}

export default connect(
  null,
  { fetchQuotesByTheme }
)(ThemeSelect);
