import { useState } from 'react';

export default function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleInputChange
    };
}