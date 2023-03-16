import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import blour from './blour.jpg'
import { Input } from '../components';

import { 
    Container,
    Titulo,
    Dados,
    Botao,
    Centro,
    } from "./styles"

type LoginFormulario = {
    nomeusuario: string
    email: string
    telefone: string
    senha: string
}

const formulario = yup.object().shape({
    nomeusuario: yup.string().required(),
    email: yup.string().required(),
    telefone: yup.string().required(),
    senha: yup.string().required(),
});

export const Register = () => {
    const {register, formState} = useForm<LoginFormulario>({
        resolver: yupResolver(formulario)                           //entender com o professor
    })

    const error = formState.errors;                                      //entender com o professor 

    const handleLogin = (data: LoginFormulario) => {
        console.log(data);   
    }
    return(
    <div>
        <Container style={{backgroundImage: `url(${blour})`, width: '100%'  }}>
        
            <Centro>
                <Titulo>Registre-se</Titulo>

                <Dados>Nome de usuario</Dados>
                <Input
                    label=''
                    placeholder='Informe seu nome...'
                    error={error.nomeusuario}
                    {...register('nomeusuario')}
                />

                <Dados>Email</Dados>
                <Input
                    label=''
                    placeholder='Informe seu email...'
                    error={error.nomeusuario}
                    {...register('email')}
                />

                <Dados>Telefone</Dados>
                <Input
                    label=''
                    placeholder='Informe seu telefone...'
                    error={error.nomeusuario}
                    {...register('telefone')}
                />

                <Dados>Senha</Dados>
                <Input
                    label=''
                    placeholder='Informe seu email...'
                    error={error.nomeusuario}
                    {...register('senha')}
                />
                
                <Botao><a href='/'>CADASTRAR</a></Botao>
            </Centro>
        </Container>
    </div>
    )  
}

export default Register