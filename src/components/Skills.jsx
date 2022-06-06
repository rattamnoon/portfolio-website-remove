/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import GitLab from '../assets/gitlab.png';
import Tailwind from '../assets/tailwind.png';
import Sequelize from '../assets/sequelize.png';
import Antd from '../assets/antd.svg';
import Docker from '../assets/docker.png';
import Jenkins from '../assets/jenkins.png';
import Kubernetes from '../assets/kubernetes.png';

const dataSource = [
  { label: 'HTML', img: HTML },
  { label: 'CSS', img: CSS },
  { label: 'JavaScript', img: JavaScript },
  { label: 'React', img: ReactImg },
  { label: 'Node JS', img: Node },
  { label: 'Firebase', img: Firebase },
  { label: 'GitHub', img: GitHub },
  { label: 'GitLab', img: GitLab },
  { label: 'Tailwind', img: Tailwind },
  { label: 'Antd', img: Antd },
  { label: 'Sequelize', img: Sequelize },
  { label: 'Jenkins', img: Jenkins },
  { label: 'Docker', img: Docker },
  { label: 'Kubernetes', img: Kubernetes },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {dataSource.map(({ label, img }) => (
            <div
              key={label}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={img} alt={label} />
              <p className="my-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
