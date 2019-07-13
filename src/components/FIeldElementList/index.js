import React, { Component } from 'react'
import ToDoList from '../ToDoList'


const INITIAL_STATE = {
    elements: [],
    element: ""
}

class FieldElement extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
        if(localStorage.getItem("elements")===null)
        {
            localStorage.setItem("elements",JSON.stringify(this.state.elements))
            console.log("elements",JSON.parse(localStorage.getItem("elements")))
        }  
    }

    componentDidMount()
    {
        if(localStorage.getItem("elements")===null)
        {
            localStorage.setItem("elements",JSON.stringify(this.state.elements))
            console.log("elements",JSON.parse(localStorage.getItem("elements")))
        }
        else
        {
            this.setState({
                elements:JSON.parse(localStorage.getItem("elements"))
            })
        }
    }

    onDeleteElement = (elementN) => {
        this.state.elements.splice(elementN, 1)
        this.setState(
            {
                elements: [...this.state.elements]
            }
        )
        localStorage.setItem("elements",JSON.stringify(this.state.elements))
    }

    clicked = () => {
        this.state.elements.push(this.state.element)
        this.setState({
            element: "",
            elements: [...this.state.elements]
        })
        localStorage.setItem("elements",JSON.stringify(this.state.elements))
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {
            element
        } = this.state

        const isInvalid = element === ""
        return (
            <div>
                <div className="form-group mx-sm-3 mb-2">
                    <label className="sr-only">Element</label>
                    <input name="element" onChange={this.onChange} type="text" className="form-control" id="inputMail" placeholder={"element"} value={element} />
                </div>
                <button disabled={isInvalid} onClick={this.clicked} className="btn btn-primary mb-2">Add to the list</button>
                {/*this.props.renderx(this.state.elements, this.onDeleteElement)*/}
                <ToDoList elements={this.state.elements} onDelete={this.onDeleteElement}></ToDoList>
            </div>
        )
    }
}

export default FieldElement