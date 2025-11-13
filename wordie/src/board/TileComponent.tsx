function TileComponent({
  wordChar,
  classes,
}: {
  wordChar: string;
  classes: string;
}) {
  return (
    <div
      className={`inline-block w-12 h-12 border-2 m-1 text-center align-middle text-4xl font-bold ${classes}`}
    >
      {wordChar}
    </div>
  );
}

export default TileComponent;
