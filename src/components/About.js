import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-blue-900">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Computer Programmer with over 3 years of experience.
            </h3>
            <p className="mb-6">
              I have strong background in languages such as Java, ReactJS and
              Python. I also have some experience with languages such as PHP,
              Swift and C#.
            </p>
            <p className="mb-6">
              With my experiences from George Brown, I achieved skills that allows me to work with teams and meet strict deadlines for project. I am looking forward to apply these skills into professional environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
