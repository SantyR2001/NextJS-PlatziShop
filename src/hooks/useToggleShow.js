import React, { useState } from "react";

const initialToggleState = {
  showCart: false,
  showMobileMenu: false,
  showProductDetail: false,
  showDesktopMenu: false,
};

const useToggleShow = () => {
  const [toggleState, setToggleState] = useState(initialToggleState);

  const toggleShow = (needed) => {
    if (
      toggleState.showDesktopMenu === false &&
      toggleState.showCart === false &&
      toggleState.showMobileMenu === false &&
      toggleState.showProductDetail === false
    ) {
      setToggleState({
        ...toggleState,
        [needed]: true,
      });
      return;
    }
    setToggleState(initialToggleState);
  };

  return {
    toggleShow,
    toggleState,
  };
};

export default useToggleShow;
