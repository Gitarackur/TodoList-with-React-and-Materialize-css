import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';
import '../css/AddTodo.css';



const AddTodo=({TodoDetails, DeleteTodo, StrokeASAccomp, StrokeASAccomplished})=>{

   

    const AddNewTodoToUi= TodoDetails.length ?(
        TodoDetails.map((Todo)=>{
           
            return(
                <div className="container" key={Todo.id}>
                    <div className="AddTodo">

                        <div className="row bd">
                            <div className="col s2 bch">
                                <label>
                                    <input type="checkbox" className="" onClick={()=>{StrokeASAccomplished(Todo.id, Todo)}}/>
                                    <span>&nbsp;</span>
                                </label>
                            </div>

                            <div className="col s6 task">
                                <p className="Todo">{Todo.task}</p>
                            </div>

                            <div className="col s4 btc">
                                <button type="button" className="waves-effect waves-light btn" onClick={()=>{DeleteTodo(Todo.id)}}>Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
         })
     )
        :(
    <div className="Main container">
        <div className="AddTodo">
            <p className="noTodo">You have no Todos</p>
        </div>
    </div>
    )
    
    return(
        <div>
            {AddNewTodoToUi}
        </div>
    )
    
}

export default AddTodo;