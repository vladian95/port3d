import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();
  const points = experience.points || [];
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      iconStyle={{ background: '#fff' }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(`experiences.${experience.id}.title`)}
        </h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={index}>
            {t(`experiences.${experience.id}.points.${index}`)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 'webapp',
      title: t('experiences.webapp.title'),
      points: [
        t('experiences.webapp.points.0'),
        t('experiences.webapp.points.1'),
        t('experiences.webapp.points.2'),
        t('experiences.webapp.points.3'),
      ],
    },
    {
      id: 'visual',
      title: t('experiences.visual.title'),
      points: [
        t('experiences.visual.points.0'),
        t('experiences.visual.points.1'),
        t('experiences.visual.points.2'),
        t('experiences.visual.points.3'),
        t('experiences.visual.points.4'),
      ],
    },
    {
      id: 'design',
      title: t('experiences.design.title'),
      points: [
        t('experiences.design.points.0'),
        t('experiences.design.points.1'),
        t('experiences.design.points.2'),
        t('experiences.design.points.3'),
        t('experiences.design.points.4'),
      ],
    },
  ];
  return (
    <>
      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <h2 className={`${styles.sectionHeadText} `}>{t('experienceTitle')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
