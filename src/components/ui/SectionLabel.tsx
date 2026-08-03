interface Props {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-xs text-text-muted">{number}</span>
      <div className="h-px flex-1 bg-bg-border" />
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
