/* eslint-disable react/prop-types */
import { Collapse } from 'react-collapse';
import { AddButton, Answer, Question, QuestionBox, QuestionTopSection, RemoveButton } from './styles';

const DropDown = ({ open, toggle, title, desc }) => {
  return (
    <QuestionBox>
      <QuestionTopSection onClick={toggle}>
        <Question>{title}</Question>
        {open ? <RemoveButton /> : <AddButton />}
      </QuestionTopSection>
      <Collapse isOpened={open}>
        <Answer>{desc}</Answer>
      </Collapse>
    </QuestionBox>
  )
}

export default DropDown;