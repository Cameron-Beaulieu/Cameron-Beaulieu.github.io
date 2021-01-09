function Interest({icon,title,line}){
    return (
        <div className = {line}>
            <img className = "interest-image" src = {icon}/>
            <p className = "interest-text">{title}</p>
        </div>
    )
}
export default Interest;