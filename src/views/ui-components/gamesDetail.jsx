import React, { useEffect, useState } from 'react';
import { Card, CardBody, Tooltip, Row, Col } from 'reactstrap';
import HomeIcon from '../../assets/images/market_home.png';
import ChristmasImage from '../../assets/images/Cards/ChristmasPong.jpg';
import snakeImage from '../../assets/images/market_260x173.jpg';
import {Bling as GPT} from "react-gpt";

GPT.enableSingleRequest();


const GamesDetails = (props) => {
    const [link, setLink] = useState("");
    const [gamesList, setGamesList] = useState([]);
    const [gameDetail, setGameDetail] =  useState({});
    useEffect(()=>{
        let query = new URLSearchParams(props.location.search).get('link');
        setLink(query);
        fetch("https://games.gamepix.com/games").then((res)=>{
            res.json().then((res)=> {
                setGamesList(res.data);
            })
        }).catch((e)=>{
            console.log(e)
        });
    },[]);
    useEffect(()=>{
        let data = gamesList.find((item) => item.url === link);
        setGameDetail(data);
    }, [gamesList, link]);
    const handleClick = (link) => {
        setLink(link)
    };

    const handleHomeClick = () => {
        props.history.push('/');
    }

    return(
        <>
            <div id='div-gpt-ad-1612773232807-0' className="mb-3 text-center">
                <GPT adUnitPath="/419163168/https:////gamesfree.live.RectangleBanner" sizeMapping={[
                    {viewport: [0, 0], slot: [320, 50]},
                    {viewport: [750, 0], slot: [728, 90]},
                    {viewport: [1200, 0], slot: [1024, 120]}
                ]}  />
            </div>
            <div className="game-detail-header d-flex justify-content-between align-items-center">
                <img src={HomeIcon} onClick={handleHomeClick} className="cursor-pointer" />
                <h3 className="text-white">{gameDetail && gameDetail.title || '' }</h3>
                <img src={gameDetail && gameDetail.thumbnailUrl || ''} style={{height: 60}} />
            </div>
            <div className="d-flex flex-row justify-content-between container">
                <div className="d-flex flex-column side-games">
                    {gamesList.sort(() => Math.random() - Math.random()).slice(0, 4).map((item)=>{
                        return (<img key={item.id} onClick={()=>{handleClick(item.url)}} src={item.thumbnailUrl} className="mt-3" style={{height: 97, width: 145}}/>)
                    })
                    }
                </div>
                <div className="w-100 text-center" key={link}>
                    <iframe key={link} src={link} style={{ width: '90%', height: 500}} />
                </div>
                <div className="d-flex flex-column side-games">
                    {gamesList.sort(() => Math.random() - Math.random()).slice(0, 4).map((item)=>{
                        return (<img key={item.id} onClick={()=>{handleClick(item.url)}} src={item.thumbnailUrl} className="mt-3" style={{height: 97, width: 145}}/>)
                    })
                    }
                </div>
            </div>
            <Row className="game-detail-box">
                <Col sm={4} md={4} lg={4}>
                    <img src={gameDetail && gameDetail.thumbnailUrl || ''} />
                </Col>
                <Col sm={8} lg={8} md={8} className="mt-4">
                    <h3 className="text-black">{gameDetail && gameDetail.title || '' }</h3>
                    <p>{gameDetail && gameDetail.description || '' }</p>
                </Col>
            </Row>
        </>
    );

};

export default GamesDetails;
