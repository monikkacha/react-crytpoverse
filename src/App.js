import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'

import {
    Navbar,
    Homepage,
    Exchanges,
    Cryptocurrencies,
    CryptoDetail,
    News
} from './components/'

const App = () => {
    return (
        <div className='App'>
            <div className='navBar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/'>
                                <Homepage />
                            </Route>
                        </Routes>
                        <Routes>
                            <Route path='/exchanges'>
                                <Exchanges />
                            </Route>
                        </Routes>
                        <Routes>
                            <Route path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                        </Routes>
                        <Routes>
                            <Route path='/crypto/:coinId'>
                                <CryptoDetail />
                            </Route>
                        </Routes>
                        <Routes>
                            <Route path='/news'>
                                <News />
                            </Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

export default App