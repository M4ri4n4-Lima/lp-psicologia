import styled from "styled-components";
import LeafIMG from "../../assets/leaf.png";
import Splash_1 from "../../assets/splash1.png";
import Splash_2 from "../../assets/splash2.png";

export const TherapyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  font-family: "Gupter";
  color: ${({ theme }) => theme.rose_dark};
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.rose_dark};
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 90%;
    line-height: 1.5;

    &::after {
      width: calc(100% - 40px);
      max-width: 380px;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 50px 0;
  background: ${({ theme }) => theme.rose_2};

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 400;
  font-family: "Calibri";
  color: ${({ theme }) => theme.grey};
  text-align: justify;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 16px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10%;
  height: 150px;
  background: ${({ theme }) => theme.rose_dark};
  border-radius: 384px;
  filter: blur(113.27437591552734px);
`;

export const Leaf = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 250px;
  height: 100%;
  background-image: url(${LeafIMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 45px;
  min-height: 800px;
  width: 100%;
  position: relative;
  
  @media screen and (max-width: 1551px) {
    padding: 0 200px;
  }

  @media screen and (max-width: 1161px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 961px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 861px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 0;
    width: 90%;
  }
`;

export const Splash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 100%;
  background-image: url(${Splash_1});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Splash2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-image: url(${Splash_2});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  width: 350px;
  height: 260px;
  padding: 30px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.rose_dark};
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1551px) {
    &:nth-child(3) {
      box-shadow: 12px 9px 30px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 768px) {
        box-shadow: none;
      }
    }

    &:nth-child(4) {
      box-shadow: -12px 9px 30px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 768px) {
        box-shadow: none;
      }
    }

    &:nth-child(5) {
      box-shadow: 12px -9px 30px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 768px) {
        box-shadow: none;
      }
    }

    &:nth-child(6) {
      box-shadow: -12px -9px 30px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 768px) {
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    gap: 40px;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  font-family: "Gupter";
  color: ${({ theme }) => theme.blank};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BoxText = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Gupter";
  color: ${({ theme }) => theme.blank};
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;