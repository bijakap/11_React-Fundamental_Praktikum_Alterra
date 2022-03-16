import './style.css';

export default function ListTodo(props){
    console.log(props)

    return (
        <div className='list-display'>
            {
                props.data.completed ? 
                <p className="Rounded-box">{props.data.title}</p>
                :
                <p className="Rounded-box"><del>{props.data.title}</del></p>
            }
            
        </div>
        
    )
}