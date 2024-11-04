type Data = {
  color: string;
  sign: string;
  birthstone: string;
};

export default function RandomData({ data }: { data: Data }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Random data</h2>

      <p>
        <strong>Color:</strong> {data.color}
      </p>
    </div>
  );
}
