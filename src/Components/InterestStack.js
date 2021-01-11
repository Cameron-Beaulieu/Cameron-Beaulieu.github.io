import chess from '../Images/chess.png';
import coding from '../Images/coding.png';
import karate from '../Images/karate.png';
import playingCards from '../Images/playing-cards.png';
import running from '../Images/running.png';
import movie from '../Images/video-camera.png';
import videoGame from '../Images/video-game-controller.png';
import weightlifting from '../Images/weightlifting.png';
import boardGame from '../Images/board-game.png';
import Interest from './Interest';

function InterestStack() {
    const rowOne = [[chess, "Chess"]]
    const rowTwo = [[coding, "Coding"], [karate, "Karate"]]
    const rowThree = [[playingCards, "Card Games"], [running, "Running"], [movie, "Movies"]]
    const rowFour = [[videoGame, "Video Games"], [weightlifting, "Weightlifting"]]
    const rowFive = [[boardGame, "Board Games"]]

    return (
        <div id="interests">
            <h1 className="title">Interests</h1>
            <div id="interestsIcons">
                <div className="singleRow">
                    {rowOne.map((list, key) =>
                        <Interest key={key} icon={list[0]} title={list[1]} />
                    )}
                </div>
                <div className="doubleRow">
                    {rowTwo.map((list, key) =>
                        <Interest key={key} icon={list[0]} title={list[1]} />
                    )}
                </div>
                <div className="tripleRow">
                    {rowThree.map((list, key) =>
                        <Interest key={key} icon={list[0]} title={list[1]} />
                    )}
                </div>
                <div className="doubleRow">
                    {rowFour.map((list, key) =>
                        <Interest key={key} icon={list[0]} title={list[1]} />
                    )}
                </div>
                <div className="singleRow">
                    {rowFive.map((list, key) =>
                        <Interest key={key} icon={list[0]} title={list[1]} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default InterestStack;