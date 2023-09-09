import React, { Component } from "react";
import { Statistics } from "../Statistics/Statistics";
import css from "./Form.module.css";

export class Form extends Component {
    constructor() {
        super();

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        this.clickedGood = this.clickedGood.bind(this);
        this.clickedNeutral = this.clickedNeutral.bind(this);
        this.clickedBad = this.clickedBad.bind(this);
    }

    clickedGood(evt) {
    this.setState((prevState) => ({
        good: prevState.good + 1
        }));
    }

    clickedNeutral(evt) {
    this.setState((prevState) => ({
        neutral: prevState.neutral + 1
        }));
    }

    clickedBad(evt) {
    this.setState((prevState) => ({
        bad: prevState.bad + 1
        }));
    }

    render() {
        return (
            <>
                <div className={css.formContainer}>
            <h2>Please leave feedback</h2>
            <form className={css.form}>
                <button className={css.button} type="button" onClick={this.clickedGood}>Good</button>
                <button className={css.button} type="button" onClick={this.clickedNeutral}>Neutral</button>
                <button className={css.button} type="button" onClick={this.clickedBad}>Bad</button>
                </form>
                </div>
                <h2>Statistics</h2>
            <Statistics data={this.state} />
            </>
        );
    }
}