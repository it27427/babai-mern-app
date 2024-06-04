import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const RegisterForm = () => {
  return (
    <Form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>
          Name <span className='text-red-500 font-bold'>*</span>
        </label>
        <InputField
          type='text'
          id='name'
          name='name'
          placeholder='Enter Full Name'
          className='input input-bordered w-full'
          // onChange={(e) => }
          // value={}
          required={true}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>
          Email <span className='text-red-500 font-bold'>*</span>
        </label>
        <InputField
          type='email'
          id='email'
          name='email'
          placeholder='Enter E-mail Address'
          className='input input-bordered w-full'
          // onChange={(e) => }
          // value={}
          required={true}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='phone'>
          Phone <span className='text-red-500 font-bold'>*</span>
        </label>
        <InputField
          type='tel'
          id='phone'
          name='phone'
          placeholder='Enter Phone Number'
          className='input input-bordered w-full'
          // onChange={(e) => }
          // value={}
          required={true}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='password'>
          Password <span className='text-red-500 font-bold'>*</span>
        </label>
        <InputField
          type='password'
          id='password'
          name='password'
          placeholder='Enter Password'
          className='input input-bordered w-full'
          // onChange={(e) => }
          // value={}
          required={true}
        />
      </div>

      <div className='mt-3'>
        <Button
          type='submit'
          className='btn btn-primary uppercase font-semibold w-full transition hover:bg-indigo-800'
        >
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
