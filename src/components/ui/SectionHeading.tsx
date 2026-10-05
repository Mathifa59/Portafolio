import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  eyebrow,
  heading,
  description,
}: {
  number: string;
  eyebrow: string;
  heading: string;
  description: string;
}) {
  return (
    <Reveal className="section-heading">
      <div className="eyebrow">
        <span>{number}</span>
        <span className="eyebrow-rule" />
        {eyebrow}
      </div>
      <div className="section-heading-row">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </Reveal>
  );
}
