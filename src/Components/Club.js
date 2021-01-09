function Club({image,title,description,link,linkName}){
    return (
        <div className = "club">
        <img src = {image} alt = "Club Photo" />
        <span className = "club-title">{title}</span>
        <p className = "club-description">{description}</p>
        <a className = "club-link" href = {link}>{linkName}</a>
        </div>
    )
}

export default Club;