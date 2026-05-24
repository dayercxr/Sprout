import { FC, useContext } from 'react';
import { createTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';

export const ThemeToggle: FC = () => {
    const theme = createTheme();
    const { toggleColorMode } = useContext(ColorModeContext);
    const currentMode = theme.palette.mode;

    return (
        <Switch />
    )
}