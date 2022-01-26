import React from 'react';
import { useForm } from 'react-hook-form';

import { successAlert } from '../components/alerts/helper';
import { viewProps } from '../interfaces/General';
function FormView({ viewHandler, selectedOption, setSelectedOption }: viewProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      age: 18,
    },
  });

  const submitForm = (data: any) => {
    console.log(data);
    successAlert(
      'Your information was successfully submited, we will be in touch with you!',
    );
    viewHandler('options');
    setSelectedOption();
  };
  return (
    <>
      <h2 className="text title menu__title">Welcome!</h2>
      <p className="text menu__description">
        We know you wanna trip on{' '}
        <span className="text menu__description__name">{selectedOption?.name}</span>,
        please submit the form below to continue
      </p>
      <form className="grid" onSubmit={handleSubmit(submitForm)}>
        <div className="entrance">
          <input
            className="input"
            type="text"
            placeholder="Fullname"
            {...register('fullname', { required: 'This field is required' })}
          />
          <span className="error">{errors.fullname?.message}</span>
        </div>
        <div className="entrance">
          <input
            className="input"
            type="email"
            placeholder="Email"
            {...register('email', { required: 'This field is required' })}
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="entrance">
          <input
            className="input"
            type="number"
            placeholder="Phone number"
            {...register('phone', {
              required: 'This field is required',
              minLength: { value: 10, message: 'Min length for this field is 10' },
              maxLength: { value: 10, message: 'Max length for this field is 10' },
            })}
          />
          <span className="error">{errors.phone?.message}</span>
        </div>
        <div className="entrance">
          <label className="label" htmlFor="age">
            Age : {watch().age}
          </label>
          <input
            className="input"
            type="range"
            {...register('age', {
              required: 'This field is required',
              min: 18,
              max: 100,
            })}
            placeholder="Age"
            min="18"
            max="100"
          />
          <span className="error">{errors.age?.message}</span>
        </div>
        <button className="button button--primary menu__button" type="submit">
          Continue
        </button>
      </form>
      <button
        className="button button--back"
        type="button"
        onClick={() => viewHandler('options')}>
        Go back
      </button>
    </>
  );
}

export default FormView;
