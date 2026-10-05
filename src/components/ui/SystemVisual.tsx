"use client";
import {
  Braces,
  Database,
  Layers3,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function SystemVisual() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  return (
    <figure className="system-visual">
      <div className="system-topline">
        <span className="system-lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mono">systems / overview</span>
        <Workflow size={15} aria-hidden="true" />
      </div>
      <div className="system-canvas">
        <svg
          viewBox="0 0 440 360"
          preserveAspectRatio="none"
          className="system-connections"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="system-line" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#9f91ff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#9f91ff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#system-line)" strokeWidth="1.2">
            <path d="M220 54V133M92 178H153M287 178H348M220 222V310" />
            <path d="M92 178V90Q92 54 128 54H190M348 178V270Q348 310 312 310H249" />
          </g>
          <g
            className="flow-lines"
            fill="none"
            stroke="#b7aaff"
            strokeWidth="2"
            strokeDasharray="3 24"
          >
            <path d="M220 54V133M92 178H153M287 178H348M220 222V310" />
          </g>
        </svg>
        <div className="system-node input-node">
          <Terminal size={16} aria-hidden="true" />
          <span>{tr.input}</span>
          <small>APIs / events</small>
        </div>
        <div className="system-node context-node">
          <Database size={18} aria-hidden="true" />
          <span>{tr.context}</span>
          <small>data / retrieval</small>
        </div>
        <div className="system-node core-node">
          <Sparkles size={25} aria-hidden="true" />
          <span>{tr.orchestration}</span>
          <small>Python · Bedrock</small>
        </div>
        <div className="system-node tools-node">
          <Braces size={18} aria-hidden="true" />
          <span>{tr.tools}</span>
          <small>MCP / skills</small>
        </div>
        <div className="system-node output-node">
          <Layers3 size={16} aria-hidden="true" />
          <span>{tr.output}</span>
          <small>software / AI</small>
        </div>
        <div className="system-coordinate mono" aria-hidden="true">
          01 / 04
        </div>
      </div>
      <figcaption>
        <span className="status-dot" aria-hidden="true" />
        {tr.diagram}
      </figcaption>
    </figure>
  );
}
