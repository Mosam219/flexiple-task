import { ReactNode } from "react";

export function TypographyH1({ text }: { text: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
}
export function TypographyH2({ text }: { text: ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}
export function TypographyH3({ text }: { text: ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}
export function TypographyH4({ text }: { text: ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}
export function TypographyP({ text }: { text: ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
export function TypographyLead({ text }: { text: ReactNode }) {
  return <p className="text-xl text-muted-foreground">{text}</p>;
}
export function TypographyLarge({ text }: { text: ReactNode }) {
  return <div className="text-lg font-semibold">{text}</div>;
}
export function TypographySmall({ text }: { text: ReactNode }) {
  return <small className="text-sm font-medium leading-none">{text}</small>;
}
export function TypographyMuted({ text }: { text: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{text}</p>;
}
