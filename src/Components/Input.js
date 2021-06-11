import React, { Component } from 'react'
import InputItems from './InputItems'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: '',
            newInput: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            todos: ''
        })
        let userInput = { message: this.state.todos, id: Math.random() }
        this.state.newInput.push(userInput)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            todos: e.target.value
        })
    }

    deleteItem(id) {
        console.log(id)
        const filterArr = this.state.newInput.filter(item => {
            return item.id !== id
        })
        this.setState({
            newInput: filterArr
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What do you need to do</label>
                    <input value={this.state.todos} onChange={this.handleChange} type="text" />
                    <input type="submit" value='add todo' />
                    <InputItems delete={this.deleteItem} todos={this.state.newInput} />
                </form>
            </div>

        )
    }
}


export default Input

