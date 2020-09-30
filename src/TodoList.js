import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import './App.css';


export const TodoList = () => {

    const [ loading, setLoading ] = useState(true);
    const { appData, appDispatch } = useContext(AppContext)


    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => {
            const { data } = resp;
            appDispatch ({ type: "LOAD_TODOLIST", todoList: data })
            setLoading(false);
        });
    }, [appDispatch, setLoading])



    return (
        <div>
            {loading ? (<p>fetching todos</p>
            ) : (
                <ul>
                    {
                        appData.todoList.slice(0,15).map((item)=> {
                            const { id, title } = item;
                            return (
                                <li key={id} data-testid={id}>
                                    <Link to={`/item/${id}`}> {title} </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                )
            }
        </div>
    )
}