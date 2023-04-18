import React from 'react';

interface IVIconsMenuLogo {
    children?: React.ReactNode;
    classes?: string;
}

const VIconsMenuLogo = (props: IVIconsMenuLogo) => {
    const { children, classes } = props;

    return (
        <a className={ `flex justify-center items-center w-full px-4 py-3 ${ classes || '' }` }>
            { children }
        </a>
    )
};

export default VIconsMenuLogo;