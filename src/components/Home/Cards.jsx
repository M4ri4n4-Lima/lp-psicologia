import { AcolhimentoIcon, AutoconhecimentoIcon, Card, CardText, Cards, RelacionamentoIcon, SexualidadeIcon } from './styles'

const CardsComponent = () => {
  return (
    <Cards id="cards">
      <Card>
        <RelacionamentoIcon />
        <CardText>
          Relacionamento
        </CardText>
      </Card>
      <Card>
        <AutoconhecimentoIcon />
        <CardText>
          Autoconhecimento
        </CardText>
      </Card>
      <Card>
        <SexualidadeIcon />
        <CardText>
          Sexualidade
        </CardText>
      </Card>
      <Card>
        <AcolhimentoIcon />
        <CardText>
          Acolhimento
        </CardText>
      </Card>
    </Cards>
  )
}

export default CardsComponent;