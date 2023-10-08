import React from 'react';
import './tech.css';
import JavaIcon from '../assets/java-logo-1.png'; 
import PythonIcon from '../assets/python-logo-1.png'; 
import CSharpIcon from '../assets/sharp-logo-1.png'; 
import CplusplusIcon from '../assets/Cplusplus-logo-1.png'; 
import JavaScriptIcon from '../assets/JavaScript-logo-1.png'; 
import SQLIcon from '../assets/sql-logo-1.png'; 
import PHPIcon from '../assets/php-logo-1.png'; 
import ReactIcon from '../assets/react-logo-1.png'; 
import SpringBootIcon from '../assets/spring-logo-1.png'; 
import NodeIcon from '../assets/node-logo-1.png'; 
import FlaskIcon from '../assets/flask-logo-1.png'; 
import AngularIcon from '../assets/angular-logo-1.png';
import AWSIcon from '../assets/aws-logo-1.png';
import DockerIcon from '../assets/docker-logo-1.png';
import GITHUBIcon from '../assets/github-logo-1.png';
import GIIcon from '../assets/git-logo-1.png';
import MongoIcon from '../assets/mongodb-logo-1.png';
import MySQLIcon from '../assets/mysql-logo-1.png';
import PostIcon from '../assets/postman-logo-1.png';
import JiraIcon from '../assets/jira-logo-1.png';
import TESTIcon from '../assets/testrail-logo-1.png';
import ConceptsPic from '../assets/concepts.png';
const Tech = () => {
  return (
    <section id='tech'>
      <div className="techTextContainer">
        <h2 className='techTitle'>My Languages</h2>
        <span className='techDesc'>Languages I have experience with.</span>
      </div>
      <div className='techImgs'>
        {/*Logo Seperator*/}
{[
          { title: 'Python', icon: PythonIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'C#', icon: CSharpIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
{/*Logo Seperator*/}
{[
          { title: 'Java', icon: JavaIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'C++', icon: CplusplusIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'JavaScript', icon: JavaScriptIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}

            {/*Logo Seperator*/}
{[
          { title: 'PHP', icon: PHPIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
                    {/*Logo Seperator*/}
{[
          { title: 'SQL', icon: SQLIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}

      </div>

  {/*Frameworks*/}

      <div className="techTextContainer2">
        <h2 className='techTitle'>Frameworks</h2>
        <span className='techsDesc'>Frameworks I've worked in.</span>
        <div className='techImgs2'>
        {/*Logo Seperator*/}
{[
          { title: 'React+Native', icon: ReactIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'SpringBoot', icon: SpringBootIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
{/*Logo Seperator*/}
{[
          { title: 'Node.js', icon: NodeIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'Flask', icon: FlaskIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'Angular', icon: AngularIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        </div>




        {/*Industry*/}

      <div className="techTextContainer3">
        <h2 className='techTitle'>Industry Tools</h2>
        <span className='techDesc'>Industry tools I have experience with.</span>
        <div className='techImgs3'>
        {/*Logo Seperator*/}
{[
          { title: 'AWS', icon: AWSIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'Docker', icon: DockerIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
{/*Logo Seperator*/}
{[
          { title: 'Github', icon: GITHUBIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'GIT', icon: GIIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
        {/*Logo Seperator*/}
{[
          { title: 'MONGO-DB', icon: MongoIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
         {/*Logo Seperator*/}
{[
          { title: 'MySql', icon: MySQLIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
         {/*Logo Seperator*/}
{[
          { title: 'Postman', icon: PostIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
         {/*Logo Seperator*/}
{[
          { title: 'Jira', icon: JiraIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
         {/*Logo Seperator*/}
{[
          { title: 'TestRail', icon: TESTIcon }, 
        ].map((tech, index) => (
          <div key={index} className="techImgContainer">
            <img src={tech.icon} alt={tech.title} className="h-25 lg-h-32 w-auto mx-auto" />
            <h2 className="font-mina dark:text-white text-md lg:text-2xl my-3 mt-1">{tech.title}</h2>
          </div>
        ))}
           
</div>
  {/* Concepts */}
  <div className="techTextContainer4">
      <h2 className='techTitle'>Concepts</h2>
      <span className='techDesc'>Concepts I've worked with/studied.</span>
  <img src={ConceptsPic} alt="" className="conceptImage" />

        </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
