import React,{useState} from 'react';
import Delete from "../assets/delete.svg";
import Add from "../assets/plus.svg";
import styled from "styled-components";

export default function Todo() {
    const[items, setItems] = useState([]);
    const [input, setInput] = useState("");
    let addItems = () =>{
        setItems([...items, {name:input , id:items.length}]);
        setInput("");
    };
    return (
        <>
        <Box>
            <Heading>Todo List</Heading>
            <Head>Things To Be Done</Head>
            <List>
                {items.map((item)=>(
                    <li key={item.id} > {item.name} <img src={Delete} /> </li>
                ))}
            </List>
            <img src={Add} />
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addItems} >Add</button>
            <h3>Completed</h3>
        </Box>
        </>
    )
}
const Box = styled.div`
    box-shadow:0 0 0 0.1px;`;
const List = styled.ul`
    style : none;`;
const Heading = styled.h1`
    text-align: center;
    font-size: 40px;
    `;
const Head = styled.h3`
    text-align: center;
    font-size:20px;
    `;