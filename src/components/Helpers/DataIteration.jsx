function DataIteration(props) {
  const { datas = [], children } = props;
  return (
    <>
      {datas &&
        datas.length >= 0 &&
        datas       
          .map((value) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
