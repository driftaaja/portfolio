/*
    Custom component to show profile information.
*/
const profileInfo = ({...props}) => {
    return(
        <>
            <div>
                <p style={{fontSize: 24,}}>
                    {props.title}
                </p>
                <hr/>
            </div>
            <div>
                {props.content}
                <br/>
                <br/>
            </div>
        </>
    )
};

export default profileInfo;