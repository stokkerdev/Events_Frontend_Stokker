import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormField } from "../../../interfaces/Form.interfaces";
import { ButtonWhite } from "../../atoms/common/Button";
import { ErrorText } from "../../atoms/common/ErrorText";
import { Input } from "../../atoms/common/Input";
import { Form } from "../../templates/Form";
import { TextLink } from "../../atoms/common/TextLink";
import { PUBLICROUTES } from "../../../routes/Public.routes";
import { useNavigate } from "react-router-dom";





const schema = yup
  .object({
    email: yup
      .string()
      .email("Ups, no corresponde a un correo electrónico.")
      .required("El correo electrónico es obligatorio."),
    password: yup.string().required("La contraseña es obligatoria."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleClick = (to: string) => {
    navigate(to);
  };

  const onSubmit = (data: FormData) => alert(data);

  const formFields: FormField[] = [
    {
      placeholder: "Correo electrónico",
      name: "email",
      type: "text",
      error: errors.email?.message,
    },
    {
      placeholder: "Contraseña",
      name: "password",
      type: "password",
      error: errors.password?.message,
    },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <div key={field.name}>
          <Input
            placeholder={field.placeholder}
            type={field.type}
            error={field.error}
            {...register(field.name as keyof FormData)}
          />
          {field.error && <ErrorText>{field.error}</ErrorText>}
        </div>
      ))}

      <ButtonWhite type="submit" forForm>
        Iniciar sesión
      </ButtonWhite>
      <TextLink onClick={()=>handleClick(PUBLICROUTES.RECOVERPASS)}>¿Olvidaste tu contraseña?</TextLink>
    </Form>
  );
};
