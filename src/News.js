import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native'
import {NewsCard} from "./components/NewsCard"
import {Header} from "./components/Header"

const news_data = [
    {
      id: 0,
      author: 'Omkar Godbole',
      title: 'Mike Pence: The rare times he made headlines',
      description:
        'In picking veteran politician Mike Pence as his vice-president in 2016, Donald Trump went with a safe choice that would also help secure him the evangelical Christian vote.',
      imageUrl:
        'https://ichef.bbci.co.uk/news/800/cpsprodpb/0104/production/_114106200_gettyimages-1219055296.jpg',
    },
    {
      id: 1,
      author: 'Omkar Godbole',
      title: "Covid-19: China's Qingdao to test nine million in five days",
      description:
        'The Chinese city of Qingdao is testing its entire population of nine million people for Covid-19 over a period of five days.',
      imageUrl:
        'https://ichef.bbci.co.uk/news/800/cpsprodpb/17D9E/production/_114849679_gettyimages-1198350684.jpg',
    },
    {
      id: 2,
      author: 'Omkar Godbole',
      title: 'Surprise orangutan born at Chester Zoo after negative pregnancy tests',
      description:
        "A Bornean orangutan has been born 'by surprise' at a zoo, months after its mother's pregnancy tests all came back negative.",
      imageUrl:
        'https://ichef.bbci.co.uk/news/800/cpsprodpb/42FC/production/_114784171_criticallyendangeredborneanorangutanisborntomumleiaatchesterzoo-2.jpg',
    },
    {
      id: 3,
      author: 'Omkar Godbole',
      title: 'Bulls Exit BitMEX Bitcoin Futures Market',
      description:
        'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
      imageUrl:
        'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
    },
    {
      id: 4,
      author: 'Benjamin Pirus',
      title: 'Coinbase customers can now dodge a bank',
      description:
        'New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.',
      imageUrl:
        'https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg',
    },
    {
      id: 5,
      author: 'Malwarebytes Labs',
      title: 'VideoBytes: Ransomware gets wasted!',
      description:
        "On today's VideoBytes, we look at how ransomware is on the rise, attacking corporations with malware that not only encrypts files, but also steals it.",
      imageUrl:
        'https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg',
    },
    {
      id: 6,
      author: 'Daniel Sparks',
      title: 'Why Tesla Stock Fell Sharply Friday Morning - Motley Fool',
      description:
        'Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.',
      imageUrl: 'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
    },
    {
      id: 7,
      author: 'Jessica Bursztynsky',
      title: 'Twilio hits new 52-week high as stock',
      description:
        'Shares of Twilio extended its gains into Friday, reaching a 52-week high, after the company said in a filing that it expects better-than-expected third-quarter revenue.',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142',
    },
  ];
  const banner_data = [
    {
      id: 0,
      text: "Best Prime Day 2020 Alexa",
      imageUrl:
        'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
    },
    {
      id: 1,
      text: "Stocks After Amazon",
      imageUrl:
        'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
    },
    {
      id: 2,
      text: "Levi's Most Popular Jeans",
      imageUrl:
        'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
    },
    {
      id: 3,
      text: "Social Security Benefits?",
      imageUrl:
        'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
    },
    {
      id: 4,
      text: "Columbus Day and Veterans Day",
      imageUrl:
        'https://images.mktw.net/im-242755/social',
    },
  ]


const News = () => {

  const renderNewsData = ({item}) => <NewsCard news={item} />
  const listHeader = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          banner_data.map(bannerItem => {
            return (
              <Image
                source={{uri: bannerItem.imageUrl}}
                style={{
                  width: Dimensions.get("window").width * 0.9,
                  height: Dimensions.get("window").height / 4,
                  margin: 5,
                  borderRadius: 10,
                }} 
              />
            )
          })
        }
      </ScrollView>
    )
  }

  return(

    <SafeAreaView style={{flex:1}}>
      <Header />
      <FlatList
        keyExtractor= {(item, index) => index.toString()} 
        data={news_data}
        renderItem={renderNewsData}
        ListHeaderComponent={listHeader}
      />

    </SafeAreaView>
  )
}


export default News;