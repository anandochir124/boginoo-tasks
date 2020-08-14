import react, { useState } from 'react';

export const useInput = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const bind = {
        value: state,
        onChange: (e) => setState(e.target.value)
    }

    const resetValue = () => setState(initialValue);

    return [state, bind, resetValue]
}