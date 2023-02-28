export type InputType = 'text' | 'number' | 'checkbox' | 'datetime' | 'date' | 'time' | 'week' | 'month' | 'search' | 'email' | 'tel' | 'password' | 'url' | 'file' | 'image' | 'color' | 'radio' | 'range' | 'reset' | 'dropdown'

export type TextAlign = 'center' | 'left' | 'right' | 'justify'

export type FormatType = 'image' | 'flag' | 'attachment' | 'checkbox' | 'datetime' | 'text'

export type FieldType = 'string' | 'number' | 'bool' | 'date' | 'objet'

export type Size = {
  width: number
  height: number
}

export interface Input<T = InputType> {
  type: T
  disabled?: boolean
  hidden?: boolean
  width?: string | number
  placeholder?: string
}

export interface TextInput extends Input<'text'> {}

export interface TextAreaInput extends Input<'text'> {
  rows?: number
}

export interface NumberInput extends Input<'number'> {
  step?: number
}

export interface CheckInput extends Input<'checkbox'> {}

export interface DateInput extends Input<'date'> {}
export interface TimeInput extends Input<'time'> {}
export interface DatetimeInput extends Input<'datetime'> {}

export interface DropdownInput extends Input<'dropdown'> {
  displayMember?: string
  valueMember?: string
  source: Array<any>
}

export interface Column {
  width?: number
  header?: { align?: TextAlign; className?: string; style?: string }
  align?: TextAlign
  classRenderer?: (key: string, value: any, column: Column, data: any) => string
  style?: string
  group?: string
  filtertype?: 'textbox' | 'input' | 'checkedlist' | 'list' | 'number' | 'bool' | 'date' | 'range' | 'custom'
  editable?: boolean
  hidden?: boolean
  format?: { type: FormatType; features?: any }
  pinned?: boolean
  exportable?: boolean
}

export interface FieldSchema<T = FieldType> {
  key: string
  type: T
  label: string
  description?: string
  defaultValue?: any
  required?: boolean
  column?: Column
  editor?: TextInput | TextAreaInput | NumberInput | CheckInput | DateInput | TimeInput | DatetimeInput | DropdownInput
}

export interface StringSchema extends FieldSchema<'string'> {
  expressionValidator?: { pattern: any; mistakeMessage?: string }
  maxLength?: number
}

export interface NumberSchema extends FieldSchema<'number'> {
  decimals?: number
  min?: number
  max?: number
}

export interface BoolSchema extends FieldSchema<'bool'> {}

export interface DateSchema extends FieldSchema<'date'> {
  format?: string
  min?: Date
  max?: Date
}

export interface TimeSchema extends FieldSchema<'time'> {
  min?: Date
  max?: Date
}

export interface DatetimeSchema extends FieldSchema<'datetime'> {
  format?: string
  min?: Date
  max?: Date
}

export interface ObjectSchema extends FieldSchema<'object'> {}

export type FieldSchemaType = StringSchema | NumberSchema | BoolSchema | DateSchema | TimeSchema | DatetimeSchema | ObjectSchema
export type FieldSchemaCollection = Array<FieldSchemaType>

export interface Schema {
  fields: FieldSchemaCollection
}

export const getField = (schema: Schema, key: string): any => schema.fields.find((field) => field.key === key)!
