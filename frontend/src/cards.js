import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div class='card'>
        <div class='card-body'>
          <h5 class="card-title">Family</h5>
          <p class="card-text" style='background: #f0ffff;'> Tellus mauris a diam maecenas sed. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
          <p class="card-text" style='background: #e6e6fa;'> Tellus mauris a diam maecenas sed. Habitant morbi tristique senectus et netus et malesuada fames ac. </p>
        </div>
      </div>
    )
  }
}

export default Card;
