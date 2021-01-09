import robomasters from '../Images/robomasters.png';
import compsa from '../Images/compsa.png';
import orientation from '../Images/orientation.png';
import esports from '../Images/esports.jpg';
import Club from './Club';

function ClubsStack() {
    const clubs = [
        [robomasters, "Robomasters", "I currently am a software developer on the AI team as part of the Queen's Knights RoboMasters club. I work to research, develop, and optimize various software including image detection, game theory, operation of robots, and other software used in the RoboMasters competitions.", "https://www.facebook.com/queensrobomaster/", "Robomasters on Facebook"],
        [compsa, "Queen's Computing Students Association", "I currently serve as the Recruitment Manager for the Queen's Computing student government. In this role, I am resposible for connecting with alumni, reaching out to computing students on how to best aid them in their professional development, and to organize events allowing them to network and grow their skills. I am also a student mentor, aiding first year students with any matter they need help with.", "https://www.compsa.queensu.ca/", "COMPSA Website"],
        [orientation, "Queen's Computing Orientation 2020", "I welcomed incoming Computing Students to Queen's university as an Orientation Leader for Queen's Computing Orientation 2020. As part of this role, I helped to create a safe, inclusive, and inviting envinronment while guiding incoming students through activities and icebreakers. In preparation for this position, I completed many training programs, such as Leadership Training, Disability Training, and Positive Space Training.", "http://qcomputingorientation.ca/", "Computing Orientation Website"],
        [esports, "Queen's Esports Association", "I competeted for and captained the League of Legends team as part of the Queen's Esports association against various universities across Canada. In this role I organized practices with other team members and was the top player for the team.", "https://www.facebook.com/Queensesports/", "Queen's Esports Association on Facebook"]
    ]
    return (
        <div id = "clubs">
            <h1 className="title">Clubs I'm Apart Of</h1>
            {clubs.map((club) =>
                <Club image={club[0]} title={club[1]} description={club[2]} link={club[3]} linkName={club[4]} />
            )}
        </div>
    )
}

export default ClubsStack;