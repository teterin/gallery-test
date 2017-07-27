import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import List from '../components/List';

const getApartments = createSelector(
  ({ apartments }) => apartments,
  items =>
    items
      .reduce((acc, item) => acc.concat(item.apartmentSimples), [])
      .slice(0, 10),
);

const mapStateToProps = state => ({ apartments: getApartments(state) });

export default connect(mapStateToProps)(List);
