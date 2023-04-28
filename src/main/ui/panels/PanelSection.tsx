import React from 'react';

export interface IPanelSection {
    children?: React.ReactNode;
    classes?: string;
    fullHeight?: boolean;
    scrollable?: boolean;
}

/*
    height: 100%;
    overflow: auto;
 */

export const PanelSection = (props: IPanelSection) => {
    const { classes, children } = props;

    const fullHeight = props.fullHeight ? 'flex-1 h-full' : '';
    const scrollable = props.scrollable ? 'overflow-auto' : '';

    return (
        <section className={ `${ fullHeight } ${ scrollable } ${ classes }` }>
            { children }
        </section>
    )
};