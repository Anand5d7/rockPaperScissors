import {
  GameResultContainer,
  ResultImageContainer,
  ResultTextImageContainer,
  LabelText,
  ResultImageItem,
  ResultText,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  // eslint-disable-next-line
  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <GameResultContainer>
      <ResultImageContainer>
        <ResultTextImageContainer>
          <LabelText>YOU</LabelText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImageContainer>
        <ResultTextImageContainer>
          <LabelText>OPPONENT</LabelText>
          <ResultImageItem src={image} alt="opponent choice" />
        </ResultTextImageContainer>
      </ResultImageContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </GameResultContainer>
  )
}
export default GameResultView
