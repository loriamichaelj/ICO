// props: account, accountBalance
const Info = (props) => {
  return (
    <div className="my-3">
      <p>
        <strong>Account:</strong> {props.account}
      </p>
      <p>
        <strong>Tokens Owned:</strong> {props.accountBalance}
      </p>
    </div>
  );
};

export default Info;
