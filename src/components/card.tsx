import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WeatherCard({
  country = 'Taiwan',
  time = new Date().toDateString(),
  onClick,
}: {
  country: string;
  time: string;
  onClick: () => void;
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {country}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {time}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onClick}>
            Show More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
