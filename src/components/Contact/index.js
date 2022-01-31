import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { send } from 'emailjs-com'
import Toastify from 'toastify-js'
import Fade from 'react-reveal/Fade'

import "toastify-js/src/toastify.css"
import styles from './Contact.module.scss'

import spinner from '/public/images/spinnerIcon.svg'

const createFormMessageSchema = yup.object().shape({
  name: yup.string().required('Por favor, insira seu nome'),
  email: yup.string().required('Por favor, insira seu e-mail').email('E-mail inválido'),
  subject: yup.string().required('Por favor, insira o assunto'),
  message: yup.string().required('Por favor, insira a mensagem')
})

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(createFormMessageSchema)
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleFormMessage = (values, e) => {
    e.preventDefault()
    setIsLoading(true)
    send(
      'service_wfyggjq',
      'template_v98a4y9',
      values,
      'user_aN3SkDkLMzJzlEWSsHNOo'
    )
      .then((response) => {
        if (response.status === 200) {

          setTimeout(() => {
            Toastify({
              text: "Mensagem enviada com sucesso!",
              duration: 3000,
              gravity: "top",
              style: {
                background: "linear-gradient(4deg, rgba(21,21,21,1) 0%, rgba(180,165,165,1) 100%)",
              },
            }).showToast();

            setIsLoading(false)
            reset()
          }, 1000);
        }
      })
      .catch((err) => {

        setTimeout(() => {
          setIsLoading(false)
          Toastify({
            text: "Erro!",
            duration: 3000,
            gravity: "top",
            style: {
              background: "linear-gradient(0deg, rgba(21,21,21,1) 0%, rgba(242,12,12,1) 47%)",
            },
          }).showToast();
        }, 1000);
      })
  }

  return (
    <div className={styles.contact}>
      <Fade>
        <h2 className={styles.contactTitle}>Contato</h2>
        <div className={styles.contactContent}>
          <div className={styles.formSide}>
            <form onSubmit={handleSubmit(handleFormMessage)}>
              <input
                id="name"
                placeholder="Nome"
                error={errors.name}
                {...register("name")}
              />
              {errors.name && <span className={styles.formError}>{errors.name.message}</span>}

              <input
                id="email"
                placeholder="E-mail"
                error={errors.email}
                {...register("email")}
              />
              {errors.email && <span className={styles.formError}>{errors.email.message}</span>}

              <input
                id="subject"
                placeholder="Assunto"
                error={errors.subject}
                {...register("subject")}
              />
              {errors.subject && <span className={styles.formError}>{errors.subject.message}</span>}

              <textarea
                id="message"
                placeholder="Digite sua mensagem aqui..."
                error={errors.message}
                {...register("message")}
              />

              {errors.message && <span className={styles.formError}>{errors.message.message}</span>}

              {isLoading
                ? <div className={styles.spinner}><Image src={spinner} width={55} height={55} /></div>
                : <button type="submit">Enviar</button>
              }
            </form>
          </div>
        </div>
      </Fade>
    </div>
  )
}