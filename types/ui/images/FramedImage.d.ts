import React from 'react';
interface IFramedImage {
    children?: React.ReactNode;
    classes?: string;
    width?: string | number;
    height?: string | number;
}
declare const FramedImage: (props: IFramedImage) => JSX.Element;
export default FramedImage;
