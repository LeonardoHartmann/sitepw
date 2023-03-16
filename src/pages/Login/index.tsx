import { FieldError } from 'react-hook-form/dist/types';
import { useForm } from 'react-hook-form/dist/useForm';
import { Input } from '../components';
import frente from './frente.jpg';
import logo from './logo.jpeg';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import {
    Imagem,
    Botao,
    Container,
    EsqueceuSenha,
    Fora,
    Login, 
    Salvar,
    Senha,
} from './styles'


type SigIn = {
  username: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SigIn = () => {
  const { register, handleSubmit, formState } = useForm<SigIn>({
    resolver: yupResolver(schema)
  });

  const errors = formState.errors;

  const handleSignIn = (data: SigIn) => {
    console.log(data);  
  }

    return (
        <Container style={{ backgroundImage: `url(${frente})`, width: '100%' }}>
          <Imagem>
            <img src={logo} alt="Logo" />
          </Imagem>
          <Fora onSubmit={handleSubmit(handleSignIn)}>
            {/* <Login>Login
            <input type='text' name='Login'/>
            </Login>
            <br></br> */}
            <Input
              label='Usuário'
              placeholder='Digite seu usuário'
              error={errors.username}
              {...register('username')}
            />
    
            <Senha>Senha
            <input type='text' name='Senha'/>
            </Senha>
            <br></br>
    
            <EsqueceuSenha>
            Esqueceu sua senha?
            </EsqueceuSenha>
    
            <Salvar>
            <input type='checkbox'/>
            Deixe-me conectado
            </Salvar>
            
            <br></br>
            <Botao>
              Entrar
            </Botao>
          </Fora>
        </Container>
      );
}

export default SigIn