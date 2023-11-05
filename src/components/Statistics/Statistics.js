export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <h1>Statistics</h1>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
    <div>Total: {total}</div>
    <div>Positive feedback: {positivePercentage}%</div>
  </div>
);
