import React from 'react';
import { InputNumber } from 'mz-react-input-number';

export interface INumberTextBox {
    children?: React.ReactNode;
    classes?: string;
    width?: string|number;

    min?: number | string;
    max?: number | string;
    step?: number | string;
    decimalPlaces?: number;
    removeRegex?: RegExp;

    value?: number | string;
    setValue?: Function;
}

export const NumberTextBox = (props: INumberTextBox) => {
    const { children, classes, width } = props;

    const style = {
        width,
    };

    return (
        <section className={ `flex items-center justify-between ${ classes || '' }` } >
            <div>
                { children }
            </div>
            <div>
                <InputNumber
                    value={ props.value }
                    onChangeCallback={ props.setValue }

                    min={ props.min }
                    max={ props.max }
                    step={ props.step }
                    decimalPlaces={ props.decimalPlaces }
                    removeRegex={ props.removeRegex }

                    inputStyles={ style }
                    inputClasses="bg-slate-900 transition border-2 border-slate-700 hover:border-slate-600 focus:border-slate-600 active:border-slate-600 outline-none rounded px-2 py-1 text-sm"
                />
            </div>
        </section>
    )
};