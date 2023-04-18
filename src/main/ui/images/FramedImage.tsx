import React from 'react';

interface IFramedImage {
    children?: React.ReactNode;
    classes?: string;
    width?: string|number;
    height?: string|number;
}

const FramedImage = (props: IFramedImage) => {
    const { children, classes, width, height } = props;

    const style = {
        width,
        height,
    };

    return (
        <section className={ `bg-black border-4 border-slate-600 ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};

export default FramedImage;