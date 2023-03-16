
import { 
    Container,
    Titulo,
    Dados,
    Botao,
     } from "./styles"


const Register = () => {
    return(
        <div>
            <Container>
                <Titulo>Registe-se aqui!</Titulo>

                <Dados>Nome de usuario</Dados>
                <input></input>

                <Dados>Senha</Dados>
                <input></input>
                <Botao>CADASTRAR</Botao>
            </Container>
        </div>
    )
}

export default Register