import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  hint,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-walnut">
        {label}
        {required ? <span className="ml-1 text-[#9d5c3f]">*</span> : null}
      </span>
      {children}
      {hint ? <span className="text-sm text-muted">{hint}</span> : null}
    </label>
  );
}
