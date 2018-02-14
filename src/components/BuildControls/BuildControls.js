/**
 * Created by Dung Mai on 2/13/2018.
 */
import React from 'react';
import css from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={css.BuildControls}>
        {controls.map(obj => (
            <BuildControl key={obj.label} label={obj.label}/>
        ))}
    </div>
);

export default buildControls;