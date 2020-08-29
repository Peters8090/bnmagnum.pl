import {FC, useState} from 'react'
import {Section} from '../../Section'
import {FieldType} from '../../../../../../../../interfaces and types/FieldType'
import {Box, Button, CircularProgress, TextField} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {css} from '@emotion/core'

export const ContactForm: FC = () => {
    const styles = {
        form: css`
            text-align: center;
        `,
    }

    const fields: FieldType[] = [
        {
            label: 'Tytuł',
            name: 'title',
            type: 'text',
            multiline: false,
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
        },
        {
            label: 'Wiadomość',
            name: 'message',
            type: 'text',
            multiline: true,
            rows: 8,
            rowsMax: 12,
        },
    ]
    const {register, handleSubmit: handleSubmitHookForm} = useForm()
    const [loading, setLoading] = useState(false)

    const handleSubmit = handleSubmitHookForm(async data => {
        console.log(data)
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
    })

    return (
        <Section title='Formularz kontaktowy' gridProps={{md: 3}}>
            <form css={styles.form} onSubmit={handleSubmit}>
                {fields.map(field => (
                    <TextField inputRef={register} label={field.label} name={field.name} type={field.type}
                               fullWidth margin='normal' size='medium'
                               {...(field.type === 'text' ?
                                   {
                                       multiline: field.multiline,
                                       rows: field.rows,
                                       rowsMax: field.rowsMax,
                                   } : {})
                               }
                               variant='outlined'/>
                ))}
                <Box mt={1.5}>
                    {loading ? <CircularProgress/> : (
                        <Button fullWidth variant='outlined' type='submit'>Wyślij</Button>
                    )}
                </Box>
            </form>
        </Section>
    )
}