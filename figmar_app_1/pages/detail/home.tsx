import type { ReactElement } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { Box, Stack, Button } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import Layout from "@/components/layout";
import { MovieList } from "@/models/Movie";

const HomeDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/upcoming",
    fetcher
  );

  const handleButtonClick = (movieId: string) => {
    const parsedMovieId = parseInt(movieId, 10);
    if (!isNaN(parsedMovieId)) {
      router.push(`/detail/${parsedMovieId}`);
    }
  };

  return (
    <>
      <Stack gap={4}>
        {data?.results.map((movie) => (
          <Stack key={movie.id} direction="row" alignItems="center">
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={150}
            />
            <Stack p={"20px"}>
              <Box fontSize={"30px"}>{movie.title}</Box>
              <Box>{movie.overview}</Box>
              <Button
                onClick={() => handleButtonClick(movie.id)}
                variant="text"
                sx={{ width: "5%" }}
              >
                Detail
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomeDetail;
