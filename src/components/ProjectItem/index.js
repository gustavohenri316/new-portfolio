import React from 'react';
import { Link } from 'react-router-dom';
import ProjectImg from '../../assets/images/naped.png';
import { ProjectItemStyles } from './styles';



export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  gitHub = 'https://github.com/gustavohenri316/',
  preview ='https://vercel.com/gustavohenri316/'
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <a className="projectItem__link" href={gitHub}>GitHub</a>
        <a className="projectItem__link" href={preview}>Preview</a>
      </div>
    </ProjectItemStyles>
  );
}
