import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../Button/Button';

export const Input = (props) => {
  console.log('props:', props);
  const { handleClick } = props;
  const { handleSubmit, control } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleClick(data);
        console.log('data:', data);
      })}
    >
      <div className={'w-1/2 flex flex-col'}>
        <label>Username</label>
        <Controller
          control={control}
          name='Username'
          render={({ field: { onChange, onBlur } }) => (
            <input
              type='text'
              className={'border text-sm py-2.5 rounded-sm focus:ring-0'}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Button variant={'btn-primary mt-4'} label={'Submit'} />
        {/* <Primary {...Primary.args} /> */}
      </div>
    </form>
  );
};
