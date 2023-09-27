import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h3 className={css.notification}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
