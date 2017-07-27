import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import './styles.css';

function List({ apartments }) {
  return (
    <ul className="list-container">
      {apartments.map(apartment =>
        <ListItem key={apartment.apartmentId} apartment={apartment} />,
      )}
    </ul>
  );
}

List.propTypes = {
  apartments: PropTypes.array,
};

List.defaultProps = {
  apartments: [],
};

export default List;
