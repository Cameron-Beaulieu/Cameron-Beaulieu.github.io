function Project({ banner, video, title, description, link, tags, slideShow }) {

    return (
        <div class="project">
            <img src={banner} alt="Project Banner" className="projectBanner" />
            {video}
            {slideShow}
            <div className="projectTitle">{title}</div>
            <div className="projectDescription">{description}</div>
            <a href={link} className="projectLink"> Check Out The Project!</a>
            <div className="projectTags">
                {tags.map((tag) =>
                    <span className="techTag">{tag}</span>
                )}
            </div>
        </div>
    )
}

export default Project;