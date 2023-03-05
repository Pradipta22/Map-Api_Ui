import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Dropdown } from 'antd';
import Form from './form';
import Map from './osm';

const { Header, Sider: Slider, Content, Footer } = Layout;

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
          key: '1',
          label: (
            <span onClick={() => setLoggedIn(false)}>
              Log out
            </span>
          ),
        }]
    return (
      <div className='app'>
        <Layout>
            <Slider trigger={null} collapsible collapsed={collapsed} theme={"dark"}>
            <p>heeeeee</p>
                <Menu
                    theme={"dark"}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <InfoCircleOutlined />,
                            label: 'About Us',
                        },
                    ]}
                />
            </Slider>
            <Layout className="site-layout">
                <Header style={{ background: "dark", paddingLeft: 0 }} className="header">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <section>
                        {loggedIn ? <Dropdown menu={{items}} placement="bottomLeft">
                            <Button>
                                <UserOutlined /> PRADIPTA PALEI
                            </Button>
                        </Dropdown>
                            :
                            <Button onClick={() => setLoggedIn(true)}>
                                Log in
                            </Button>
                        }
                    </section>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: colorBgContainer,
                    }}
                >
               
                <Form />
                <Map/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright © 2023 MapUp</Footer>
            </Layout>
        </Layout>
      </div>
    );
};

export default Home;