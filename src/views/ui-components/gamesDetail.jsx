import React, { useState } from 'react';
import { Card, CardBody, Tooltip, Row, Col } from 'reactstrap';
import HomeIcon from '../../assets/images/market_home.png';
import ChristmasImage from '../../assets/images/Cards/ChristmasPong.jpg';
import snakeImage from '../../assets/images/market_260x173.jpg';
import gameBGImage from '../../assets/images/market_game_bg.jpg';

const items = {
    name:"Christmas Pong",
    image: ChristmasImage
}

const GamesDetails = () => {
    return(
        <>
            <div className="google-adds-div" />
            <div className="game-detail-header d-flex justify-content-between align-items-center">
                <img src={HomeIcon} />
                <h3 className="text-white">{items.name}</h3>
                <img src={items.image} style={{height: 60}} />
            </div>
            <div className="d-flex flex-row justify-content-between container">
                <div className="d-flex flex-column side-games">
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                </div>
                <div className="w-100 text-center">
                    <iframe src="https://play.famobi.com/fuzzies/A-FAMOBI-COM" style={{ width: '90%', height: 500}} />
                </div>
                <div className="d-flex flex-column side-games">
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                    <img src={snakeImage} className="mt-3" style={{height: 97, width:145}} />
                </div>
            </div>
            <Row className="game-detail-box">
                <Col sm={6} lg={6}>
                    <img src={ChristmasImage} />
                </Col>
                <Col sm={6} lg={6} className="mt-4">
                    <h3 className="text-black">Christmas Pong</h3>
                    <p>Have fun playing this Christmas-themed Pong!<br/> <br />Score points by getting the Santa puck past your opponent's paddle<br /><br />Be the first to reach 3 points to win the game</p>
                </Col>
            </Row>
        </>
    );

};

export default GamesDetails;
