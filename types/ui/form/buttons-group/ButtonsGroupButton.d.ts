import React from 'react';
interface IButtonsGroupButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
}
declare const ButtonsGroupButton: (props: IButtonsGroupButton) => JSX.Element;
export default ButtonsGroupButton;
