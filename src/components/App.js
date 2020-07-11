import React from 'react';
import '../css/App.css';
import {Component} from 'react'
import NewTodo from '../components/createTodo'
import AddTodo from '../components/AddTodo'
import AccomplishedTodo from '../components/AccomplishedTodo'
import 'materialize-css/dist/css/materialize.min.css'



class App extends Component {

  state={
    todos:[
      // {task:"Buy Groceries", id: 1, },
      // {task:"Buy Clothes", id: 2, },
      // {task:"Buy An Apple Watch", id: 3, }
    ],

    Accomplished:[

    ]
  }


  AddTodoToState=(newtodo)=>{
    newtodo.id = Math.random();
      let NewToDo= [...this.state.todos, newtodo]; 
       this.setState({
        todos: NewToDo
       })
  }



  StrokeASAccomplished=(id, Todo)=>{

    let AccToDo= [...this.state.Accomplished, Todo]; 
    this.setState({
      Accomplished: AccToDo
     })

     setTimeout(()=>{
        alert(`you have accomplished the task: ${Todo.task}`);
        console.log(this.state.Accomplished);
     }, 200);
     
     this.DeleteTodo(id);
     
  }


 



  DeleteTodo =(id)=>{
    console.log(this.state.todos)
    const DelTodo= this.state.todos.filter(del =>{
     return del.id !== id
    })

    this.setState({
      todos: DelTodo
    })
  }

  render(){
    return (
      <div className="App">
        <h1 className="center-align cdd">TODO APP</h1>

        <AddTodo TodoDetails={this.state.todos} DeleteTodo={this.DeleteTodo} StrokeASAccomp={this.state.Accomplished} StrokeASAccomplished={this.StrokeASAccomplished}/>

        <NewTodo AddTodoToState={this.AddTodoToState}/>

      </div>
    );
  }
  
}

export default App;
