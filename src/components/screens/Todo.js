import React,{useState} from 'react';
import Delete from "../assets/delete.svg";
import Add from "../assets/plus.svg";
import Tick from "../assets/tick-green.svg";
import Revert from "../assets/revert.svg";
import styled from "styled-components";

export default function Todo() {
    const[items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [newId,setNewId] = useState(1)
    const [complete, setComplete]=useState([]);

    let addItems = (e) =>{
        e.preventDefault();
        if(input){
            setItems([...items, {name:input , id:newId}]);
            setInput("");
            setNewId(newId + 1)
        }
    };

    const completedItem =(id,name) => {
        const comp = {id:id,name:name};
        setComplete([...complete,comp ]); 
    };

    const revertedItem=(id,name) => {
        const rever = {id:id,name:name};
        setItems([...items,rever]);
    }

    const handleRemoveItem = (id) => {
        const name =id; 
         setItems(items.filter((item) => item.id !== name ));
    };
    const removeItem = (id) => {
        const name =id; 
         setComplete(complete.filter((completed) => completed.id !== name ));
    };
    return (
        <>
        <Box>
            <Heading>Todo List</Heading>
            <Head>Things To Be Done</Head>
            <List>
                {items.map((item)=>(
                            <Element key={item.id} > <Div><Round onClick={() => {completedItem(item.id,item.name);
                                handleRemoveItem(item.id);}} ></Round>  {item.id}, {item.name} </Div> <img src={Delete} onClick={() => handleRemoveItem(item.id)} /> </Element>
                ))}
            </List>
            <Items>
                <Form>
                    <Img src={Add} />
                    <Input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add New Task" />
                    <Button onClick={addItems} >Add New</Button>
                </Form>
            </Items>
            <Head>Completed</Head>
            <List>
                {complete.map((completed)=>(
                            <Elements key={completed.id} > <Div><Rounded><Ticked src={Tick} /></Rounded>  {completed.id}, {completed.name} </Div> <div><img src={Revert}  onClick={() => {revertedItem(completed.id,completed.name);
                                removeItem(completed.id);}} /> <img src={Delete} onClick={() => removeItem(completed.id)} /></div> </Elements>
                ))}
            </List>
        </Box>
        </>
    )
}
const Box = styled.div`
    width :50%;
    margin: 0 auto;
    border-right:1px solid #bbb4b4;
    border-left:1px solid #bbb4b4;
    height:100vh;`;
const List = styled.ul`
    list-style : none;
    margin: 0 auto;
    width: 85%;`;
const Heading = styled.h1`
    text-align: center;
    font-size: 48px;
    padding:30px 0;
    margin:0;
    `;
const Head = styled.h3`
    padding-left: 65px;
    font-size:28px;
    color :#090745;
    width: 40%;
    `;
const Element = styled.li`
    display: flex;
    justify-content: space-between;
    padding:20px;
    font-size:24px;
    font-weight:500;
    font-family: "baloo_paaji_2regular";`;
const Round = styled.div`
    margin-right:20px;
    width: 30px;
    height: 30px;
    border-radius:50%;
    border:2px solid #090745;`;
const Items = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    `;
const Img = styled.img`
    position:absolute;
    left:0;`;
const Form =styled.form`
    width: 75%;
    height: 40px;
    border:2px solid;
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 20px;
    `;
const Input = styled.input`
    display:block;
    width:75%;
    border:none;
    &:focus {
        outline: none;
    }
    margin-left: 20px;`;
const Button = styled.button`
    width:25%;
    font-family: "baloo_paaji_2regular";
    color:#ffffff;
    background:#090745;
    border:none;
    height: 40px;`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;`;
const Rounded = styled.div`
    margin-right:20px;
    width: 30px;
    height: 30px;
    border-radius:50%;
    border:2px solid #0ac593;`;
const Ticked = styled.img`
    display:inline-block;
    width:100%;
    padding:4px;`;
const Elements = styled.li`
    display: flex;
    justify-content: space-between;
    padding:20px;
    font-size:24px;
    font-weight:500;
    color:#0ac593;
    font-family: "baloo_paaji_2regular";`;