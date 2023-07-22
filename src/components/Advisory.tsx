interface Props {
  advisory: string;
}
const Advisory = ({ advisory }: Props) => {
  let classes = advisory ? "ms-5 me-5 alert alert-warning" : "";
  return (
    <div className={classes} role="alert">
      {advisory}
    </div>
  );
};

export default Advisory;
