import PropTypes from 'prop-types';
import css from '../Statistics/statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={css.sectionStatTitle}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, percentage, label }) => {
          return (
            <li
              className={css.statItem}
              style={{ backgroundColor: randomColor() }}
              key={id}
            >
              <span className={css.labelStatItem}>{label}</span>

              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
