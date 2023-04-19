import React from 'react';
export interface IColorPicker {
    children?: React.ReactNode;
    classes?: string;
    width?: string | number;
}
export declare const ColorPicker: (props: IColorPicker) => JSX.Element;
