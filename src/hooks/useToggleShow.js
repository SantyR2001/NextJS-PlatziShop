import { useState } from 'react';

const useToggleShow = (initialToggleState) => {
  const [toggleState, setToggleState] = useState(initialToggleState);

  const toggleShow = (needed) => {
    if (toggleState.showDesktopMenu === false && toggleState.showCart === false && toggleState.showMobileMenu === false && toggleState.showProductDetail === false) {
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
