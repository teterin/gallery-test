import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function getImageUrl({ directory, apartment, photo }) {
  return `https://static.holidu.com/images/${directory}/${apartment}/t/${photo}.jpg`;
}

function ListItem({
  apartment: {
    photos,
    holiduShortTitle,
    providerPhotoDirectory,
    apartmentId,
    minDayPrice,
    rating,
    countOfFeedbacks,
  },
}) {
  return (
    <li className="list-item-container">
      <div className="img-container ">
        {(photos || []).map(photo =>
          (<img
            className="img"
            key={photo}
            alt={holiduShortTitle}
            src={getImageUrl({
              directory: providerPhotoDirectory,
              apartment: apartmentId,
              photo,
            })}
          />),
        )}
      </div>
      <div className="text-container">
        <div>
          Price: {minDayPrice}
        </div>
        <div>
          Rating: {rating}
        </div>
        <div>
          Feedback count: {countOfFeedbacks}
        </div>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  apartment: PropTypes.object.isRequired,
};

export default ListItem;
