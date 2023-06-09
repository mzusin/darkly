import React, { CSSProperties, MouseEvent } from 'react';

export interface IVIconsMenu {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
}

export const VIconsMenu = (props: IVIconsMenu) => {
    const { children, classes, style } = props;

    const onClick = (evt: MouseEvent) => {
        evt.stopPropagation();
    };

    return (
        <section
            onClick={ onClick }
            style={ style }
            className={ `relative z-20 flex flex-col items-center w-16 basis-16 h-screen bg-slate-800 border-r border-black overflow-hidden ${ classes || '' }` }>
            { children }
        </section>
    )
};