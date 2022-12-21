import css from './StatList.module.css';
import PropTypes from 'prop-types';
import { StatItem } from 'components/StatItem/StatItem';

export const Statlist = ({ stats }) => {
  return (
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage}></StatItem>
      ))}
    </ul>
  );
};

Statlist.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
