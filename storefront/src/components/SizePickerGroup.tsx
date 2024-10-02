'use client';

// External packages
import * as React from 'react';
import * as ReactAria from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const SizePickerGroup: React.FC<
  React.ComponentPropsWithoutRef<'div'> & ReactAria.RadioGroupProps
> = ({ className, ...rest }) => (
  <ReactAria.RadioGroup
    {...rest}
    className={twMerge('flex gap-2', className)}
  />
);

export const SizePickerGroupItem: React.FC<
  React.ComponentPropsWithoutRef<'label'> & ReactAria.RadioProps
> = ({ className, ...rest }) => (
  <ReactAria.Radio
    {...rest}
    className={twMerge(
      'cursor-pointer border border-gray-900 px-4 py-2 data-[selected]:bg-gray-900 data-[selected]:text-white data-[disabled]:opacity-40',
      className
    )}
  />
);
