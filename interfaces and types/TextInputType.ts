import {TextType} from './FieldType'

export type TextInputTypeWithoutTextType = 'password' | 'number' | 'email' | 'date'
export type TextInputType = TextInputTypeWithoutTextType | TextType
