import React from 'react'

const CoursePi = () => {
  return (
    <div>
        <ul>
            <li><a href="">Courses </a>
            <ul className='subMenu'>
                <li><a href='/softwareCourses'>Software Engineering</a></li>
                <li><a href='/webDevelopmentProgram'>Web Development</a></li>
                <li><a href='/partTimeProgram'>Part Time Software Engineering</a></li>
                <li><a href='/HighschoolBootcamp'>High school holidays tech bootcamp</a></li>
            </ul>
           </li>
        </ul>
      
    </div>
  )
}

export default CoursePi