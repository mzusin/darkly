import React, { CSSProperties } from 'react';

export interface IButtonsGroup {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const ButtonsGroup = (props: IButtonsGroup) => {
    const { children, classes, style } = props;
    
    return (
        <section className={ `m-4 grid grid-cols-4 gap-2 ${ classes || '' }` } style={ style }>
            { children }
        </section>
    )
};