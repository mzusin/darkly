import React, { CSSProperties } from 'react';

export interface IFramedImage {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    width?: string|number;
    height?: string|number;
}

export const FramedImage = (props: IFramedImage) => {
    const { children, classes, width, height } = props;

    const style: CSSProperties = {
        width,
        height,
        ...props.style,
    };

    return (
        <section className={ `bg-black border-4 border-slate-600 max-w-full ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};