import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School'; //mui.com for import statements
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

//vertical tiemline website has documentation (google for it to adjust) stephane-monnot?
const Experience = () => { //classNames within headers help it match with correct CSS style
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement //within the element brackets, set style/appearance, within Element brackets, put content with corr. html tags
          className="vertical-timeline-element--education"
          date= "August 2022 - Expected Graduation 2026"
          icon = {<SchoolIcon/>}
          iconStyle={{background: "#8198FD", color: "#fff"}}
        >
          <h3 className='vertical-timeline-element-title'>University of Florida</h3> 
          <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>
          <p>Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement //within the element brackets, set style/appearance, within Element brackets, put content with corr. html tags
          className="vertical-timeline-element--work"
          date= "August 2022 - November 2022"
          icon = {<VolunteerActivismIcon/>}
          iconStyle={{background: "#8198FD", color: "#fff"}}
        >
          <h3 className='vertical-timeline-element-title'>Coding Tutor</h3> 
          <h4 className='vertical-timeline-element-subtitle'>Women in Computer Science</h4>
          <p>Tutored local high school girls in basics of coding and mentored them to pursue coding</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement //within the element brackets, set style/appearance, within Element brackets, put content with corr. html tags
          className="vertical-timeline-element--work"
          date= "January 2023 - May 2023"
          icon = {<WorkIcon/>}
          iconStyle={{background: "#8198FD", color: "#fff"}}
        >
          <h3 className='vertical-timeline-element-title'>UF Information Technology</h3> 
          <h4 className='vertical-timeline-element-subtitle'>Research and Computing Support Intern</h4>
          <p>Computer Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience