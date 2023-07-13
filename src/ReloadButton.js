import "./ReloadButton.css" 

const ReloadButton = (props) =>{
    return(
        <button className="reload-button" onClick={props.reloadPage}>Aktualizovat souřadnice</button>
    )
}
export default ReloadButton