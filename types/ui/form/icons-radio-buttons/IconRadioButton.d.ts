import React from 'react';
interface IIconRadioButton {
    groupName: string;
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    checked?: boolean;
}
declare const IconRadioButton: (props: IIconRadioButton) => JSX.Element;
export default IconRadioButton;
