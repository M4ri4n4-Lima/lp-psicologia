import { AcolhimentoIcon, AutoconhecimentoIcon, Card, CardBorderBottomHover, CardText, Cards, RelacionamentoIcon, SexualidadeIcon } from './styles'

const CardsComponent = () => {
  return (
    <Cards id="cards">
      <Card>
        <RelacionamentoIcon />
        <CardText>
          Relacionamento
        </CardText>
        <CardBorderBottomHover />
      </Card>
      <Card>
        <AutoconhecimentoIcon />
        <CardText>
          Autoconhecimento
        </CardText>
        <CardBorderBottomHover />
      </Card>
      <Card>
        <SexualidadeIcon />
        <CardText>
          Sexualidade
        </CardText>
        <CardBorderBottomHover />
      </Card>
      <Card>
        <AcolhimentoIcon />
        <CardText>
          Acolhimento
        </CardText>
        <CardBorderBottomHover />
      </Card>
    </Cards>
  )
}

export default CardsComponent;