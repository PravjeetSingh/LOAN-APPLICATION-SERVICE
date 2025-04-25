import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const InputField = ({ label, name, value, onChange, placeholder }) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </FormControl>
    );
};

export default InputField;
