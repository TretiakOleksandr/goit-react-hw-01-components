import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item) => (
          <li className={s.item} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
