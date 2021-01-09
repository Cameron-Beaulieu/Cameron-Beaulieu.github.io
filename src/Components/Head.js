import { Helmet } from 'react-helmet';

function Head(){
    return(
        <Helmet>
            <title>CAMERON BEAULIEU</title>
            <meta name = "description" content = "Hey, my name is Cameron Beaulieu, currently a CS student, soon to be a Software Engineer"/>
            <meta name = "author" content = "Cameron Beaulieu" />
            <meta name = "keywords" content = "Cameron Beaulieu, Queen's University, Software Engineer, Programmer, Computer Science, Student, University Student"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        
    )
}
export default Head;