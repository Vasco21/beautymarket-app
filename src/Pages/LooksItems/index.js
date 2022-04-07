// import React from 'react';
// import './styles.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/ai'

  
//   class ImageList extends React.Component {

//     componentDidMount(){
//       fetch("https://uzuriapi.el.r.appspot/.com/looks")
//       .then((response ) => response.json())
//       .then((data) => {
//       })
//     }

//     constructor(props) {
//       super(props); 
//       this.state = {
//         images,
//         fadedleft: true,
//         fadedright: false,
//         start: 0,
//         finish: 5
//       };
//     }
//     leftClick() {
//       let start = this.state.start;
//       let finish = this.state.finish;
//       if (start > 0 && finish > 0) {
//         this.setState({
//           start: start - 5,
//           finish: finish - 5
//         });
//       } else {
//         this.setState({
//           fadedleft: true
//         });
//       }
//       this.setState({
//         fadedright: false
//       });
//     }
//     rightClick() {
//       let start = this.state.start;
//       let finish = this.state.finish;
//       if (finish < images.length) {
//         this.setState({
//           start: start + 5,
//           finish: finish + 5
//         });
//       } else {
//         this.setState({
//           fadedright: true
//         });
//       }
  
//       this.setState({
//         fadedleft: false
//       });
//     }
//     render() {
//       var startindex = this.state.start;
//       var finishindex = this.state.finish;
//       const fadedleft = this.state.fadedleft
//         ? "arrow-left faded-left"
//         : "arrow-left";
//       const fadedright = this.state.fadedright
//         ? "arrow-right faded-right"
//         : "arrow-right";
//       return (
//        <div className="container">
//           <div className="slideshow row col-md-12">
//             <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
//             {this.state.images
//               .slice(startindex, finishindex)
//               .map((images) => {
//                 return (
//                   <div key={images.id}>
//                     <img className="image" src={images.lookURL} />
//                   </div>
//                 );
//               })}
//             <div
//               className={fadedright}
//               onClick={this.rightClick.bind(this)}
//             ></div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//  export default ImageList ;
  