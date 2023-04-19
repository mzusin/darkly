import React from 'react';

export interface IBottomBar {
    children?: React.ReactNode;
    classes?: string;
}

export const BottomBar = (props: IBottomBar) => {
    const { children, classes } = props;

    return (
        <section className={ `flex items-center px-6 py-3 bg-slate-800 xl:border-l border-l-black ${ classes || '' }` }>
            { children }
        </section>
    )
};