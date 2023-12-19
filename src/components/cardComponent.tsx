const Card = ({...props}) => {
    return(
        <>
        <div className="card text-center">
            <img src={props.imgSource} className="card-img-top img-fluid" alt={props.imgDescription}/>
            <div className="card-body">
                <h5 className="card-title">{props.projectName}</h5>
                <p className="card-text">{props.projectDescriptionShort}</p>
                <button type="button" className="btn w-100 btn-lg btn-primary btn-block" data-bs-toggle="modal" data-bs-target={props.projectModalName}>
                    <span>Lue lisää</span>
                </button>
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
                        <p>{props.projectDescriptionLong}</p>
                        <br/>
                        <a href={props.projectLink} target="_blank" className="btn w-50 btn-lg btn-info">Avaa</a>
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