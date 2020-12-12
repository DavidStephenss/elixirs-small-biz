// import React from 'react';

// const Card = () => {
// return (
// <div class="container">            
//         </div>
//         <div class="fm-card">
//             <div class="fm-card-header">
//                 <img src="https://i.pinimg.com/originals/3e/9b/50/3e9b50f473182f34b86dc00d80ddf843.jpg" alt="">
//             </div>
//             <div class="fm-card-content">
//                 <div class="title">
//                     <a>This is the title!</a>
//                 </div>
//                 <div class="summary">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 </div>
//             </div>
//             <div class="fm-card-footer">
//                 <div class="by">
//                 </div>
//             </div>
//         </div>
//         ):
//    }

//    export default Card;











// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Collapse from '@material-ui/core/Collapse';
// import Typography from '@material-ui/core/Typography';
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// }));

// const CocktailCard = (props) => {
//   const classes = useStyles();
//   const [expanded] = React.useState(false);

//   return (
//     <Card className={classes.root}>
//       <CardHeader>
//         <h1 className="table-cell" style={{ color: "white "}}>Name</h1>
//         <h1 style={{ color: "green" }}>
//               <Link to={`/business/${business.id}`}>{business.name}</Link>
//          </h1>
//       </CardHeader>
//       {/* <CardHeader
//         title="Old Fash"
//       /> */}
//       <CardMedia
//         className={classes.media}
//         image="https://images.unsplash.com/photo-1552299100-a3abff9291e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1661&q=80"
//         // title="Old Fashioned"
//         // <Link to={`/business/${business.id}`}>{business.name}</Link>
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//               <Typography style={{ color: "green" }}>
//                 <Link to={`/business/${business.id}`}>{business.name}</Link>
//               </Typography>
//               <Typography style={{ color: "white "}}>{business.ingredients}</Typography>
//               <Typography style={{ color: "white "}}>{business.description}</Typography>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
// export default CocktailCard;