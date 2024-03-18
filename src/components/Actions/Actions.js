import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Button, Tooltip } from "react-bootstrap";
import "../../assets/css/actions.css";
import { OverlayTrigger } from "react-bootstrap";

const Actions = ({ DeleteRecord, OpenProfile }) => {
  return (
    <div>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip className="tooltip" id="tooltip-829164576">
            Delete
          </Tooltip>
        }
      >
        <DeleteOutlineIcon
          onClick={DeleteRecord}
          className="nc-icon action-icons action-delete"
        />
      </OverlayTrigger>

      <OverlayTrigger
        overlay={
          <Tooltip placement="top" className="tooltip" id="tooltip-829164576">
            Profile
          </Tooltip>
        }
      >
        <AccountBoxIcon
          onClick={() => {
            OpenProfile();
          }}
          className="nc-icon action-icons action-profile"
        />
      </OverlayTrigger>
    </div>
  );
};

export default Actions;
