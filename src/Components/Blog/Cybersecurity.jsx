import "./Cybersecurity.css"

import cyber from "../../Images/CybersecurityImages/Cyber.jpg"
import hacking from "../../Images/CybersecurityImages/Hacking.jpg"

const Cybersecurity = () => {
    return (
        <div className="Cybersecurity container">
            <h2>Ethical Hacking and Cybersecurity</h2>
            <h4>October 7, 2022</h4>
            <hr />
            <h2>Beginning Cybersecurity and CTFs</h2>

            <div className="Cybersecurity-images">
                <img src={cyber} alt=""></img>
                <img src={hacking} alt=""></img>
            </div>

            <div className="CybersecurityInfo">
                <h3>What is Cybersecurity and Ethical Hacking?</h3>
                <p>
                    Cybersecurity is the protection of computer systems and networks from
                    vulnerabilites and exploits. People who try to find vulnerabilites and weaknesses 
                    in different systems, applications or networks are called <b>hackers</b>. Individuals who
                    hack for malicious intent are called black-hat hackers (unethical hackers) and 
                    people who hack to help improve the security from being exploited are called
                    white-hat hackers (ethical hackers). In summary, Cybersecurity is the branch of computer science
                    that aims to improve the security of systems connected to the internet;
                    hackers, both ethical and unethical, exploit vulnerabilites in computer security for good 
                    or bad reasons.
                </p>

                <h3>What are CTFs?</h3>
                <p>
                    Capture the flag (CTF for short) are exercises used by hackers in order to practice exploiting
                    purposefully vulnerable programs or websites. When a hacker manages to succesfully
                    penetrate into the program, they retrieve a flag in order to prove that they have succeeded.
                    CTFs are like competitions for hackers; the better and more experienced hackers will exploit 
                    more programs in a shorter amount of time, consequently receiving more flags as a result. The
                    individual or group with the most points or flags captured wins the competition!
                </p>

                <h3>Why am I learning it?</h3>
                <p>
                    During university, I want to take the time to explore the different fields and careers that computer 
                    science has to offer. One of those careers I've wanted to explore was cybersecurity and I believe
                    that this is a great introduction into that field. I joined an ethical hacking club and they guided
                    me through the basics on getting started such as setting up a Linux VM and what websites like TryHackMe and HackTheBox. 
                    I realized that this is quite fun and something that I will continue learning about in the future.
                </p>
            </div>
        </div>
    )
}

export default Cybersecurity