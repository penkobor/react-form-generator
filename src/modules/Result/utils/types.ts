export type ComponentType =
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'numberfield'
  | 'dateflied'
  | 'radio';

export interface Component {
  id: string;
  type: ComponentType;
  order: string;
  fieldName: string;
  options?: string[];
}
