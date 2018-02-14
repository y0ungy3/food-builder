/**
 * Created by Dung Mai on 2/13/2018.
 */
import React from 'react';
import css from './BuildControl.css';

const buildControl = (props) => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.label}</div>
        <button className={css.Less}>Less</button>
        <button className={css.More}>More</button>
    </div>
);

export default buildControl;