import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // console.log('good', good);
    // console.log('neutral', neutral);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feddback">
        <Container>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Container>
      </Section>
      <Section title="Statistics">
        <Container>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Container>
      </Section>
    </>
  );
}

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.keys(this.state).reduce(
//       (total, value) => total + this.state[value],
//       0
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <GlobalStyle />
//         <Section title="Please leave feddback">
//           <Container>
//             <FeedbackOptions
//               options={this.state}
//               onLeaveFeedback={this.handleFeedback}
//             />
//           </Container>
//         </Section>
//         <Section title="Statistics">
//           <Container>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           </Container>
//         </Section>
//       </>
//     );
//   }
// }
