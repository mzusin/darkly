import React, { useState } from 'react';
import { InputNumber } from 'mz-react-input-number';

export interface INumberTextBox {
    children?: React.ReactNode;
    classes?: string;
    width?: string|number;
}

export const NumberTextBox = (props: INumberTextBox) => {
    const { children, classes, width } = props;

    const style = {
        width,
    };

    const [value, setValue] = useState(10);

    return (
        <section className={ `flex items-center justify-between ${ classes || '' }` } >
            <div>
                { children }
            </div>
            <div>
                <InputNumber
                    value={ value }
                    step={ 0.1 }
                    onChangeCallback={ setValue }
                    inputStyles={ style }
                    inputClasses="bg-slate-900 transition border-2 border-slate-700 hover:border-slate-600 focus:border-slate-600 active:border-slate-600 outline-none rounded px-2 py-1 text-sm"
                />
            </div>
        </section>
    )
};