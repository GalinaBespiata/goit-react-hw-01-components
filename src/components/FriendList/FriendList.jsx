import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
// import friends from '../data/friends.json';
import css from '../FriendList/FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            key={id}
            src={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
