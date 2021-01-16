import React, { useEffect, useState } from 'react';
import {Card, CardBody, CardImg, CardTitle, Row} from "reactstrap";
import img4 from "../../assets/images/big/img4.jpg";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import addImage from "../../assets/images/add.gif";

const GameView = (props) =>{
    const [gamesDataList, setGamesDataList] = useState([]);
    useEffect(()=>{
        fetch("https://games.gamepix.com/games").then((res)=>{
            res.json().then((res)=> {
                setGamesDataList(res.data);
            })
        }).catch((e)=>{
            console.log(e)
        });
    },[]);

    const handleClick = (link) => {
        props.history.push('/gamesDetails?link='+link)
    };

    return(
        <div
            id="main-wrapper"
            data-theme="light"
            data-layout="vertical"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
            data-boxed-layout="full"
            className="bg-white"
        >
            <Header />
            <div className="pt-70 d-block">
                <div className="m-auto" style={{verticalAlign:'middle', textAlign:"center"}}><img src={addImage} width={300} /></div>
                <div className="grid-game">

                    {gamesDataList && gamesDataList.sort(() => Math.random() - Math.random()).slice(0, 6).map((item) =>
                        (
                            <Card className="m-3 game-view-card cursor-pointer" onClick={()=> handleClick(item.url)}>
                                <CardImg top width="100%" src={item.thumbnailUrl || img4} alt="Card image cap" className="game-card-image"/>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardBody>
                            </Card>
                        ))
                    }

                </div>
                <div className="m-auto" style={{verticalAlign:'middle', textAlign:"center"}}><img src={addImage} width={300} /></div>
                <h3>Popular Games</h3>
                <div className="grid-game">

                    {gamesDataList && gamesDataList.sort(() => Math.random() - Math.random()).slice(0, 6).map((item) =>
                        (
                            <Card className="m-3 game-view-card cursor-pointer" onClick={()=> handleClick(item.url)}>
                                <CardImg top width="100%" src={item.thumbnailUrl || img4} alt="Card image cap" className="game-card-image"/>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardBody>
                            </Card>
                        ))
                    }

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameView;
