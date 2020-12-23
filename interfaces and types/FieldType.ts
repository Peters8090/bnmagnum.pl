import {TextInputTypeWithoutTextType} from './TextInputType'

export type TextType = 'text'

type FieldBase = {
    label: string
    name: string
}

export type FieldType = FieldBase & ({
    type: TextType
    multiline?: boolean
    rows?: number
    rowsMax?: number
} | {
    type: 'select'
    values: { value: string, label: string }[]
} | {
    type: 'hidden'
    value: string
} | {
    type: TextInputTypeWithoutTextType
})