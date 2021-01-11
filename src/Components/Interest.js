function Interest({icon,title}){
    return (
        <div className = "interestSet">
            <img className = "interestImage" src = {icon}/>
            <p className = "interestText">{title}</p>
        </div>
    )
}
export default Interest;