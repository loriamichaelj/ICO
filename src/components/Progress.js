// props: tokensSold, maxTokens
import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = (props) => {
  return (
    <div className="my-3">
      <p className="text-center my-3">
        <ProgressBar
          now={(props.tokensSold / props.maxTokens) * 100}
          label={`${(props.tokensSold / props.maxTokens) * 100}%`}
        />
        {props.tokensSold} / {props.maxTokens} Tokens Sold
      </p>
    </div>
  );
};

export default Progress;
