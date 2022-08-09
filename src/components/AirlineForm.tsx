import { useForm } from "react-hook-form";
import { ageRangeValidator } from "../validators/validator";
import Swal from "sweetalert2";

import React from "react";
import styles from "./AirlineForm.module.scss";

const AirlineForm = ({ airlineName }: any) => {
  const {
    register,
    reset,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const showConfirmModal = () => {
    Swal.fire({
      icon: "success",
      text: "Tu información fue enviada con éxito, estaremos en contacto contigo",
    });
  };

  const onSubmit = (data: any) => {
    // showConfirmModal();
    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      showConfirmModal();
      reset({ fullName: "", email: "", celphone: "", ageRange: "" });
    }
  }, [formState, reset]);

  return (
    <div>
      <h2>
        Hola, bienvenido, sabemos que quieres viajar en un {airlineName}, por
        favor diligencia el siguiente formulario:
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__item}>
          <label>Nombre Completo</label>
          <br />
          <input
            className={styles.form__input}
            type="text"
            {...register("fullName", {
              required: true,
            })}
          />
          <div className={styles.error}>
            {errors.fullName && <p>El nombre es requerido</p>}
          </div>
        </div>
        <div className={styles.form__item}>
          <label>Email</label>
          <br />
          <input
            className={styles.form__input}
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          <div className={styles.error}>
            {errors.email && <p>Debe ingresar un email válido</p>}
          </div>
        </div>
        <div className={styles.form__item}>
          <label>Celular</label>
          <br />
          <input
            className={styles.form__input}
            type="text"
            {...register("celphone", {
              required: true,
              minLength: 10,
            })}
          />
          <div className={styles.error}>
            {errors.celphone && (
              <p>Debe ingresar un número de celular válido</p>
            )}
          </div>
        </div>
        <div className={styles.form__item}>
          <label>Rango de edad</label>
          <br />
          <input
            className={styles.form__input}
            type="text"
            {...register("ageRange", {
              validate: ageRangeValidator,
            })}
          />
          <div className={styles.error}>
            {errors.ageRange && (
              <p>La edad debe estar entre los 18 y 100 años</p>
            )}
          </div>
        </div>
        <br />
        <input className={styles.submit_button} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AirlineForm;
