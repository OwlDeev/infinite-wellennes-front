import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginController() {
  const schema = yup.object().shape({
    rut: yup
      .string()
      .required("RUT es requerido")
      .min(9, "RUT debe tener al menos 9 caracteres"),
    password: yup
      .string()
      .required("Contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors, e) => {
    console.log(errors);
    // Aquí podrías manejar los errores de validación.
    // Los errores de validación se proporcionan como el primer argumento.
  };

  return { register, handleSubmit, errors, onSubmit, onError };
}
