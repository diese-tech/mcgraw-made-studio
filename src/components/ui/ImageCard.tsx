import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ImageCardProps = {
  label: string;
  eyebrow?: string;
  title: string;
  description?: string;
  footer?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ImageCard({
  label,
  eyebrow,
  title,
  description,
  footer,
  imageSrc,
  imageAlt,
}: ImageCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-t-[28px] p-5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="image-placeholder absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_36%,rgba(43,43,43,0.52)_100%)]" />
        <div className="relative z-10">
          <Badge>{label}</Badge>
        </div>
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
