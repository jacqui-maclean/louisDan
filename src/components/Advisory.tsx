interface Props {
  advisory: string;
}
const Advisory = ({ advisory }: Props) => {
  // if there is no advisory, the classes variable will be an empty string, and therefore nothing will render
  let classes = advisory ? "ms-5 me-5 alert alert-warning" : "";
  return <div className={classes}>{advisory}</div>;
};

export default Advisory;
