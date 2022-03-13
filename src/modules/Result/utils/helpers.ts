import { ReactNode } from 'react';
import { FormElement } from '../components/FormElement';
import { Component } from './types';

export const capitaliseActionValues = (parsedCode: any) => {
  parsedCode.actions = parsedCode.actions.map((action: any) =>
    typeof action === 'string' ? action.toUpperCase() : null
  );
};

export const getComponentsFrom = (parsedCode: Object) =>
  Object.entries(parsedCode)?.flatMap(
    ([key, value]) =>
      Array.isArray(value) &&
      (value as any)?.map(
        (v: any) =>
          ({
            type: key,
            id: v?.id,
            order: v?.order,
            fieldName: v?.fieldName,
            options: v?.options
          } as Component)
      )
  );

export const buildForm = (components: Component[], register: any) => {
  const sortedComponents = components.sort((a, b) => Number(a.order) - Number(b.order));
  const reactComponents: ReactNode[] = [];
  sortedComponents.forEach((c) => {
    reactComponents.push(FormElement(c, register));
  });

  return reactComponents;
};
