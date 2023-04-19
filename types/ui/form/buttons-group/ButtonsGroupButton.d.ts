import React from 'react';
export interface IButtonsGroupButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
}
export declare const ButtonsGroupButton: (props: IButtonsGroupButton) => JSX.Element;
