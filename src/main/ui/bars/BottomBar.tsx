import React from 'react';

interface IBottomBar {
    children?: React.ReactNode;
    classes?: string;
}

const BottomBar = (props: IBottomBar) => {
    const { children, classes } = props;

    return (
        <section className={ `flex items-center px-6 py-3 bg-slate-800 xl:border-l border-l-black ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default BottomBar;