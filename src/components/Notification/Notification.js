import PropTypes from 'prop-types'
import s from '../Statistics/Statistics.module.css'

export const Notification = ({ message = '' }) => (
  <>{message && <p className={s.statisticsText}>{message}</p>}</>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
