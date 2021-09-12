import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useHistory} from "react-router-dom";
import {RoutesNames} from "../router";
import {RootState} from "../store";
import {useSelector} from "react-redux";

const Navbar: FC = () => {
    const router = useHistory();
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth)
    return (
        <Layout.Header>
            <Row justify={"end"}>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            megasaab
                        </div>
                        <Menu
                            theme={"dark"}
                            mode={"horizontal"}
                            selectable={false}>
                            <Menu.Item
                                onClick={() => console.log('exit')}
                                key={1}>Exit
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu
                        theme={"dark"}
                        mode={"vertical"}
                        selectable={false}>
                        <Menu.Item
                            onClick={() => router.push(RoutesNames.LOGIN)}
                            key={1}>Login</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;