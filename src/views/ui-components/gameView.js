import React, { useEffect, useState } from 'react';
import {Card, CardBody, CardImg, CardTitle, Col, Row} from "reactstrap";
import img4 from "../../assets/images/big/img4.jpg";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import addImage from "../../assets/images/add.gif";
import truckImage from "../../assets/images/truck.png";
import carsImage from "../../assets/images/cars.png";
import militaryImage from "../../assets/images/miliary.jpg";
import racekImage from "../../assets/images/race.jpg";
import spaceImage from "../../assets/images/space.jpg";
import wrestleImage from "../../assets/images/wrestle.jpg";
import {Bling as GPT} from "react-gpt";


GPT.enableSingleRequest();

const games = [
    {
        title: "Free Driving Games",
        image: truckImage,
        url: ""
    },
    {
        title: "Car Action Games",
        image: carsImage,
        url: ""
    },
    {
        title: "Racing Games",
        image: militaryImage,
        url: ""
    },
    {
        title: "Sport Games",
        image: racekImage,
        url: ""
    },
    {
        title: "Shooter Games",
        image: spaceImage,
        url: ""
    },
    {
        title: "Arcade Games",
        image: wrestleImage,
        url: ""
    }
];

const GameView = (props) =>{
    const [gamesDataList, setGamesDataList] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

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
                <div className="mt-3" />
                <div id="" className="mb-3 text-center">
                    <GPT adUnitPath="/419163168/https:////gamesfree.live.RectangleBanner"
                         sizeMapping={[
                             {viewport: [0, 0], slot: [200, 200]},
                             {viewport: [750, 0], slot: [250, 250]},
                             {viewport: [1050, 0], slot: [1024, 120]}
                         ]}
                    />
                </div>
                <div className="grid-game mt-2">

                    {games && games.sort(() => Math.random() - Math.random()).slice(0, 6).map((item) =>
                        (
                            <Card className=" game-view-card cursor-pointer" onClick={()=> {window.location.reload()}}>
                                <CardImg top width="100%" src={item.image || img4} alt="Card image cap" className="game-card-image"/>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardBody>
                            </Card>
                        ))
                    }

                </div>
                <div id="" className="mb-3 text-center">
                    <GPT adUnitPath="/419163168/https:////gamesfree.live.RectangleBanner"
                         sizeMapping={[
                             {viewport: [0, 0], slot: [200, 200]},
                             {viewport: [750, 0], slot: [250, 250]},
                             {viewport: [1050, 0], slot: [1024, 120]}
                         ]}
                    />
                </div>
                <div className="m-auto" style={{ maxWidth : 1000}}>
                    <Row className="text-center">
                                {gamesDataList.sort(() => Math.random() - Math.random()).slice(0, 4).map((item, index)=>{
                                    return (
                                        <>
                                            <Col md={6} sm={12} xs={12} lg={4} className="m-auto">
                                                <Card className=" mb-3 game-card cursor-pointer" onClick={()=> handleClick(item.url)}>
                                                    <CardImg top width="100%" src={item.thumbnailUrl || img4} alt="Card image cap" className="card-image"/>
                                                    <CardBody>
                                                        <CardTitle>{item.title}</CardTitle>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                            {((index + 1) % 2 === 0 )&&
                                            <div id="" className="mb-3 mt-3 text-center">
                                                <GPT adUnitPath="/419163168/https:////gamesfree.live.SquareBanner"
                                                     sizeMapping={[
                                                         {viewport: [0, 0], slot: [320, 320]},
                                                     ]}
                                                />
                                            </div>}
                                        </>
                                    )
                                })
                                }
                    </Row>
                </div>
                <h3 className="text-center font-24 font-bold">Popular Games</h3>
                <div className="grid-game">

                    {games && games.sort(() => Math.random() - Math.random()).slice(0, 6).map((item) =>
                        (
                            <Card className="m-3 game-view-card cursor-pointer" onClick={()=> handleClick(item.url)}>
                                <CardImg top width="100%" src={item.image || img4} alt="Card image cap" className="game-card-image"/>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardBody>
                            </Card>
                        ))
                    }

                </div>
                <div className="text-center">
                    {width <= 767 &&
                        <div id="" className="mb-3 mt-3 text-center">
                            <GPT adUnitPath="/419163168/https:////gamesfree.live.RectangleBanner"
                                 sizeMapping={[
                                     {viewport: [0, 0], slot: [200, 200]},
                                     {viewport: [750, 0], slot: [250, 250]},
                                     {viewport: [1050, 0], slot: [1024, 120]}
                                 ]}
                            />
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameView;
