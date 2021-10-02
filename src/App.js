import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import Movies from './components/Movies';
import Series from './components/Series';
import Home from './components/Home';
import Detail from './components/Detail';
// import Header from './components/Header';
// import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

// const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/detail' component={Detail} />
      </BrowserRouter>
      {/* <Layout className='layout'>
      <Header>Hola</Header>
      <Content>Medio</Content>
      <Footer>Chau</Footer>
    </Layout> */}


    </div>
  )
    ;
}

export default App;







{/* <Layout className="layout">
        <Header style={{ backgroundColor: 'blue' }}>
          <div> */}
{/* <Title>DEMO Streaming</Title> */ }
{/* <h1 className='prueba'>DEMO Streaming</h1>
          </div>
        </Header>
        <Header>
          <div className="logo" />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu> */}
      //   </Header>
      //   <Content style={{ padding: '0 50px' }}>

      //     <div className="site-layout-content">
      //       <ul>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>
      //         <li></li>

      //       </ul>
      //     </div>
      //   </Content>
      //   <Footer style={{ textAlign: 'center' }}><div>Ant Design ©2018 Created by Ant UED</div></Footer>

      // </Layout>, 
