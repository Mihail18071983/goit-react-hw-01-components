import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}

    ></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
};

// isOnline ? className.push(css.online) : className.push(css.offline)