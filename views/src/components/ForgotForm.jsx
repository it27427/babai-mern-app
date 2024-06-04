import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const ForgotForm = () => {
  return (
    <Form className='flex flex-col gap-4'>
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

      <div className='mt-3'>
        <Button
          type='submit'
          className='btn btn-primary uppercase font-semibold w-full transition hover:bg-indigo-800'
        >
          Continue
        </Button>
      </div>
    </Form>
  );
};

export default ForgotForm;
