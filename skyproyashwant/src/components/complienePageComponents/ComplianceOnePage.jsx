import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pdfProvider = (pdfName) => {
  const pdfFile = require(`../../assets/images/complianceFilePDF/${pdfName}`);
  return pdfFile;
};

const ComplianceOnePage = () => {
  const [complianceData, setComplianceData] = useState();
  const getComplianceFunc = async (req, res) => {
    const data = await axios.get("/api/compliancepdf");
    setComplianceData(data?.data);
    // console.log(com);
  };
  useEffect(() => {
    getComplianceFunc();
  }, []);
  console.log("complianceData>>>", complianceData);
  return (
    <>
      <div className="package-section-new privacy-section">
        <div className="container-fluid">
          <div className="row">
            <div className="documents-main" style={{ marginTop: "50px" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 class="mt-0">Compliances</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-9">
                    <h6>Document Title</h6>
                  </div>
                  <div className="col-sm-3">
                    <h6>Download</h6>
                  </div>
                </div>
                {complianceData?.map((item, index) => (
                  <div className="row">
                    <div className="col-sm-9">
                      <div className="comp-description">{item.title}</div>
                    </div>
                    <div className="col-sm-3">
                      <Link
                        to={pdfProvider(item.pdfFile)}
                        target="_blank"
                        className="downloadbtn"
                      >
                        <img
                          src="https://www.hathway.com/about_images/download.png"
                          alt="download"
                        />
                        <p>Download</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplianceOnePage;
