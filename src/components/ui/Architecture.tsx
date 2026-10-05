import {
  ArrowDown,
  ArrowRight,
  Box,
  Database,
  Network,
  Server,
} from "lucide-react";

const icons = [Box, Server, Network, Database];
export default function Architecture({
  nodes,
  label,
  compact = false,
}: {
  nodes: { title: string; subtitle: string }[];
  label: string;
  compact?: boolean;
}) {
  return (
    <figure className={`architecture ${compact ? "compact" : ""}`}>
      <figcaption className="mono">{label}</figcaption>
      <div className="architecture-nodes">
        {nodes.map((node, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div className="architecture-step" key={node.title}>
              <div className="architecture-node">
                <Icon size={compact ? 17 : 23} aria-hidden="true" />
                <strong>{node.title}</strong>
                <span>{node.subtitle}</span>
              </div>
              {i < nodes.length - 1 && (
                <span className="architecture-arrow" aria-hidden="true">
                  <ArrowRight size={18} className="arrow-horizontal" />
                  <ArrowDown size={18} className="arrow-vertical" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </figure>
  );
}
