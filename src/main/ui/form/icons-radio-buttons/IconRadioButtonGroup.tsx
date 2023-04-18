import React from 'react';

interface IIconRadioButtonGroup {
    children?: React.ReactNode;
    classes?: string;
}

const IconRadioButtonGroup = (props: IIconRadioButtonGroup) => {
    const { children, classes } = props;
    
    return (
        <section className={ `m-4 grid grid-cols-4 gap-2 ${ classes || '' }` } >
            { children }
        </section>
    )
};

export default IconRadioButtonGroup;