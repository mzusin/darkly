import React, { MouseEvent } from 'react';

export interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    slideOnMobile?: boolean;
}

export const Panel = (props: IPanel) => {
    const { children, classes, slideOnMobile } = props;

    const onClick = (evt: MouseEvent) => {
        if(!slideOnMobile) return;
        evt.stopPropagation();
    };

    return (
        <section
            onClick={ onClick }
            className={ `${ slideOnMobile ? 'darkly-slide-m-panel' : 'hidden' } xl:block xl:static w-80 max-w-full h-screen bg-slate-800 ${ classes || '' }` }>
            { children }
        </section>
    )
};