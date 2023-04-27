import React from 'react';
import 'toolcool-color-picker';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'toolcool-color-picker': any;
        }
    }
}

export interface IColorPicker {
    color: string;
    setColor?: Function;
    children?: React.ReactNode;
    classes?: string;
}

export const ColorPicker = (props: IColorPicker) => {
    const { color, setColor, children, classes } = props;

    return (
        <section className={ `flex items-center justify-between ${ classes || '' }` } >
            <div>
                { children }
            </div>
            <div>
                <toolcool-color-picker color={ color } setColor={ setColor } />
            </div>
        </section>
    )
};