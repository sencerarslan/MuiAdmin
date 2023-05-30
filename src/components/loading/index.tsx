import { CircularProgress } from "@mui/material";
import { LoadingStyled } from "./index.styles";

import React from "react";

const WrappedLoading = () => {
  return (
    <LoadingStyled>
      <div className="content">
        <div className="loading">
          <CircularProgress color="primary" size={50} />
        </div>
      </div>
    </LoadingStyled>
  );
};

export const Loading = React.memo(WrappedLoading);
