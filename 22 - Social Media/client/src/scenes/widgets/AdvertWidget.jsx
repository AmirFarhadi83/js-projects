import React from 'react';
import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

export default function AdvertWidget() {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    return (
        <>
            <WidgetWrapper>
                <FlexBetween>
                    <Typography color={dark} variant="h5" fontWeight="500">
                        اسپانسر
                    </Typography>
                    <Typography color={medium}>افزودن تبلیغ</Typography>
                </FlexBetween>
                <img
                    width="100%"
                    height="auto"
                    alt="advert"
                    src="http://localhost:3001/assets/info4.jpeg"
                    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                />
                <FlexBetween>
                    <Typography color={main}>قالیشویی شربت اوغلی</Typography>
                    <Typography color={medium}>sharbatoghlico.com</Typography>
                </FlexBetween>
                <Typography color={medium} m="0.5rem 0">
                    فرش هایتان را به ما بسپارید
                    قالیشویی شربت اوغلی
                </Typography>
            </WidgetWrapper>
        </>
    );
};
