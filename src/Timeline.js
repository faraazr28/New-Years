// src/Timeline.js
import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import './timeline.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Img1 from './img/pic1.jpeg';
import Img2 from './img/pic2.jpg';
import Img3 from './img/pic3.JPG';
import Img4 from './img/pic4.jpg';
import Img5 from './img/pic5.jpg';
import Img6 from './img/pic6.jpg';
import Img7 from './img/pic7.jpg';
import Img8 from './img/pic8.jpg';
import Img9 from './img/pic9.jpg';
import Img10 from './img/pic10.jpg';
import Img11 from './img/pic11.jpg';
import Img12 from './img/pic12.JPG';
import Img13 from './img/pic13.jpg';
import Img14 from './img/pic14.jpg';
import Img15 from './img/pic15.HEIC';
import Img16 from './img/pic16.jpg';
import Img17 from './img/pic17.jpg';
import Img19 from './img/pic19.jpg';


import Img20 from './img/pic20.jpg';
import Img23 from './img/pic23.jpg';
import Img24 from './img/pic24.jpg';
import Img25 from './img/pic25.JPG';
import Img26 from './img/pic26.jpg';
import Img27 from './img/pic27.jpg';
import Img28 from './img/pic28.jpg';
import Img29 from './img/pic29.jpg';
import Img30 from './img/pic30.jpg';
import Img31 from './img/pic31.jpg';
import Img32 from './img/pic32.jpg';
import Img33 from './img/pic33.jpg';



