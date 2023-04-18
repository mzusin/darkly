import React from 'react';

interface ISideBarl {
    children?: React.ReactNode;
    classes?: string;
}

const SideBar = (props: ISideBarl) => {
    const { children, classes } = props;

    return (
        <section className={ `w-40 h-full bg-black hidden xl:block border-l border-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default SideBar;