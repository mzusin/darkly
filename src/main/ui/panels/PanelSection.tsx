import React, { CSSProperties } from 'react';

export interface IPanelSection {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    fullHeight?: boolean;
    scrollable?: boolean;
}

export const PanelSection = (props: IPanelSection) => {
    const { classes, style, children } = props;

    const fullHeight = props.fullHeight ? 'flex-1 h-full' : '';
    const scrollable = props.scrollable ? 'overflow-auto' : '';

    return (
        <section className={ `${ fullHeight } ${ scrollable } ${ classes || '' } overflow-auto` } style={ style }>
            { children }
        </section>
    )
};