import { Statlist } from "components/StatList/StatList";
import { StatTitle } from "components/StatTitle/StatTitle";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics =({stats, title})=>(
<section className={css.statistics}>
<StatTitle title={title}></StatTitle>
<Statlist stats={stats}></Statlist>
</section>
)

StatTitle.propTypes = {
    title: PropTypes.string
  };