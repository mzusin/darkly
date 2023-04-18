import React from 'react';

interface IPanel {
    children?: React.ReactNode;
    classes?: string;
}

const Panel = (props: IPanel) => {
    const { children, classes } = props;

    return (
        <section className={ `w-80 max-w-full h-screen bg-slate-800 hidden xl:block ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default Panel;