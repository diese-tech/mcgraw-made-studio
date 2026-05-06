import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ImageCardProps = {
  label: string;
  eyebrow?: string;
  title: string;
  description?: string;
  footer?: string;
};

export function ImageCard({
  label,
  eyebrow,
  title,
  description,
  footer,
}: ImageCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="image-placeholder flex aspect-[4/3] items-end rounded-t-[28px] p-5">
        <Badge>{label}</Badge>
      </div>
      <div className="space-y-3 p-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-2xl text-walnut">{title}</h3>
        {description ? <p className="text-sm leading-7 text-muted">{description}</p> : null}
        {footer ? <p className="text-sm font-medium text-walnut">{footer}</p> : null}
      </div>
    </Card>
  );
}
