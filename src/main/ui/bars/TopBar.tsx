import React from 'react';

interface ITopBar {
    children?: React.ReactNode;
    classes?: string;
}

const TopBar = (props: ITopBar) => {
    const { children, classes } = props;

    return (
        <section className={ `flex items-center px-6 py-3 border-l border-l-black ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default TopBar;