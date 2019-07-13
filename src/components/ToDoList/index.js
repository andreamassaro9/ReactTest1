import React from 'react'
/*const ToDoList = ({elements})=>(
    <ToDoLista elements={elements}/>
)

class ToDoLista extends Component {
    onDelete(index){
        this.props.onDeleteElement(index)
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <h1>To do list</h1>
                    </tr>
                </thead>
                <tbody>
                    
                {/*this.props.elements.map((elementList, i) => <tr key={i}><td>{elementList}</td> 
                    <td><button onClick={()=>this.onDelete(i)} className="btn btn-primary mb-2">Delete</button></td></tr>)*
                    console.log("aaaaaa",this.props.elements)
                }
                    
                </tbody>
            </table>
        )
    }
}

export default ToDoList*/

/* WITH RENDER PROPS

const ToDoList = ({ elements,onDelete }) => (
    <table>
        <thead>
            <tr>
                <h1>To do list</h1>
            </tr>
        </thead>
        <tbody>

            {elements.map((elementList, i) => <tr key={i}><td>{elementList}</td>
                <td><button onClick={() => onDelete(i)} className="btn btn-primary mb-2">Delete</button></td></tr>)
            }
        </tbody>
    </table>
)

export default ToDoList*/

//WITH LOCALSTORAGE
const ToDoList = (/*{ elements,onDelete } DESTRUCTURING ->*/components) => (
        <table>
            <thead>
                <tr>
                    <h1>To do list</h1>
                </tr>
            </thead>
            <tbody>
                {JSON.parse(localStorage.getItem("elements")).map((elementList, i) => <tr key={i}><td>{elementList}</td>
                    <td><button onClick={() => components.onDelete(i)} className="btn btn-primary mb-2">Delete</button></td></tr>)
                }
            </tbody>
        </table>
)

export default ToDoList