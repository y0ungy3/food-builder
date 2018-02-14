/**
 * Created by Dung Mai on 1/9/2018.
 */
import React from 'react';
import Aux from '../../hoc/aux_';
import css from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, sidedrawer, backdrop</div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;