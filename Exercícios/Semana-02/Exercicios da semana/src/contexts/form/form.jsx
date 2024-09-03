import { useForm } from "react-hook-form"
import { useState } from "react";
function Formulario() {
    const { register, handleSubmit } = useForm({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitData = (data) => {
        console.log(data);
        setIsSubmitted(true)
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <div>
                    <h1>Cadastro</h1>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu Email"
                        {...register('email', {
                            required: true
                        })}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua Senha"
                        {...register('senha', {
                            required: true
                        })}
                    />
                    {isSubmitted && <p style={{ color: 'red' }}>CADASTRADO</p>}
                    <button type="submit">REGISTRAR</button>
                </div>
            </form>
        </>
    )
}

export default Formulario;