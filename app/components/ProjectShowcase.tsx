import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    image: StaticImageData | string;
    icon?: string;
}

const ProjectShowcase = ({project}: {project: Project}) => {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className='cursor-pointer block'>
            <div>
                <h3 className="vertical-timeline-element-title">{project?.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{project?.subtitle}</h4>
                <p>
                    {project?.description}
                </p>
            </div>
            <div className="">
                <Image
                    src={project.image}
                    alt={project.title}
                />
            </div>
        </a>
    );
};

export default ProjectShowcase;
