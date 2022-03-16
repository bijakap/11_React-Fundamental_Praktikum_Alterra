import './style.css';
import ListTodo from './Component/ListTodo';

export default function(){
    const listTodo = [ 
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
      ]
      

    return(
        <div>
            <div className='Header'>
                <h1 className='Title'>To Do App</h1>
            </div>
            {
                listTodo.map((data, index) => {
                    return(
                        <ListTodo data={data} key={index} />
                    )
                })
            }
        </div>
        
    )
}