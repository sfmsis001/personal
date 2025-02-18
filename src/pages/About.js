import profileImage from '../assets/image1.jpg';

export default function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={profileImage} alt="Siso Sifumba" />
                </div>
                <div className="about-text">
                    <p>
                        I am Siso Sifumba, a versatile Software Developer, Data Analyst, and AI Engineer
                        with a strong commitment to leveraging technology for impactful solutions.
                    </p>
                    <p>
                        My expertise spans front-end and back-end development, cloud computing,
                        and data analytics. Proficient in HTML, CSS, MySQL, and data visualization tools
                        such as Tableau and Power BI, I specialize in transforming raw data into strategic insights.
                    </p>
                    <p>
                        I am an AWS Certified Cloud Practitioner and hold certifications in DevOps,
                        Database Management, and Artificial Intelligence. My skills extend to
                        cloud infrastructure, automation, and AI-driven solutions, ensuring scalable and
                        efficient system designs.
                    </p>
                    <p>
                        As the founder of Artictioneer, I am redefining the digital art marketplace with an
                        auction-based model that embraces the dynamic valuation of art.
                    </p>
                    <p>
                        Passionate about innovation and knowledge sharing, I strive to empower others by
                        teaching data analysis, software development, and cloud technologies, fostering
                        a future-ready tech community.
                    </p>
                </div>
            </div>
        </div>
    );
}
