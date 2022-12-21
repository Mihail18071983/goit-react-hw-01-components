import css from './StatItem.module.css';
import PropTypes from 'prop-types';
import {getRandomHexColor} from '../../utils/getBgColor'

export const StatItem =({label,percentage})=>(
    <li style={{
     
      backgroundColor: getRandomHexColor(),
      
    }} className={css.stats_item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)

StatItem.propTypes={
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}