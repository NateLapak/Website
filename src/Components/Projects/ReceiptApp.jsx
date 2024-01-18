import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./Earsketch.css";
import { FaReceipt } from "react-icons/fa";

import UofALogo from "../../Images/ReceiptApp-images/UofA-logo.png"
import HackathonLogo from "../../Images/ReceiptApp-images/HackED-Beta2023.png"
import Homepage from "../../Images/ReceiptApp-images/Homepage-pic1.png"
import Homepage_Table from "../../Images/ReceiptApp-images/Homepage-table.png"


const ReceiptApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container col-lg-10 col-md-10 col-sm-4">
      <div className="showcase">
        <h1>
          <b>Project showcase</b>
        </h1>
        <h4>Here, you can find my favorite personal projects.</h4>
      </div>

      <div className="HealthHackED">
        <div>
          <div className="header">
            <h1>
              Project 1: Receipt Scanner Application <FaReceipt />
            </h1>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Click to expand!
            </Button>
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <h3>
                <i>
                  "Take a picture of your receipts and view each item in a table"
                </i>
              </h3>
              <img src={UofALogo} className="w-25 p-4" alt=""></img>
              <img src={HackathonLogo} className="w-25 p-4" alt=""></img>

              <div className="receipt-screenshots">
                <h2>
                  <b>Homepage screenshots</b>
                </h2>
                <img className="w-50 p-5" src={Homepage} alt=""></img>
                <img className="w-50 p-5" src={Homepage_Table} alt=""></img>
              </div>

              <h2>About this project</h2>
              <p>
                The Receipt-Scanner app is a project developed by me and three other members
                from the computer science and engineering faculties at the
                University of Alberta. The web application takes a photo of your receipt, analyzes it's content
                using OpenCV and Pytesseract, and then outputs each item as an html table. For more information, check
                out the Github repo linked below!
              </p>

              <Button
                className="m-3"
                href="https://github.com/HackEDBetaMoggers/Scanner-app"
              >
                Github 
              </Button>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ReceiptApp;
