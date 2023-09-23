import React from 'react';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  let { good, neutral, bad } = data;

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  return (
    <div className={`${css.statistics}`}>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul className={css.list}>
          <li className={css.listItem}>
            <p>Good</p>
            <span>{good}</span>
          </li>
          <li className={css.listItem}>
            <p>Neutral</p>
            <span>{neutral}</span>
          </li>
          <li className={css.listItem}>
            <p>Bad</p>
            <span>{bad}</span>
          </li>
          <li className={css.listItem}>
            <p>Total</p>
            <span className={css.spanRes}>{countTotalFeedback()}</span>
          </li>
          <li className={css.listItem}>
            <p>Positive feedback</p>
            <span className={css.spanRes}>
              {countPositiveFeedbackPercentage().toFixed(1)}%
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.object.isRequired,
};
