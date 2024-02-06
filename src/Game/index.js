import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ItemsImagesContainer,
  Paragraph,
  ParaSpan,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  CloseContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state
    // eslint-disable-next-line
    const {id, image} = apponentChoice

    return (
      <GameResultView
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    // eslint-disable-next-line
    const {showResult, myChoice, apponentChoice, score} = this.state

    return (
      <AppContainer>
        <MainContainer>
          <ScoreContainer>
            <ItemsContainer>
              <Heading>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
                <br />
              </Heading>
            </ItemsContainer>
            <ScoreCardContainer>
              <Paragraph>Score</Paragraph>
              <ParaSpan>{score}</ParaSpan>
            </ScoreCardContainer>
          </ScoreContainer>
          {showResult ? this.onGetResult() : this.onGetImages()}
          <PopUpContainer>
            <Popup
              modal
              trigger={<PopUpButton type="button">RULES</PopUpButton>}
            >
              {close => (
                <RulesImageContainer>
                  <CloseContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      <RiCloseLine />
                    </CloseButton>
                  </CloseContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageContainer>
              )}
            </Popup>
          </PopUpContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default Game
