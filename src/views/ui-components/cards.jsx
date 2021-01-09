import React from 'react';
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

const Cards = () => {
    return (
        <div>
            <div className="google-adds-div" />
            <Row>
                <Col sm="9">
                    <Row className="justify-content-center">
                        {data.map((item) =>
                                (
                                    <Card className="m-3">
                                        <CardImg top width="100%" src={item.image || img4} alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>{item.name}</CardTitle>
                                        </CardBody>
                                    </Card>
                                ))
                        }
                    </Row>
                </Col>
                <Col sm="5" md="3">

                    <div className="sidebar-ads"/>
                    <h3 className="mt-2 text-white">New Games</h3>
                    {sideBarDate.map(items => (
                        <div className="sidebar-thumbs mt-2">
                            <div className="d-flex flex-row bg-white">
                                <img src={items.image || thumbImage} className="mr-2" />
                                <div className="mt-4">{items.name}</div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4" />

                    <h3 className="mt-2 text-white">Random Games</h3>
                    {sideBarDate.map(items => (
                        <div className="sidebar-thumbs mt-2">
                            <div className="d-flex flex-row bg-white">
                                <img src={items.image || thumbImage} className="mr-2" />
                                <div className="mt-4">{items.name}</div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4" />

                    <h3 className="mt-2 text-white">Latest Articles</h3>
                    {sideBarDate.map(items => (
                        <div className="sidebar-thumbs mt-2">
                            <div className="d-flex flex-row bg-white">
                                <img src={items.image || thumbImage} className="mr-2" />
                                <div className="mt-4">{items.name}</div>
                            </div>
                        </div>
                    ))}

                </Col>
            </Row>

        </div>
    );
}

export default Cards;


