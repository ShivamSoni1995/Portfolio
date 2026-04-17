import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

// Google Drive resume links
const RESUME_VIEW_URL = 'https://drive.google.com/file/d/1hWptkCrBDJArRkm8m2KQrSLwDBrP-YCU/preview';
const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1hWptkCrBDJArRkm8m2KQrSLwDBrP-YCU';
const RESUME_OPEN_URL = 'https://drive.google.com/file/d/1hWptkCrBDJArRkm8m2KQrSLwDBrP-YCU/view?usp=sharing';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
  padding: 0;
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 800px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  
  @media (max-width: 768px) {
    height: 600px;
  }
  
  @media (max-width: 576px) {
    height: 500px;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer className="section">
      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title mb-4">Resume</h2>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="mx-auto text-center">
          <Button 
            href={RESUME_DOWNLOAD_URL} 
            variant="primary" 
            size="lg" 
            className="resume-download-btn me-3"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
          <Button 
            href={RESUME_OPEN_URL} 
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary" 
            size="lg" 
            className="resume-download-btn"
          >
            <FaExternalLinkAlt className="me-2" /> Open in Google Drive
          </Button>
        </Col>
      </Row>

      <Row>
        <Col lg={9} className="mx-auto">
          <PDFFrame
            src={RESUME_VIEW_URL}
            title="Shivam's Resume"
            allow="autoplay"
          />
        </Col>
      </Row>
    </ResumeContainer>
  );
};

export default Resume;
