import React from "react";
import Item from "../Item/Item";
import Input from "../Input/Input";
import tasksObject from "../../Data/tasks";
import "./Todo.css";

class Todo extends React.Component{


        constructor(props){
            super(props);
            this.state = {
                tasks: [],
            }
            
        }
        //componentDidMount runs after the making of a component
        componentDidMount(){
            
            this.setState({
                tasks: tasksObject.tasks,
            })
        }
        //componentDidUpdate runt na het updaten van de state
        componentDidUpdate(){
            
            
        }

        update = () => {
            console.log("Ik ben geklikt");
            let tempArray = this.state.tasks;
            let combinedArray = tempArray.concat([
                {
                    name: "Todo afmaken",
                    done: false,
                    id: 10,
                }
            ])
            this.setState({
                tasks: combinedArray,
        });
            
        }

        inputPressedEnter = (inputFromInputCompenent) => {
            let toBeAdded = [
                {
                    name: inputFromInputCompenent,
                    done: false,
                    id:100,
                }
            ]
            let mergedArray = this.state.tasks.concat(toBeAdded);
            this.setState({
                tasks: mergedArray,
            })
        }

    render(){
        let items = this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}></Item>
        });
        return (
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">Things to do:</h1>
                </header>
                <ul className="todo__list">
                    {items}
                </ul>
                <Input inputPressedEnter={this.inputPressedEnter} />
            </article>
        );
    }
}

export default Todo;