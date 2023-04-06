import { Button } from '../../components/Button'
import { Container } from './styles'

export function Details(){

  return(
    <Container>
      <h1>Hello World!</h1>
      <span>Igor Xavier</span>
      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  )
}