import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export function FriendListItem({ isOnline, src, name }) {
  return (
    <li className={css.friendItem}>
      <span className={isOnline ? css.online : css.offline} />
      <img className={css.friendPhoto} src={src} alt="User avatar" width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
