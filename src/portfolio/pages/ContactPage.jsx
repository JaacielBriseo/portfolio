import { ContactConsole } from '../components';

export const ContactPage = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn text-ffa font-mono text-sm sm:w-[calc(100%_-_200px)] sm:m-auto">
        <h1 className="text-custom m-4 text-2xl font-Playfair text-center">
          CONTACT
        </h1>
        <hr />
        <ContactConsole />
      </div>
    </>
  );
};
