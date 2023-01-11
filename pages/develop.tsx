import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Develop: NextPageWithLayout = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto flex flex-col">
        <div className="md:w-3/4 w-full mx-auto">
          <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div
              className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
              id="headerTerminal"
            >
              <div
                className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                id="closebtn"
              ></div>
              <div
                className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                id="minbtn"
              ></div>
              <div
                className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
                id="maxbtn"
              ></div>
              <div className="mx-auto pr-16" id="terminaltitle">
                <p className="text-center text-sm">Terminal</p>
              </div>
            </div>
            <div
              className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
              id="console"
            >
              <p className="pb-1">Last login: {new Date().toDateString()}</p>
              <p className="pb-1">fty@media /application % credits</p>
              <br />
              <p className="pb-1">contributors:</p>
              <p className="pb-1">Cody Lambert -&gt; Source Code</p>
              <p className="pb-1">Carter Lynch -&gt; Source Code</p>
              <p className="pb-1">Michael Martin -&gt; Design and Data</p>
              <p className="pb-1">Sully Graham -&gt; Design and Data</p>
              <br />
              <p className="pb-1">fty@media /application % </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Develop;

Develop.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
