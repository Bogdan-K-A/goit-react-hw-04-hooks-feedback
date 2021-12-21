import { useState } from 'react'
import { Container } from './components/container/Container'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Notification } from './components/Notification/Notification'
import { Section } from './components/Section/Section'
import { Statistics } from './components/Statistics/Statistics '

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countTotalFeedback = () => good + neutral + bad

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100)
  }

  const increment = (name) => {
    switch (name) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break
      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break
      case 'bad':
        setBad((prevState) => prevState + 1)
        break

      default:
        return
    }
  }
  const total = countTotalFeedback()
  const keys = ['good', 'neutral', 'bad']

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={increment} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  )
}

export default App
