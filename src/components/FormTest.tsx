import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Input = {
    userName: string;
    userNumber: string; 
};

const FormTest = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Input>();


    const emailValue = watch("userName");

    const onSubmit: SubmitHandler<Input> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email Kiriting:</label>
                <input
                    className='border'
                    {...register("userName", { required: " Ism Majburiy" })}
                    type="email"
                />
                {errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}

                <p>Kiritilgan Email : {emailValue}</p>

                <label>Password Please:</label>
                <input
                    className='border'
                    {...register("userNumber", { minLength: 6, maxLength: 12 })}
                    type="password"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormTest;