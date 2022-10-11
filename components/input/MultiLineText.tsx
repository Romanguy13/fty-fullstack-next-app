export interface IMultiLineText {
  sampleTextProp: string;
}

const MultiLineText: React.FC<IMultiLineText> = ({ sampleTextProp }) => {
  return (
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-600 font-bold">
        {sampleTextProp}
      </span>
      <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
    </div>
  );
};

export default MultiLineText;
