import _each from 'lodash/each'
import { Path, UseFormReturn } from 'react-hook-form'

type FormValues = Record<string, string>
type ErrorKey<TFormValues> = Path<TFormValues> | `root.${string}` | 'root'
type Errors<TFormValues> = Partial<Record<ErrorKey<TFormValues>, string[]>>

export function setErrors<TFormValues extends FormValues>(
  form: UseFormReturn<TFormValues>,
  errors: Errors<TFormValues>
) {
  _each(errors, (value, key) => {
    form.setError(key as ErrorKey<TFormValues>, {
      type: 'custom',
      message: value!.join(' '),
    })
  })
}
