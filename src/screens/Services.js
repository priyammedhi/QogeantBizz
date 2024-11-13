import React, { useState } from 'react';
import '../App.css';

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const faqs = [
        {
            question: 'What services do we provide?',
            answer: 'We offer a wide range of services including web development, digital marketing, and IT consulting.',
        },
        {
            question: 'How to contact us?',
            answer: 'You can contact us via email at support@qogeant-bizz.com or call us at +123 456 7890.',
        },
        {
            question: 'Can I see your work?',
            answer: 'Absolutely! Our gallery is a treasure trove of our epic creations!',
        },
        {
            question: 'What’s your pricing like?',
            answer: 'Our prices are as flexible as a yoga master—tailored to fit your needs!',
        },
        {
            question: 'Do you offer support?',
            answer: 'Of course! We’re like your trusty sidekick, always ready to help!',
        }
    ];

    const serviceDetails = {
        "Office Automation": {
            image1: require('../images/cctv.png'),
            description1: "Office Automation streamlines and simplifies various administrative tasks within an organization through the use of technology. This approach incorporates software and hardware solutions to automate routine processes such as document management, scheduling, and communication. With tools like automated email filters, task management applications, and digital document storage systems, office automation reduces the manual workload and increases overall efficiency. By automating repetitive tasks, organizations can minimize human error, enhance productivity, and free up valuable time for employees to focus on strategic and creative tasks.",
            image2: require('../images/hosted+pbx.png'),
            description2: "Additionally, office automation improves collaboration and communication within teams. Digital platforms such as project management tools and shared document editors enable real-time collaboration, allowing team members to work together seamlessly, regardless of their physical location. Integration with cloud-based solutions ensures that documents and data are accessible from anywhere, providing flexibility and supporting remote work arrangements. This connectivity fosters a more agile work environment, where employees can easily share information, track project progress, and make data-driven decisions.",
            image3: require('../images/printer.png'),
            description3: "Office automation also contributes to better data management and analysis. Automated systems can generate reports, track performance metrics, and analyze trends with minimal manual intervention. This capability provides organizations with valuable insights into their operations, helping to identify areas for improvement and optimize business processes. By leveraging these insights, companies can make informed decisions, implement effective strategies, and drive continuous improvement.",
            image4: require('../images/conferencetable.png'),
            description4: "Furthermore, office automation supports scalability and growth. As organizations expand, automated systems can easily adapt to increased workloads and evolving business needs. For instance, automated customer relationship management (CRM) systems can handle a growing customer base without compromising service quality. The scalability of office automation solutions ensures that businesses can efficiently manage larger volumes of data, transactions, and communications, supporting their growth and long-term success.",
            link: ""
        },
        "Data Center": {
            image1: require('../images/server.png'),
            description1: "Data Centers are critical facilities designed to house and manage essential IT infrastructure, including servers, storage systems, and networking equipment. They provide the physical space and environment necessary for the operation of various enterprise applications, data storage, and internet services. Data centers are equipped with advanced cooling systems, power redundancy, and physical security measures to ensure the reliability and availability of IT resources. These facilities are crucial for supporting cloud computing, big data analytics, and other high-demand applications that require substantial computing power and storage capacity.",
            image2: require('../images/router.png'),
            description2: "The design and operation of a data center are centered around ensuring maximum uptime and minimizing the risk of service disruptions. This involves implementing redundant power sources, cooling systems, and network connections to prevent single points of failure. Data centers also incorporate disaster recovery and backup solutions to safeguard data and maintain continuity in the event of a failure or natural disaster. Regular maintenance and monitoring are essential to address potential issues proactively and ensure the ongoing stability of the data center environment.",
            image3: require('../images/san.png'),
            description3: "Modern data centers often employ virtualization technologies to optimize resource utilization and improve scalability. Virtualization allows multiple virtual machines to run on a single physical server, maximizing the efficiency of hardware resources and reducing operational costs. Additionally, data centers are increasingly adopting energy-efficient practices and green technologies to minimize their environmental impact. This includes using energy-efficient cooling systems, renewable energy sources, and advanced power management techniques to reduce the overall carbon footprint.",
            image4: require('../images/electrical_generator.png'),
            description4: "The evolution of data centers is also driven by the need for greater flexibility and responsiveness to changing business requirements. With the rise of cloud computing and on-demand services, data centers are evolving to support dynamic and scalable infrastructure. This shift enables organizations to quickly adapt to new technologies, scale their IT resources as needed, and meet the demands of an increasingly digital and data-driven world.",
            link: ""
        },
        "Networking & Security": {
            image1: require('../images/1692367954372.png'),
            description1: "Networking & Security are essential components of modern IT infrastructure, focusing on the design, implementation, and management of network systems and their protection from cyber threats. Networking involves creating and maintaining the interconnected systems that enable devices, applications, and users to communicate and share resources. This includes the configuration of routers, switches, and other networking equipment to ensure reliable and efficient data transmission. Effective networking strategies also encompass the deployment of network topologies, protocols, and performance optimization techniques to support the organization’s operational needs.",
            image2: require('../images/antivirus.png'),
            description2: "Security, on the other hand, is crucial for safeguarding network systems and data from unauthorized access, breaches, and other cyber threats. This involves implementing various security measures such as firewalls, encryption, intrusion detection systems, and access controls to protect sensitive information and maintain the integrity of network resources. Regular security audits and vulnerability assessments are essential to identify potential weaknesses and address them before they can be exploited by malicious actors. Security best practices also include employee training and awareness programs to mitigate human-related risks and enhance overall cybersecurity posture.",
            image3: require('../images/netsecurity.jpg'),
            description3: "The convergence of networking and security practices is vital for creating a comprehensive and resilient IT infrastructure. Network security solutions must be integrated into the network design to ensure that security measures do not hinder performance or functionality. This includes configuring network segmentation, implementing secure protocols, and utilizing threat intelligence to detect and respond to emerging threats. Additionally, network monitoring and management tools provide real-time visibility into network activity, enabling organizations to quickly identify and respond to potential security incidents.",
            image4: require('../images/1720501013240.png'),
            description4: "As organizations increasingly adopt cloud computing and mobile technologies, networking and security considerations become even more critical. The shift to cloud-based services and remote work introduces new challenges and opportunities for managing network performance and security. Organizations must adopt scalable and flexible networking solutions that can accommodate changing demands while ensuring robust security measures to protect against evolving threats. By addressing these challenges, organizations can maintain a secure and efficient network environment that supports their digital transformation and business objectives.",
            link: ""
        },
        "Smart Class": {
            image1: require('../images/vCloudPoint-Smart-Classroom.jpg'),
            description1: "Smart Class represents a significant advancement in educational technology, transforming traditional classrooms into dynamic and interactive learning environments. By integrating digital tools such as interactive whiteboards, projectors, and educational software, smart classrooms enhance the teaching and learning experience. These technologies enable educators to present multimedia content, conduct interactive lessons, and engage students in new and innovative ways. Smart classrooms also facilitate real-time feedback and assessment, allowing teachers to tailor their instruction to the needs of individual students and monitor their progress more effectively.",
            image2: require('../images/visualiser.png'),
            description2: "The use of technology in smart classrooms promotes collaboration and active learning among students. Tools such as online discussion platforms, collaborative document editors, and virtual simulations encourage students to work together and explore subjects in greater depth. These collaborative tools also support remote learning and hybrid classroom models, making education more accessible to students who may not be physically present. By fostering an interactive and participatory learning environment, smart classrooms help students develop critical thinking and problem-solving skills that are essential for their future success.",
            image3: require('../images/audio-podium.png'),
            description3: "Smart classrooms also offer a range of digital resources that enrich the educational experience. Educational apps, online databases, and virtual libraries provide students with access to a wealth of information and learning materials beyond traditional textbooks. This access to diverse resources allows students to explore subjects more thoroughly and engage with content in a variety of formats. Additionally, teachers can use technology to create personalized learning experiences, providing students with tailored content and support based on their individual needs and learning styles.",
            image4: require('../images/led-wall-indoor.png'),
            description4: "The implementation of smart classrooms requires careful consideration of both technological and pedagogical factors. Educators need to be trained in the effective use of digital tools and strategies to maximize their impact on teaching and learning. Schools must also ensure that their infrastructure supports the integration of technology, including reliable internet connectivity and sufficient technical support. By addressing these considerations, smart classrooms can provide a transformative educational experience that prepares students for the demands of a technology-driven world.",
            link: "Roombr-Hardware-Brochure-1.pdf"
        },
        "UAV": {
            image1: require('../images/uavinfo.png'),
            description1: "UAVs (Unmanned Aerial Vehicles), commonly known as drones, have revolutionized a wide range of industries with their ability to perform tasks without a human pilot onboard. These versatile devices are equipped with advanced sensors, cameras, and GPS technology that allow them to capture aerial imagery, conduct surveillance, and gather data from hard-to-reach locations. UAVs are used in various applications, including agriculture, where they monitor crop health and optimize resource usage, and in logistics, where they facilitate rapid and efficient delivery of packages.",
            image2: require('../images/uav.png'),
            description2: "The capabilities of UAVs extend to environmental monitoring and disaster response. Drones equipped with specialized sensors can collect data on air and water quality, track wildlife, and assess the impact of natural disasters. In emergency situations, UAVs provide real-time situational awareness and assist in search and rescue operations by identifying areas of interest and providing critical information to first responders. The ability to cover large areas quickly and safely makes UAVs an invaluable tool in addressing environmental and humanitarian challenges.",
            image3: require('../images/uav2.png'),
            description3: "UAV technology continues to advance with improvements in battery life, flight stability, and automation. Modern drones feature longer flight times, enhanced control systems, and autonomous flight capabilities, allowing them to perform complex tasks with minimal human intervention. These advancements are driving innovation across industries and expanding the potential applications of UAVs. For instance, advancements in artificial intelligence enable drones to conduct detailed inspections of infrastructure, such as bridges and power lines, identifying issues with greater accuracy and efficiency.",
            image4: require('../images/uav3.png'),
            description4: "The growing adoption of UAVs also raises important considerations regarding regulations and privacy. As drones become more prevalent, governments and organizations are establishing guidelines and policies to ensure their safe and responsible use. This includes airspace management, safety protocols, and privacy protections to prevent unauthorized surveillance and ensure the ethical use of UAV technology. By addressing these concerns, the benefits of UAVs can be maximized while minimizing potential risks and ensuring their positive impact on society.",
            link: ""
        },
        "Smart City": {
            image1: require('../images/smartcity.png'),
            description1: "Smart City initiatives aim to transform urban environments into more efficient, sustainable, and connected spaces through the integration of advanced technologies and data analytics. By leveraging sensors, IoT devices, and data-driven insights, smart cities enhance the management of infrastructure and services, improving the overall quality of life for residents. Smart city solutions encompass various domains, including traffic management, energy efficiency, waste management, and public safety. For example, smart traffic systems optimize traffic flow and reduce congestion by analyzing real-time data from traffic sensors and adjusting signal timings accordingly.",
            image2: require('../images/city.png'),
            description2: "In addition to improving operational efficiency, smart cities focus on sustainability and environmental stewardship. Technologies such as smart grids and energy management systems enable more efficient use of resources, reducing energy consumption and lowering greenhouse gas emissions. Waste management systems use sensors to monitor waste levels and optimize collection routes, minimizing environmental impact and improving sanitation. By adopting these sustainable practices, smart cities contribute to a healthier and more eco-friendly urban environment.",
            image3: require('../images/1692367954372.png'),
            description3: "Smart city projects also emphasize citizen engagement and inclusion. Digital platforms and mobile applications provide residents with access to information, services, and opportunities for participation in decision-making processes. For instance, smart city apps may offer real-time updates on public transportation, report issues such as streetlight outages, and facilitate communication with local authorities. This increased transparency and accessibility empower residents to actively contribute to the development and improvement of their city.",
            image4: require('../images/Visuel SC.png'),
            description4: "The successful implementation of smart city initiatives requires collaboration between government, businesses, and the community. Stakeholders must work together to address challenges such as data privacy, security, and digital equity. Additionally, investment in infrastructure, technology, and innovation is essential to support the growth and evolution of smart cities. By fostering a collaborative and forward-thinking approach, smart cities can realize their vision of creating more livable, efficient, and resilient urban environments.",
            link: ""
        }
    };

    return (
        <div style={{ backgroundColor: '#e8e1e5', padding: "75px 0" }}>

            <div className="epic-services-section" style={{
                backgroundImage: `url(${require('../images/servicebg.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '160px 0',
                marginBottom: '50px',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.7)'
            }}>
                <h1 style={{ color: 'orange', fontFamily: 'Playfair Display', fontSize: '4rem', fontWeight: 'bolder' }}>EPIC SERVICES</h1>
                <p style={{ color: 'white', fontSize: '2rem', fontFamily: 'Georgia' }}>Unleashing the Extraordinary in Every Project We Touch!</p><br />
                <a href="#getinfo"><button className='btn btn-outline-light' style={{ fontSize: '25px', padding: '15px 35px', borderRadius: '50px' }}>Explore More</button></a>
            </div>

            {/* Conditionally render the service details */}
            {selectedService && (
                <div className='container text-fluid' style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Georgia', fontSize: '3rem', color: '#333' }}>{selectedService}
                        <button className="btn btn-outline-dark dropdown-toggle" style={{ fontSize: '20px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Office Automation')}>Office Automation</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Data Center')}>Data Center</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Networking & Security')}>Networking & Security</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Smart Class')}>Smart Class</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('UAV')}>UAV</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Smart City')}>Smart City</a></li>
                        </ul>
                    </h2><br />
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className='col-lg-6 mb-3'>
                            <img src={serviceDetails[selectedService]?.image1} alt={selectedService} style={{ maxWidth: '70%', borderRadius: '15px' }} />
                        </div>
                        <div className='col-lg-6 '>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                {serviceDetails[selectedService]?.description1}
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className='col-lg-6 '>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                {serviceDetails[selectedService]?.description2}
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={serviceDetails[selectedService]?.image2} alt={selectedService} style={{ maxWidth: '70%', borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className='col-lg-6'>
                            <img src={serviceDetails[selectedService]?.image3} alt={selectedService} style={{ maxWidth: '70%', borderRadius: '15px' }} />
                        </div>
                        <div className='col-lg-6 '>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                {serviceDetails[selectedService]?.description3}
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className='col-lg-6 '>
                            <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                {serviceDetails[selectedService]?.description4}
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={serviceDetails[selectedService]?.image4} alt={selectedService} style={{ maxWidth: '70%', borderRadius: '15px' }} />
                        </div>
                    </div>
                    {/* Brochure section */}
                    {serviceDetails[selectedService]?.link && (
                        <div>
                            <p className="mb-4">Explore our latest brochure to know more about our services and offerings.</p>
                            <div className="d-flex justify-content-around">
                                <a href={serviceDetails[selectedService].link} download className="btn btn-success">
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    )}
                    <hr className='my-5' />
                </div>
            )}

            <div className="container">
                <div className="row mb-5">
                    {/* FAQ Section */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="p-4" style={{ backgroundColor: '#e8e1e5', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
                            <h2 className="mb-4" style={{ fontFamily: 'Georgia', fontSize: '4rem', color: '#333', fontWeight: 'bolder' }}>Curious Minds Ask:</h2>
                            <br />
                            <div className="row" style={{ margin: '5px' }}>
                                {faqs.map((faq, index) => (
                                    <div className="col-12 mb-4" key={index} data-aos="fade-up">
                                        <div className="p-4 text-start" style={{ backgroundColor: '#f9f9f9', borderRadius: '50px', fontFamily: 'Playfair Display', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                                            <h5 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>{faq.question}</h5>
                                            <p style={{ fontSize: '1.3rem' }}>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="col-lg-6"  >
                        <div data-aos="fade-down" style={{ backgroundColor: '#f9f9f9', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                            <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bolder', fontFamily: 'Georgia' }}>Our Mission Unleashed</h1>
                            <img src={require('../images/WhatsApp Image 2024-08-12 at 11.07.32_8c25ad69.jpg')} alt="Our Logo" className="img-fluid my-4" style={{ maxWidth: '100%', borderRadius: "15px" }} /> <br />
                            <p style={{ fontSize: '1.2rem', color: '#555', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                The mission of Qogeant-Bizz is a reflection of its unwavering commitment to customer satisfaction. The company's mission is to provide tailored IT solutions that cater to the unique needs of each client, ensuring that technology is leveraged to its fullest potential. This mission is built on the pillars of:

                                Customer Centricity: Qogeant-Bizz places its clients at the forefront of its operations, understanding their needs, and delivering solutions that exceed their expectations.
                                Innovation: The company is committed to staying at the vanguard of technological advancements, ensuring that its clients benefit from the latest innovations in the industry.
                                Excellence: Qogeant-Bizz strives for perfection in every aspect of its operations, from project execution to customer support, setting new benchmarks for the industry.
                                Partnership: The company fosters long-term relationships with its clients, working in tandem to achieve common goals and objectives.

                            </p>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12" data-aos="fade-up">
                                <div style={{ backgroundColor: '#f9f9f9', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'Georgia', color: '#333', fontWeight: 'bolder' }}>Our Vision for the Future</h1>
                                    <br />
                                    <p style={{ fontSize: '1.2rem', textAlign:'justify', color: '#555', fontFamily: 'Playfair Display' }}>
                                    Qogeant-Bizz's vision is a testament to its unwavering dedication to excellence. The company envisions a future where technology seamlessly integrates with business operations, fostering an environment of efficiency, productivity, and innovation. By harnessing the power of cutting-edge technology, Qogeant-Bizz aims to empower businesses to reach new heights, transcending geographical boundaries and industry verticals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className='pt-5' id='getinfo'>
            <div  className="m-5 mb-0 bg-light d-flex justify-content-center" style={{ borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <div className='m-5 p-5'>
                    <h1 style={{ fontFamily: 'Georgia', fontSize: '3rem' }}>Too know more about the services we provide:</h1>
                    <br /><button className="btn btn-outline-dark dropdown-toggle" style={{ fontSize: '20px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Get Detailed Info
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Office Automation')}>Office Automation</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Data Center')}>Data Center</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Networking & Security')}>Networking & Security</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Smart Class')}>Smart Class</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('UAV')}>UAV</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Smart City')}>Smart City</a></li>
                    </ul>
                </div>
            </div>
            </div>


        </div>
    );
}

export default Services;
