import React from 'react';

interface IButtonsGroupButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
}

const ButtonsGroupButton = (props: IButtonsGroupButton) => {
    const { children, classes, title, selected } = props;

    const selectedClasses = selected ? 'bg-sky-800' : 'bg-slate-900';

    return (
        <button
            type="button"
            title={ title }
            className={ `flex justify-center items-center w-16 h-12 cursor-pointer transition-colors rounded ${ selectedClasses } ${ classes || '' }` } >
            { children }
        </button>
    )
};

export default ButtonsGroupButton;