import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function LoginController() {
  let formatoFecha = (fechaSinFormato) => {
    // Primero, necesitas tener un objeto Date.
    let fecha = new Date(fechaSinFormato);

    // Luego, puedes obtener las partes de la fecha que necesitas.
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // getMonth() devuelve un índice basado en 0, así que +1 para obtener el mes correcto
    let ano = fecha.getFullYear();

    // Puedes agregar ceros al principio si el día o el mes son menos de 10
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    // Finalmente, puedes juntar las partes para obtener una cadena en el formato "dd/mm/yyyy".
    let fechaFormateada = dia + "/" + mes + "/" + ano;

    return fechaFormateada;
  };

  const navigate = useNavigate();

  const schema = yup.object().shape({
    rut: yup
      .string()
      .required("RUT es requerido")
      .min(9, "RUT debe tener al menos 9 caracteres")
      .test("validRut", "El RUT es inválido", (value) => {
        // Reemplaza todos los caracteres que no sean dígitos por vacío
        let valor = value.replace(/\D/g, "");

        // Obtiene el dígito verificador
        let digito = valor.charAt(valor.length - 1);
        valor = valor.substring(0, valor.length - 1);

        let m = 0;
        let s = 1;
        for (; valor; valor = Math.floor(valor / 10)) {
          s = (s + (valor % 10) * (9 - (m++ % 6))) % 11;
        }

        let verificador = s ? s - 1 : "k";

        return verificador == digito;
      }),
    fechaNacimiento: yup.date().required("Fecha es requerida"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let fecha = { fecha: formatoFecha(data.fechaNacimiento), rut: data.rut };
    console.log(fecha);
    navigate("/home");
  };

  const onError = (errors, e) => {
    console.log(errors);
    // Aquí podrías manejar los errores de validación.
    // Los errores de validación se proporcionan como el primer argumento.
  };

  return { register, handleSubmit, errors, onSubmit, onError, control };
}
