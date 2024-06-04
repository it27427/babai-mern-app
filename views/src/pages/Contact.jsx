import RootLayout from '@/layouts/RootLayout';

import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <RootLayout>
      <div className='flex flex-col gap-5 px-6 py-10'>
        <h1 className='uppercase font-bold text-2xl text-center'>
          Get In Touch
        </h1>

        <div className='w-full md:max-w-md mx-auto bg-white shadow-lg border border-slate-200 p-4 md:p-6 rounded'>
          <ContactForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
