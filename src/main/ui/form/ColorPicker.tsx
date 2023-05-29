import React, { CSSProperties, useEffect, useRef } from 'react';
import 'toolcool-color-picker';
// import ToolCoolColorPicker from 'toolcool-color-picker';

declare global {
    // eslint-disable-next-line
    namespace JSX {
        interface IntrinsicElements {
            // eslint-disable-next-line
            'toolcool-color-picker': any;
        }
    }
}

export interface IColorPicker {
    color: string;
    setColor?: Function;
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    popupPosition?: string;
    buttonWidth?: string;
    buttonHeight?: string;
    buttonPadding?: string;
}

export const ColorPicker = (props: IColorPicker) => {
    const { color, setColor, children, classes, style, popupPosition, buttonWidth, buttonHeight, buttonPadding } = props;

    const colorPickerRef = useRef<HTMLElement>();

    useEffect(() => {

        const colorPicker = colorPickerRef.current;

        const onColorChange = (evt: Event) => {
            if(typeof setColor !== 'function') return;
            const customEvent = evt as CustomEvent;
            setColor(customEvent.detail.rgba);
        };

        colorPicker?.addEventListener('change', onColorChange);

        return () => {
            colorPicker?.removeEventListener('change', onColorChange);
        };
    }, [setColor]);

    return (
        <section className={ `flex items-center justify-between ${ classes || '' }` } style={ style }>
            <div>
                { children }
            </div>
            <div>
                <toolcool-color-picker
                    color={ color }
                    popup-position={ popupPosition }
                    button-width={ buttonWidth }
                    button-height={ buttonHeight }
                    button-padding={ buttonPadding }
                    ref={ colorPickerRef }
                />
            </div>
        </section>
    )
};