export const ContactConsole = () => {
  return (
    <>
      <div className="bg-contactimg bg-no-repeat bg-cover bg-center w-80 h-80 mt-24 flex justify-center items-center">
        <div className="bg-20if w-72 h-60 opacity-95 cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full flex justify-center place-items-center">
              <p className="text-bluecntc">
                alert
                <span className="text-greencntc">('Hello World')</span>
              </p>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
              <div className="flex flex-col items-center justify-center h-full">
                <p>
                  <span style={{ color: '#ba68c8' }}> const</span> contactMe =
                  &#65115; <br />{' '}
                  <span className="text-redcntc ml-5">name</span>{' '}
                  <span className="text-bluecntc">:</span>{' '}
                  <span className="text-greencntc">'jaaciel briseño'</span>,{' '}
                  <br /> <span className="text-redcntc ml-5">email</span>{' '}
                  <span className="text-bluecntc">:</span>
                  <span className="text-greencntc">
                    'jaacielbris23@gmail.com'
                  </span>
                  ,
                  <br /> <span className="text-redcntc ml-5 ">
                    position
                  </span>{' '}
                  <span className="text-bluecntc">:</span>{' '}
                  <span className="text-greencntc">'fullstack developer'</span>
                  ,
                  <br /> <span className="text-redcntc ml-5">website</span>
                  <span className="text-bluecntc">:</span>{' '}
                  <span className="text-greencntc">
                    'github.com/JaacielBriseo'
                  </span>{' '}
                  <br /> &#65116;;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
