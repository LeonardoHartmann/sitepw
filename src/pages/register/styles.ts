import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Centro = styled.div`
    width: 38vw;
    height: 80vh;  
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    background-color: rgba(230, 184, 195, 0.4);
    padding: 30px 125px;
    border-radius: 5%;
    align-items: row;
`;

export const Titulo = styled.div`
    font-size: 3rem;
    color: #871262;

    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-block-end: 10%;
`;

export const Dados = styled.div`
    margin-top: 5%;
    font-size: 2rem;
    align-items: flex-start;
    justify-content: center;
    color: #871262;
`;

export const Botao = styled.div`
    font-size: 2rem;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 10vh;
    background-color: #871262;
    border-radius: 22px;
    padding: 25px 20px;
    margin-top: 15%;
    margin-left: 15%;

    &:hover{
        opacity: 0.8;
    }
`;