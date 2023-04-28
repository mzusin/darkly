import React, { CSSProperties, MouseEvent } from 'react';

export interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    slideOnMobile?: boolean;
}

export const Panel = (props: IPanel) => {
    const { children, classes, style, slideOnMobile } = props;

    const onClick = (evt: MouseEvent) => {
        if(!slideOnMobile) return;
        evt.stopPropagation();
    };

    return (
        <section
            onClick={ onClick }
            style={ style }
            className={ `${ slideOnMobile ? 'darkly-slide-m-panel' : 'hidden' } xl:flex flex-col xl:static w-80 max-w-full h-screen bg-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};