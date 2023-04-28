import React, { CSSProperties } from 'react';

export interface IBottomBar {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const BottomBar = (props: IBottomBar) => {
    const { children, classes, style } = props;

    return (
        <section className={ `flex items-center px-6 py-3 bg-slate-800 xl:border-l border-l-black ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};