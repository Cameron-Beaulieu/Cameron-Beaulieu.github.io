function Project({banner, video, title, description, link, tags, slideShow}){
    const projectTags = tags.map((tag) => 
        <span className = "tech-tag">{tag}</span>
    ); 
    return(
        <div class = "project">
            <img src={banner} alt = "Project Banner" className = "banner" />
            {video}
            {slideShow}
            <div className = "project-title">{title}</div>
            <div className = "project-description">{description}</div>
            <a href = {link} className = "project-link"> Check Out The Project!</a>
            <div className = "project-tags">
                {projectTags}
            </div>
        </div>
    )
}

export default Project;