import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){

  return(
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At veniam quae eos voluptatem maiores sint in excepturi,
            dolores deleniti iure impedit reprehenderit magni
            dignissimos repellat aspernatur distinctio dolore ad autem!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At veniam quae eos voluptatem maiores sint in excepturi,
            dolores deleniti iure impedit reprehenderit magni
            dignissimos repellat aspernatur distinctio dolore ad autem!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At veniam quae eos voluptatem maiores sint in excepturi,
            dolores deleniti iure impedit reprehenderit magni
            dignissimos repellat aspernatur distinctio dolore ad autem!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}