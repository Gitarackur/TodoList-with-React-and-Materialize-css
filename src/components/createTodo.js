import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';
import '../css/createTodo.css';



class NewTodo extends Component{
    state={
        task : ""
    }



    AddTodoo=(e)=>{
        e.preventDefault();
        if(this.state.task.trim().length=== 0){
            alert("your todo empty.. insert a todo with a content!!")
            return null;
        }else{
            this.props.AddTodoToState(this.state)
            this.setState({
                task : ""
            })
        }

        console.log(this.state)
    }



    handleChange=(e)=>{
        
        this.setState({
            [e.target.id] :  e.target.value
        }) 

        // this.setState({
        //     task :  e.target.value
        // }) 
    }


    render(){
        return(
            <div className="container">
                <div className="NewTodo">
                    <form className="container" onSubmit={this.AddTodoo}>
                        <div className="btn-holder">
                        <input type="text" className="inp" id="task" onChange={this.handleChange} value={this.state.task} placeholder="Type in your Todo and press enter"/>
                        </div>
                        
                        {/* <div className="btn-holder">
                        <button type="button" className="waves-effect waves-light btn add-btn" onClick={this.AddTodoo}>Add Todo</button>
                        </div> */}
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default NewTodo;