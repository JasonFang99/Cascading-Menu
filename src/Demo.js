import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Menu from "./Menu";
import SubMenuItem from "./SubMenuItem";

const menuItems = [
  {
    key: "1",
    caption: "Button 1",
    onClick: () => {}
  },
  {
    key: "2",
    caption: "Button 2",
    onClick: () => {}
  },
  {
    key: "3",
    caption: "Button 3",
    onClick: () => {}
  },
  {
    key: "more",
    caption: "More items",
    subMenuItems: [
      {
        key: "4",
        caption: "Button 4",
        onClick: () => {}
      },
      {
        key: "5",
        caption: "Button 5",
        onClick: () => {}
      },
      {
        key: "6",
        caption: "Button 6",
        onClick: () => {}
      }
    ]
  }
];

@observer
export default class Demo extends React.Component {
  @observable anchorElement = null;

  @action
  handleButtonClick = event => {
    this.anchorElement = event.currentTarget;
  };

  @action
  handleMenuClose = () => {
    this.anchorElement = null;
  };

  render() {
    return (
      <React.Fragment>
        <IconButton onClick={this.handleButtonClick}>
          <AddIcon />
        </IconButton>
        <Menu
          open={Boolean(this.anchorElement)}
          menuItems={menuItems}
          anchorElement={this.anchorElement}
          onClose={this.handleMenuClose}
        />
      </React.Fragment>
    );
  }
}
