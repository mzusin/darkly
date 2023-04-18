import React from 'react';

interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    slideOnMobile?: boolean;
}

const Panel = (props: IPanel) => {
    const { children, classes, slideOnMobile } = props;

    return (
        <section className={ `${ slideOnMobile ? 'darkly-slide-m-panel' : 'hidden' } xl:block xl:static w-80 max-w-full h-screen bg-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default Panel;