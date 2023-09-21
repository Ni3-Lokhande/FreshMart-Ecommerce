
import React from 'react';
import TitleBox from './TitleBox';
import AboutContent from './AboutContent';
import ServiceBlock from './ServiceBlock';
import TeamMember from './TeamMember';

const About = () => {
    // Sample data for dynamic rendering
    const title = "ABOUT US";
    const breadcrumb = ["Home", "ABOUT US"];
    const serviceBlocks = [
        {
            title: "We are Trusted",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "We are Professional",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "We are Expert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    const teamMembers = [
        {
            name: "Williamson",
            post: "Web Developer",
            imageSrc: "assets/images/img-1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.",
        },
        // Add more team members as needed
    ];

    return (
        <div>
            <TitleBox title={title} breadcrumb={breadcrumb} />
            <AboutContent />
            <div className="container">
                <div className="row my-5">
                    {serviceBlocks.map((block, index) => (
                        <ServiceBlock key={index} title={block.title} description={block.description} />
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="row my-4">
                    <div className="col-12">
                        <h2 className="noo-sh-title">Meet Our Team</h2>
                    </div>
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} name={member.name} post={member.post} imageSrc={member.imageSrc} description={member.description} />
                    ))}

                </div>
            </div>
        </div>
    )
}
export default About




