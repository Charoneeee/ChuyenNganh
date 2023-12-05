import Head from "next/head";
import {
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import { Inter } from "next/font/google";
import Image from "next/image";
import avatarImage from "../public/avt.jpg";
import coverImage from "../public/cover.jpg";

const inter = Inter({ subsets: ["latin"] });

function SectionHeader(props: { title: string }) {
  return (
    <>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.secondary"
        gutterBottom
      >
        {props.title}
      </Typography>
      <Divider sx={{ height: 2, backgroundColor: "grey.300" }} />
    </>
  );
}

function Section(props: { data: SectionData }) {
  let items = props.data.items;
  return (
    <>
      <SectionHeader title={props.data.title} />

      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </>
  );
}

type SectionData = {
  title: string;
  items: string[];
};

export default function PersonalPage() {
  const data: SectionData[] = [
    {
      title: "Contact",
      items: [
        "🏠 69/9 đường Đoàn Trần Nghiệp, phường Vĩnh Phước, Nha Trang Khánh Hoà",
        "✉️ nnhsang1420@gmail.com",
        "📱 0376354610",
      ],
    },
    {
      title: "Hobbies",
      items: ["Game", "Movies", "Music", "Take a photo"],
    },
    {
      title: "Skills",
      items: [
        "✅ Frontend",
        "✅ Backend",
        "✅ Machine Learning",
        "✅ Japanese",
      ],
    },
    {
      title: "Work experiences",
      items: ["NhaTrang University", "9thWonder", "AMY Center"],
    },
  ];

  return (
    <>
      <Head>
        <title>Nguyễn Ngọc Hoài Sang</title>
        <meta
          name="description"
          content="Personal page of Nguyễn Ngọc Hoài Sang"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container>
          <Grid item xs={12} style={{ position: "relative", height: "300px" }}>
            <Image
              src={coverImage}
              alt="Cover"
              layout="fill"
              objectFit="cover"
            />
            <Avatar
              alt="Avatar"
              src="avt.jpg"
              sx={{
                position: "absolute",
                bottom: "-75px",
                left: "5%",
                transform: "translateX(-50%)",
                width: "150px",
                height: "150px",
                border: "2px solid #fff",
              }}
            />
          </Grid>
          <Grid item xs={12} mt={3} p={3}>
            <Typography
              variant="h4"
              style={{ marginTop: "-35px", marginLeft: "160px" }}
            >
              Nguyễn Ngọc Hoài Sang
            </Typography>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: "5px" }}>
            <Grid item xs={6} md={1.9}>
              {data.map((item) => (
                <Section key={item.title} data={item} />
              ))}
            </Grid>
            <Grid item xs={6} md={10.1}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SectionHeader title="Photos" />
                </Grid>
                {Array.from(Array(12).keys()).map((i) => (
                  <Grid item key={i} xs={4} md={2}>
                    <Image
                      src={`/gallery/${i + 1}.jpg`}
                      alt={`${i}.jpg`}
                      width={1}
                      height={1}
                      quality={100}
                      layout="responsive"
                      style={{ borderRadius: "8px" }}
                      className="w-full aspect-square object-cover"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
