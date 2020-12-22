import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Custom Rolls"
        icon={<BookmarksIcon />}
        component={RouterLink}
        to="/custom-rolls"
      />
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={RouterLink}
        to="/"
      />
      <BottomNavigationAction
        label="Settings"
        icon={<SettingsIcon />}
        component={RouterLink}
        to="/settings"
      />
    </BottomNavigation>
  );
}
