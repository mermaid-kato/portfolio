import styled from 'styled-components';

export const Careers = () => {
  const careerItems = [
    {
      year: "2000年",
      title: "xxxプロジェクトに従事"
    },
    {
      year: "2001年",
      title: "xxxプロジェクトに従事"
    },
    {
      year: "2002年",
      title: "テストプロジェクトに従事"
    },
    {
      year: "2003年",
      title: "xxxプロジェクトに従事"
    },
    {
      year: "2004年",
      title: "ECサイトの設計・開発"
    },
    {
      year: "2005年",
      title: "ECサイトの設計・開発"
    },
    {
      year: "2006年",
      title: "施設予約プロジェクト"
    },
    {
      year: "2007年",
      title: "AWSの構築作業"
    }
  ];

  return (
    <AppCareer>
      <CareerTitle>Career</CareerTitle>
      <CareerGroup>
      <>
        {
          careerItems.map((career) => {
            return <CareerPj>{career.year}：{career.title}</CareerPj>
          })
        }
      </>
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
