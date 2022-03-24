import './index.css'
export default function Button(props) {
    return(
        <div>
            <button id="default-button" style={{backgroundColor: props.color, color: props.textColor}}>{props.text}</button>
        </div>
        
    )
}