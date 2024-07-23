import styled from 'styled-components';

export const Careers = () => {
  return (
    <AppCareer>
      <CareerTitle>Career</CareerTitle>
      <CareerGroup>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
        <CareerPj>2001年：xxxプロジェクトに従事</CareerPj>
      </CareerGroup>
    </AppCareer>
  );
};

const AppCareer = styled.div`
  background-color: white;
`;

const CareerTitle = styled.h1`
  margin: 0px;
  max-width: 100%;
  margin-left: 15px;
  font-size: 2.5em;
`;

const CareerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CareerPj = styled.div`
  text-align: center;
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;
