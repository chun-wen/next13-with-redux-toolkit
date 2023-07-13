'use client';
import * as React from 'react';
import WeatherCard from '@/components/card';
import { useAppSelector } from '@/hooks/useAppRedux';
import { useGetWeatherQuery } from '../server/weatherApi';
import Skeleton from '@mui/material/Skeleton';

export default function Home() {
  // const { location } = useAppSelector((state) => state.weatherReducer);
  const { isLoading, isFetching, data, error } = useGetWeatherQuery({ parameter: '53.1,-0.13' });
  console.log({ isLoading, isFetching, data, error });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {isLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <WeatherCard
          country={data?.location?.country}
          time={data?.location?.localtime}
          onClick={() => {}}
        />
      )}
    </main>
  );
}
