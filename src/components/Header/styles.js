import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 27px;
  justify-content: space-between;
  background: ${({ theme }) => theme.rose_dark_2};

  & .hamburger-react {
    display: none;
    border-radius: 4px;
    z-index: 999;
  }

  @media (max-width: 768px) {
    position: absolute;
    align-items: center;
    padding: 15px;
    background-color: transparent;
    z-index: 997;

    & > .hamburger-react {
      display: block;
    }
  }
`;

export const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 15vw;
    height: 15vw;
  }
`;

export const LocalTelSection = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  @media (max-width: 768px) {
    visibility: hidden;

    ${LocalTelSection} {
      display: none;
    }
  }
`;

export const LocalWrapper = styled(LinkRouter)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LocalIcon = styled(CiLocationOn)`
  font-size: 20px;
  color: ${({ theme }) => theme.blank};
`;

export const TelWrapper = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TelIcon = styled(BsTelephone)`
  font-size: 20px;
  color: ${({ theme }) => theme.blank};
`;

export const RightText = styled.p`
  color: ${({ theme }) => theme.grey};
  font-family: "Baloo Bhai 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 28px;

  @media (max-width: 768px) {
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    position: fixed;
    gap: 50px;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.white};
    transition: all 0.3s ease-in-out;
    z-index: 998;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
`;

export const NavLink = styled.li`
  list-style: none;
  transition: all 0.3s ease-in-out;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.blank};
    font-family: "Baloo Bhai 2";
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-in-out;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.logo_color};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
  }

  &:hover {
    transform: skewX(-15deg);

    & a {
      color: ${({ theme }) => theme.logo_color};
    }

    & a::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    & a {
      font-size: 24px;
      color: ${({ theme }) => theme.grey};

      &::after {
        background: ${({ theme }) => theme.rose_dark};
      }

      &:hover {
        color: ${({ theme }) => theme.rose_dark};
      }
    }
  }
`;