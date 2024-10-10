import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

const ContactInfo = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  font-weight: bold;
`;

export default function Card() {
  return (
    <CardContainer>
      <ProfileImage
        src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos_23-2149436189.jpg?t=st=1727994042~exp=1727997642~hmac=5eb0e4c823ffeeec67cb8182353848a7006b8aa29c9ee359e4f488fd39f3ebcd&w=740"
        alt="Lucas Silva"
      />
      <Name>Lucas Silva</Name>
      <Title>Desenvolvedor Front-End</Title>
      <ContactInfo>Contato: lucas.silva@gmail.com</ContactInfo>
      <Button href="https://github.com" target="_blank">
        GitHub
      </Button>
      <Button href="https://linkedin.com" target="_blank">
        LinkedIn
      </Button>
    </CardContainer>
  );
}
