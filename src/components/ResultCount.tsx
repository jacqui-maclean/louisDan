interface Props {
  count: number;
}
const ResultCount = ({ count }: Props) => {
  return <div className="d-flex justify-content-end me-5">{count} results</div>;
};

export default ResultCount;
