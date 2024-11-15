import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaBook, FaDatabase, FaHospital, FaNetworkWired, FaMicroscope, FaChartLine } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { AiFillTool } from 'react-icons/ai';
import { SiPython, SiScikitlearn, SiTensorflow } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  datasets: string[];
  techniques: string[];
  results?: string[];
  icon: JSX.Element;
  status: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Always show blur for ongoing, first draft, and specific projects
  const shouldAlwaysBlur = 
    project.status === 'Ongoing' || 
    project.status === 'First Draft Preparation' ||
    project.title.includes('Opioid Abuse');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
        <div className="relative group/content">
          {/* Always Blurred Content for Ongoing/Draft Projects */}
          <div className={`${shouldAlwaysBlur ? 'blur-sm' : ''} transition-all duration-300`}>
            <div className="flex items-center space-x-3 mb-4">
              {project.icon}
              <h3 className="text-xl font-bold font-poppins bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
            </div>
            {/* Content that should always be blurred for ongoing/draft projects */}
            <div className={`${shouldAlwaysBlur ? 'blur-sm' : ''} space-y-4`}>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter">
                {project.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white font-poppins mb-2">Datasets:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.datasets.map((dataset, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-inter"
                      >
                        {dataset}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white font-poppins mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techniques.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.results && project.results.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-poppins mb-2">Results:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 font-inter">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-inter">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Message - Always show for ongoing/draft projects */}
          {shouldAlwaysBlur && (
            <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg text-gray-800 dark:text-white font-poppins">
                Send a message to know more
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications' | 'books'>('projects');

  const currentProjects: Project[] = [
    {
      title: 'Deep Reinforcement Learning for Diabetes Diagnosis',
      description: 'A Dual-Approach using Deep Reinforcement Learning and Ensemble Methods to Address Diabetes Diagnosis Challenges in Imbalanced Datasets',
      datasets: ['PIDD (Pima Indian Diabetic Dataset)', 'Mendeley Diabetic Dataset', 'Taipei Municipal Medical Center (TMMC)'],
      techniques: ['Deep Reinforcement Learning', 'Machine Learning', 'Random Oversampling', 'Tomek Links'],
      results: ['Achieved 98.2% accuracy on balanced dataset', 'Improved F1-score by 15%'],
      icon: <FaBrain className="text-4xl text-blue-500" />,
      status: 'First Draft Preparation'
    },
    {
      title: 'Opioid Abuse Detection',
      description: 'A Study on Confirmed Aberrant Behavior Detection Using Machine Learning on Patient Data',
      datasets: ['ORAB Detection Dataset (ODD)'],
      techniques: ['Machine Learning', 'GloVe Model', 'Natural Language Processing', 'SMOTE'],
      results: [
        'Extra Trees accuracy: 98.19%',
        'Voting Classifier accuracy: 98.30%',
        'Successful implementation of NLP techniques for clinical notes'
      ],
      icon: <FaHospital className="text-4xl text-red-500" />,
      status: 'Under Editor Review at Arabian Journal of Science and Engineering',
    },
    {
      title: 'Postoperative Outcomes Prediction',
      description: 'Machine Learning Models for 30-Day Mortality Risk Prediction and Interpretability',
      datasets: ['INSPIRE Dataset'],
      techniques: ['Machine Learning', 'XAI (SHAP)', 'XGBoost'],
      results: ['XGBoost AUCROC: 94.52%'],
      icon: <FaChartLine className="text-4xl text-green-500" />,
      status: 'First Draft Preparation',
    },
    {
      title: 'Diabetic Retinopathy Detection',
      description: 'Deep Learning for Diabetic Retinopathy Detection in Low-Resource Mobile-Based Validation Settings',
      datasets: ['Brazilian Multilabel Ophthalmological Dataset (BRSET)', 'mBRSET'],
      techniques: ['Deep Learning', 'XAI'],
      results: ['Pending experimental results'],
      icon: <FaMicroscope className="text-4xl text-purple-500" />,
      status: 'Ongoing',
    },
    {
      title: 'Clinical Notes Summarization',
      description: 'Enhanced Summarization and Interpretation of Clinical Notes Using Transformer-Based Models and SHAP Explanations',
      datasets: ['MIMIC-IV-Ext-BHC Dataset'],
      techniques: ['BART', 'T5', 'Pegasus', 'Transformer Models'],
      results: ['Initial testing phase'],
      icon: <FaBook className="text-4xl text-yellow-500" />,
      status: 'Ongoing',
    },
    {
      title: 'Federated Learning for Diabetes Prediction',
      description: 'Revolutionizing Diabetes Prediction with Federated Learning: Deploying Conventional Machine Learning Techniques in Distributed Settings',
      datasets: ['BRFSS 2015'],
      techniques: ['Federated Learning', 'Machine Learning', 'Deep Learning', 'XAI'],
      results: ['Framework development in progress'],
      icon: <FaNetworkWired className="text-4xl text-indigo-500" />,
      status: 'Ongoing',
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Summarizing Sentiment-Analyzed Reviews",
      authors: "Farooq, M., Khan, A. A.",
      journal: "Journal of Advancements in Robotics",
      year: 2018,
      details: "Vol. 5(2), pp. 1-10",
      category: "Sentiment Analysis"
    },
    {
      id: 2,
      title: "Sentiment Analysis and Text Summarization Review",
      authors: "Farooq, M., Khan, A. A.",
      journal: "Journal of Artificial Intelligence Research & Advances",
      year: 2018,
      details: "Vol. 5(2), pp. 1-7",
      category: "AI & NLP"
    },
    {
      id: 3,
      title: "Preprocessing of Product Reviews",
      authors: "Farooq, M., Khan, A. A.",
      journal: "Recent Trends in Programming Languages",
      year: 2018,
      details: "Vol. 5(2), pp. 1-5",
      category: "NLP"
    },
    {
      id: 4,
      title: "A Survey of Android Operating System",
      authors: "Farooq, M.",
      journal: "Journal of Operating Systems Development and Trends",
      year: 2018,
      details: "Vol. 5(2), pp. 1-5",
      category: "Operating Systems"
    },
    {
      id: 5,
      title: "Robotic Arm Control Using Parallel Port",
      authors: "Farooq, M., Rahman, M.",
      journal: "Journal of Advancements in Robotics",
      year: 2019,
      details: "Vol. 6(1), pp. 45-50",
      category: "Robotics"
    },
    {
      id: 6,
      title: "A Review on Predicting Student's Grade Using Machine Learning Techniques",
      authors: "Tanwar, S. K., Farooq, M.",
      journal: "PIMT Journal of Research",
      year: 2021,
      details: "Vol. 13(3), April-June",
      category: "Machine Learning"
    },
    {
      id: 7,
      title: "A Review on Development of Smart Chatbot Using Natural Language Processing",
      authors: "Reddy, K. S., Farooq, M., Sunil, B. N. S. R., Dheeraj, T.",
      journal: "PIMT Journal of Research",
      year: 2021,
      details: "Vol. 13(3), April-June",
      category: "NLP"
    },
    {
      id: 8,
      title: "e-Vaccine: An Immunization app",
      authors: "Hasan, S., Farooq, M., Marwah, N., Andrabi, S. A. A., Kumar, H.",
      conference: "ICIEM",
      year: 2021,
      category: "Healthcare"
    }
  ];

  const bookChapters = [
    {
      title: 'Blockchain Application in Smart Reinventing Food and Agriculture',
      status: 'Accepted',
    },
    {
      title: 'Blockchain in Healthcare: Ensuring data integrity and patient privacy',
      status: 'Accepted',
    },
    {
      title: 'Blockchain Architecture and Development Process',
      status: 'Accepted',
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return <SiPython />;
      case 'machine learning':
        return <SiScikitlearn />;
      case 'deep learning':
        return <SiTensorflow />;
      default:
        return <AiFillTool />;
    }
  };

  const PublicationsSection = () => {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-cream-50 dark:bg-gray-800 p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Tag */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-accent-peach/20 to-accent-mint/20 dark:from-accent-peach/40 dark:to-accent-mint/40 text-gray-700 dark:text-cream-100">
                  {pub.category}
                </span>
              </div>

              {/* Publication Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pub.title}
                </h3>
                
                <p className="text-gray-600 dark:text-cream-200 font-medium">
                  {pub.authors}
                </p>
                
                <div className="text-gray-500 dark:text-cream-300 text-sm">
                  <p>
                    {pub.journal || pub.conference}
                    {pub.details && `, ${pub.details}`}
                  </p>
                  <p>{pub.year}</p>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-peach/5 to-accent-mint/5 dark:from-accent-peach/10 dark:to-accent-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="heading flex items-center justify-center">
              <BiCodeAlt className="mr-2 text-primary-500" />
              Research & Publications
            </h2>
            <p className="subheading">Exploring the frontiers of AI and Healthcare</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4">
            {['projects', 'publications', 'books'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}

          {/* Publications */}
          {activeTab === 'publications' && (
            <PublicationsSection />
          )}

          {/* Book Chapters */}
          {activeTab === 'books' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookChapters.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <FaBook className="text-2xl text-primary-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {book.title}
                      </h3>
                      <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                        {book.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
