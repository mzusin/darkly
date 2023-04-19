import React from 'react';
interface IColorPicker {
    children?: React.ReactNode;
    classes?: string;
    width?: string | number;
}
declare const ColorPicker: (props: IColorPicker) => JSX.Element;
export default ColorPicker;
