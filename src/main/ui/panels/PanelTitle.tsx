import React from 'react';

interface IPanelTitle {
    classes?: string;
    children?: React.ReactNode;
}

export const PanelTitle = (props: IPanelTitle) => {

    const { classes, children } = props;

    return (
        <section className={ `relative w-full text-center px-6 py-3 ${ classes }` }>
            { children }
        </section>
    )
};