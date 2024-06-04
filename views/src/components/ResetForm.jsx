import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';

const ResetForm = () => {
  return (
    <Form className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-4'>
        <InputField
          type='number'
          id='reset-1'
          name='reset-1'
          placeholder='1'
          className='input input-bordered w-12 h-12 flex items-center justify-center text-center rounded-full p-0'
          // onChange={(e) => }
          // value={}
          required={true}
        />
        <InputField
          type='number'
          id='reset-2'
          name='reset-2'
          placeholder='2'
          className='input input-bordered w-12 h-12 flex items-center justify-center text-center rounded-full p-0'
          // onChange={(e) => }
          // value={}
          required={true}
        />
        <InputField
          type='number'
          id='reset-3'
          name='reset-3'
          placeholder='3'
          className='input input-bordered w-12 h-12 flex items-center justify-center text-center rounded-full p-0'
          // onChange={(e) => }
          // value={}
          required={true}
        />
        <InputField
          type='number'
          id='reset-4'
          name='reset-4'
          placeholder='4'
          className='input input-bordered w-12 h-12 flex items-center justify-center text-center rounded-full p-0'
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
          Reset Password
        </Button>
      </div>
    </Form>
  );
};

export default ResetForm;
