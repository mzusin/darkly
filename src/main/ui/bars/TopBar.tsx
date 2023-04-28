import React, { CSSProperties } from 'react';

export interface ITopBar {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const TopBar = (props: ITopBar) => {
    const { children, classes, style } = props;

    return (
        <section className={ `flex items-center px-6 py-3 bg-slate-900 ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};