export default function Skills() {
    return (
        <div>
            <p>View my Certifications from Coursera (IBM) and AWS</p> 

            {/* Buttons for Certifications */}
            <div className="cert-buttons">
                <a 
                    href="https://www.credly.com/users/siso-sifumba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credly-button"
                >
                    View My Credly Profile
                </a>

                <a 
                    href="https://www.credly.com/users/siso-sifumba.e4f72dcb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="aws-button"
                >
                    AWS Certification
                </a>
            </div>

            <div className="skills">
                <section className="my-skills">
                    <h2>DevOps</h2>
                    <h3>- DevOps Certifications:</h3>
                    <p>Introduction to DevOps </p>
                    <p>DevOps on AWS: Code, Build, and Test.</p>
                </section>

                <section className="my-skills">
                    <h2>Cloud Computing</h2>
                    <h3>- AWS Certifications:</h3>
                    <p>AWS Certified Cloud Practitioner</p>
                </section>

                <section className="my-skills">
                    <h2>Database Management</h2>
                    <h3>- Data Analyst Certifications:</h3>
                    <p>Data Analysis Essentials</p>
                    <p>Database and SQL for Data Science</p>
                    <p>NoSQL Database Essentials</p>
                    <p>Relational Database (RDBMS) Essentials</p>
                </section>

                <section className="my-skills">
                    <h2>Artificial Intelligence</h2>
                    <h3>- AI Engineer Certifications:</h3>
                    <p>Artificial Intelligence Essentials</p>
                    <p>Generative AI: Prompt Engineering</p>
                    <p>Generative AI Essentials</p>
                    <p>Chatbot Building Essentials with IBM Watsonx Assistant (v2)</p>
                </section>
            </div>

            {/* CSS Styling */}
            <style jsx>{`
                .cert-buttons {
                    display: flex;
                    gap: 10px;
                    margin: 10px 0;
                }

                .credly-button, .aws-button {
                    display: inline-block;
                    padding: 10px 15px;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 5px;
                    transition: background 0.3s ease;
                }

                .credly-button {
                    background-color: #0073e6;
                    color: white;
                }

                .credly-button:hover {
                    background-color: #005bb5;
                }

                .aws-button {
                    background-color: #ff9900;
                    color: white;
                }

                .aws-button:hover {
                    background-color: #cc7a00;
                }
            `}</style>
        </div>
    );
}
