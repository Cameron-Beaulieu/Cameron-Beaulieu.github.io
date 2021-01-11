function Club({ image, title, description, link, linkName }) {
    return (
        <div className="club">
            <img className="clubPhoto" src={image} alt="Club Photo" />
            <div className="clubInfo">
                <span className="clubTitle">{title}</span>
                <p className="clubDescription">{description}</p>
                <a className="clubLink" href={link}>{linkName}</a>
            </div>
        </div>
    )
}

export default Club;