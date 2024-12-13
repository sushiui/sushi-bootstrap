import {Button} from 'react-bootstrap';
import React from 'react';
import {SsButtonProps} from "./SsButton.types";

const SsButton: React.FC<SsButtonProps> = ({variant, ...props}) => {

    return (
        <Button
            variant={variant}
            {...props}
            className={`${props.className || ''}`}
        >
            {props.children}
        </Button>
    );
};

export default SsButton;
