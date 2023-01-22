import React from 'react'
import CoursesPart from '../courses-part'
import ExpertsPart from '../expert-part'
import SubjectPart from '../subject-part'
import TopPart from '../top-part'

const HomePage = () => {
  return (
    <div>
        <TopPart/>
        <CoursesPart/>
        <SubjectPart/>
        <ExpertsPart/>
    </div>
  )
}

export default HomePage