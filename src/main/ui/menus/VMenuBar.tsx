import React from 'react';

interface IVMenuBar {
    children?: React.ReactNode;
    classes?: string;
}

const VMenuBar = (props: IVMenuBar) => {
    const { children, classes } = props;

    return (
        <section className={ `w-16 h-full bg-slate-800 border-r border-black ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default VMenuBar;