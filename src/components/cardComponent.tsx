/*
    Custom card component with fullscreen modal.
*/
const Card = ({...props}) => {
    return(
        <>
        <div className="card text-center">
            <img src={props.imgSource} className="card-img-top img-fluid custom-card-img-top" alt={props.imgDescription}/>
            <div className="card-body bg-dark">
                <h5 className="card-title text-white">{props.projectName}</h5>
                <br/>
                <p className="card-text text-white">{props.projectDescriptionShort}</p>
                <br/>
                <button type="button" className="btn w-100 btn-lg btn-outline-info btn-block" data-bs-toggle="modal" data-bs-target={props.projectModalName}>
                    <span>Lue lisää</span>
                </button>
                <br/>
            </div>
        </div>
        {/* Modal of card */}
        <div className="modal fade" id={props.projectModalLabel} tabIndex={-1} aria-labelledby={props.projectModalLabel} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id={props.projectModalLabel}>
                            {props.projectName}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body justify-content-center">
                        <div>
                            <h5>Projektin kuvaus</h5>
                            {props.projectDescriptionLong}
                            <br/>
                            <br/>
                            { props.projectGitHubRepository !== "" && 
                            <>
                            <h5>Linkki projektin GitHub sivulle</h5>
                            <p>
                                <a href={props.projectGitHubRepository} target="_blank" rel="noreferrer" className="link-success link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">
                                    {props.projectGitHubRepository}
                                </a>
                            </p>
                            <br/>
                            </>
                            }
                            <a href={props.projectLink} target="_blank" rel="noreferrer" role="button" className="btn w-100 btn-md btn-info text-white">
                                Avaa projekti
                            </a>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn w-50 btn-lg btn-danger" data-bs-dismiss="modal">
                            <span>Sulje</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Card;