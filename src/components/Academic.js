import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import transcript from '../assets/transcript.png'

// services data
const academic = [
  {
    name: "Android Mobile Development",
    description:
      "Used Android Studio to build android mobile apps using Java. Also used React-Native to build android mobile apps.  Hands-on experience in developing and deploying wireless applications on mobile platforms with strong emphasis on Android ",
  },
  {
    name: "IOS Mobile Development",
    description:
      "Using Swift as language, built IOS app with XCode. build advanced UIs with Tables, Split Views, Navigation Controllers, and other tools. designing and implementing interfaces using Xcode Storyboards, Segues, and the iOS Object Library.",
  },
  {
    name: "Full Stack Development",
    description:
      "Builds fundamental knowledge and skills required for full stack development. (MERN Stack). Learned React as front-end framework, implement NoSQL databases (MongoDB) and work with Express framework and Node.js environment",
  },
  {
    name: "Web Development",
    description:
      "Develop web applications based on Servlets, JavaBeans, JavaServer Pages technology, Model-View Controller Architecture, and JavaServer Faces. Explored the technical details as well as best practices for designing, developing and deploying robust web applications",
  },
];

const Academic = () => {
  return (
    <section className="section" id="academic">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-academic lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 mb-6">Academic Credentials</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Part of Dean's list throughout the entire 3 year in college.
              Gathered a 3.5 or higher GPA.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              <div className="max-w-[476px] pb-9">
                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Transcript
                </h4>
                <img src={transcript} alt="" />
              </div>
              {academic.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h5 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h5>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
