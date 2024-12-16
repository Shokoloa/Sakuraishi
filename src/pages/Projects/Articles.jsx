const arrow = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>);

export const Articles = ({ data }) => {
    return (
        <div className="project-card_line">
            {data.map((project, index) => {
                let statusColor, statusText;

                if (project.status === "op") {
                    statusColor = '#22c55e';
                    statusText = 'En Ligne';
                } else if (project.status === "up") {
                    statusColor = '#0096c7';
                    statusText = 'Mise à Jour';
                } else if (project.status === "in") {
                    statusColor = '#f4a261';
                    statusText = 'En développement';
                } else {
                    statusColor = '#ef4444';
                    statusText = 'Hors Ligne';
                }

                return (
                    <article key={index} className="project-card" style={{ '--propertyColor': statusColor }} onClick={() => project.url ? window.open(project.url) : null}>
                        <div className="content">
                            <h2>{project.name} <span>{arrow}</span></h2>
                            <p>{project.desc}</p>
                        </div>
                        <hr style={{ marginTop: '10px', marginBottom: '-7px' }} />
                        <div className="footer">
                            <p className="stat">
                                <span className="animating" style={{ backgroundColor: statusColor }}></span>
                                {statusText}
                            </p>
                            <p className="duration">{project.date}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Articles;