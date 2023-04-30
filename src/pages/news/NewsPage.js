import React, { useEffect, useState } from "react";
import { newArray } from "./utils";
import axios from "axios";
import { FlexDiv, StyledImg, ContainerDiv, StyledText, StyledHeader, LargerHeader, StyledSubText, PreferedFlexDiv, StyledButton, StyledAnchor } from "./styles";

const NewsLayout = (props) => {
 
  return (
    <FlexDiv>
      <div>
        <StyledImg lazy src={props.image} alt={props.title} />
      </div>
      <div>
        <StyledHeader>
          {props.source}- {props.title}
          <StyledButton onClick={() => props.handleClick({source: props.source})}>Save Source</StyledButton>
        </StyledHeader>
        <StyledText>{props.description}</StyledText>
        <StyledAnchor href={props.url}>See more...</StyledAnchor>
        <PreferedFlexDiv>
          <StyledSubText>by {props.author}</StyledSubText>
          <StyledButton onClick={() => props.handleClick({author: props.author, for: props.source})}>Save Author</StyledButton>
        </PreferedFlexDiv>
      </div>
    </FlexDiv>
  );
};

const NewsPage = () => {
  const [generalNews, setGeneralNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [entertainmentNews, setentertainmentNews] = useState([]);
  const [healthNews, sethealthNews] = useState([]);
  const [preferedAuthors, setPreferedAuthors] = useState([]);
  const [preferedAuthorsArticles, setPreferedAuthorsArticles] = useState([]);
  const [preferedSources, setPreferedSources] = useState([]);
  const [preferedSourcesArticles, setPreferedSourcesArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const generalNews = await axios("https://newsdata.io/api/1/news?apikey=pub_21317ca1fef6ce0e0c6dc915191f2c0725c17&country=us"
        );
        const techNews = await axios("https://newsdata.io/api/1/news?apikey=pub_21317ca1fef6ce0e0c6dc915191f2c0725c17&country=us&category=technology");
        const businessNews = await axios(
          "https://newsdata.io/api/1/news?apikey=pub_21317ca1fef6ce0e0c6dc915191f2c0725c17&country=us&category=business"
        );
        setGeneralNews(generalNews.data.results);
        setTechNews(techNews.data.results);
        setBusinessNews(businessNews.data.results);
      } catch (err) {
        setErrorMessage("Could Not Fetch NewsData Recource!")
      }
    };
    getNewsData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getNewYorkTimes = async () => {
      try {
        const scienceNews = await axios(
          "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=UkfbVcrTs1O6FeoNR2qCkLsshBrYxVB8"
        );
        const worldNews = await axios(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UkfbVcrTs1O6FeoNR2qCkLsshBrYxVB8"
        );
        const sportsNews = await axios(
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=UkfbVcrTs1O6FeoNR2qCkLsshBrYxVB8"
        );
        setScienceNews(scienceNews.data.results);
        setWorldNews(worldNews.data.results);
        setSportsNews(sportsNews.data.results);
      } catch (err) {
        setErrorMessage("Could Not Fetch New York Times Recource!");
      }
    };
    getNewYorkTimes();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getNewsApi = async () => {
      try {
        const entertainmentNews = await axios(
          "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=188dcb46d9f24b36b3e0a2231f0422d4"
        );
        const healthNews = await axios(
          "https://newsapi.org/v2/top-headlines?category=health&apiKey=188dcb46d9f24b36b3e0a2231f0422d4"
        );
        setentertainmentNews(entertainmentNews.data.articles);
        sethealthNews(healthNews.data.articles);
      } catch (err) {
        setErrorMessage("Could Not Fetch NewsApi Recource!");
      }
    };
    getNewsApi();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getAuthors = () => {
      preferedAuthors.forEach(async (author) => {
        if (author.for === "New York Times") {
          try {
            const nytAuthor = await axios(
              `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=UkfbVcrTs1O6FeoNR2qCkLsshBrYxVB8`
            );
            const filterArticles = nytAuthor.data.results.filter((article) => article.byline.includes(author.author));
            if(filterArticles.length > 0) {
              setPreferedAuthorsArticles([
                ...preferedAuthorsArticles,
                ...filterArticles,
              ]);
            }
          } catch (err) {
            setErrorMessage("Could Not Fetch New York Times Author Articles!");
          }
        } 
        if(author.for !== "New York Times") {
          try {
            const checkNewsApi = await axios(
              `https://newsapi.org/v2/top-headlines?language=en&apiKey=188dcb46d9f24b36b3e0a2231f0422d4`
            );
            const checkNewsData = await axios(
              `https://newsdata.io/api/1/news?apikey=pub_21317ca1fef6ce0e0c6dc915191f2c0725c17&language=en`
            );
            console.log(
              "newsapi:",
              checkNewsApi.data.results,
              "newsdata:",
              checkNewsData.data.results
            );
            const filterNewsApiArticles = checkNewsApi.data.articles.filter((article) => article.author.includes(author.author));
            console.log(filterNewsApiArticles)
            if (filterNewsApiArticles.length > 0) {
              setPreferedAuthorsArticles([
                ...preferedAuthorsArticles,
                ...filterNewsApiArticles,
              ]);
            }
            const filterNewsDataArticles = checkNewsData.data.results.filter(
              (article) => article.creator?.[0].includes(author.author)
            );
            console.log(filterNewsDataArticles)
            if (filterNewsDataArticles.length > 0) {
              setPreferedAuthorsArticles([
                ...preferedAuthorsArticles,
                ...filterNewsDataArticles,
              ]);
            }
          } catch (err) {
            setErrorMessage("Could Not Fetch Author Articles!");
          }
        }
    });
    };
    getAuthors();
  }, [preferedAuthors]);
  
  const handleClick = (value) => {
    if(Object.entries(value)[0][0] === "author") {
      setPreferedAuthors([...preferedAuthors, value]);
    } else {
      setPreferedSources([...preferedSources, value]);
    }
  }
  return (
    <ContainerDiv>
      {generalNews.length > 0 ? (
        <LargerHeader>General News</LargerHeader>
      ) : null}
      {newArray(
        generalNews,
        "image_url",
        "creator?.[0], link",
        "description"
      )?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.link}
          title={article.title}
          description={article.description}
          image={article.image_url}
          source={
            article.source_id?.charAt(0).toUpperCase() +
            article.source_id?.slice(1)
          }
          author={article.creator?.[0]}
          handleClick={handleClick}
        />
      ))}
      {techNews.length > 0 ? <LargerHeader>Technology</LargerHeader> : null}
      {newArray(
        techNews,
        "image_url",
        "creator?.[0], link",
        "description"
      )?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.link}
          title={article.title}
          description={article.description}
          image={article.image_url}
          source={
            article.source_id?.charAt(0).toUpperCase() +
            article.source_id?.slice(1)
          }
          author={article.creator?.[0]}
          handleClick={handleClick}
        />
      ))}
      {businessNews.length > 0 ? <LargerHeader>Business</LargerHeader> : null}
      {newArray(
        businessNews,
        "image_url",
        "creator?.[0], link",
        "description"
      )?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.link}
          title={article.title}
          description={article.description}
          image={article.image_url}
          source={
            article.source_id?.charAt(0).toUpperCase() +
            article.source_id?.slice(1)
          }
          author={article.creator?.[0]}
          handleClick={handleClick}
        />
      ))}
      {worldNews.length > 0 ? <LargerHeader>World News</LargerHeader> : null}
      {newArray(worldNews, "multimedia", "byline", "url", "abstract")?.map(
        (article) => (
          <NewsLayout
            key={article.title}
            url={article.url}
            title={article.title}
            description={article.abstract}
            image={article.multimedia?.[0].url}
            source="New York Times"
            author={article.byline?.split(" ").slice(1).join(" ")}
            handleClick={handleClick}
          />
        )
      )}
      {sportsNews.length > 0 ? <LargerHeader>Sports</LargerHeader> : null}
      {newArray(sportsNews, "multimedia", "byline", "url", "abstract")?.map(
        (article) => (
          <NewsLayout
            key={article.title}
            url={article.url}
            title={article.title}
            description={article.abstract}
            image={article.multimedia?.[0].url}
            source="New York Times"
            author={article.byline?.split(" ").slice(1).join(" ")}
            handleClick={handleClick}
          />
        )
      )}
      {scienceNews.length > 0 ? <LargerHeader>Science</LargerHeader> : null}
      {newArray(scienceNews, "multimedia", "byline", "url", "abstract")?.map(
        (article) => (
          <NewsLayout
            key={article.title}
            url={article.url}
            title={article.title}
            description={article.abstract}
            image={article.multimedia?.[0].url}
            source="New York Times"
            author={article.byline?.split(" ").slice(1).join(" ")}
            handleClick={handleClick}
          />
        )
      )}
      {entertainmentNews.length ? (
        <LargerHeader>Entertainment</LargerHeader>
      ) : null}
      {newArray(
        entertainmentNews,
        "multimedia",
        "byline",
        "url",
        "description"
      )?.map((article) => (
        <NewsLayout
          key={article.source.id}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          source={article.source.name}
          author={article.author}
          handleClick={handleClick}
        />
      ))}
      {healthNews.length > 0 ? <LargerHeader>Health</LargerHeader> : null}
      {newArray(healthNews, "multimedia", "byline", "url", "description")?.map(
        (article) => (
          <NewsLayout
            key={article.source.id}
            url={article.url}
            title={article.title}
            description={article.description}
            image={article.urlToImage}
            source={article.source.name}
            author={article.author}
            handleClick={handleClick}
          />
        )
      )}
      {preferedSourcesArticles.length > 0 ? (
        <LargerHeader>Saved Sources</LargerHeader>
      ) : null}
      {preferedAuthorsArticles.length > 0 ? (
        <LargerHeader>Saved Authors</LargerHeader>
      ) : null}
      {newArray(
        preferedAuthorsArticles,
        "multimedia",
        "byline",
        "url",
        "description"
      )?.map((article) => (
        <NewsLayout
          key={article.source?.id || article.title}
          url={article.url || article.link}
          title={article.title}
          description={article.description || article.abstract}
          image={
            article.urlToImage ||
            article.multimedia?.[0].url ||
            article.image_url
          }
          source={article.source?.name || "New York Times" || article.source_id}
          author={article.author || article.creator?.[0] || article.byline}
          handleClick={handleClick}
        />
      ))}

      {/* <LargerHeader>World News</LargerHeader>
      {world?.map((article) => (
        <NewsLayout
          key={article.articleId}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.imageUrl}
        />
      ))}
      <LargerHeader>Politics</LargerHeader>
      {politics?.map((article) => (
        <NewsLayout
          key={article.articleId}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.imageUrl}
        />
      ))}
      <LargerHeader>Business</LargerHeader>
      {business?.map((article) => (
        <NewsLayout
          key={article.articleId}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.imageUrl}
        />
      ))}
      <LargerHeader>Technology</LargerHeader>
      {technology?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.image}
        />
      ))}
      <LargerHeader>Sports</LargerHeader>
      {sports?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.image}
        />
      ))}
      <LargerHeader>General</LargerHeader>
      {general?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.image}
        />
      ))}
      <LargerHeader>Entertainment</LargerHeader>
      {entertainment?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
        />
      ))}
      <LargerHeader>Health</LargerHeader>
      {health?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
        />
      ))}
      <LargerHeader>Science</LargerHeader>
      {science?.map((article) => (
        <NewsLayout
          key={article.title}
          url={article.url}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
        />
      ))} */}
    </ContainerDiv>
  );
};

export default NewsPage;