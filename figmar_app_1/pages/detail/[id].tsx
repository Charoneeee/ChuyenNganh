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
  console.log(id);
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<Movie>(
    `/movie/${id}?append_to_response=credits,videos`,
    fetcher
  );

  if (error) return <div>Error loading movie details</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Stack gap={4}>
        <Stack key={data.id}>
          <Box fontSize={"70px"}>{data.title}</Box>
          <Stack pt={"20px"} direction="row" alignItems="center">
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              width={250}
            />
            <Stack p={"20px"} spacing={4}>
              <Box fontSize={"25px"}>{data.overview}</Box>
              <Box fontSize={"25px"}>Vote Average: {data.vote_average}</Box>
              <Box fontSize={"25px"}>Vote Count: {data.vote_count}</Box>
            </Stack>
          </Stack>
          <Box>
            {data.credits && (
              <Stack gap={2}>
                {data.credits.cast.map((castMember) => (
                  <Stack
                    key={castMember.id}
                    direction="row"
                    alignItems="center"
                  >
                    {castMember.profile_path && (
                      <Box
                        component="img"
                        src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                        alt={castMember.name}
                        width={50}
                      />
                    )}
                    <Box>{castMember.name}</Box>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

MovieDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MovieDetail;
