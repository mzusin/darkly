import React from 'react';

interface IVIconsMenuLogo {
    href?: string;
    children?: React.ReactNode;
    classes?: string;
    title?: string;
}

const VIconsMenuLogo = (props: IVIconsMenuLogo) => {
    const { children, classes, href, title } = props;

    return (
        <a
            href={ href }
            title={ title }
            className={ `flex justify-center items-center w-full px-4 py-3 transition-transform hover:scale-125 ${ classes || '' }` }>
            { children }
        </a>
    )
};

export default VIconsMenuLogo;