import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Css/segment.scss';
import Vector from '../img/Vector.png'

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
<div className='segment-container'>
      <div>
        <div className="Head-thingy">
          <h4 className="head-text">Popular Topics</h4>
          <p className="head-second-text">See all</p>
          <p className="head-third-text">Daily <ArrowDropDownIcon style={{cursor: 'pointer'}} /> </p>
        </div>
        
          <ul className="article-list">
            {staticArticles.map((article, index) => (
              <li key={index} className="article-item">
                <img
                  className="musical-image"
                  src={article.urlToImage}
                  alt={article.title}
                
                />
                <img className="vector-pic" src={Vector} alt="stock-pic" style={{marginRight: "-130px"}} />
                
                
                  <p className="article-title">{article.title}</p>
                  <p className="article-source">{article.source}</p>
               
                <div className="last-div"></div>
              </li>
            ))}
          </ul>
        </div>
        </div>
  );
}

export default PopularSongs;
