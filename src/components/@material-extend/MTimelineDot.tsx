// material
import { useTheme } from '@material-ui/core/styles';
import { TimelineDot, TimelineDotProps } from '@material-ui/lab';

// ----------------------------------------------------------------------

interface MTimelineDotProps extends Omit<TimelineDotProps, 'color'> {
  color?: 'grey' | 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export default function MTimelineDot({
  color = 'grey',
  variant = 'filled',
  sx,
  ...other
}: MTimelineDotProps) {
  const theme = useTheme();

  if (color === 'grey' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return <TimelineDot color={color} variant={variant} sx={sx} {...other} />;
  }

  return (
    <TimelineDot
      variant={variant}
      sx={{
        ...(variant === 'filled' && {
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main
        }),
        ...(variant === 'outlined' && {
          borderColor: theme.palette[color].main
        }),
        ...sx
      }}
      {...other}
    />
  );
}
