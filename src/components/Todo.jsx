import React, { useEffect, useState } from 'react'
import { 
    Container,
    Wrapper,
    Navbar,
    Icon,
    ChangeTheme,
    TodoContainer,
    AddContainer,
    Check,
    CheckIcon,
    ListInput,
    ListContainer,
    TextContainer,
    ListItem,
    TextList,
    CrossIcon,
    Hr,
    BottomContainer,
    ItemNumber,
    Status,
    ClearList,
    StatusContainer,
    StatusMobile,
} from './TodoElement'
import Moon from '../images/icon-moon.svg'
import Sun from '../images/icon-sun.svg'
import Checkicon from '../images/icon-check.svg'
import Cross from '../images/icon-cross.svg'

const Todo = ({themeToggle ,theme}) => {

    const datas = [
        {todo:'Study English 2 hr',completed:true},
        {todo:'Exercise 30 min',completed:false},
        {todo:'Watch Movie',completed:false},
        {todo:'Home Work',completed:true},
    ]
    
    const [completed,setCompleted] = useState(false)
    const [todoList,setTodoList] = useState(null)
    const [allItems, setAllItems] = useState(datas);
    const [items, setItems] = useState(datas);
    const [status, setStatus] = useState('all');

    const handleKeyDown = async(event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            setTodoList(event.target.value)
            event.target.value = ''
        }
    }

    //Store data to local storage 
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('data'));
        if(items){
            setAllItems(items)
            setItems(items);
        }
    },[])

    useEffect(()=>{
        if(todoList !== null && todoList !== ''){
            if (items){
                const data =[
                    ...items,
                    {
                        todo:todoList,
                        completed:completed,
                    }
                ]
                window.localStorage.setItem('data', JSON.stringify(data));
                setAllItems(data)
                setItems(data)
                setTodoList(null)
            }else{
                const data =[
                    {
                        todo:todoList,
                        completed:completed,
                    }
                ]
                window.localStorage.setItem('data', JSON.stringify(data));
                setAllItems(data)
                setItems(data)
                setTodoList(null)
            }
        }
    },[todoList,items,completed])

    const getnewStorage=(data)=>{
        if(data){
            window.localStorage.setItem('data', JSON.stringify(data));
            setItems(JSON.parse(localStorage.getItem('data')));
            setAllItems(JSON.parse(localStorage.getItem('data')));
        }
    }

    //Set completed
    const setCompletedList = (id) =>{
        const data = items.map((item,i)=>{
            if (i===id){
                item.completed = !item.completed
            }
            return item
        })
        getnewStorage(data)
    }

    //delete 
    const deleteTodo = (id) =>{
        if(window.confirm("Do you want to delete this Todo List")){
            items.splice(id,1)
            getnewStorage(items)
        }
    }

    //Clear all todolist
    const clearItem =()=>{
        if(window.confirm("Do you want to clear all Todo List")){
            let data = allItems.filter(function (e) {
                return e.completed === false;
            })
            getnewStorage(data)
        }
    }
    //Set Status
    const statusTodo =(status)=>{
        if(status === 'all'){
            setItems(allItems)
            setStatus('all')
        }else if(status === 'active'){
            setStatus('active')
            let data = allItems.filter(function (e) {
                return e.completed === false;
            })
            setItems(data)
        }else if(status === 'completed'){
            setStatus('completed')
            let data = allItems.filter(function (e) {
                return e.completed === true;
            })
            setItems(data)
        }
    }
    

  return (
    <Container>

        <Wrapper>

            <Navbar>
                <Icon>TODO</Icon>
                {theme==='light' ?(
                    <ChangeTheme onClick={themeToggle} src={Moon}/>
                ):(
                    <ChangeTheme onClick={themeToggle} src={Sun}/>
                )}
                
            </Navbar>

            <TodoContainer>
                <AddContainer>
                    <Check 
                        onClick={()=>{setCompleted(!completed)}}
                        completed={completed}
                    >
                        <CheckIcon src={Checkicon}/>
                    </Check>
                    <ListInput placeholder='Create a new todo...' onKeyDown={handleKeyDown}/>
                </AddContainer>

                <ListContainer>
                    
                    {items ? (items.map((item,id)=>(
                        <>
                        <ListItem key={id}>
                            <TextContainer>
                                <Check 
                                    completed={item.completed}
                                    onClick={()=>{setCompletedList(id)}}
                                >
                                    <CheckIcon src={Checkicon} />
                                </Check>
                                <TextList completed={item.completed}>{item.todo}</TextList>
                            </TextContainer>
                            <CrossIcon src={Cross} onClick={()=>{deleteTodo(id)}}/>
                        </ListItem>
                        <Hr/>
                        </>
                    ))):(<ListItem>Add todo list</ListItem>)}

                    <BottomContainer>
                        <ItemNumber>{items ? items.length : ''} items list</ItemNumber>
                        <StatusContainer>
                            <Status 
                                onClick={()=>{statusTodo('all')}} 
                                status={status === 'all'}
                            >All</Status>
                            <Status
                                onClick={()=>{statusTodo('active')}} 
                                status={status === 'active'}
                            >Active</Status>
                            <Status
                                onClick={()=>{statusTodo('completed')}} 
                                status={status === 'completed'}
                            >Completed</Status>
                        </StatusContainer>
                        <ClearList onClick={clearItem}>Clear Completed</ClearList>
                    </BottomContainer>
                </ListContainer>
                
                <StatusMobile>
                    <Status 
                        onClick={()=>{statusTodo('all')}} 
                        status={status === 'all'}
                    >All</Status>
                    <Status
                        onClick={()=>{statusTodo('active')}} 
                        status={status === 'active'}
                    >Active</Status>
                    <Status
                        onClick={()=>{statusTodo('completed')}} 
                        status={status === 'completed'}
                    >Completed</Status>
                </StatusMobile>
            
            </TodoContainer>

        </Wrapper>
    </Container>
  )
}

export default Todo