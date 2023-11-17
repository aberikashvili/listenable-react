import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Css/segment.scss';

const staticArticles = [
  {
    title: "Basketball",
    description: "This is a sample article 1.",
    urlToImage: "https://source.unsplash.com/random",
    source: "15:01 avg listening time",
  },
  {
    title: "Smartwatch",
    description: "This is a sample article 2.",
    urlToImage: "https://source.unsplash.com/random",
    source: "14:01 avg listening time",
  },
  {
    title: "Games",
    description: "This is a sample article 2.",
    urlToImage: "https://source.unsplash.com/random",
    source: "1501 listening time",
  },
];

function PopularSongs() {
  return (
    <div>
      <div className="container">
      </div>
      <div>
        <div className="Head-thingy">
          <p className="head-text">Popular Topics</p>
          <p className="head-second-text">See all</p>
          <p className="head-third-text">Daily <ArrowDropDownIcon style={{cursor: 'pointer'}} /> </p>
        </div>
        <div className="content">
          <ul className="article-list">
            {staticArticles.map((article, index) => (
              <li key={index} className="article-item">
                <img
                  className="musical-image"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <div className="article-details">
                  <p className="article-title">{article.title}</p>
                  <p className="article-source">{article.source}</p>
                </div>
                <div className="last-div"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularSongs;







