interface InterInput {
  setInput: (args: any) => any;
}

export default function InputList({ setInput }: InterInput) {
  return (
    <input
      onChange={(msg) => setInput(msg.target.value)}
      className="border-2 text-3xl text-blue-200 rounded-4xl w-2xl h-20 mt-6 flex justify-center"
      type="text"
    />
  );
}
