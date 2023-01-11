import css from './StatTitle.module.css';
import PropTypes from 'prop-types';

export const StatTitle = ({ title }) => {
  <h2 className={css.title}>{title}</h2>
};

StatTitle.propTypes = {
  title: PropTypes.string,
};
