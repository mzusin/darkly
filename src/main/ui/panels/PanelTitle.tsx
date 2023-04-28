import React, { CSSProperties } from 'react';

export interface IPanelTitle {
    classes?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const PanelTitle = (props: IPanelTitle) => {

    const { classes, children, style } = props;

    return (
        <section className={ `relative w-full text-center px-6 py-3 ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};