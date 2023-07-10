import { BoxesInfoContainer, BoxInfo, TextWrapper, Title, Text, Sigilo, Resultados, Confiança, Autonomia, ShapeWave } from './styles'

const BoxesInfo = () => {
  return (
    <BoxesInfoContainer id="boxes-info">
      <BoxInfo>
        <Sigilo />
        <TextWrapper>
          <Title>Sigilo</Title>
          <Text>
            O que é discutido na terapia, fica na terapia.
          </Text>
        </TextWrapper>
      </BoxInfo>
      <BoxInfo>
        <Confiança />
        <TextWrapper>
          <Title>Confiança</Title>
          <Text>
            Fale tudo que você quiser, sem medo de julgamentos.
          </Text>
        </TextWrapper>
      </BoxInfo>
      <BoxInfo>
        <Autonomia />
        <TextWrapper>
          <Title>Autonomia</Title>
          <Text>
            Tome atitudes práticas para vencer dificuldades.
          </Text>
        </TextWrapper>
      </BoxInfo>
      <BoxInfo>
        <Resultados />
        <TextWrapper>
          <Title>Resultados</Title>
          <Text>
            Veja sua vida melhorando ao longo do processo.
          </Text>
        </TextWrapper>
      </BoxInfo>
      <ShapeWave />
      <ShapeWave />
    </BoxesInfoContainer>
  )
}

export default BoxesInfo;