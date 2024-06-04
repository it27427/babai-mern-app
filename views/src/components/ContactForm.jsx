import Button from '@/components/Button';
import Form from '@/components/Form';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';

const ContactForm = () => {
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
        <label htmlFor='subject'>
          Subject <span className='text-red-500 font-bold'>*</span>
        </label>
        <InputField
          type='text'
          id='subject'
          name='subject'
          placeholder='Enter Subject'
          className='input input-bordered w-full'
          // onChange={(e) => }
          // value={}
          required={true}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='subject'>
          Message <span className='text-red-500 font-bold'>*</span>
        </label>
        <TextArea
          id='message'
          name='message'
          placeholder='Enter Message'
          className='input input-bordered w-full resize-none h-auto'
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
          Send Message
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
