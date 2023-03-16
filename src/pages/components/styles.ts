import styled, { css } from "styled-components";

interface InputProprieties{
    isError: boolean;
}

export const Label = styled.label`
    margin-bottom: 4px;
`;

export const Input = styled.input<InputProprieties>`
    margin-bottom: 4px;
    color: blueviolet;
    height: 5vh;
    width: 22vw;

    ${(props) => props.isError && css`
        border-color: red;
    `}
`;

export const Error = styled.span`
    color: red;
`;