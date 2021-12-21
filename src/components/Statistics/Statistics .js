import React from 'react'
import PropTypes from 'prop-types'
import s from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {/* <h3>Statistics</h3> */}
      <p className={s.statisticsText}>
        <span>Good:</span> <span>{good}</span>
      </p>
      <p className={s.statisticsText}>
        <span>Neutral:</span> <span>{neutral}</span>
      </p>
      <p className={s.statisticsText}>
        <span>Bad:</span> <span>{bad}</span>
      </p>
      <p className={s.statisticsText}>
        <span>Total:</span> <span>{total}</span>
      </p>
      <p className={s.statisticsText}>
        <span>Positive feedbeck:</span> <span>{percent} %</span>
      </p>
    </>
  )
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
}
