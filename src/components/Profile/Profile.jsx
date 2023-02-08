import PropTypes from 'prop-types';
import css from '../Profile/profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.card}>
      <div className={css.photoCard}>
        <img src={avatar} alt="User avatar" className={css.userPhoto} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.UserLocation}>{location}</p>
      </div>
      <ul className={css.blockStats}>
        <li className={css.stats}>
          <span className={css.labelStats}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span className={css.labelStats}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span className={css.labelStats}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
