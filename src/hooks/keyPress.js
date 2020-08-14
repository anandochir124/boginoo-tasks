import { useEffect, useState } from 'react';

export const useKeyPress = (key) => {
    const [state, setState] = useState(false);

    const handleKeyPress = (e) => {
        console.log(e.key, key)
        if(key == e.key || key == e.keyCode) {
            setState(true);
        } else {
            setState(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress)

        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [key])

    return state;
}