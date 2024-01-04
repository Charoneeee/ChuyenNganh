export interface User {
  name: string;
}

export interface MovieList {
  results: Movie[];
}

export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  credits?: {
    cast: {
      id: number;
      name: string;
      profile_path: string;
      // Thêm các thuộc tính khác của castMember nếu có
    }[];
    // Thêm các thuộc tính khác của credits nếu có
  };
}
