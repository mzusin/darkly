import React from 'react';

interface IBottomBar {
    children?: React.ReactNode;
    classes?: string;
}

const BottomBar = (props: IBottomBar) => {
    const { children, classes } = props;

    return (
        <section className={ `bg-slate-800 h-16 border-l border-black ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default BottomBar;