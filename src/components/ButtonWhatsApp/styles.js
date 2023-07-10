import styled from 'styled-components';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const WhatsAppWrapper = styled(Link)`
  display: flex;
  padding: 5px 24px;
  align-items: center;
  gap: 23px;
  border-radius: 35.683px;
  background: ${({ theme }) => theme.rose};
  box-shadow: 0px 4.381547451019287px 0px 0px ${({ theme }) => theme.rose_dark};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 25px -10px ${(props) => props.$light ? props.theme.rose_dark : props.theme.blank};
  }

  @media (max-width: 925px) {
    padding: 5px 15px;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const WhatsAppText = styled.p`
  color: ${({ theme }) => theme.blank};
  font-size: 20px;
  font-family: "Baloo Bhai 2";
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 925px) {
    font-size: 16px;
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.blank};
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;