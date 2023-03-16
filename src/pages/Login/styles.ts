import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 500;
  font-family: 'Prompt';
  margin-top: 50px;
  flex-direction: column;
  text-transform: inherit;
  color: #000000;
  max-width: 500px;
  width: 15vw;
  height: 10vh;
  margin-left: -15%;
  margin-block-end: -5%;
`;

export const Senha = styled.div`
  display: flex;
  font-size: 3rem;
  font-family: 'Montserrat';
  text-align: row;
  color: #000000;
  flex-direction: column;
  width: 15vw;
  height: 10vh;
  margin-top: 5%;
  margin-left: -15%;
  margin-block-end: -5%;
`;

export const Imagem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 32vw;
  background-color: #801877;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const Fora = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 40vw;
  background-color: #ffffff;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

`;

export const EsqueceuSenha = styled.div`
  display: flex;
  font-size: 1rem;
  font-family: 'Montserrat';
  align-items: flex-end;
  color: #0400ff;
  background-color: transparent;
  margin-left: 200px;
`;

export const Botao = styled.button`
  display: flex;
  font-size: 2rem;
  font-family: 'Gill Sans';
  align-items: center;
  flex-direction: center ;
  color: #ffffff;
  margin-top: 30px;
  padding: 0.20em 2em;
  background-color: #1c00bb;
  width: 10w;
  height: 4vh;

  &:hover{
   opacity: 0.40; 
  }
`;

export const Salvar = styled.div`
  display: flex;
  font-size: 1rem;
  font-family: 'Montserrat';
  align-items: flex-start;
  flex-direction: row;
  color: #0400ff;
  background-color: transparent;
  margin-right: 200px;
  `;