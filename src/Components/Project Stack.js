import swypeIcon from '../Images/swypelogored.png';
import veilIcon from '../Images/veil.png';
import Project from './Project';

function ProjectStack(){
    return(
        <div id = "project-stack">
            <h1 className = "title">Projects</h1>
            <Project 
            banner = {swypeIcon} 
            video = {<iframe width="560" height="315" src="https://www.youtube.com/embed/klGUyrtO-fk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            slideShow = {<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQiL6c_FEHcIYuBsI-ZJiWa6SMKzCqnRfGexPS0PdM0GdIgoxuOBVDdOm1nHzWLznk1Hj9yydmXu9y3/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>}
            title = "Swype"
            description = "A mobile application which aims to simplify choosing a resturaunt to order from through utilizing Hick's Law. Swype allows users to input a criteria for resturaunts and then Swype through options matching that criteria. Once they make a decision, Swype gives them everything they need to place an order. Designed and developed within a 36 hour period as part of Hack Western 7."
            link = "https://github.com/Cameron-Beaulieu/HackWestern_Swype"
            tags = {["JavaScript","React Native","Expo"]}
            />
            <Project
            banner = {veilIcon}
            video = {<iframe width="560" height="315" src="https://www.youtube.com/embed/igIYOyoMusU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            slideShow = {<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSEDARyx6fZZ2RhfyUOZnkLMVjiUVqXhaz2lspLo8qdZ-WbPpQxqNp3c8ILl6QkqtnuZKZ0RmFsD9Uh/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>}
            title = "Veil"
            description = "A mask detection web application. Veil utilizes face recognition along with a trained image classifier to detect wether users in the picture taken using a webcam are wearing facemasks or not. Veil was created in a 24 hour time period as part of hackHer 2020."
            link = "https://github.com/Cameron-Beaulieu/HackHer_FaceMask"
            tags = {["Python","JavaScript","CSS","HTML","Flask","React","TensorFlow"]}
            />
        </div>
    )
}

export default ProjectStack;