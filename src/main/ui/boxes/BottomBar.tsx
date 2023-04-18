import React from 'react';

interface IBottomBar {
    children?: React.ReactNode;
    classes?: string;
}

const BottomBar = (props: IBottomBar) => {
    const { children, classes } = props;

    return (
        <section className={ `flex items-center px-4 bg-slate-800 h-16 border-l border-l-black ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default BottomBar;