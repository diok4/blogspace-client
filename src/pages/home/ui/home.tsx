import type { FC } from "react";
import styles from "./home.module.css";
import { NavLink } from "react-router";
import { MdDisplaySettings } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FiGitBranch, FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCode, FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.cloud}>
          <span className={styles.cloudIcon}>
            <MdDisplaySettings />
          </span>
          <span> Now with Advanced AI Features</span>
        </div>
        <div className={styles.headerTitle}>
          <p>
            Build Smarter with <span>DevNote AI</span>
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>
            The intelligent development platform that helps you code, document,
            and collaborate more efficiently than ever before.
          </p>
        </div>
        <div className={styles.buttons}>
          <span>
            <NavLink to="/generation"> Start Generating</NavLink>
            <FaLongArrowAltRight />
          </span>
          <p>Explore Features</p>
        </div>
      </div>
      <div className={styles.data}>
        <div>
          <div className={styles.dataIcon}>
            <FiUsers />
          </div>
          <div className={styles.title}>
            <p>10K+</p>
          </div>
          <div className={styles.dataSubtitle}>
            <p>Active Users</p>
          </div>
        </div>
        <div>
          <div className={styles.dataIcon}>
            <FaCode />
          </div>
          <div className={styles.title}>
            <p>50K+</p>
          </div>
          <div className={styles.dataSubtitle}>
            <p>Projects Created</p>
          </div>
        </div>
        <div>
          <div className={styles.dataIcon}>
            <AiOutlineThunderbolt />
          </div>
          <div className={styles.title}>
            <p>1M+</p>
          </div>
          <div className={styles.dataSubtitle}>
            <p>Code Generated</p>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.title}>
          <p>Powerful Features for Modern Development</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Everything you need to accelerate your development workflow and
            build better software faster.
          </p>
        </div>
        <div className={styles.featuresSections}>
          <div className={styles.feature}>
            <div>
              <span>
                <LuBrain />
              </span>
              <span>AI-Powered Generation</span>
            </div>
            <div>
              <p>
                Generate code, documentation, and project structures with
                advanced AI assistance.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div>
              <span>
                <IoIosSearch />
              </span>
              <span>Smart Search</span>
            </div>
            <div>
              <p>
                Find exactly what you need with intelligent search across your
                entire codebase.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div>
              <span>
                <FiGitBranch />
              </span>
              <span>Version Control</span>
            </div>
            <div>
              <p>
                Seamlessly integrate with Git and track changes across your
                development workflow.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div>
              <span>
                <IoDocumentTextOutline />
              </span>
              <span>Documentation Hub</span>
            </div>
            <div>
              <p>
                Automatically generate and maintain documentation for your
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <p>Powerful Features for Modern Development</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Everything you need to accelerate your development workflow and
            build better software faster.
          </p>
        </div>
        <div className={styles.buttons}>
          <button>
            <NavLink to="/generation"> Start Generating</NavLink>
            <FaLongArrowAltRight />
          </button>
          <button>View Documentation</button>
        </div>
      </div>
    </div>
  );
};
