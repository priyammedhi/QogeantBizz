import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const liveProjects = [
  {
    id: 1,
    title: 'Live Project One',
    url: 'https://example.com/project-one',
  },
  {
    id: 2,
    title: 'Live Project Two',
    url: 'https://example.com/project-two',
  }
];

const LiveProjects = () => {
  return (
    <Container className="live-projects my-5">
      <h2 className="mb-4 text-center">Live Projects</h2>
      <ListGroup variant="flush">
        {liveProjects.map((project) => (
          <ListGroup.Item key={project.id} className="live-project-item">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="live-project-link">
              {project.title}
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default LiveProjects;
