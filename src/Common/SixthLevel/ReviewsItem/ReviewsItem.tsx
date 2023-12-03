import React, {FC} from "react";
import ReactStars from "react-rating-stars-component";
import './reviewsitem.css'
type Reviews = {
    name: string,
    stars: number,
    reviews: string
}

const ReviewsItem: FC<Reviews> = (props) =>{
    const {name, stars, reviews} = props;
    return (
        <div className={'reviewsitem bold'}>
            <div className={'reviewsitem-name'}>
                {name}
            </div>
            <div className={'reviewsitem-stars'}>
                <ReactStars
                    count={5}
                    value={stars}
                    edit={false}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#FF5722"
                />
            </div>
            <div className={'reviewsitem-reviews'}>
                {reviews}
            </div>
        </div>
    );
}

export default ReviewsItem;
