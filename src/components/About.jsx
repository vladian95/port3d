import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ id, index, icon }) => {
  // исправлено: добавлен аргумент id и исправлено название аргумента services на id
  const { t } = useTranslation(); // исправлено: извлечение функции t из useTranslation
  const handleClick = () => {
    navigator.vibrate(100);
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full cursor-pointer w-full  shadow-card rounded-[20px] "
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] border-[2px]  flex justify-evenly items-center flex-col hover:scale-[1.1] transition-all ease-in-out">
        <img src={icon} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {t(`services.${id}.title`)} {/* исправлено: заменено link.id на id */}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { t } = useTranslation(); // исправлено: извлечение функции t из useTranslation
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{t('aboutTitle')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t('aboutText')}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map(
          (
            { id, icon },
            index // исправлено: заменено services на { id, icon }
          ) => (
            <ServiceCard key={id} index={index} id={id} icon={icon} /> // исправлено: добавлен аргумент id и исправлено название аргумента services на id
          )
        )}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
