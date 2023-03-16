import React, { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form";



import { Input as InputStyles, Label, Error } from "./styles"

interface InputProrieties extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    errors: FieldError;
}

export const Input = ({label, name, errors, ...rest}: InputProrieties) =>{
    return(
        <>
            <Label htmlFor={name}>{label}</Label>
            <InputStyles
                id={name}
                isError={!!errors}
                {...rest}
            />
            {errors}
        </>
    )
}
