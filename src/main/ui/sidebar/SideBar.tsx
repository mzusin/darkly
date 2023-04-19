import React from 'react';

export interface ISideBar {
    children?: React.ReactNode;
    classes?: string;
}

export const SideBar = (props: ISideBar) => {
    const { children, classes } = props;

    return (
        <section className={ `w-40 max-w-full h-screen bg-black hidden xl:block border-l border-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};