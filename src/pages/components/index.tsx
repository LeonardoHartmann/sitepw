import React, { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form";



import { Input as InputStyles, Label, Error } from "./styles"

interface InputProrieties extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    error?: FieldError;
}

export const Input = ({label, name, error, ...rest}: InputProrieties) =>{
    return(
        <>
            <Label htmlFor={name}>{label}</Label>
            <InputStyles                                            //entender melhor com o professor
                id={name}
                isError={!!error}
                {...rest}
            />
            {error}
        </>
    )
}
