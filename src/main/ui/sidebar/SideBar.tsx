import React, { CSSProperties } from 'react';

export interface ISideBar {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const SideBar = (props: ISideBar) => {
    const { children, classes, style } = props;

    return (
        <section className={ `w-40 max-w-full h-screen bg-black hidden xl:block border-l border-slate-800 ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};