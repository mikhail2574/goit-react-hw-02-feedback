import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import css from './Form.module.css';

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.clickedBtn = this.clickedBtn.bind(this);
  }

  clickedBtn(evt) {
    let btnType = evt.target.getAttribute('data-type');
    this.setState(prevState => ({
      [btnType]: prevState[btnType] + 1,
    }));
  }

  render() {
    return (
      <>
        <div className={css.formContainer}>
          <h2>Please leave feedback</h2>
          <form className={css.form}>
            <button
              data-type="good"
              className={css.button}
              type="button"
              onClick={this.clickedBtn}
            >
              Good
            </button>
            <button
              data-type="neutral"
              className={css.button}
              type="button"
              onClick={this.clickedBtn}
            >
              Neutral
            </button>
            <button
              data-type="bad"
              className={css.button}
              type="button"
              onClick={this.clickedBtn}
            >
              Bad
            </button>
          </form>
        </div>
        <h2>Statistics</h2>
        <Statistics data={this.state} />
      </>
    );
  }
}
