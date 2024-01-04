// [id].tsx
import type { ReactElement } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { Movie } from "@/models/Movie";
import Layout from "@/components/layout";
import { Box, Stack } from "@mui/material";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<Movie>(`/movie/${id}`, fetcher);

  if (error) return <div>Error loading movie details</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Stack gap={4}>
        <Stack key={data.id} direction="row" alignItems="center">
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            width={250}
          />
          <Stack p={"20px"} spacing={4}>
            <Box fontSize={"70px"}>{data.title}</Box>
            <Box fontSize={"25px"}>{data.overview}</Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MovieDetail;
