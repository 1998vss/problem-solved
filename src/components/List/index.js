import './index.css'

export default function List(props){
    return(
        <div>
            <ul>
                {props.items.map((nome)=>{
                    return(
                        <li>
                            {nome + " pica"}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

