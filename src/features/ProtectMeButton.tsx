import React from 'react';

import { Button, TButtonProps } from 'src/components';
import { useAppContext } from 'src/hooks';
import { EScrollableSections } from 'src/types';

export const ProtectMeButton = React.forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
  const { scrollWithCount } = useAppContext();

  const clickHandler = () => scrollWithCount(EScrollableSections.billing);

  return (
    <Button {...props} ref={ref} onClick={clickHandler}>
      Protect me now
    </Button>
  );
});
