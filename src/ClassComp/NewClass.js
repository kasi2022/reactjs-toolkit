import React, { Component } from 'react'

export class NewClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:"John",
             phone:9916004060,
             city:"chennai",
        }
        console.log("constructor -1")
    }
    componentDidMount(){
        console.log("component didmount-2")
        setTimeout( ()=>{
            this.setState({name:"RajKumar"})
        },2000)

    }
     chnageCity= ()=>{
           }
    render() {
        console.log("Reander working -3")
        return (
            <div>
                <h1>User Name {this.state.name}</h1>
                <h1>User PhoneNumber{this.state.phone}</h1>
                <h1>User City {this.state.city}</h1>
                {/* <button onClick={this.changecity}>Change</button> */}
                <button onClick={this.chnageCity}>Change</button>
            </div>
        )
    }
}

export default NewClass
