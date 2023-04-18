import React from 'react';

interface IStretchBox {
    children?: React.ReactNode;
    classes?: string;
}

const StretchBox = (props: IStretchBox) => {
    const { children, classes } = props;

    return (
        <section className={ `bg-slate-900 flex-1 h-full ${ classes || '' }` }>
            { children }
        </section>
    )
};

export default StretchBox;