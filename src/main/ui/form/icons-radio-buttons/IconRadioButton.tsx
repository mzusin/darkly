import React from 'react';

export interface IIconRadioButton {
    groupName: string;
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    checked?: boolean;
    onChange?: Function;
}

export const IconRadioButton = (props: IIconRadioButton) => {
    const { children, classes, groupName, title, checked, onChange } = props;

    const checkedClasses = checked ? 'bg-sky-800' : 'bg-slate-900';

    return (
        <label
            title={ title }
            className={ `flex justify-center items-center w-16 h-12 cursor-pointer transition-colors rounded ${ checkedClasses } ${ classes || '' }` } >
            { children }
            <input
                name={ groupName }
                title={ title }
                type="radio"
                className="hidden"
                onChange={ (evt) => {
                    if(typeof onChange !== 'function') return;
                    onChange(evt);
                } }
            />
        </label>
    )
};