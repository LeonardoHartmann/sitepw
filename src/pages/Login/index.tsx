import { useForm } from 'react-hook-form';
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
  password: string;
}



const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SigIn = () => {
  const { register, handleSubmit, formState } = useForm<SigIn>({
    resolver: yupResolver(schema)
  });

  const errors = formState.errors;                                      //entender com o professor 

  const handleSignIn = (data: SigIn) => {
    console.log(data);  
  }

    return (
        <Container style={{ backgroundImage: `url(${frente})`, width: '100%' }}>
          <Imagem>
            <img src={logo} alt="Logo" />
          </Imagem>
          <Fora onSubmit={handleSubmit(handleSignIn)}>

            <Login>Login</Login>
            <Input
              label=''
              placeholder='Digite seu usuário'
              error={errors.username}
              {...register('username')}
            />
    
            <Senha>Senha</Senha>
            <Input
              type='password'
              label=''
              placeholder='Digite sua senha'
              error={errors.password}
              {...register('password')}
            />
    
            <EsqueceuSenha>
            <a href='/registro'>Esqueceu sua senha?</a>
            </EsqueceuSenha>
    
          <div>
              <div>
                <Salvar>
                <input type='checkbox'/>
                Deixe-me conectado
                </Salvar>
              </div>  
            </div>

            <Botao type='submit'>Entrar</Botao>
          
          </Fora>
        </Container>
      );
}

export default SigIn