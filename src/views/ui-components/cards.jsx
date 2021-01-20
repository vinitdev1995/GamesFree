import React, { useEffect, useState } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import img4 from '../../assets/images/big/img4.jpg';
import ChristmasImage from '../../assets/images/Cards/ChristmasPong.jpg';
import thumbImage from '../../assets/images/sidebox/market_105x70.jpg'
import addImage from "../../assets/images/add.gif";

const data = [
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },{
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },{
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    },
    {
        "name" : "Christmas Pong",
        "image": ChristmasImage
    }
];

const sideBarDate = [
    {
        "name": "FlipSurf.io",
        "image": thumbImage
    },
    {
        "name": "FlipSurf.io",
        "image": thumbImage
    },
    {
        "name": "FlipSurf.io",
        "image": thumbImage
    }
];

const Cards = (props) => {
    window.scroll(0 ,0)
    const [gamesList, setGamesList] = useState([]);
    useEffect(()=>{
        fetch("https://games.gamepix.com/games").then((res)=>{
            res.json().then((res)=> {
                setGamesList(res.data);
            })
        }).catch((e)=>{
            console.log(e)
        });
    },[]);
    const handleClick = (link) => {
        props.history.push('/gamesDetails?link='+link)
    };
    return (
        <div>
            <div className="google-adds-div" />
            <Row>
                <Col sm="9">
                    <Row>
                        {gamesList && gamesList.map((item, index) =>
                                (

                                    <>
                                        <Col md={4} sm={6} xs={8} lg={4} className="m-auto">
                                            <Card className=" mb-3 game-card cursor-pointer" onClick={()=> handleClick(item.url)}>
                                                <CardImg top width="100%" src={item.thumbnailUrl || img4} alt="Card image cap" className="card-image"/>
                                                <CardBody>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                        {/*{(window.innerWidth < 767) &&  ((index + 1) % 2 === 0 )&& <div className="mb-3"><img src={addImage} width={300} /></div>}*/}
                                    </>

                                ))
                        }
                    </Row>
                </Col>
                <Col sm="5" md="3">

                    <div className="sidebar-ads"/>
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


