import React from 'react';

interface ISideBar {
    children?: React.ReactNode;
    classes?: string;
}

const SideBar = (props: ISideBar) => {
    const { children, classes } = props;

    return (
        <section className={ `w-40 max-w-full h-screen bg-black hidden xl:block border-l border-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default SideBar;