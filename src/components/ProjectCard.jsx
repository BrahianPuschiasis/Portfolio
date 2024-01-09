// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, repositories, videos }) => (
  <div className="mb-8 p-4 bg-white dark:bg-slate-800 shadow-md rounded-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mb-4"></div>
    <p>{description}</p>
    <div className="mb-4"></div>
    {repositories && (
      <div className="mt-2">
        <p className="font-semibold">Repositorios:</p>
        <ul className="list-disc pl-6">
          {repositories.map((repo, index) => (
            <li key={index}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    <div className="mb-4"></div>
    {videos && (
      <div className="mt-2">
        <p className="font-semibold">Videos:</p>
        <div className="space-y-2">
          {videos.map((video, index) => (
            <iframe
              key={index}
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    )}
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectCard;
