import React,{useState} from 'react';
import Delete from "../assets/delete.svg";
import Add from "../assets/plus.svg";
import Tick from "../assets/tick-green.svg";
import Revert from "../assets/revert.svg";
import styled from "styled-components";
import { Layout, Menu, Breadcrumb,Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function Todo() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const[items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [newId,setNewId] = useState(1)
    const [complete, setComplete]=useState([]);
    const options = {
        series: [
            {
                name: 'Profit',
                data: [100,200,30,100,30,50,100]
            }
        ]
    };
    

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
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
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
                    <Button type="primary" onClick={addItems}>Add New</Button>
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
        </Content>
      </Layout>
    </Layout>
  </Layout>
  <HighchartsReact highcharts={Highcharts} options={options} />      
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
const But = styled.button`
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