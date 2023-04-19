import React from 'react';

interface IButtonsGroup {
    children?: React.ReactNode;
    classes?: string;
}

export const ButtonsGroup = (props: IButtonsGroup) => {
    const { children, classes } = props;
    
    return (
        <section className={ `m-4 grid grid-cols-4 gap-2 ${ classes || '' }` } >
            { children }
        </section>
    )
};