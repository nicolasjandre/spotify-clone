import { FlatList, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Filters } from "../../components/Filters";
import { RecentlyCollection } from "../../components/RecentlyCollection";
import { GeneralCollection } from "../../components/GeneralCollection";

import React from "react";

type Music = {
  name: string;
  imgUrl: string;
  topic?: string;
  description?: string;
};

type Collection = {
  title: string;
  playlist: Music[];
};

const generalCollection: Collection[] = [
  {
    title: "Recently Played",
    playlist: [
      {
        name: "As melhores de David Guetta",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/8/81/CAPA_CD_NOTHING_BUT_THE_BEAT.jpg",
      },
      { name: "TOP 10 Martin Garrix", imgUrl: "https://eletrovibez.com/wp-content/uploads/2019/02/Martin-Garrix.jpg" },
      { name: "BRASIL - DUBDOGZ", imgUrl: "https://www.privilegebrasil.com/conteudo/evento/2115_avatar387.png" },
      {
        name: "It is Vintage Culture",
        imgUrl: "https://iconnectgyn.com/wp-content/uploads/2018/08/VINTAGE-CULTURE.jpg",
      },
      { name: "Best Electronic Musics", imgUrl: "https://hypescience.com/wp-content/uploads/2013/10/150.jpg" },
      {
        name: "Electro 2011",
        imgUrl:
          "https://www.eletromusica.com.br/wp-content/uploads/2011/05/CD-DANCE-HITS-2011-RECORD-RADAR-RECORDS.jpg",
      },
      {
        name: "Nostalgia - Summer Electro Hits",
        imgUrl: "https://akamai.sscdn.co/letras/360x360/albuns/b/5/3/8/580211495713890.jpg",
      },
    ],
  },
  {
    title: "Podcasts para se divertir",
    playlist: [
      {
        name: "Game Changers",
        imgUrl: "https://source.unsplash.com/random/?podcast",
        topic: "Jogos e Videogames",
        description:
          "Entre no mundo dos jogos e conheça os bastidores da indústria de videogames. Neste podcast, você terá acesso a entrevistas com desenvolvedores, análises de jogos populares e discussões sobre os aspectos artísticos e tecnológicos dos jogos. Esteja por dentro das últimas novidades do universo gamer.",
      },
      {
        name: "Fitness Fuel",
        imgUrl: "https://source.unsplash.com/random/200*200/?podcast",
        topic: "Saúde e Fitness",
        description:
          "Prepare-se para suar! Este podcast é um guia completo para uma vida saudável e ativa. Explore dicas de exercícios, nutrição equilibrada e bem-estar geral. Descubra como alcançar seus objetivos fitness e mantenha-se motivado para cuidar do seu corpo e mente.",
      },
      {
        name: "Mind Matters",
        imgUrl: "https://source.unsplash.com/random/200*201/?podcast",
        topic: "Psicologia e Neurociência",
      },
      {
        name: "Beyond Borders",
        imgUrl: "https://source.unsplash.com/random/200*202/?podcast",
        topic: "Cultura e Viagens",
        description:
          "Viaje pelo mundo sem sair do lugar! Este podcast leva você a explorar culturas, tradições e histórias fascinantes de diferentes partes do globo. Descubra as peculiaridades de cada região, mergulhe na diversidade humana e amplie sua compreensão sobre o nosso planeta.",
      },
      {
        name: "Best Electronic Musics",
        imgUrl: "https://source.unsplash.com/random/200*203/?podcast",
        topic: "Religião e espiritualidade",
        description: "Descricao aleatoria",
      },
      {
        name: "Creative Chronicles",
        imgUrl: "https://source.unsplash.com/random/200*204/?podcast",
        topic: "Arte e Criatividade",
        description:
          "Explore o mundo da criatividade e da expressão artística. Neste podcast, artistas e criadores compartilham suas jornadas, dicas e insights sobre diferentes formas de expressão, como pintura, escrita, fotografia, música e muito mais. Inspire-se e descubra o poder da arte em nossas vidas.",
      },
      {
        name: "Money Matters",
        imgUrl: "https://source.unsplash.com/random/200*205/?podcast",
        topic: "Finanças Pessoais",
      },
    ],
  },
  {
    title: "Brasileiras",
    playlist: [
      {
        name: "Samba e Pagode",
        description:
          "Desfrute da autêntica música brasileira com esta playlist de samba e pagode. De clássicos imortais a novos sucessos, mergulhe na energia contagiante e na alegria do ritmo mais tradicional do Brasil.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?pagode",
      },
      {
        name: "MPB (Música Popular Brasileira)",
        description:
          "Explore o rico universo da MPB com esta playlist que apresenta uma seleção de artistas e canções icônicas. Da bossa nova ao samba-canção, descubra a diversidade e a poesia da música popular brasileira.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?mpb",
      },
      {
        name: "Forró Raiz",
        description:
          "Caia na dança com o autêntico forró raiz. Esta playlist traz o melhor do ritmo nordestino, com suas melodias cativantes e letras cheias de história e tradição. Deixe-se levar pelos acordes do acordeão e pela batida do triângulo.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?forro",
      },
      {
        name: "Axé Hits",
        description:
          "Aumente o astral com esta playlist de axé, um gênero musical que contagia com sua batida e ritmo dançante. De grandes clássicos a novos sucessos, essa seleção traz o melhor do axé para você curtir e se divertir.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?axe",
      },
      {
        name: "Rock Nacional",
        description:
          "Explore a cena do rock nacional com esta playlist que reúne grandes bandas e artistas brasileiros. Do rock clássico ao indie, desfrute da energia do som brasileiro e descubra a diversidade do rock feito no Brasil.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?rock",
      },
      {
        name: "Bossa Nova Lounge",
        description:
          "Relaxe ao som da bossa nova, um dos gêneros musicais mais reconhecidos do Brasil. Esta playlist apresenta uma seleção de músicas suaves e sofisticadas, perfeitas para momentos de descontração e apreciação musical.",
        topic: "Música Brasileira",
        imgUrl: "https://source.unsplash.com/random/200*205/?samba",
      },
    ],
  },

  {
    title: "Made for Nicolas Jandre",
    playlist: [
      {
        name: "Energizing Morning Vibes",
        description:
          "Start your day with a boost of energy! This playlist features upbeat and uplifting songs from various genres that will get you in a positive mood and set the tone for a productive morning.",
        topic: "Music for Morning Motivation",
        imgUrl: "https://source.unsplash.com/random/200*205/?motivation",
      },
      {
        name: "Chillout Lounge",
        description:
          "Relax and unwind with this collection of laid-back tunes. Dive into a soothing atmosphere and let the tranquil melodies and smooth beats wash away your stress. Perfect for moments of tranquility and self-reflection.",
        topic: "Chill and Relaxation",
        imgUrl: "https://source.unsplash.com/random/200*205/?chill",
      },
      {
        name: "Road Trip Anthems",
        description:
          "Hit the road and embark on an epic adventure with this playlist of energetic anthems. From classic rock to catchy pop tunes, these songs will make your journey unforgettable and keep you singing along all the way.",
        topic: "Travel and Adventure",
        imgUrl: "https://source.unsplash.com/random/200*205/?adventure",
      },
      {
        name: "Throwback Hits: 90s Edition",
        description:
          "Step back in time and relive the golden era of music with this nostalgic playlist featuring the biggest hits from the 1990s. Get ready to groove to the iconic sounds that defined a generation.",
        imgUrl: "https://source.unsplash.com/random/200*205/?nostalgic",
        topic: "Nostalgic Music",
      },
      {
        name: "Acoustic Serenade",
        description:
          "Experience the raw beauty of stripped-down acoustic performances. This playlist showcases heartfelt songs accompanied by acoustic guitars and soothing vocals, creating an intimate and soulful ambiance.",
        topic: "Acoustic Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?acoustic",
      },
      {
        name: "Workout Motivation Mix",
        description:
          "Get pumped up and stay motivated during your workouts with this high-energy playlist. Featuring a blend of energetic tracks from various genres, this mix will keep you pushing through your fitness routine.",
        topic: "Fitness and Exercise",
        imgUrl: "https://source.unsplash.com/random/200*205/?fitness",
      },
    ],
  },
  {
    title: "Popular Radio",
    playlist: [
      {
        name: "Top Hits Countdown",
        description:
          "Stay up to date with the latest chart-topping hits from around the world. This playlist features the hottest songs that are dominating the airwaves and making waves in the music industry.",
        topic: "Current Hits",
        imgUrl: "https://source.unsplash.com/random/200*205/?hit",
      },
      {
        name: "Throwback Classics",
        description:
          "Take a trip down memory lane with this collection of timeless classics. From iconic tracks of the past to unforgettable favorites, this playlist is a nostalgic journey through the golden age of music.",
        topic: "Nostalgic Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?classic",
      },
      {
        name: "Indie Vibes",
        description:
          "Discover the best indie music from emerging artists and bands. This playlist showcases a diverse selection of indie genres, from indie rock and folk to indie pop and alternative, providing a platform for independent talent.",
        topic: "Indie Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?indie",
      },
      {
        name: "Hip Hop Essentials",
        description:
          "Immerse yourself in the world of hip hop with this playlist of essential tracks. From classic rap anthems to the latest releases, this collection represents the best of hip hop culture and showcases the genre's evolution.",
        topic: "Hip Hop Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?hiphop",
      },
      {
        name: "Dance Party Mix",
        description:
          "Get the party started with this high-energy dance mix. Featuring infectious beats and infectious hooks, this playlist will make you move and groove to the hottest dance tracks from various genres.",
        topic: "Party Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?dance",
      },
      {
        name: "Alternative Edge",
        description:
          "Explore the edgier side of music with this playlist dedicated to alternative sounds. From post-punk and grunge to experimental and underground tracks, this collection is for those seeking a unique musical experience.",
        topic: "Alternative Music",
        imgUrl: "https://source.unsplash.com/random/200*205/?alternative",
      },
    ],
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={generalCollection}
        keyExtractor={(collection) => collection?.title}
        onScroll={() => {}}
        ListHeaderComponent={
          <>
            <Header />
            <Filters />
          </>
        }
        renderItem={({ index, item }) => {
          return item.title === "Recently Played" ? (
            <RecentlyCollection collection={item} />
          ) : (
            <GeneralCollection collection={item} index={index} lastItem={generalCollection?.length} />
          );
        }}
      />
    </SafeAreaView>
  );
}
