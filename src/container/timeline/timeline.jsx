import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import WorkIcon from "@material-ui/icons/Work";
// import SchoolIcon from "@material-ui/icons/School";
// import StarRateIcon from "@material-ui/icons/StarRate";

export const Timeline = () => {
  const [linecolor, setlinecolor] = React.useState("black");
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"May 2022 - Present"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`,
            }}
            // icon={<WorkIcon />}
          >
            <h4
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student : Masai School (Full Time)
              <br />
              Bengaluru, Karnataka
            </h4>
            {/* <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              
            </h4> */}
            <p data-aos="fade-right">Full Stack Web Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2019 - May 2022"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`,
            }}
            // icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <p data-aos="fade-right"></p>
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Experience : 3 Years
            </h4>
            <p>Designation : Customer Executive</p>
            <p data-aos="fade-right">
              Company : Expert Docs
              <br />
              Dwarka, Delhi 110043
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2015 - May 2018"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`,
            }}
            // icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <p data-aos="fade-right"></p>
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Graduation
            </h4>
            <p>Satyawati College (Eve) - University of Delhi</p>
            <p data-aos="fade-right">B.A Honours English Literature</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"April 2013 - May 2014"}
            contentStyle={{
              boxShadow: `rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px`,
              backgroundColor: `#23283e`,
              textAlign: "center",
              color: `#2a2f4c`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `#23283e`,
              color: `#90a0d9`,
            }}
            // icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <p data-aos="fade-right"></p>
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Higher Senior Secondary Education
            </h4>
            <p data-aos="fade-right">
              Army Public School Basistha - Guwahati, Assam
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
