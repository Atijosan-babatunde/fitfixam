import React from "react";
import { Container } from "./Styles";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const CompaniesPage = ({ companies }) => {
  console.log(companies);

  return (
    <Container>
      <div className="container">
        <h1>Companies</h1>
        <p className="paragraph">
          Discover businesses, see the reviews of others and review them
        </p>
        {companies.map((company) => (
          <div className="card" key={company.id}>
            <div className="company">
              <h2>{company.company_name}</h2>
              <p>{company.description}</p>
              <div className="reach">
                {company.website && <p>Visit their website</p>}
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
            <div className="details">
              <div className="social">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                {company.phone && <p>{company.phone}</p>}
              </div>
              <div className="social">
                <div className="icon">
                  <FaEnvelope />
                </div>
                {company.email && <p>{company.email}</p>}
              </div>
              <div className="social">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                {company.address && <p>{company.address}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CompaniesPage;
