import { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('button', {
  variants: {
    intent: {
      primary: ['isrounded-lg w-48 min-w-fit flex-initial  border border-sky-600 bg-sky-600 px-3 py-1 text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50 md:px-4 md:py-2'],
    },
  },
  compoundVariants: [{ intent: 'primary', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
  },
});

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export const Button = ({intent, className, ...props}: ButtonProps) => {
  return (
    <button
      className={button({intent, className})}
      {...props}
    />
  );
};
