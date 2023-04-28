import React, { CSSProperties } from 'react';

export interface IVIconsMenuLogo {
    href?: string;
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    title?: string;
}

export const VIconsMenuLogo = (props: IVIconsMenuLogo) => {
    const { children, classes, href, title, style } = props;

    return (
        <a
            href={ href }
            title={ title }
            style={ style }
            className={ `hidden xl:flex justify-center items-center w-full px-4 py-3 transition-transform hover:scale-125 ${ classes || '' }` }>
            { children }
        </a>
    )
};