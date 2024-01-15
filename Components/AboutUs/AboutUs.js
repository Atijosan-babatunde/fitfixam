import React from "react";
import { Container, Wrapper } from "./Style";
import Image from "next/image";
import arrow from "@/public/Arrow-2.png";
import founder from "@/public/mr-francis.png";
import Babatunde from "@/public/Babatunde.JPG";
import Tofunmi from "@/public/Tofunmi.jpg";
import Great from "@/public/Great.JPG";

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <h2>A little bit about us</h2>
        <p className="first">
          Fitfixam was born out of continual disappointments at the hands of
          artisans who claim to know how to go about their work and produce
          unsatisfactory results in the end. It is a known fact that some
          artisans do not keep to their word, and in most cases are not as good
          as they claim to be. <br /> <br />
          This is not to say that there are no amazing artisans out there who
          deliver quality service. There are in fact a lot of them, and we would
          love to promote their work here on Fitfixam.
        </p>
        <div className="about">
          <div className="vision">
            <h1>Vision</h1>
            <p>
              To be the go-to platform to find competent artisans around Nigeria
              and ultimately, across the world.
            </p>
          </div>
          <div className="mission">
            <ul>
              <li>
                Gather information/reviews on artisans and organizations for
                artisans in a bid to ascertain their competence
              </li>
              <li>Reward competent artisans with publicity and referrals.</li>
              <li>
                Offer developmental content and training to grow capacity in
                artisans
              </li>
            </ul>
            <h1>Mission</h1>
          </div>
        </div>
        <div className="founder">
          <div className="founder_image">
            <Image
              src={founder}
              alt="Mr Francis"
              width={521}
              height={615}
              objectFit="contain"
              blurDataURL="URL"
              placeholder="blur"
            />
          </div>
          <div className="about_founder">
            <h1>Mr. Francis Nwaochei</h1>
            <p>
              Hi and welcome to Fitfixam. Just a little overview of the Founder-
              me. <br /> <br />
              Francis Nwaochei is the Founder of Fitfixam started in 2021 which
              connects quality artisans and craftsmen to customers in an
              environment where quality craftsmen customer service is lacking.{" "}
              <br /> <br />
              Francis Nwaochei has over twenty-five years’ experience in a
              multinational oil company and successfully starting up 2 other
              small businesses. He has built a wealth of experience in various
              capacities in engineering analysis, business planning, budgeting,
              budget performance, contracting as well as joint venture partner
              engagement managing over $500m in contracts and budgeting. <br />{" "}
              <br />
              Francis spent ten years supervising technical operations offshore
              and onshore with a hands-on experience in planning and executing
              technical operations. Francis technical supervision includes
              developing work procedures, work permits, safety plans, project
              execution and supervision. These skills formed his passion for
              excellence in craftsmen workmanship through experience in a world
              class multinational company. <br /> <br />
              An MBA at Imperial college London increased Francis Nwaochei’s
              passion to provide vision, structure, direction and strategy into
              an industry where gaps exist and to ensure that the structure is
              sustainable. That is my driver for the craftsmen industry
              particularly in places where regulation is absent and quality
              craftsmen are greatly lacking. <br /> <br />
              At Fitfixam, the objective is to create a platform where customers
              can identify and connect with artisans and craftsmen who do
              excellent workmanship. There are a few main reasons for this – to
              standardize a minimum quality of work that delivers satisfaction
              to the customer, to raise the standard of professionalism of
              craftsmen in the local industry, to build capacity of craftsmen
              through competition and to create jobs and improve craftsmen
              financial compensation where they can demand more by providing
              quality service. <br /> <br />
              Watching Dragon’s Den is one of my hobbies and I love to see
              people provide business solutions that positively impact the
              society. I cannot wait to see Fitfixam change the artisan space
              locally and globally in a business environment that lacks standard
              craftsmen service to customers and be part of that wonderful group
              of people creating value through innovation and entrepreneurial
              solutions. <br /> <br />I once lived in a building that was
              structurally flawed and all attempts to correct the flaws were
              unsuccessful which cost me a lot of money. The technical flaws
              could not be addressed because the craftsmen were not qualified
              for the job and this was a problem I realized many others were
              facing despite having the financial resources. Efforts to get
              qualified craftsmen only increased waste of resources and more
              heartache. Realizing that this was a gap that needed to be filled
              after consulting with over 500 people locally, I decided to start
              the first digital platform where customers and artisans can
              connect- customers can connect with quality artisans to get jobs
              done right the first time. <br /> <br />
              The long-term goal for Francis Nwaochei and Fitfixam is to be the
              most trusted platform for hiring quality artisans for personal and
              business related technical or handiwork jobs.
            </p>
          </div>
        </div>

        <div className="team">
          <h1 className="team_head">The Team</h1>
          <div className="members">
            <div className="member">
              <Image
                src={Great}
                width={350}
                height={400}
                objectFit="cover"
                objectPosition="top"
                alt="team member"
                blurDataURL="URL"
                placeholder="blur"
              />
              <h1>Great Donatus</h1>
              <p>Project Lead</p>
            </div>
            <div className="member">
              <Image
                src={Babatunde}
                width={350}
                height={400}
                objectFit="cover"
                objectPosition="top"
                alt="team member"
                blurDataURL="URL"
                placeholder="blur"
              />
              <h1>Babatunde Atijosan</h1>
              <p>Platform Developer</p>
            </div>
            <div className="member">
              <Image
                src={Tofunmi}
                width={350}
                height={400}
                objectFit="cover"
                objectPosition="top"
                alt="team member"
                blurDataURL="URL"
                placeholder="blur"
              />
              <h1>Tofunmi Komolafe</h1>
              <p>Social Media & Community Manager</p>
            </div>
            {/* <div className="member">
              <Image
                src={Babatunde}
                width={350}
                height={400}
                objectFit="cover"
                alt="team member"
              />
              <h1>Babatunde Atijosan</h1>
              <p>Platform Developer</p>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
