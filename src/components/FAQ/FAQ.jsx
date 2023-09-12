import { useState } from 'react';
import DropDown from './DropDown';
import {
  FAQContainer,
  QueryWrapper,
  QueryTitle,
  QuestionWrapper,
  RightSectionWrapper,
  RightSectionTitle,
  BoxWrapper,
  BoxTitleSection,
  Email,
  BoxTitle,
  BoxSubdescription,
  BoxDescription,
  Splash3,
  Splash2
} from './styles';

const Faq = () => {
  const [questions] = useState([
    {
      title: 'Qual a duração de uma sessão de terapia?',
      desc: 'As sessões de terapia geralmente têm uma duração de 50 minutos, embora possa haver variações dependendo das necessidades individuais e do acordo estabelecido com o terapeuta.'
    },
    {
      title: 'Com que frequência devo comparecer às sessões?',
      desc: 'A frequência das sessões dependerá das suas necessidades e disponibilidade. Inicialmente, é comum agendar sessões semanais, mas isso pode ser ajustado ao longo do processo terapêutico de acordo com a evolução e os objetivos estabelecidos.'
    },
    {
      title: 'A terapia é confidencial?',
      desc: 'Sim, a terapia é estritamente confidencial. Todas as informações compartilhadas durante as sessões são protegidas pelo sigilo profissional e não são divulgadas a terceiros sem o seu consentimento, a menos que haja risco iminente para sua segurança ou a de outras pessoas, conforme exigido por lei.'
    },
    {
      title: 'Quais as formas de pagamento?',
      desc: 'Aceitamos PIX, transferência bancária e PicPay. Essas opções oferecem praticidade e segurança para os clientes, permitindo que efetuem os pagamentos de forma conveniente.'
    }]);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }

    setOpen(index);
  }

  return (
    <FAQContainer id="query">
      <Splash2 />
      <Splash3 />
      <QueryWrapper>
        <QueryTitle>Dúvidas frequentes</QueryTitle>
        <QuestionWrapper>
          {questions.map((question, index) => (
            <DropDown
              key={index}
              title={question.title}
              desc={question.desc}
              open={open === index}
              toggle={() => toggle(index)}
            />
          ))}
        </QuestionWrapper>
      </QueryWrapper>
      <RightSectionWrapper>
        <RightSectionTitle>Ainda com dúvidas? <br />Entre em contato</RightSectionTitle>
        <BoxWrapper>
          <BoxTitleSection>
            <Email />
            <BoxTitle>Email</BoxTitle>
          </BoxTitleSection>
          <BoxSubdescription>
            Envie sua dúvida por e-mail
          </BoxSubdescription>
          <BoxDescription>
            marianalimapsicologia@gmail.com
          </BoxDescription>
        </BoxWrapper>
      </RightSectionWrapper>
    </FAQContainer>
  )
}

export default Faq;