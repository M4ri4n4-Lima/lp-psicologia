import { styled } from "styled-components";

export const DoctoraliaAnchor = styled.a.attrs({
  href: "https://www.doctoralia.com.br/mariana-sa-de-lima/psicologo/recife",
  target: "_blank",
  rel: "nofollow",
  "data-zlw-doctor": "mariana-sa-de-lima",
  "data-zlw-type": "big_with_calendar",
  "data-zlw-opinion": "false",
  "data-zlw-hide-branding": "true",
  "data-zlw-saas-only": "false"
})`
  display: block;
  text-align: center;
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  font-family: Calibri;
  color: ${({ theme }) => theme.bg_box};
  padding: 5px 15px;
  min-height: 100%;
  position: relative;
  text-decoration: none;
  background: ${({ theme }) => theme.blue};
  border-radius: 100px;
  box-shadow: 0px 4.381547451019287px 0px 0px ${({ theme }) => theme.blue_dark};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 25px -10px ${(props) => props.$light ? props.theme.blue_dark : props.theme.blank};
  }

  @media (max-width: 925px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;