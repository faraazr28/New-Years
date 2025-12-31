// src/Gallery.js
import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import './gallery.css';
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
import Img16 from './img/pic16.jpg';
import Img17 from './img/pic17.jpg';
import Img18 from './img/pic18.jpg';
import Img19 from './img/pic19.jpg';
import Img20 from './img/pic20.jpg';
import Img21 from './img/pic21.jpg';
import Img22 from './img/pic22.jpg';
import Img23 from './img/pic23.jpg';
import Img24 from './img/pic24.jpg';

const Gallery = () => {
    const data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 },
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img13 },
        { id: 14, imgSrc: Img14 },
        { id: 16, imgSrc: Img16 },
        { id: 17, imgSrc: Img17 },
        { id: 18, imgSrc: Img18 },
        { id: 19, imgSrc: Img19 },
        { id: 20, imgSrc: Img20 },
        { id: 21, imgSrc: Img21 },
        { id: 22, imgSrc: Img22 },
        { id: 23, imgSrc: Img23 },
        { id: 24, imgSrc: Img24 }
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
        <div className="gallery-page">
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
            <div className="gallery-intro">
                <p className="eyebrow">Photo Gallery</p>
                <h1>My Favorite Memories</h1>
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <GalleryItem key={index} item={item} index={index} getImg={getImg} />
                ))}
            </div>
        </div>
    );
};

const GalleryItem = ({ item, index, getImg }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`pics ${inView ? 'visible' : ''}`} onClick={() => getImg(item.imgSrc, index)}>
            <img src={item.imgSrc} alt={`Gallery item ${index + 1}`} style={{ width: '100%' }} />
        </div>
    );
};

export default Gallery;
