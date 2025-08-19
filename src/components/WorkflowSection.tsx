"use client";

import React from "react";
import Image from "next/image";
import Section from "./Section";

const WorkflowSection: React.FC = () => {
  return (
    <Section className="workflow-section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light leading-tight">
            The Autonomous
            <br />
            <span className="text-accent">Content Engine</span>
          </h2>
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl mt-6 md:mt-8 text-gray-300">
            Our ready-to-deploy AI workflow, designed to put your content
            creation on autopilot. We install and customize this proprietary
            system for you, enabling you to immediately scale high-quality,
            SEO- and GEO-optimized content.
          </p>
        </div>
        <div className="reveal-text">
          <Image
            src="/workflow.png"
            alt="Workflow"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default WorkflowSection;

