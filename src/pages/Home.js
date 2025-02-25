export default function Home() {
    const showCV = () => {
        // Create an anchor element
        const link = document.createElement('a');
        // Set the href to the path of your CV file
        link.href = '/assets/Siso_Sifumba_CV_Final.pdf';
        // Set the download attribute with the desired filename
        link.download = 'Siso_Sifumba_CV_Final.pdf';
        // Programmatically click the link to trigger the download
        link.click();
    };

    return (
        <div className="content">
            <h2>Welcome</h2>
            <p>Welcome to my portfolio! I am a passionate software developer with a strong knack for data analysis.</p>
            <p>My journey in tech has equipped me with a diverse skill set, from crafting elegant code solutions to interpreting complex data
                sets that drive informed decision-making. I thrive on tackling challenging problems and turning abstract concepts into practical, user-friendly
                applications. With a commitment to continuous learning and a keen eye for detail, I aim to deliver innovative solutions that not only meet but exceed
                client expectations.</p>
            <p>Explore my work to see how I blend technical expertise with creative problem-solving to make an impact in the digital world.</p>
            
            <h3>My CV</h3>
            <p>View my CV to learn more about my experience and skills:</p>
            <div className="cv-link">
                <button onClick={showCV}>Download CV</button>
            </div>
        </div>
    );
}
