import React, { useEffect, useState } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import {Bling as GPT} from "react-gpt";

import img4 from '../../assets/images/big/img4.jpg';
import thumbImage from '../../assets/images/sidebox/market_105x70.jpg'

GPT.enableSingleRequest();

const Cards = (props) => {
    window.scroll(0 ,0)
    const [gamesList, setGamesList] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        fetch("https://games.gamepix.com/games").then((res)=>{
            res.json().then((res)=> {
                setGamesList(res.data);
            })
        }).catch((e)=>{
            console.log(e)
        });
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[]);
    const handleClick = (link) => {
        window.location.href = '/#/gamesDetails?link='+link
    };
    return (
        <div>
            <div id='div-gpt-ad-1612773232807-0' className="mb-3 text-center">
                <GPT adUnitPath="/419163168/https:////gamesfree.live.RectangleBanner" sizeMapping={[
                    {viewport: [0, 0], slot: [320, 50]},
                    {viewport: [750, 0], slot: [728, 90]},
                    {viewport: [1200, 0], slot: [1024, 120]}
                ]}  />
            </div>

            <Row>
                <Col sm="9">
                    <Row>
                        {gamesList && gamesList.map((item, index) =>
                                (

                                    <>
                                        <Col md={6} sm={6} xs={12} lg={4} className="m-auto" >
                                            <Card className=" mb-3 game-card cursor-pointer" key={index} onClick={()=> handleClick(item.url)}>
                                                <CardImg top width="100%" src={item.thumbnailUrl || img4} alt="Card image cap" className="card-image"/>
                                                <CardBody>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                        { ((index + 1) % 3 === 0 )&&
                                        <div id="" className="mb-3 mt-3 text-center">
                                            <GPT adUnitPath="/4595/nfl.test.open"
                                                 sizeMapping={[
                                                     {viewport: [0, 0], slot: [200, 200]},
                                                     {viewport: [750, 0], slot: [250, 250]},
                                                     {viewport: [1050, 0], slot: [300, 300]}
                                                 ]}
                                            />
                                        </div>}
                                    </>

                                ))
                        }
                    </Row>
                </Col>
                <Col sm="5" md="3">

                    <div id='div-gpt-ad-1612773275670-0' className="mb-3 text-center">
                        <GPT adUnitPath="/419163168/https:////gamesfree.live.SquareBanner" sizeMapping={[
                            {viewport: [0, 0], slot: [200, 200]},
                            {viewport: [750, 0], slot: [250, 250]},
                            {viewport: [1200, 0], slot: [320, 320]}
                        ]}  />
                    </div>

                    <h3 className="mt-2 text-white">New Games</h3>
                    {gamesList.sort(() => Math.random() - Math.random()).slice(0, 4).map(item => (
                        <div className="sidebar-thumbs cursor-pointer mt-2" onClick={()=> handleClick(item.url)}>
                            <div className="d-flex flex-row bg-white">
                                <img src={item.thumbnailUrl || thumbImage} className="mr-2" style={{ width: 105 }} />
                                <div className="mt-4">{item.title}</div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4" />

                    <h3 className="mt-2 text-white">Random Games</h3>
                    {gamesList.sort(() => Math.random() - Math.random()).slice(0, 4).map(item => (
                        <div className="sidebar-thumbs cursor-pointer mt-2" onClick={()=> handleClick(item.url)}>
                            <div className="d-flex flex-row bg-white">
                                <img src={item.thumbnailUrl || thumbImage} className="mr-2" style={{ width: 105 }} />
                                <div className="mt-4">{item.title}</div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4" />

                    <h3 className="mt-2 text-white">Latest Articles</h3>
                    {gamesList.sort(() => Math.random() - Math.random()).slice(0, 4).map(item => (
                        <div className="sidebar-thumbs cursor-pointer mt-2" onClick={()=> handleClick(item.url)}>
                            <div className="d-flex flex-row bg-white">
                                <img src={item.thumbnailUrl || thumbImage} className="mr-2" style={{ width: 105 }} />
                                <div className="mt-4">{item.title}</div>
                            </div>
                        </div>
                    ))}

                </Col>
            </Row>

        </div>
    );
}

export default Cards;


