import React from "react";
import { Button } from "@mui/material";
import { Margin } from "@mui/icons-material";

const CustomButton = ({ 
    label, 
    onClick, 
    icon: Icon, 
    showIcon = false, 
    variant = "contained", 
    color = "", 
    type = "button" // Default type is "button"
}) => {
    return (
        <Button style={{ borderRadius: "5px 0px", }}
            variant={variant} 
            color={color} 
            onClick={onClick} 
            startIcon={showIcon && Icon ? <Icon /> : null} 
            type={type} 
        >
            {label}
        </Button>
    );
};

export default CustomButton;
