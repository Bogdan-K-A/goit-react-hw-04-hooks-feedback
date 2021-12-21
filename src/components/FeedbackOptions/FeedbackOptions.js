import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnBox}>
      {options.map((el) => (
        <button
          key={el}
          type="button"
          name={el}
          onClick={() => {
            onLeaveFeedback(el)
          }}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
