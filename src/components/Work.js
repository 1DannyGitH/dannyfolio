import React from 'react';
import './work.css';

import PythonIcon from '../assets/python-logo-1.png'; 
import CSharpIcon from '../assets/sharp-logo-1.png'; 

import AngularIcon from '../assets/angular-logo-1.png';

import GITHUBIcon from '../assets/github-logo-1.png';

import PostIcon from '../assets/postman-logo-1.png';
import JiraIcon from '../assets/jira-logo-1.png';
import TESTIcon from '../assets/testrail-logo-1.png';


const Work = () => {
  return (
    <div className='section' id='work'>
     <div className="workTextContainer">
     <h1 className='h2 text-accent centered-text'>Industry Experience.</h1>
     <h3 className='workTitle'>Level Home</h3>
     <span className='workDesc'>Sept 8 2022 - May 5th 2023</span>
     <ul className='centered-list'>
      <li>Reformatted Test Classes</li>
      <li>Performed Automated Testing for end product applications</li>
      <li>Wrote Test Cases</li>
      <li>Tested firmware and hardware in Pacific</li>
    </ul>
    <span className='workEnd'><h3>Technologies Used</h3></span>
       
      
      <div className='workImgs'>
             {/*Logo Seperator*/}
{[
          { title: 'C#', icon: CSharpIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'Python', icon: PythonIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
               {/*Logo Seperator*/}
{[
          { title: 'TestRail', icon: TESTIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
               {/*Logo Seperator*/}
{[
          { title: 'Jira', icon: JiraIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
               {/*Logo Seperator*/}
{[
          { title: 'Postman', icon: PostIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
               {/*Logo Seperator*/}
{[
          { title: 'Github', icon: GITHUBIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        </div>
        <div className='section' id='work'>
     <div className="workTextContainer">
     <h3 className='workTitle2'>Motorola Solutions</h3>
     <span className='workDesc2'>Oct 2 - Current(End Date: Dec 8th)</span>
     <ul className='centered-list'>
      <li>Rewriting Test Cases</li>
      
    </ul>
    <span className='workEnd2'><h3>Technologies Used</h3></span>
    <div className='workImgs'>
              {/*Logo Seperator*/}
{[
          { title: 'C#', icon: CSharpIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
                      {/*Logo Seperator*/}
{[
          { title: 'Angular', icon: AngularIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
                      {/*Logo Seperator*/}
{[
          { title: 'Github', icon: GITHUBIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
                      {/*Logo Seperator*/}
{[
          { title: 'Jira', icon: JiraIcon }, 
        ].map((tech, index) => (
          <div key={index} className="workImgsContainer">
            <img src={tech.icon} alt={tech.title} className="h-9 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
    </div>
    </div>
    </div>
        </div>
        </div>
  );
};


export default Work;
