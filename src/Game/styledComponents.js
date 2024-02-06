import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 30px;
  width: 30vw;
  @media screen and (min-width: 768px) {
    width: 50vw;
    padding: 50px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 30px;
  @media screen and (min-width: 768px) {
    width: 90%;
    height: 130px;
    align-self: center;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  line-height: 1, 5;
  font-weight: 500;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  align-items: center;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 100px;
  }
`
export const Paragraph = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  margin: 0px;
  padding-top: 10px;
`
export const ParaSpan = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
  margin: 0px;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 100px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
    padding-left: 100px;
    padding-right: 100px;
  }
`
export const PopUpButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  width: 100px;
  align-self: flex-end;
  align-items: center;
  border: none;
  margin-top: 50px;
  outline: none;
  border-radius: 6px;
`
export const RulesImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 60px;
  }
`

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) 
  }
`
export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const CloseButton = styled.button`
  font-size: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const RulesImage = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
