import React from 'react';

interface IVIconsMenu {
    children?: React.ReactNode;
    classes?: string;
}

const VIconsMenu = (props: IVIconsMenu) => {
    const { children, classes } = props;

    return (
        <section className={ `hidden xl:flex flex-col items-center w-16 h-screen bg-slate-800 border-r border-black overflow-hidden ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default VIconsMenu;