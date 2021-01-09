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
    const interestsList = [[chess, "Chess", "singleLine"], [coding, "Coding", "doubleLine"], [karate, "Karate", "doubleLine"], [playingCards, "Card Games", "tripleLine"],
    [running, "Running", "tripleLine"], [movie, "Movies", "tripleLine"], [videoGame, "Video Games", "doubleLine"], [weightlifting, "Weightlifting", "doubleLine"],
    [boardGame, "Board Games", "singleLine"]]

    return (
        <div id="interests">
            <h1 className="title">Interests</h1>
            {interestsList.map((list, key) =>
                <Interest key={key} icon={list[0]} title={list[1]} line={list[2]} />
            )}
        </div>
    )
}

export default InterestStack;