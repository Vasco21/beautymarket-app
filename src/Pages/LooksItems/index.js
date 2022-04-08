import React, { useEffect, useState } from "react";
import "./styles.scss";
// import axios from 'axios';
// import {Image, ImageSlider }  from 'react-slideshow-image';

// export default class ViewpagerP extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { isLoading: true, images: [], data: [] }
//     }
//     componentDidMount() {
//         axios.get('https://uzuriapi.el.r.appspot.com/looks')
//             .then(response =>response.json())
//             .then((data)=>{for (let index = 0; index < data.length; index++) {
//                 this.setState({
//                     isLoading: false,
//                     data: data[index]
//                 })
//             }})
//     }
//     render() {
//         const { images } = this.state;

const slideWidth = 30;

const _items = [
  {
    player: {
      dateInserted: "Sat, 17 Sep 2022 22:00:00 GMT",
      hashtag: "my Fresh Braids",
      likes: 45,
      lookId: "ulk1",
      lookURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg3f9A192BBb22s8r3oeWVUCio8lhGq5mMw&usqp=CAU",
      requesterId: "req36etegefev",
      requesterUsername: "Thando",
    },
  },
  {
    player: {
      dateInserted: "Mon, 26 Sep 2022 22:00:00 GMT",
      hashtag: "#NewCrown New Me",
      likes: 13,
      lookId: "ulk10",
      lookURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8hiHr-vEa-IUSTLC6lsObbzCIOOjo5jcIw&usqp=CAU",
      requesterId: "req9dgdjdtddn",
      requesterUsername: "Ziyanda",
    },
  },
  {
    player: {
        dateInserted: "Tue, 27 Sep 2022 22:00:00 GMT",
        hashtag: "Why Not? Ndimhle nhe Guys?",
        likes: 43,
        lookId: "ulk11",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3m4B51Ge3u-dU0cuMwzrytYCu4jRV_c4SQ&usqp=CAU",
        requesterId: "req56363jhdhd",
        requesterUsername: "Lholho",
    },
  },
  {
    player: {
        dateInserted: "Wed, 28 Sep 2022 22:00:00 GMT",
        hashtag: "DreadedMe",
        likes: 78,
        lookId: "ulk12",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbuS6PpG7zUmHiXpx4kwragoFbVa9bzMtLA&usqp=CAU",
        requesterId: "req45sfsgssvxkx",
        requesterUsername: "Nkuli",
    },
  },
  {
    player: {
        dateInserted: "Sun, 18 Sep 2022 22:00:00 GMT",
        hashtag: "nails Done",
        likes: 34,
        lookId: "ulk2",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc48xwmbMK4FheIfWKpkRl0zf3eLbAxi65gg&usqp=CAU",
        requesterId: "req56bebebeh",
        requesterUsername: "Ntombi",
    },
  },
  {
    player: {
        dateInserted: "Mon, 19 Sep 2022 22:00:00 GMT",
        hashtag: "Looking Glam",
        likes: 8,
        lookId: "ulk3",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRBin0TTwRyKWuLOPRI3ZnHSoOeJ9vl6JUQ&usqp=CAU",
        requesterId: "req1752hvdhj",
        requesterUsername: "Kgabo",
    },
  },
  {
    player: {
        dateInserted: "Tue, 20 Sep 2022 22:00:00 GMT",
        hashtag: "Pampared Today - feeling Great",
        likes: 65,
        lookId: "ulk4",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9hblLedAdVguS4cJ_prqo_nLH_IY0iHUCg&usqp=CAU",
        requesterId: "reqgaadsw6w6w6wg",
        requesterUsername: "Carol",
    },
  },
  {
    player: {
        dateInserted: "Wed, 21 Sep 2022 22:00:00 GMT",
        hashtag: "I Look Glam!Thank You Sobert!",
        likes: 56,
        lookId: "ulk5",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgCyW2P0H-R4lxqbyo8lu-lfv4AZSTR2DCA&usqp=CAU",
        requesterId: "req12f2hshssh",
        requesterUsername: "Mbali",
    },
  },
  {
    player: {
        dateInserted: "Thu, 22 Sep 2022 22:00:00 GMT",
        hashtag: "New Corns on Fleek!",
        likes: 34,
        lookId: "ulk6",
        lookURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsX2EOrpwxEHZ4eF-PXHm1qgOBodLd5630Rg&usqp=CAU",
        requesterId: "reqhgdfd34jdegd",
        requesterUsername: "Sibahle",
    },
  },
  {
    player: {
        dateInserted: "Fri, 23 Sep 2022 22:00:00 GMT",
        hashtag: "Fresh Look! #Legendz!",
        likes: 67,
        lookId: "ulk7",
        lookURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgjgL3vM-BJWes4NIFH7rpOFqJjXsz7VoOQ&usqp=CAU",
        requesterId: "reqsdagsryeyey",
        requesterUsername: "Andile",
    },
  },
  {
    player: {
        dateInserted: "Sat, 24 Sep 2022 22:00:00 GMT",
        hashtag: "Legendz #Rock!",
        likes: 57,
        lookId: "ulk8",
        lookURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw5NBj18Nz419B3G1lE1Yf6BiyHE69sbm0A&usqp=CAU",
        requesterId: "reqgsfsreyeue",
        requesterUsername: "Pablo",
    },
  },
  {
    player: {
        dateInserted: "Sun, 25 Sep 2022 22:00:00 GMT",
        hashtag: "Ready for the BigDay!",
        likes: 65,
        lookId: "ulk9",
        lookURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiY7oqChMVO42P7Rbtcv9yzc5vh_rZ18Ktw&usqp=CAU",
        requesterId: "req63deldkdtdfdre",
        requesterUsername: "Lucia",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const Sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CreateItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)"};
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = CreateItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
        
      <div className="carousel__slide-item-img-link">
        <img src={item.player.lookURL} alt={item.player.hashtag} />
      </div>
      <div className="carousel-slide-item__body">
        <h3>{item.player.hashtag}</h3>
        <p>{item.player.likes} likes</p>
        <h3>@ {item.player.requesterUsername}</h3>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

export default function NewItems() {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) Sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <>  
        <h1>New Looks</h1>
        <div className="start">
            <h1>Connect</h1>
            <p>@lwandlelam</p>
        </div>
      <div className="carousel__wrap">
        <div className="carousel__inner">
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={() => prevClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--left" />
          </button>
          <div className="carousel__container">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={() => nextClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--right" />
          </button>
          <div className="carousel__dots">
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
