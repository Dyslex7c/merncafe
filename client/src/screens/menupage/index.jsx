import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../components/menupdf/menu.pdf";
import moto from "../../components/images/motorcyclist.jpg";
import actress from "../../components/images/actress.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./menu.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Menu = React.forwardRef((props, ref) => {
    console.log(props);
    
    return (
        <div className="demoPage" ref={ref} width={480} height={684} backgroundColor= "black">
            <p>{props.children}</p>
        </div>
    );
});

const MenuPage = () => {
    const [numPages, setNumPages] = useState();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        AOS.init({duration: 1600});
        AOS.refresh();
    }, [])

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box m={5} p={4} display="flex" flexDirection="column" alignItems="center">
            <Typography data-aos="fade-in" variant='h0' fontWeight="600">
                Café Dulcet Menu
            </Typography>
            <Typography data-aos="fade-in" variant='h3' fontWeight="200">
                Your favorite gourmet cuisines and delectable items in one place
            </Typography>
            <Typography data-aos="fade-in" variant='h6' fontWeight="400" marginBottom={5}>
                All our dishes have been prepared by trained chefs and culinary veterans from around the world
            </Typography>
            <Typography data-aos="fade-in" variant='h6' fontWeight="400" marginBottom={5}>
                Open from 5 AM to 2 AM (12 AM on Mondays)
            </Typography>
        </Box>
            <HTMLFlipBook width={480} height={684}>
            {
                            [...Array(numPages).keys()].map((pNum) => (
                                <Menu key={pNum} number={pNum + 1}>
                                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pNum} width={480} renderAnnotationLayer={false} renderTextLayer={false} />
                                    </Document>
                                </Menu>
                            ))
                        }
            </HTMLFlipBook>
            <Box width="70%">
                <Typography variant='h1' fontWeight="100">
                    Reviews(2)
                </Typography>
                <Box marginTop={4} marginBottom={2} display="flex" flexDirection="row">
                    <img style={{width: "50px", height:"50px", borderRadius: "25px", boxShadow: "1px 1px 4px 1px black"}} src={moto}/>
                    <Typography m={1.5} variant='h5' style={{fontWeight: "200"}}>
                        Alex Oliveira Da Silva - Brazilian former motorcycle racer
                    </Typography>
                </Box>
                <Typography color="#ffae00">
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>                                               
                </Typography>
                <Typography variant='h7' style={{fontStyle: "italic", fontWeight: "400"}}>
                    "The food was exceptional and the atmosphere was serene. The prices were also justified. Looking forward to coming back"
                </Typography>
                <Box marginTop={4} marginBottom={2} display="flex" flexDirection="row">
                    <img style={{width: "50px", height:"50px", borderRadius: "25px", boxShadow: "1px 1px 4px 1px black"}} src={actress}/>
                    <Typography m={1.5} variant='h5' style={{fontWeight: "200"}}>
                        Selena Lopez Diaz - American singer & actress
                    </Typography>
                </Box>
                <Typography color="#ffae00">
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>
                    <i class="bi bi-star-fill" style={{marginRight: "4px"}}></i>                                               
                </Typography>
                <Typography variant='h7' style={{fontStyle: "italic", fontWeight: "400"}}>
                    “Just had the most incredible dining experience at Café Dulcet! The ambience was stunning, and every dish was a masterpiece. Huge thanks to the amazing chef and staff for making it such a memorable night. Can’t wait to come back!" 🍽️✨
                    <Typography color="blue" variant='h7'>
                    #Foodie #Blessed #GourmetDelights
                    </Typography>
                </Typography>
            </Box>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" marginTop={10}>
                <Typography marginBottom={3}>All trademarks are properties of their respective owners. 2023 © Title™ Ltd. All rights reserved.</Typography>
                <Box display="flex">
                    <Mail />
                    <Typography marginLeft={1} marginRight={4}>cafe@yahoomail.com</Typography>
                    <Phone/>
                    <Typography marginLeft={1}>+91-33-17296023</Typography>
                </Box>
        </Box>
    </Box>
  )
}

export default MenuPage;
