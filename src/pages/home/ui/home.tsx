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
            Share Your Story with <span>BlogSpace AI</span>
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>
            The intelligent social platform that helps you create, share, and
            discover amazing content from a community of passionate creators.
          </p>
        </div>
        <div className={styles.buttons}>
          <span>
            <NavLink to="/generation"> Start posting</NavLink>
            <FaLongArrowAltRight />
          </span>
          <p>Explore Posts</p>
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
            <p>Posts Created</p>
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
            <p>Stories Shared</p>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.title}>
          <p>Powerful Features for Modern Creators</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Everything you need to create amazing content, connect with your
            audience, and grow your creative community.
          </p>
        </div>
        <div className={styles.featuresSections}>
          <div className={styles.feature}>
            <span>
              <LuBrain style={{ color: "#6b99df" }} />
              AI-Powered Creation
            </span>
            <span>
              <p>
                Generate engaging blog posts, articles, and creative content
                with advanced AI assistance.
              </p>
            </span>
          </div>
          <div className={styles.feature}>
            <span>
              <IoIosSearch style={{ color: "green" }} />
              Smart Discovery
            </span>
            <span>
              <p>
                Find amazing content and creators with intelligent search across
                the entire platform.
              </p>
            </span>
          </div>
          <div className={styles.feature}>
            <span>
              <FiGitBranch style={{ color: "rgb(177, 93, 177)" }} />
              Social Sharing
            </span>
            <span>
              <p>
                Share your thoughts, stories, and experiences with a vibrant
                community of creators.
              </p>
            </span>
          </div>
          <div className={styles.feature}>
            <span>
              <IoDocumentTextOutline style={{ color: "orange" }} />
              Rich Content Hub
            </span>
            <span>
              <p>
                Create and organize your blog posts, articles, and multimedia
                content in one place.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <p>Ready to Transform Your Creative Journey?</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Join thousands of creators who are already sharing their stories
            with BlogSpace.
          </p>
        </div>
        <div className={styles.buttons}>
          <span>
            <NavLink to="/generation">Get started Free</NavLink>
            <FaLongArrowAltRight />
          </span>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};
