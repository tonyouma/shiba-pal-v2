import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  minWidth: 200,
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(2),
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)', // Fix on Mobile
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[900], 0.72)
}));

// ----------------------------------------------------------------------

type ControlPanelProps = {
  year: number;
  onChange: (year: number) => void;
};

export default function ControlPanel({ year, onChange }: ControlPanelProps) {
  return (
    <RootStyle>
      <Typography variant="body2" sx={{ color: 'common.white' }}>
        Year: {year}
      </Typography>
      <Slider
        name="year"
        value={year}
        step={1}
        min={1995}
        max={2015}
        onChange={(e, value) => {
          if (typeof value === 'number') {
            onChange(value);
          }
        }}
      />
    </RootStyle>
  );
}
