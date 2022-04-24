import { HashLoader as HashLoaderSpinner } from "react-spinners";
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const HashLoader = () => {
    return (
        <div style={{
            position: 'absolute', top: "50%",
            left: "50%",
            transform: 'translate("-50%", "-50%")'
        }}>
            <HashLoaderSpinner color={'#88ffff'} loading={true} css={override} size={60} />
        </div>
    )
}

export default HashLoader;

