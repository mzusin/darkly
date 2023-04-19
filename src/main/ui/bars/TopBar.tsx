import React from 'react';

interface ITopBar {
    children?: React.ReactNode;
    classes?: string;
}

export const TopBar = (props: ITopBar) => {
    const { children, classes } = props;

    return (
        <section className={ `flex items-center px-6 py-3 bg-slate-900 ${ classes || '' }` }>
            { children }
        </section>
    )
};