import React, { CSSProperties } from 'react';

export interface IStretchBox {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const StretchBox = (props: IStretchBox) => {
    const { children, classes, style } = props;

    return (
        <section className={ `bg-slate-900 flex-1 h-full ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};