import React from 'react';

export default function Button({ lable, bgcolor,...restProps }) {
    return (
        <button className={`px-3 py-2 text-white ${bgcolor}`} {...restProps}>
            {lable}
        </button>
    )
}