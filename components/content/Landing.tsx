/* eslint-disable @next/next/no-img-element */
export interface ILanding {}

export const Landing: React.FC<ILanding> = () => {
  return (
    <div className="flex flex-col items-center md:flex-row xl:h-screen">
      <div className="max-w-lg mx-auto md:w-1/2">
        <img src="/fty.png" alt="logo" />
      </div>
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold">Free The Youth</h1>
          <h3>Media Collective</h3>
        </div>
        <p className="my-2">
          Here for the community but most importantly the music
        </p>
        <p className="my-2">
          Reporting on and supporting DIY music scenes across America
        </p>
        <p className="my-2">
          Check out the rest of our site to stay up to date with our latest news
        </p>
      </div>
    </div>
  );
};

export default Landing;
