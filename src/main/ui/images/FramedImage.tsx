import React from 'react';

interface IFramedImage {
    children?: React.ReactNode;
    classes?: string;
    width?: string|number;
    height?: string|number;
}

export const FramedImage = (props: IFramedImage) => {
    const { children, classes, width, height } = props;

    const style = {
        width,
        height,
    };

    return (
        <section className={ `bg-black border-4 border-slate-600 max-w-full ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};