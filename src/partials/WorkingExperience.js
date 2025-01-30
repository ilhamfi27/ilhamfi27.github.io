// @ts-nocheck
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BriefcaseIcon from '../icons/briefcase';
import StarIcon from '../icons/star';

const WorkingExperience = ({ experiences }) => {
  const renderTimeline = (exp, i) => {
    return (
      <VerticalTimelineElement
        key={i}
        className=""
        date={exp.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<BriefcaseIcon />}
        {...(i === 0 && {
          contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
        })}
      >
        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
        <p>{exp.description}</p>
      </VerticalTimelineElement>
    );
  };

  return (
    <VerticalTimeline>
      {experiences.map((d, i) => renderTimeline(d, i))}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default WorkingExperience;
