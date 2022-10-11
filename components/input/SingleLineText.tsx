export interface ISingleLineText {
  sampleTextProp: string;
}

const SingleLineText: React.FC<ISingleLineText> = ({ sampleTextProp }) => {
  return (
    <>
      <span className="uppercase text-sm text-gray-600 font-bold">
        {sampleTextProp}
      </span>
      <input
        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
      />
    </>
  );
};

export default SingleLineText;
``;
