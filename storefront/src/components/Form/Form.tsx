'use client';

import * as React from 'react';
import {
  FormProvider,
  useForm,
  UseFormProps,
  DefaultValues,
  UseFormReturn,
  FieldPath,
} from 'react-hook-form';
import { z } from 'zod';
import { Resolver, zodResolver } from '@hookform/resolvers/zod';

export type FormProps<T extends z.ZodType<any, any>> = UseFormProps<
  z.infer<T>
> & {
  schema: T;
  onSubmit: (
    values: z.infer<T>,
    form: UseFormReturn<z.infer<T>>
  ) => void | Promise<void>;
  defaultValues?: DefaultValues<z.infer<T>>;
  children?: React.ReactNode;
  formProps?: Omit<React.ComponentProps<'form'>, 'onSubmit'>;
  fieldsetProps?: Omit<React.ComponentProps<'fieldset'>, 'disabled'>;
  resolverOptions?: {
    schemaOptions?: Parameters<Resolver>[1];
    factoryOptions?: Parameters<Resolver>[2];
  };
  honeypotFieldName?: FieldPath<z.infer<T>>;
};

export const Form = <T extends z.ZodType<any, any>>({
  schema,
  onSubmit,
  children,
  formProps,
  fieldsetProps,
  resolverOptions,
  honeypotFieldName,
  defaultValues,
  ...props
}: FormProps<T>) => {
  const form = useForm({
    resolver: zodResolver(
      schema,
      resolverOptions?.schemaOptions,
      resolverOptions?.factoryOptions
    ),
    defaultValues:
      typeof honeypotFieldName !== 'undefined'
        ? typeof defaultValues !== 'undefined'
          ? { [honeypotFieldName]: '', ...defaultValues }
          : ({ [honeypotFieldName]: '' } as DefaultValues<z.infer<T>>)
        : defaultValues,
    ...props,
  });

  const submitHandler = React.useCallback(
    (values: z.infer<T>) => onSubmit(values, form),
    [onSubmit, form]
  );

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> =
    React.useCallback(
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit(submitHandler)(event);
      },
      [form, submitHandler]
    );

  return (
    <FormProvider {...form}>
      <form {...formProps} onSubmit={onFormSubmit}>
        <fieldset {...fieldsetProps} disabled={form.formState.isSubmitting}>
          {typeof honeypotFieldName !== 'undefined' && (
            <input
              type="text"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-10000px',
              }}
              tabIndex={-1}
              autoComplete="off"
              {...form.register(honeypotFieldName)}
            />
          )}
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
