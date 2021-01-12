


const ExtraContent = (props) => {
    return ( <div className="extra">
        <div className="pitanje">{props.children}</div>
        <div className="newContent">
            <div className="dugmici">
                <div className="potvrdi">Approve</div>
                <div className="odbaci">Reject</div>
            </div>
        </div>
    </div> );
}
 
export default ExtraContent;