const Timeline = () => {
    const data = [
        { id: 1, imgSrc: Img25, date: "2024-12-18", description: "'BRO THAT LINKEDIN GIRL WAS SO BAD'"},
        { id: 2, imgSrc: Img26, date: "2025-08-20", description: "No explanation needed..."},
        { id: 3, imgSrc: Img16, date: "2025-09-19", description: "Our Last First Date 📆"},
        { id: 4, imgSrc: Img4, date: "2025-09-21", description: "First Pretty Bouquet for my Pretty Girl"},
        { id: 5, imgSrc: Img8, date: "2025-10-03", description: "City Gorls at Vanderdih and the Day I knew I wanted you to be mine"},
        { id: 6, imgSrc: Img23, date: "2025-10-05", description: "City Gorls turned into Suburb Gorls breathing during our first Long Island Sunday"},
        { id: 7, imgSrc: Img20, date: "2025-10-17", description: "The Day I made you mine and became the Happiest Man in the World"},
        { id: 8, imgSrc: Img24, date: "2025-10-18", description: "Being Trauma Bonded at Bottomless Brunch but the only thing bottomless was us at the bottom of the floor 2 hours later"},
        { id: 9, imgSrc: Img27, date: "2025-10-24", description: "The day I admitted to myself I loved you" },
        { id: 10, imgSrc: Img14, date: "2025-10-25", description: "The day we told each other 'I Love You'" },
        { id: 11, imgSrc: Img28, date: "2025-10-25", description: "Getting ready for the first dinner with pumpkin on pumpkin love" },
        { id: 12, imgSrc: Img17, date: "2025-11-16", description: "My bestfriend coming to visit me in LA and my first time picking up my love at the airport" },
        { id: 13, imgSrc: Img29, date: "2025-11-16", description: "Cooking for my girlfriend and drinking wine while watching HIMYM" },
        { id: 14, imgSrc: Img3, date: "2025-11-17", description: "Dih Tai Fung and making dumplings squirt!" },
        { id: 15, imgSrc: Img12, date: "2025-11-20", description: "Our first flight together because I'm coming to New York with you :)" },
        { id: 16, imgSrc: Img30, date: "2025-11-23", description: "From walking chai around hells kitchen to recreating our first date at Bondst, I am always reminded of why I fell in love with you" },
        { id: 17, imgSrc: Img19, date: "2025-12-01", description: "Taking a 6 hour bus ride while the fat ass bus driver stopped for his burger king snack break so I could come surprise the love of my life." },
        { id: 18, imgSrc: Img11, date: "2025-12-01", description: "Pumpkin field trip to Hofstra???" },
        { id: 19, imgSrc: Img31, date: "2025-12-02", description: "The day the puffs were born"},
        { id: 20, imgSrc: Img32, date: "2025-12-12", description: "Running around with my best friend from trying to find her a graduation dress to grabbing Pizza so our stomachs don't combust from all the alcohol, to going to your corporate party and meeting the infamous Natan (shoutout bro for needing you in LA and DC hehehe), to having a cutie girls night at Verlaine and drinking pornstar martinis at Employees Only and eating truffle grilled cheeses."},
        { id: 21, imgSrc: Img33, date: "2025-12-14", description: "The Growling Girls united at long last" },
        { id: 22, imgSrc: Img5, date: "2025-12-26", description: "The love of my life visiting me in DC. This year has been nothing short of amazing, and that is because I met you. I can’t wait to take you into 2026 and every year following for the rest of my life. I love you and the person that you are - the way your eyes looks when you smile, the way your laugh instantly makes everything feel okay, and the way your presence turns even the most ordinary moments into something special. You are my calm, my joy, and the brightest part of my days. You make me feel understood, supported, and endlessly grateful. You are truly the light in my life, and I don’t ever take for granted how lucky I am to love you and to be loved by you. Thank you for being you, and for choosing me. I appreciate you more than words could ever fully say. I love you Katherine ❤️" },
    ];

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const getImg = (imgSrc, index) => {
        setTempImgSrc(imgSrc);
        setCurrentImgIndex(index);
        setModel(true);
        document.body.classList.add('body-modal-open');
    };

    const closeModel = () => {
        setModel(false);
        document.body.classList.remove('body-modal-open');
    };

    const handleNext = useCallback(() => {
        const newIndex = (currentImgIndex + 1) % data.length;
        setTempImgSrc(data[newIndex].imgSrc);
        setCurrentImgIndex(newIndex);
    }, [currentImgIndex, data]);

    const handlePrev = useCallback(() => {
        const newIndex = (currentImgIndex - 1 + data.length) % data.length;
        setTempImgSrc(data[newIndex].imgSrc);
        setCurrentImgIndex(newIndex);
    }, [currentImgIndex, data]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrev();
        } else if (event.key === 'Escape') {
            closeModel();
        }
    }, [handleNext, handlePrev]);

    useEffect(() => {
        if (model) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [model, handleKeyDown]);

    return (
        <div className="timeline-container">
            <h1>The Pumpkin Chronicles</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="Expanded view" />
                <CloseIcon onClick={closeModel} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1071 }} />
                <ArrowBackIosNewIcon 
                    className="model-nav-button left"
                    onClick={handlePrev} 
                    style={{ 
                        position: 'fixed', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        left: '20px', 
                        cursor: 'pointer', 
                        color: 'white', 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        border: 'none', 
                        padding: '10px', 
                        borderRadius: '50%', 
                        zIndex: 1061 
                    }} 
                />
                <ArrowForwardIosIcon 
                    className="model-nav-button right"
                    onClick={handleNext} 
                    style={{ 
                        position: 'fixed', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        right: '20px', 
                        cursor: 'pointer', 
                        color: 'white', 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        border: 'none', 
                        padding: '10px', 
                        borderRadius: '50%', 
                        zIndex: 1061 
                    }} 
                />
            </div>
            <div className="timeline">
                {data.map((item, index) => (
                    <TimelineItem key={index} item={item} getImg={getImg} index={index} />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({ item, getImg, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`timeline-item ${inView ? 'visible' : ''}`} onClick={() => getImg(item.imgSrc, index)}>
            <div className="timeline-img">
                <img src={item.imgSrc} alt={`Timeline event ${item.id}`} />
            </div>
            <div className="timeline-content">
                <h2>{item.date}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default Timeline;
