import React from 'react';
import {
  FaAws,
  FaChartBar,
  FaDatabase,
  FaFileExcel,
  FaTable,
} from 'react-icons/fa';
import {
  SiApachehadoop,
  SiApachehive,
  SiApachespark,
  SiPython,
  SiSap,
} from 'react-icons/si';

const skills = [
  { name: 'Excel', icon: FaFileExcel },
  { name: 'Power BI', icon: FaChartBar },
  { name: 'Tableau', icon: FaTable },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Python', icon: SiPython },
  { name: 'DAX', icon: FaChartBar },
  { name: 'KPI Development', icon: FaChartBar },
  { name: 'Data Visualization', icon: FaChartBar },
  { name: 'Apache Spark', icon: SiApachespark },
  { name: 'Hadoop', icon: SiApachehadoop },
  { name: 'Hive', icon: SiApachehive },
  { name: 'AWS', icon: FaAws },
  { name: 'ETL Pipelines', icon: FaDatabase },
  { name: 'Power Query', icon: FaDatabase },
  { name: 'Excel VBA', icon: FaFileExcel },
  { name: 'SAP ERP', icon: SiSap },
  { name: 'Business Process Analysis' },
  { name: 'Agile Methodologies' },
  { name: 'Requirements Gathering' },
];

const SkillItems = () => (
  <>
    {skills.map(({ name, icon: Icon }) => (
      <li key={name} className="flex items-center gap-2.5 px-4 text-sm text-muted-foreground whitespace-nowrap">
        {Icon && <Icon aria-hidden="true" className="h-4 w-4 text-foreground/75" />}
        <span>{name}</span>
      </li>
    ))}
  </>
);

const Skills = () => (
  <div id="skills" className="w-full mt-8 mb-10">
    <p className="text-muted-foreground text-xs md:text-sm mb-4">
      <b>A few things I have experience in</b>
    </p>
    <div className="skills-marquee relative border-y border-border/70 py-4">
      <div className="skills-marquee-track flex w-max">
        <ul className="flex w-max items-center divide-x divide-border/70" aria-label="Skills and tools">
          <SkillItems />
        </ul>
        <ul className="flex w-max items-center divide-x divide-border/70" aria-hidden="true">
          <SkillItems />
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
